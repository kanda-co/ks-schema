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

// Props for widget
type Props struct {
	Label string
	// Max         *float64
	// MaxLength   *uint64
	// Min         *float64
	// Pattern     *string
	Placeholder *string
	// ReadOnly    bool
	// Required    bool
}

// Validation definition...
type Validation struct {
	Required  *Validator `json:"required,omitempty"`
	Disabled  *Validator `json:"disabled,omitempty"`
	Min       *Validator `json:"min,omitempty"`
	Max       *Validator `json:"max,omitempty"`
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
	fmt.Println(`import { Wrapped } from '@kanda-form-components/library';`)
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

func unique(ins []string) []string {
	m := map[string]bool{}
	outs := []string{}

	for _, in := range ins {
		if _, existed := m[in]; existed {
			continue
		}
		m[in] = true
		outs = append(outs, in)
	}
	return outs
}

func getKandaFormWidget(schema *openapi3.Schema) string {
	widget := "Input"
	switch schema.Type {
	case "boolean":
		widget = "BooleanInput"
	case "number", "integer", "float", "double":
		widget = "Number"
	}
	if schema.Type == "string" && schema.Format == "date" {
		widget = "Date"
	}
	if len(schema.Enum) > 0 {
		if len(schema.Enum) <= 3 {
			widget = "RadioSelect"
		} else {
			widget = "Select"
		}
	}
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
		fmt.Sprintf("export function %sForm(props: any) {", name),
		"return (<>",
	}

	for _, formField := range formFields {
		def := formField[formIndex]
		if strings.HasSuffix(def, "ArrayWrapper") || strings.HasSuffix(def, "ArrayInput") || strings.HasSuffix(def, "ArraySelect") {
			continue
		}
		formDef = append(formDef, fmt.Sprintf(`<%s {...props} />`, def))
	}
	formDef = append(formDef, []string{"</>);", "}"}...)
	moduleDefs = append(moduleDefs, strings.Join(formDef, "\n"))
	moduleDefs = append(moduleDefs, components)
	sort.Strings(moduleDefs)
	moduleDefs = unique(strings.Split(strings.Join(moduleDefs, "\n\n"), "\n\n"))
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

		props := Props{}
		validation := Validation{}
		if isIn(propName, schema.Required) {
			validation.Required = &Validator{
				Value:   true,
				Message: fmt.Sprintf("%s is required.", toTitle(propName)),
			}
			// props.Required = true
		}
		if property.Value.ReadOnly {
			validation.Disabled = &Validator{
				Value:   property.Value.ReadOnly,
				Message: fmt.Sprintf("%s input is read only or disabled", toTitle(propName)),
			}
			// props.ReadOnly = true
		}
		if property.Value.Description != "" {
			props.Placeholder = &property.Value.Description
		}
		if property.Value.Pattern != "" {
			validation.Pattern = &Validator{
				Value:   property.Value.Pattern,
				Message: fmt.Sprintf("%s input is invalid", toTitle(propName)),
			}
			// props.Pattern = &property.Value.Pattern
		}
		if property.Value.MinLength > 0 {
			validation.MinLength = &Validator{
				Value: property.Value.MinLength,
				Message: fmt.Sprintf(
					"%s requires minimum length of %v",
					toTitle(propName),
					property.Value.MinLength,
				),
			}
		}
		if property.Value.MaxLength != nil {
			validation.MaxLength = &Validator{
				Value: *property.Value.MaxLength,
				Message: fmt.Sprintf(
					"%s requires maximum length of %v",
					toTitle(propName),
					*property.Value.MaxLength,
				),
			}
			// props.MaxLength = property.Value.MaxLength
		}
		if property.Value.Min != nil {
			validation.Min = &Validator{
				Value: *property.Value.Min,
				Message: fmt.Sprintf(
					"%s must be great than %v",
					toTitle(propName),
					*property.Value.Min,
				),
			}
			// props.Min = property.Value.Min
		}
		if property.Value.Max != nil {
			validation.Max = &Validator{
				Value: *property.Value.Max,
				Message: fmt.Sprintf(
					"%s must be smaller than %v",
					toTitle(propName),
					*property.Value.Max,
				),
			}
			// props.Max = property.Value.Max
		}

		if property.Value.Title != "" {
			props.Label = toTitle(property.Value.Title)
		} else {
			props.Label = toTitle(propName)
		}
		if property.Value.Description != "" {
			props.Placeholder = &property.Value.Description
		} else {
			props.Placeholder = &property.Value.Title
		}
		switch property.Value.Type {
		case "object":
		case "array":
			components = append(
				components,
				arrayField(name, propName, props, validation),
			)
		default:
			if len(property.Value.Enum) > 0 {
				if root.Type == "array" {
					components = append(
						components,
						arraySelectField(
							getKandaFormWidget(property.Value),
							name,
							propName,
							props,
							validation,
							property.Value.Enum,
						),
					)
				} else {
					components = append(
						components,
						selectField(
							getKandaFormWidget(property.Value),
							name,
							propName,
							props,
							validation,
							property.Value.Enum,
						),
					)
				}
			} else {
				if root.Type == "array" {
					components = append(
						components,
						arrayInputField(
							getKandaFormWidget(property.Value),
							name,
							propName,
							props,
							validation,
						),
					)
				} else {
					components = append(
						components,
						inputField(
							getKandaFormWidget(property.Value),
							name,
							propName,
							props,
							validation,
						),
					)
				}
			}
		}

		if len(property.Value.Properties) > 0 {
			components = append(
				components,
				renderField(name+" "+propName, property.Value, property.Value),
			)
		} else if len(property.Value.OneOf) > 0 {
			for _, oneOf := range property.Value.OneOf {
				components = append(
					components,
					renderField(name+" "+propName, oneOf.Value, property.Value),
				)
			}
		} else if len(property.Value.AnyOf) > 0 {
			for _, anyOf := range property.Value.AnyOf {
				components = append(
					components,
					renderField(name+" "+propName, anyOf.Value, property.Value),
				)
			}
		} else if len(property.Value.AllOf) > 0 {
			for _, allOf := range property.Value.AllOf {
				components = append(
					components,
					renderField(name+" "+propName, allOf.Value, property.Value),
				)
			}
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

func propsToAttributes(props Props) string {
	inputProps := []string{}
	if props.Label != "" {
		inputProps = append(inputProps, fmt.Sprintf(`label="%s"`, props.Label))
	}
	// if props.Required {
	//   inputProps = append(inputProps, fmt.Sprintf(`required="%t"`, props.Required))
	// }
	// if props.ReadOnly {
	//   inputProps = append(inputProps, fmt.Sprintf(`readonly="%t"`, props.ReadOnly))
	// }
	if props.Placeholder != nil {
		inputProps = append(inputProps, fmt.Sprintf(`placeholder="%s"`, *props.Placeholder))
	}
	// if props.Pattern != nil {
	//   inputProps = append(inputProps, fmt.Sprintf(`pattern="%s"`, *props.Pattern))
	// }
	// if props.Min != nil {
	//   inputProps = append(inputProps, fmt.Sprintf(`minimum="%.0f"`, *props.Min))
	// }
	// if props.Max != nil {
	//   inputProps = append(inputProps, fmt.Sprintf(`maximum="%.0f"`, *props.Max))
	// }
	// if props.MaxLength != nil {
	//   inputProps = append(inputProps, fmt.Sprintf(`maxlength="%d"`, *props.MaxLength))
	// }
	return strings.Join(inputProps, " ")
}

func validationRegexReplace(in []byte) string {
	r := regexp.MustCompile(`"pattern"\:{"value":"/?(.*?)/?",`)
	return r.ReplaceAllString(string(in), `"pattern":{"value":/$1/,`)
}

func arrayField(prefix, name string, props Props, validation Validation) string {
	pathName := name
	if prefix != "" {
		pathName = toPath(prefix + " " + name)
	}
	b, _ := json.Marshal(validation)
	return fmt.Sprintf(`
export const %sValidation = %v;

export function %sArrayWrapper({ children, initialData = null }: any) {
  return (
		<Wrapped.ArrayWrapper
			arrayName="%s"
			initialData={initialData}
		>
		{(props: any) => children(props)}
		</Wrapped.ArrayWrapper>
	);
}`,
		toPascal(prefix+" "+name),
		validationRegexReplace(b),
		toPascal(prefix+" "+name),
		pathName,
	)
}

func inputField(type_, prefix, name string, props Props, validation Validation) string {
	pathName := name
	if prefix != "" {
		pathName = toPath(prefix + " " + name)
	}
	b, _ := json.Marshal(validation)
	return fmt.Sprintf(`
export const %sValidation = %v;

export function %s(props: any) {
	return (
		<Wrapped.Input
			type="%s"
			name="%s"
			%s
			validation={%sValidation}
			{...props}
		/>
	);
}`,
		toPascal(prefix+" "+name),
		validationRegexReplace(b),
		toPascal(prefix+" "+name),
		type_,
		pathName,
		propsToAttributes(props),
		toPascal(prefix+" "+name),
	)
}

func selectField(
	type_, prefix, name string, props Props, validation Validation, options []interface{}) string {
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
		<Wrapped.Input
			type="%s"
			name="%s"
			%s
			validation={%sValidation}
			options={%v}
			{...props}
		/>
	);
}`,
		toPascal(prefix+" "+name),
		validationRegexReplace(b),
		toPascal(prefix+" "+name),
		type_,
		pathName,
		propsToAttributes(props),
		toPascal(prefix+" "+name),
		string(opts),
	)
}

func arrayInputField(type_, prefix, name string, props Props, validation Validation) string {
	pathName := name
	if prefix != "" {
		pathName = toPath(prefix + " " + name)
	}
	bits := strings.Split(pathName, ".")
	pathName = bits[len(bits)-1]
	b, _ := json.Marshal(validation)
	return fmt.Sprintf(`
export const %sArrayInputValidation = %v;

export function %sArrayInput(props: any) {
	return (
		<Wrapped.ArrayInput
			type="%s"
			name="%s"
			%s
			validation={%sArrayInputValidation}
			{...props}
		/>
	);
}`,
		toPascal(prefix+" "+name),
		validationRegexReplace(b),
		toPascal(prefix+" "+name),
		type_,
		pathName,
		propsToAttributes(props),
		toPascal(prefix+" "+name),
	)
}

func arraySelectField(
	type_, prefix, name string, props Props, validation Validation, options []interface{}) string {
	pathName := name
	if prefix != "" {
		pathName = toPath(prefix + " " + name)
	}
	bits := strings.Split(pathName, ".")
	pathName = bits[len(bits)-1]
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
export const %sArraySelectValidation = %v;

export function %sArraySelect(props: any) {
	return (
		<Wrapped.ArrayInput
			type="%s"
			name="%s"
			%s
			validation={%sArraySelectValidation}
			options={%v}
			{...props}
		/>
	);
}`,
		toPascal(prefix+" "+name),
		validationRegexReplace(b),
		toPascal(prefix+" "+name),
		type_,
		pathName,
		propsToAttributes(props),
		toPascal(prefix+" "+name),
		string(opts),
	)
}
