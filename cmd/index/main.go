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

// Unique helper function
func Unique[T comparable](ins []T) []T {
	m := make(map[T]bool)
	out := []T{}
	for _, in := range ins {
		if _, existed := m[in]; !existed {
			m[in] = true
			out = append(out, in)
		}
	}
	return out
}

func renderObject(base string, o openapi3.Schema) []string {
	fields := []string{}
	if base != "" {
		fields = append(fields, base)
	}
	if o.Type == "" && len(o.AllOf) > 0 {
		for _, ao := range o.AllOf {
			fields = append(fields, renderObject(base, *ao.Value)...)
		}
	}
	if o.Type == "object" {
		for n, f := range o.Properties {
			fields = append(fields, renderObject(IfValueOr(base == "", n, base+"."+n), *f.Value)...)
		}
	}
	if o.Type == "array" {
		if o.Items.Value.Type == "object" {
			fields = append(
				fields,
				renderObject(
					base,
					*o.Items.Value,
				)...,
			)
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
	doc, err := loader.LoadFromFile(*in)
	if err != nil {
		fmt.Println("ERROR:", err.Error())
		return
	}
	_ = doc.Validate(ctx)

	index := map[string][]string{}
	for name, ref := range doc.Components.Schemas {
		if ref.Value.Type != "object" && len(ref.Value.AllOf) == 0 {
			continue
		}
		if NotIn(name, []string{
			"Audit",
			"Company",
			"Credit",
			"Enquiry",
			"Enterprise",
			"Introduction",
			"Job",
			"Onboarding",
			"Tag",
			"Transaction",
			// "Cache",
			// "Consent",
			// "Document",
			// "Lead",
			// "Monitor",
			// "Partner",
			// "Payment",
			// "Rate",
			// "Redirect",
			// "Subscription",
			// "Summary",
			// "Training",
		}) {
			continue
		}
		index["Kanda"+name] = renderObject("", *ref.Value)
		index["Kanda"+name] = append(index["Kanda"+name], "metadata.created", "metadata.updated")
		index["Kanda"+name] = Unique(index["Kanda"+name])
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

		endpoint := fmt.Sprintf(
			"https://%s/indexes/%s/settings/pagination",
			searchDomain,
			k,
		)
		r, err := http.NewRequest(
			http.MethodPatch,
			endpoint,
			bytes.NewBuffer([]byte(`{"maxTotalHits":99999}`)),
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
			panic(fmt.Errorf("maxTotalHits with endpoint '%v' error - %s '%v'", endpoint, resp.Status, string(body)))
		}
		fmt.Println("[MaxTotalHits]", endpoint)

	}
}
