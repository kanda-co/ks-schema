package main

import (
	"context"
	"encoding/json"
	"flag"
	"fmt"
	"regexp"
	"sort"
	"strings"

	"github.com/getkin/kin-openapi/openapi3"
)

// Validation definition...
type Validation struct {
	Required  *Validator `json:"required,omitempty"`
	ReadOnly  *Validator `json:"readOnly,omitempty"`
	Minimum   *Validator `json:"minimum,omitempty"`
	Maximum   *Validator `json:"maximum,omitempty"`
	MinLength *Validator `json:"minLength,omitempty"`
	MaxLength *Validator `json:"maxLength,omitempty"`
	Pattern   *Validator `json:"pattern,omitempty"`
}

// Validator type definition...
type Validator struct {
	Value   interface{} `json:"value"`
	Message string      `json:"message"`
}

// Option for Select props...
type Option struct {
	Name  string      `json:"name"`
	Value interface{} `json:"value"`
}

func main() {
	in := flag.String("in", "schema.yaml", "input openapi yaml file")
	flag.Parse()

	ctx := context.Background()
	loader := openapi3.Loader{Context: ctx}
	doc, _ := loader.LoadFromFile(*in)
	_ = doc.Validate(ctx)
	fmt.Println(`import React from "react";`)
	fmt.Println(`// @ts-ignore`)
	fmt.Println(`import { WrapInput } from '@kanda-form-components/library';`)
	for name, ref := range doc.Components.Schemas {
		// write to individual module for Schema Form Fields
		fmt.Println(renderModule(name, ref.Value))
	}
}

func toPascal(in string) string {
	titled := strings.Title(strings.ReplaceAll(in, "_", " "))
	return strings.ReplaceAll(titled, " ", "")
}

func toTitle(in string) string {
	return strings.Title(strings.ReplaceAll(in, "_", " "))
}

func toPath(in string) string {
	bits := strings.ReplaceAll(in, " ", ".")
	titled := regexp.MustCompile("(.)([A-Z][a-z]+)")
	capped := regexp.MustCompile("([a-z0-9])([A-Z])")
	snaked := titled.ReplaceAllString(bits, "${1}_${2}")
	snaked = capped.ReplaceAllString(snaked, "${1}_${2}")
	return strings.ToLower(snaked)
}

func isIn(in string, ins []string) bool {
	for _, i := range ins {
		if i == in {
			return true
		}
	}
	return false
}

func getKandaFormWidget(schema *openapi3.Schema) string {
	widget := "Input"
	if ext, ok := schema.Extensions["x-kanda-form-widget"]; ok {
		json.Unmarshal(ext.(json.RawMessage), &widget)
	}
	return widget
}

func renderModule(name string, schema *openapi3.Schema) string {
	moduleDefs := []string{}
	components := renderField(name, schema, nil)
	r := regexp.MustCompile(`export function (?P<Form>.*?)\(`)
	formFields := r.FindAllStringSubmatch(components, -1)
	formIndex := r.SubexpIndex("Form")
	formDef := []string{
		fmt.Sprintf("export function %sForm() {", name),
		"return (<>",
	}
	for _, formField := range formFields {
		formDef = append(formDef, fmt.Sprintf(`<%s />`, formField[formIndex]))
	}
	formDef = append(formDef, []string{"</>);", "}"}...)
	moduleDefs = append(moduleDefs, strings.Join(formDef, "\n"))
	moduleDefs = append(moduleDefs, components)
	sort.Strings(moduleDefs)
	return strings.Join(moduleDefs, "\n\n")
}

func renderField(name string, schema, root *openapi3.Schema) string {
	if schema == nil {
		return ""
	}
	components := []string{}
	if root == nil {
		rootSchema := *schema
		root = &rootSchema
	}

	for propName, property := range schema.Properties {
		if property == nil || property.Value == nil {
			continue
		}

		validation := Validation{}
		if isIn(propName, schema.Required) {
			validation.Required = &Validator{
				Value:   true,
				Message: fmt.Sprintf("%s is required.", toTitle(propName)),
			}
		}
		// if property.Value.ReadOnly {
		//   validation.ReadOnly = &Validator{
		//     Value:   true,
		//     Message: fmt.Sprintf("%s is read only.", toTitle(propName)),
		//   }
		// }
		if property.Value.Pattern != "" {
			validation.Pattern = &Validator{
				Value:   property.Value.Pattern,
				Message: fmt.Sprintf("%s is invalid with %s", toTitle(propName), property.Value.Pattern),
			}
		}
		if property.Value.MinLength > 0 {
			validation.MinLength = &Validator{
				Value:   property.Value.MinLength,
				Message: fmt.Sprintf("%s requires minimum %v length", toTitle(propName), property.Value.MinLength),
			}
		}
		if property.Value.MaxLength != nil {
			validation.MaxLength = &Validator{
				Value:   *property.Value.MaxLength,
				Message: fmt.Sprintf("%s requires maximum %v length", toTitle(propName), *property.Value.MaxLength),
			}
		}
		if property.Value.Min != nil {
			validation.Minimum = &Validator{
				Value:   *property.Value.Min,
				Message: fmt.Sprintf("%s requires minimum %v value", toTitle(propName), *property.Value.Min),
			}
		}
		if property.Value.Max != nil {
			validation.Maximum = &Validator{
				Value:   *property.Value.Max,
				Message: fmt.Sprintf("%s requires maximum %v value", toTitle(propName), *property.Value.Max),
			}
		}

		switch property.Value.Type {
		case "string", "integer", "number":
			if len(property.Value.Enum) > 0 {
				components = append(
					components,
					selectField(
						name,
						propName,
						validation,
						property.Value.Enum,
					),
				)
			} else {
				components = append(
					components,
					inputField(
						getKandaFormWidget(property.Value),
						name,
						propName,
						validation,
					),
				)
			}
		}

		if len(property.Value.Properties) > 0 {
			components = append(
				components,
				renderField(name+" "+propName, property.Value, property.Value),
			)
		}

		if property.Value.Items != nil && property.Value.Items.Value != nil {
			components = append(
				components,
				renderField(name+" "+propName, property.Value.Items.Value, property.Value),
			)
		}
	}
	if schema.Items != nil && schema.Items.Value != nil {
		components = append(components, renderField(name, schema.Items.Value, schema))
	}
	sort.Strings(components)
	return strings.Join(components, "\n")
}

func inputField(type_, prefix, name string, validation Validation) string {
	pathName := name
	if prefix != "" {
		pathName = toPath(prefix + " " + name)
	}
	b, _ := json.Marshal(validation)
	return fmt.Sprintf(`
export const %sValidation = %v;

export function %s(props: any) {
	return (
		<WrapInput
			type="%s"
			name="%s"
			validation={%sValidation}
			{...props}
		/>
	);
}`,
		toPascal(prefix+" "+name),
		string(b),
		toPascal(prefix+" "+name),
		type_,
		pathName,
		toPascal(prefix+" "+name),
	)
}

func selectField(
	prefix, name string, validation Validation, options []interface{}) string {
	pathName := name
	if prefix != "" {
		pathName = toPath(prefix + " " + name)
	}
	b, _ := json.Marshal(validation)
	optsM := make([]Option, 0)
	for _, opt := range options {
		optLabel := fmt.Sprintf("%v", opt)
		optsM = append(optsM, Option{
			Name:  toTitle(optLabel),
			Value: opt,
		})
	}
	opts, _ := json.Marshal(optsM)
	return fmt.Sprintf(`
export const %sValidation = %v;

export function %s(props: any) {
	return (
		<WrapInput
			type="Select"
			name="%s"
			validation={%sValidation}
			options={%v}
			{...props}
		/>
	);
}`,
		toPascal(prefix+" "+name),
		string(b),
		toPascal(prefix+" "+name),
		pathName,
		toPascal(prefix+" "+name),
		string(opts),
	)
}
