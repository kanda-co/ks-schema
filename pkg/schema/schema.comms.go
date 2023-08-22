package schema

import (
	"encoding/json"
	"fmt"

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
			ContactName:  NewString("Allium"),
			ContactPhone: NewString(""),
			TradingName:  NewString("Allium"),
		},
		Demo: {
			ContactEmail: NewEmail("demo@example.co.uk"),
			ContactName:  NewString("Demo"),
			ContactPhone: NewString("03308187491"),
			TradingName:  NewString("Demo"),
		},
		Etika: {
			ContactEmail: NewEmail("contact@etika.co.uk"),
			ContactName:  NewString("Etika"),
			ContactPhone: NewString(""),
			TradingName:  NewString("Etika"),
		},
		Omni: {
			ContactEmail: NewEmail("contact@omni.co.uk"),
			ContactName:  NewString("Omni"),
			ContactPhone: NewString(""),
			TradingName:  NewString("Omni"),
		},
		Propensio: {
			ContactEmail: NewEmail("contact@propensio.co.uk"),
			ContactName:  NewString("Propensio"),
			ContactPhone: NewString(""),
			TradingName:  NewString("Propensio"),
		},
	}
)

// NewString return new pointer value of string
func NewString(t string) *string {
	return &t
}

// NewEmail return new pointer value of email
func NewEmail(t string) *Email {
	e := Email(t)
	return &e
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
	if err := json.Unmarshal([]byte(cc.Template), &m); err != nil {
		return nil, fmt.Errorf("invalid comm context data - %v", err)
	}
	b, err := json.Marshal(m)
	if err != nil {
		return nil, fmt.Errorf("invalid comm context - %v", err)
	}
	return b, nil
}
