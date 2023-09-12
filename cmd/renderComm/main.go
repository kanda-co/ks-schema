package main

import (
	"encoding/json"
	"flag"
	"fmt"
	"net/url"
	"path"
	"strings"

	. "github.com/kanda-co/ks-schema/pkg/schema"
	"github.com/tidwall/sjson"
)

type Override struct {
	Path  string
	Value interface{}
}

// RenderComm from provided comm context
func RenderComm(cc CommContext, overrides ...Override) error {
	if ctaUrl := String(cc.CtaUrl); ctaUrl != "" {
		cta, err := url.Parse(cc.CtaUrl)
		if err != nil {
			return fmt.Errorf("invalid cta url - %v", err)
		}
		qs := String(cta.Query().Encode())

		cc.CtaUrl = fmt.Sprintf(
			"%s://%s%s",
			cta.Scheme,
			path.Join(cta.Host, cta.Path),
			IfValueOr(len(qs) > 0, "?"+qs, ""),
		)
	}

	cc, err := cc.RenderTemplate()
	if err != nil {
		return err
	}
	for _, override := range overrides {
		updated, err := sjson.Set(cc.Template, override.Path, override.Value)
		if err != nil {
			panic(err)
		}
		cc.Template = updated
	}
	md, err := cc.RenderTemplateMap()
	if err != nil {
		return err
	}
	b, _ := json.MarshalIndent(md, "", "  ")
	fmt.Println(string(b))
	return nil
}

func main() {
	var (
		template string
		data     string
		set      string
	)
	flag.StringVar(&template, "template", "DBV4_USER_SIGN_UP", "template to render")
	flag.StringVar(&data, "data", "", "override data to be parsed")
	flag.StringVar(&set, "set", "", "set overrides on parsed template data")
	flag.Parse()

	cc := CommContext{
		BankAccount: BankAccount{
			AccountName:   "test account",
			AccountNumber: "12345678",
			MonthsHeld:    New(int32(120)),
			SortCode:      "123456",
		},
		CtaUrl: "http://localhost:8080/test/path",
		Deposit: struct {
			Applied    string "json:\"applied\""
			Difference string "json:\"difference\""
			Original   string "json:\"original\""
		}{
			Applied:    "1500.00",
			Difference: "500.00",
			Original:   "1000.00",
		},
		FlowType: New(Example),
		Lender: New(ContactInfo{
			ContactEmail: New(Email("lender+test@example.com")),
			ContactPhone: New("07444555666"),
			ContactName:  New("lender name"),
		}),
		Message: New("This is a test message"),
		Receiver: ContactInfo{
			ContactEmail: New(Email("receiver@example.com")),
			ContactName:  New("Mr Receiver"),
			ContactPhone: New("07123456789"),
		},
		Sender: ContactInfo{
			ContactEmail: New(Email("sender@example.com")),
			ContactName:  New("Mr Sender"),
			ContactPhone: New("07111222333"),
		},
		TemplateName: TName(strings.ToUpper(template)),
	}

	if len(data) > 0 {
		if err := json.Unmarshal([]byte(data), &cc); err != nil {
			panic(err)
		}
	}

	overrides := make([]Override, 0)
	if len(set) > 0 {
		if err := json.Unmarshal([]byte(set), &overrides); err != nil {
			panic(err)
		}
	}

	if err := RenderComm(cc, overrides...); err != nil {
		panic(err)
	}
}
