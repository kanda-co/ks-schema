package main

import (
	"bytes"
	"context"
	"encoding/json"
	"flag"
	"fmt"
	"io"
	"net/http"
	"os"
	"sort"

	"github.com/getkin/kin-openapi/openapi3"
)

// IfValueOr return value or fallback
func IfValueOr[T any](ok bool, yes, no T) T {
	if ok {
		return yes
	}
	return no
}

// IsIn helper function
func IsIn[T comparable](in T, ins []T) bool {
	for _, each := range ins {
		if each == in {
			return true
		}
	}
	return false
}

// NotIn helper function
func NotIn[T comparable](in T, ins []T) bool {
	return !IsIn(in, ins)
}

func renderObject(base string, o openapi3.Schema) []string {
	fields := []string{}
	if base != "" {
		fields = append(fields, base)
	}
	if o.Type == "object" {
		for n, f := range o.Properties {
			fields = append(fields, renderObject(IfValueOr(base == "", n, base+"."+n), *f.Value)...)
		}
	}
	return fields
}

func main() {
	in := flag.String("in", "schema.yaml", "input openapi yaml file")
	env := flag.String("env", "qa", "env")
	dryrun := flag.Bool("dryrun", true, "dryrun")
	flag.Parse()

	searchDomain := IfValueOr(
		*env == "production",
		"search.kanda.co.uk",
		"search-qa.kanda.co.uk",
	)

	ctx := context.Background()
	loader := openapi3.Loader{Context: ctx}
	doc, _ := loader.LoadFromFile(*in)
	_ = doc.Validate(ctx)

	index := map[string][]string{}
	for name, ref := range doc.Components.Schemas {
		if ref.Value.Type != "object" {
			continue
		}
		if NotIn(name, []string{
			"Company",
			// "Cache",
			"Credit",
			// "Document",
			"Enterprise",
			"Job",
			// "Lead",
			// "Monitor",
			// "Onboarding",
			// "Partner",
			// "Payment",
			// "Rate",
			// "Redirect",
			// "Subscription",
			// "Summary",
		}) {
			continue
		}
		index["Kanda"+name] = renderObject("", *ref.Value)
		sort.Strings(index["Kanda"+name])
	}

	if *dryrun {
		b, _ := json.MarshalIndent(index, "", "  ")
		fmt.Println(string(b))
		return
	}

	for k, v := range index {
		b, _ := json.Marshal(v)

		bearer := os.Getenv("KANDA_SEARCH_API_KEY")
		if bearer == "" {
			panic("KANDA_SEARCH_API_KEY env var not set!")
		}

		for _, update := range []string{"filterable", "sortable"} {
			endpoint := fmt.Sprintf(
				"https://%s/indexes/%s/settings/%s-attributes",
				searchDomain,
				k,
				update,
			)
			r, err := http.NewRequest(
				http.MethodPut,
				endpoint,
				bytes.NewBuffer([]byte(`[]`)),
			)
			r.Header.Set("Content-Type", "application/json")
			r.Header.Set("Authorization", "Bearer "+bearer)
			resp, err := http.DefaultClient.Do(r)
			if err != nil {
				panic(err)
			}
			if resp.StatusCode > 299 {
				body, _ := io.ReadAll(resp.Body)
				defer resp.Body.Close()
				panic(fmt.Errorf("reset with endpoint '%v' error - %s '%v'", endpoint, resp.Status, string(body)))
			}
			fmt.Println("[RESET]", endpoint)

			r, err = http.NewRequest(
				http.MethodPut,
				endpoint,
				bytes.NewBuffer(b),
			)
			r.Header.Set("Content-Type", "application/json")
			r.Header.Set("Authorization", "Bearer "+bearer)
			resp, err = http.DefaultClient.Do(r)
			if err != nil {
				panic(err)
			}
			if resp.StatusCode > 299 {
				body, _ := io.ReadAll(resp.Body)
				defer resp.Body.Close()
				panic(fmt.Errorf("index with endpoint '%v' error - %s '%v'", endpoint, resp.Status, string(body)))
			}
			fmt.Println("[INDEX]", endpoint)
		}
	}
}
