package schema

import (
	"encoding/json"
	"fmt"
	"strings"

	"github.com/mailgun/raymond"
)

var (
	defaultTradingName  = "Kanda"
	defaultContactName  = "Kanda"
	defaultContactPhone = "03308187491"
	defaultContactEmail = Email("help@kanda.co.uk")
)

var (
	mLenderInfo = map[FinanceProvider]ContactInfo{
		Allium: {
			ContactEmail: NewEmail("contact@allium.co.uk"),
			ContactName:  New("Allium"),
			ContactPhone: New(""),
			TradingName:  New("Allium"),
		},
		Demo: {
			ContactEmail: NewEmail("demo@example.co.uk"),
			ContactName:  New("Demo"),
			ContactPhone: New("03308187491"),
			TradingName:  New("Demo"),
		},
		Etika: {
			ContactEmail: NewEmail("contact@etika.co.uk"),
			ContactName:  New("Etika"),
			ContactPhone: New(""),
			TradingName:  New("Etika"),
		},
		Omni: {
			ContactEmail: NewEmail("contact@omni.co.uk"),
			ContactName:  New("Omni"),
			ContactPhone: New(""),
			TradingName:  New("Omni"),
		},
		Propensio: {
			ContactEmail: NewEmail("contact@propensio.co.uk"),
			ContactName:  New("Propensio"),
			ContactPhone: New(""),
			TradingName:  New("Propensio"),
		},
	}
)

// NewEmail return new pointer value of email
func NewEmail(t string) *Email {
	return New(Email(t))
}

// New pointer initialisation helper function
func New[T any](t T) *T {
	return &t
}

// String trims any spaces and linebreaks
func String(in string) string {
	return strings.TrimSpace(in)
}

// Head return first item or null
func Head[T any](t []T) *T {
	if len(t) > 0 {
		return New(t[0])
	}
	return nil
}

// Last return last item or null
func Last[T any](t []T) *T {
	if len(t) > 0 {
		return New(t[len(t)-1])
	}
	return nil
}

// IfValueOr return value or fallback
func IfValueOr[T any](ok bool, yes, no T) T {
	if ok {
		return yes
	}
	return no
}

// NullOrZero helper function to return either lifted or default zero value
func NullOrZero[T any](t *T) T {
	d, _ := Lift(t)
	return d
}

// Lift helper function
func Lift[T any](t *T) (T, bool) {
	if t == nil {
		var a T
		return a, false
	}
	return *t, true
}

// ParseAddress parse address into format credit client expects
func ParseAddress(in Address) Address {
	in.Line1 = String(strings.TrimLeft(in.Line1, NullOrZero(in.BuildingNumber)))
	return in
}

// ParseFullName parse full name and remove middle name
func ParseFullName(in string) string {
	first, last := ParseFirstName(in), ParseLastName(in)
	return String(strings.Join([]string{first, last}, " "))
}

// ParseFirstName parse first name and remove middle name
func ParseFirstName(in string) string {
	return String(NullOrZero(Head(strings.Split(String(in), " "))))
}

// ParseLastName parse last name and remove middle name
func ParseLastName(in string) string {
	return String(NullOrZero(Last(strings.Split(String(in), " "))))
}

func (in FinanceProvider) ToContact() *ContactInfo {
	cInfo, ok := mLenderInfo[in]
	if !ok {
		return nil
	}
	return New(cInfo)
}

func (in Company) ToContact() *ContactInfo {
	return in.ContactInfo
}

func (in Enterprise) ToContact() *ContactInfo {
	return IfValueOr(
		in.Id != nil,
		New(in.ContactInfo),
		nil,
	)
}

func (in Partner) ToContact() *ContactInfo {
	return IfValueOr(
		in.Id != nil,
		New(in.ContactInfo),
		nil,
	)
}

func (in Job) ToContact() *ContactInfo {
	if in.Id == nil || in.Customer == nil {
		return nil
	}
	return New(
		ContactInfo{
			ContactAddress: NullOrZero(in.Customer).Address,
			ContactEmail:   New(NullOrZero(in.Customer).Email),
			ContactName: New(
				ParseFullName(
					fmt.Sprintf("%v %v", NullOrZero(in.Customer).FirstName, NullOrZero(in.Customer).LastName),
				),
			),
			ContactPhone: New(NullOrZero(in.Customer).Phone),
		},
	)
}

func (in Credit) ToContact() *ContactInfo {
	return IfValueOr(
		in.Id != nil,
		New(
			ContactInfo{
				ContactAddress: New(in.CustomerDetails.CurrentAddress),
				ContactEmail:   New(in.CustomerDetails.Email),
				ContactName: New(
					ParseFullName(
						fmt.Sprintf("%v %v", in.CustomerDetails.FirstName, in.CustomerDetails.LastName),
					),
				),
				ContactPhone: in.CustomerDetails.Mobile,
			},
		),
		nil,
	)
}

func (in Lead) ToContact() *ContactInfo {
	if in.Id == nil || in.LeadApplicant == nil {
		return nil
	}
	cd := NullOrZero(in.LeadApplicant).CustomerDetails
	return New(
		ContactInfo{
			ContactAddress: New(cd.CurrentAddress),
			ContactEmail:   New(cd.Email),
			ContactName: New(
				ParseFullName(
					fmt.Sprintf("%v %v", cd.FirstName, cd.LastName),
				),
			),
			ContactPhone: cd.Mobile,
		},
	)
}

const (
	DBV4_GENERIC_TEMPLATE string = "dbv4_generic_tempalte"
)

// RenderTemplate with given comm context
func (cc CommContext) RenderTemplate() (CommContext, error) {
	if cc.Sender.ContactName == nil {
		cc.Sender.ContactName = &defaultContactName
	}
	if cc.Sender.ContactEmail == nil {
		cc.Sender.ContactEmail = &defaultContactEmail
	}
	if cc.Sender.ContactPhone == nil {
		cc.Sender.ContactPhone = &defaultContactPhone
	}
	if cc.Sender.TradingName == nil {
		cc.Sender.TradingName = &defaultTradingName
	}

	if cc.Receiver.ContactName == nil {
		cc.Receiver.ContactName = &defaultContactName
	}
	if cc.Receiver.ContactEmail == nil {
		cc.Receiver.ContactEmail = &defaultContactEmail
	}
	if cc.Receiver.ContactPhone == nil {
		cc.Receiver.ContactPhone = &defaultContactPhone
	}
	if cc.Receiver.TradingName == nil {
		cc.Receiver.TradingName = &defaultTradingName
	}

	template, err := cc.ToJSON()
	if err != nil {
		return cc, err
	}
	ctx, err := cc.ToMap()
	if err != nil {
		return cc, err
	}
	result, err := raymond.Render(string(template), ctx)
	if err != nil {
		return cc, fmt.Errorf("render comm template error - %v", err)
	}
	cc.Template = result
	return cc, nil
}

// ToMap turn comm context itself to a map data, for render template
func (cc CommContext) ToMap() (map[string]interface{}, error) {
	m := map[string]interface{}{}
	b, err := json.Marshal(cc)
	if err != nil {
		return m, fmt.Errorf("invalid comm context - %v", err)
	}
	if err := json.Unmarshal(b, &m); err != nil {
		return m, fmt.Errorf("invalid comm context data - %v", err)
	}
	return m, nil
}

// ToJSON turn comm context parsed with template to a JSON bytes
func (cc CommContext) ToJSON() ([]byte, error) {
	m := map[string]interface{}{}
	if err := json.Unmarshal([]byte(cc.TemplateName.Render()), &m); err != nil {
		return nil, fmt.Errorf("invalid comm context data - %v", err)
	}
	b, err := json.Marshal(m)
	if err != nil {
		return nil, fmt.Errorf("invalid comm context - %v", err)
	}
	return b, nil
}
