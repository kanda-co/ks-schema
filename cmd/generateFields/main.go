package main

import (
	"context"
	"fmt"
	"sort"

	"github.com/getkin/kin-openapi/openapi3"
)

// MapKeys return all keys of type A
func MapKeys[A comparable, B any](m map[A]B) []A {
	as := make([]A, 0)
	for k := range m {
		as = append(as, k)
	}
	return as
}

func main() {
	ctx := context.Background()
	loader := openapi3.Loader{Context: ctx}
	doc, _ := loader.LoadFromFile("./schema.yaml")
	_ = doc.Validate(ctx)

	fmt.Println("package schema")
	fmt.Println()
	fmt.Println("func GetFields(name string) []string {")
	fmt.Println("\tvar fields = map[string][]string{")

	components := MapKeys(doc.Components.Schemas)
	sort.Strings(components)

	for _, name := range components {
		ref := doc.Components.Schemas[name]
		if ref.Value.Type != "object" && len(ref.Value.AllOf) == 0 {
			continue
		}

		fields := []string{}
		if len(ref.Value.AllOf) > 0 {
			for _, allOf := range ref.Value.AllOf {
				if allOf.Value.Type != "object" {
					break
				}
				for field := range allOf.Value.Properties {
					fields = append(fields, field)
				}
			}
		}
		if len(ref.Value.OneOf) > 0 {
			for _, oneOf := range ref.Value.OneOf {
				if oneOf.Value.Type != "object" {
					break
				}
				for field := range oneOf.Value.Properties {
					fields = append(fields, field)
				}
			}
		}
		if len(ref.Value.AnyOf) > 0 {
			for _, anyOf := range ref.Value.AnyOf {
				if anyOf.Value.Type != "object" {
					break
				}
				for field := range anyOf.Value.Properties {
					fields = append(fields, field)
				}
			}
		}
		for field := range ref.Value.Properties {
			fields = append(fields, field)
		}

		sort.Strings(fields)
		fmt.Printf("\t\t\"%v\": []string{\n", name)
		for _, field := range fields {
			fmt.Printf("\t\t\t\"%v\",\n", field)
		}
		fmt.Println("\t\t},")
	}
	fmt.Println("\t}")
	fmt.Println()
	fmt.Println("\texisted, ok := fields[name]")
	fmt.Println("\tif ok { return existed }")
	fmt.Println("\treturn []string{}")
	fmt.Println("}")
}
