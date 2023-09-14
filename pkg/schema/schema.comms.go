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
			ContactEmail: NewEmail("service@alliummoney.co.uk"),
			ContactName:  New("Allium Money"),
			ContactPhone: New("03330164057"),
			TradingName:  New("Allium Money"),
		},
		Demo: {
			ContactEmail: NewEmail("demo@example.co.uk"),
			ContactName:  New("Demo"),
			ContactPhone: New("03308187491"),
			TradingName:  New("Demo"),
		},
		Etika: {
			ContactEmail: NewEmail("hello.uk@etika.com"),
			ContactName:  New("etika Finance UK Ltd"),
			ContactPhone: New("08000289321"),
			TradingName:  New("etika Finance UK Ltd"),
		},
		Omni: {
			ContactEmail: NewEmail("customerenquiries@ocrf.co.uk"),
			ContactName:  New("Omni Capital Retail Finance"),
			ContactPhone: New("03332408317"),
			TradingName:  New("Omni Capital Retail Finance"),
		},
		Propensio: {
			ContactEmail: NewEmail("info@propensio.co.uk"),
			ContactName:  New("Propensio Finance"),
			ContactPhone: New("01709808990"),
			TradingName:  New("Propensio Finance"),
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

func (in AuthUser) ToContact() *ContactInfo {
	return IfValueOr(
		String(string(in.Email)) == "" || (in.Disabled != nil && !*in.Disabled),
		nil,
		New(ContactInfo{
			ContactEmail: New(in.Email),
			ContactName:  New(in.Name),
			ContactPhone: in.Phone,
		}),
	)
}

func (in InfoMe) ToContact() *ContactInfo {
	return New(ContactInfo{
		ContactEmail: in.Email,
		ContactName:  in.Name,
		ContactPhone: in.Phone,
	})
}

func (in FinanceProvider) ToContact() *ContactInfo {
	cInfo, ok := mLenderInfo[in]
	if !ok {
		return nil
	}
	return New(cInfo)
}

func (in CustomerDetails) ToContact() *ContactInfo {
	return New(ContactInfo{
		ContactAddress: New(in.CurrentAddress),
		ContactEmail:   New(in.Email),
		ContactName: New(
			ParseFullName(
				fmt.Sprintf("%v %v", in.FirstName, in.LastName),
			),
		),
		ContactPhone: in.Mobile,
	})
}

func (in Customer) ToContact() *ContactInfo {
	return New(ContactInfo{
		ContactAddress: in.Address,
		ContactEmail:   New(in.Email),
		ContactName: New(
			ParseFullName(
				fmt.Sprintf("%v %v", in.FirstName, in.LastName),
			),
		),
		ContactPhone: New(in.Phone),
	})
}

func (in Referral) ToContact() *ContactInfo {
	return New(ContactInfo{
		ContactEmail: New(in.Email),
		ContactName:  New(in.Name),
		ContactPhone: in.Mobile,
		TradingName:  in.TradingName,
	})
}

func (in Company) ToContact() *ContactInfo {
	contactInfo, contactInfoOK := Lift(in.ContactInfo)
	contactInfo.ContactName = IfValueOr(
		contactInfo.TradingName != nil,
		contactInfo.TradingName,
		contactInfo.ContactName,
	)
	return IfValueOr(
		contactInfoOK,
		New(contactInfo),
		nil,
	)
}

func (in UserType) ToContact() *ContactInfo {
	return New(ContactInfo{
		ContactAddress: IfValueOr(
			in.DirectorInfo == nil,
			nil,
			New(NullOrZero(in.DirectorInfo).HomeAddress),
		),
		ContactEmail: New(in.Email),
		ContactName: New(
			ParseFullName(
				fmt.Sprintf("%s %s", in.FirstName, NullOrZero(in.LastName)),
			),
		),
		ContactPhone: in.Mobile,
	})
}

func (in Enterprise) ToContact() *ContactInfo {
	in.ContactInfo.ContactName = IfValueOr(
		in.ContactInfo.TradingName != nil,
		in.ContactInfo.TradingName,
		in.ContactInfo.ContactName,
	)
	return New(in.ContactInfo)
}

func (in Partner) ToContact() *ContactInfo {
	in.ContactInfo.ContactName = IfValueOr(
		in.ContactInfo.TradingName != nil,
		in.ContactInfo.TradingName,
		in.ContactInfo.ContactName,
	)
	return New(in.ContactInfo)
}

func (in Job) ToContact() *ContactInfo {
	if in.Customer == nil {
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
	return New(
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
	)
}

func (in Lead) ToContact() *ContactInfo {
	if in.LeadApplicant == nil {
		return nil
	}
	leadApplicant := NullOrZero(in.LeadApplicant)
	return leadApplicant.ToContact()
}

func (in LeadApplicant) ToContact() *ContactInfo {
	return New(
		ContactInfo{
			ContactAddress: New(in.CustomerDetails.CurrentAddress),
			ContactEmail:   New(in.CustomerDetails.Email),
			ContactName: New(
				ParseFullName(
					fmt.Sprintf(
						"%v %v",
						in.CustomerDetails.FirstName,
						in.CustomerDetails.LastName,
					),
				),
			),
			ContactPhone: in.CustomerDetails.Mobile,
		},
	)
}

const (
	DBV4_GENERIC_TEMPLATE string = "dbv4_generic_template"
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

// RenderTemplateMap turn comm context parsed with template to a JSON map
func (cc CommContext) RenderTemplateMap() (map[string]interface{}, error) {
	var (
		m   = map[string]interface{}{}
		err error
	)
	if cc.Template == "" {
		cc, err = cc.RenderTemplate()
		if err != nil {
			return m, err
		}
	}
	if err := json.Unmarshal([]byte(cc.Template), &m); err != nil {
		return nil, fmt.Errorf("invalid comm context data - %v", err)
	}
	return m, nil
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
