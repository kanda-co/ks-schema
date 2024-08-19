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
	defaultExports := []string{}
	_ = doc.Validate(ctx)
	fmt.Println(`
import React from "react";
// @ts-ignore
import Field, { type FieldProps, type ValidatedFieldProps, type WidgetArrayWrapperProps, type ArrayWrapperChildrenArgs, type WidgetArrayInputProps } from "~/field";`)
	for name, ref := range doc.Components.Schemas {
		// write to individual module for Schema Form Fields
		if name == "InfoSearch" || name == "SearchHits" || name == "InfoEntity" {
			continue
		}
		var moduleDef, exports = renderModule(name, ref.Value)

		fmt.Println(moduleDef)
		defaultExports = append(defaultExports, exports)
	}

	fmt.Println(renderDefaultExports(defaultExports))
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
		widget = "NumberInput"
	}
	if schema.Type == "string" && schema.Format == "date-time" {
		widget = "DatePickerInput"
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
	// FIXME: once we have the components, remove these lines
	switch widget {
	case "Company":
		widget = "CompanyLookupInput"
	case "File":
		widget = "FileInput"
	}
	return widget
}

func renderModule(name string, schema *openapi3.Schema) (string, string) {
	moduleDefs := []string{}
	exports := []string{}
	components := renderField(name, schema, nil, false)
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
	moduleDef := strings.Join(moduleDefs, "\n\n")

	for _, md := range moduleDefs {
		isTsConst := strings.Contains(md, "export const")

		if isTsConst {
			exports = append(
				exports,
				strings.Split(
					strings.Replace(md, "export const ", "", 1),
					"=",
				)[0],
			)
			continue
		}

		exports = append(
			exports,
			strings.Split(
				strings.Replace(md, "export function ", "", 1),
				"(",
			)[0],
		)
	}

	defaultExports := []string{}

	for _, export := range exports {
		if export != "" {
			defaultExports = append(defaultExports, export)
		}
	}

	return moduleDef, strings.Join(defaultExports, ",\n")
}

func renderDefaultExports(defaultExports []string) string {
	exports := []string{"\n"}

	exports = append(exports, "const Widget = {")
	exports = append(exports, strings.Join(defaultExports, ",\n"))
	exports = append(exports, "};\n\n")
	exports = append(exports, "export default Widget;")

	return strings.Join(exports, "")
}

func renderField(name string, schema, root *openapi3.Schema, isArray bool) string {
	if schema == nil {
		return ""
	}
	components := []string{}
	if root == nil {
		rootSchema := *schema
		root = &rootSchema
	}

	if schema.Type == "" && len(schema.AllOf) > 0 {
		for _, ao := range schema.AllOf {
			components = append(components, renderField(name, ao.Value, root, isArray))
		}
	}

	if !isIn(schema.Type, []string{"object", "array"}) && len(schema.Properties) == 0 {
		propName := ""
		props := Props{}
		validation := Validation{}
		if isIn(propName, schema.Required) {
			validation.Required = &Validator{
				Value:   true,
				Message: fmt.Sprintf("%s is required.", toTitle(propName)),
			}
			// props.Required = true
		}
		if schema.ReadOnly {
			return ""
		}
		if schema.Description != "" {
			props.Placeholder = &schema.Description
		}
		if schema.Pattern != "" {
			validation.Pattern = &Validator{
				Value:   schema.Pattern,
				Message: fmt.Sprintf("%s input is invalid", toTitle(propName)),
			}
			// props.Pattern = &property.Value.Pattern
		}
		if schema.MinLength > 0 {
			validation.MinLength = &Validator{
				Value: schema.MinLength,
				Message: fmt.Sprintf(
					"%s requires minimum length of %v",
					toTitle(propName),
					schema.MinLength,
				),
			}
		}
		if schema.MaxLength != nil {
			validation.MaxLength = &Validator{
				Value: *schema.MaxLength,
				Message: fmt.Sprintf(
					"%s requires maximum length of %v",
					toTitle(propName),
					*schema.MaxLength,
				),
			}
			// props.MaxLength = property.Value.MaxLength
		}
		if schema.Min != nil {
			validation.Min = &Validator{
				Value: *schema.Min,
				Message: fmt.Sprintf(
					"%s must be great than %v",
					toTitle(propName),
					*schema.Min,
				),
			}
			// props.Min = property.Value.Min
		}
		if schema.Max != nil {
			validation.Max = &Validator{
				Value: *schema.Max,
				Message: fmt.Sprintf(
					"%s must be smaller than %v",
					toTitle(propName),
					*schema.Max,
				),
			}
			// props.Max = property.Value.Max
		}

		if schema.Title != "" {
			props.Label = toTitle(schema.Title)
		} else {
			props.Label = toTitle(propName)
		}
		if schema.Description != "" {
			props.Placeholder = &schema.Description
		} else {
			props.Placeholder = &schema.Title
		}
		if len(schema.Enum) > 0 {
			if root.Type == "array" || isArray {
				components = append(
					components,
					arraySelectField(
						getKandaFormWidget(schema),
						name,
						propName,
						props,
						validation,
						schema.Enum,
					),
				)
			} else {
				components = append(
					components,
					selectField(
						getKandaFormWidget(schema),
						name,
						propName,
						props,
						validation,
						schema.Enum,
					),
				)
			}
		}
		if schema.Items != nil && schema.Items.Value != nil {
			components = append(
				components,
				renderField(name+" "+propName, schema.Items.Value, schema, root.Type == "array" || isArray),
			)
		}
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
			continue
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
				if root.Type == "array" || isArray {
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
				if root.Type == "array" || isArray {
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
				renderField(name+" "+propName, property.Value, property.Value, root.Type == "array" || isArray),
			)
		} else if len(property.Value.OneOf) > 0 {
			for _, oneOf := range property.Value.OneOf {
				components = append(
					components,
					renderField(name+" "+propName, oneOf.Value, property.Value, root.Type == "array" || isArray),
				)
			}
		} else if len(property.Value.AnyOf) > 0 {
			for _, anyOf := range property.Value.AnyOf {
				components = append(
					components,
					renderField(name+" "+propName, anyOf.Value, property.Value, root.Type == "array" || isArray),
				)
			}
		} else if len(property.Value.AllOf) > 0 {
			for _, allOf := range property.Value.AllOf {
				components = append(
					components,
					renderField(name+" "+propName, allOf.Value, property.Value, root.Type == "array" || isArray),
				)
			}
		}

		if property.Value.Items != nil && property.Value.Items.Value != nil {
			components = append(
				components,
				renderField(name+" "+propName, property.Value.Items.Value, property.Value, root.Type == "array" || isArray),
			)
		}
	}
	if schema.Items != nil && schema.Items.Value != nil {
		components = append(components, renderField(name, schema.Items.Value, schema, root.Type == "array" || isArray))
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

export function %sArrayWrapper({ children, initialData = null }: WidgetArrayWrapperProps) {
  return (
		<Field.Array.Wrapper
			arrayName="%s"
			initialData={initialData}
		>
			{(props: ArrayWrapperChildrenArgs) => children(props)}
		</Field.Array.Wrapper>
	);
}`,
		toPascal(prefix+" "+name),
		validationRegexReplace(b),
		toPascal(prefix+" "+name),
		pathName,
	)
}

func inputField(type_, prefix, name string, props Props, validation Validation) string {
	b, _ := json.Marshal(validation)
	pathName := name
	if prefix != "" {
		pathName = toPath(prefix + " " + name)
	}
	return fmt.Sprintf(`
export const %sValidation = %v;

export function %s(props: ValidatedFieldProps<FieldProps["%s"]>) {
	return (
		<Field.Validator validation={props.validation || %sValidation} nested={props.nested}>
			<Field.%s
				%s
				{...props}
				name={props.name || '%s'}
			/>
		</Field.Validator>
	);
}`,
		toPascal(prefix+" "+name),
		validationRegexReplace(b),
		toPascal(prefix+" "+name),
		type_,
		toPascal(prefix+" "+name),
		type_,
		propsToAttributes(props),
		pathName,
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

export function %s(props: ValidatedFieldProps<FieldProps["%s"]>) {
	return (
		<Field.Validator validation={props.validation || %sValidation} nested={props.nested}>
			<Field.%s
				%s
				{...props}
				options={props.options || %v}
				name={props.name || '%s'}
			/>
		</Field.Validator>
	);
}`,
		toPascal(prefix+" "+name),
		validationRegexReplace(b),
		toPascal(prefix+" "+name),
		type_,
		toPascal(prefix+" "+name),
		type_,
		propsToAttributes(props),
		string(opts),
		pathName,
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

export function %sArrayInput(props: WidgetArrayInputProps<ValidatedFieldProps<FieldProps["%s"]>>) {
	return (
		<Field.Array.Input name={props.name || '%s'} index={props.index || 0}>
			<Field.Validator validation={props.validation || %sArrayInputValidation} nested={props.nested}>
				<Field.%s
					%s
					{...props}
				/>
			</Field.Validator>
		</Field.Array.Input>
	);
}`,
		toPascal(prefix+" "+name),
		validationRegexReplace(b),
		toPascal(prefix+" "+name),
		type_,
		pathName,
		toPascal(prefix+" "+name),
		type_,
		propsToAttributes(props),
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
		<Field.Array.Input name={props.name || '%s'} index={props.index || 0}>
			<Field.Validator validation={props.validation || %sArraySelectValidation} nested={props.nested}>
				<Field.%s
					%s
					{...props}
					options={props.options || %v}
				/>
			</Field.Validator>
		</Field.Array.Input>
	);
}`,
		toPascal(prefix+" "+name),
		validationRegexReplace(b),
		toPascal(prefix+" "+name),
		pathName,
		toPascal(prefix+" "+name),
		type_,
		propsToAttributes(props),
		string(opts),
	)
}
