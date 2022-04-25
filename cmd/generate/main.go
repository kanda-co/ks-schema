package main

import (
	"context"
	"encoding/json"
	"flag"
	"fmt"
	"sort"
	"strings"

	"github.com/getkin/kin-openapi/openapi3"
)

func main() {
	in := flag.String("in", "schema.yaml", "input openapi yaml file")
	flag.Parse()

	ctx := context.Background()
	loader := openapi3.Loader{Context: ctx}
	doc, _ := loader.LoadFromFile(*in)
	_ = doc.Validate(ctx)
	for name, ref := range doc.Components.Schemas {
		// write to individual module for Schema Form Fields
		fmt.Println(renderModule(name, ref.Value))
	}
}

func toTitle(in string) string {
	titled := strings.Title(strings.ReplaceAll(in, "_", " "))
	return strings.ReplaceAll(titled, " ", "")
}

func isIn(in string, ins []string) bool {
	for _, i := range ins {
		if i == in {
			return true
		}
	}
	return false
}

func renderModule(name string, schema *openapi3.Schema) string {
	moduleDefs := []string{}
	components := renderField(name, schema, nil)
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
		widget := "Field.Input"
		if len(property.Value.Enum) > 0 {
			widget = "Select"
		}
		widgetM := map[string]string{}
		b, _ := json.Marshal(property.Value.Extensions)
		json.Unmarshal(b, &widgetM)
		if widgetOverride, ok := widgetM["x-kanda-form-widget"]; ok {
			widget = widgetOverride
		}
		required := ""
		if isRequired := isIn(propName, schema.Required); isRequired {
			required = fmt.Sprintf(` required="%s is required."`, propName)
		}
		readonly := ""
		if property.Value.ReadOnly {
			readonly = ` readonly="true"`
		}
		component := fmt.Sprintf(`export const %s%s = ({ props }) => {
	return <%s name="%s" label="%s" placeholder="%s"%s%s ...{props} />;
};`,
			toTitle(name),
			toTitle(propName),
			widget,
			propName,
			property.Value.Title,
			property.Value.Description,
			required,
			readonly,
		)

		if len(property.Value.Enum) > 0 {
			options, _ := json.Marshal(property.Value.Enum)
			component = fmt.Sprintf(`export const %s%s = ({ props }) => {
	return <%s name="%s" label="%s" placeholder="%s"%s%s options={%v} ...{props} />;
};`,
				toTitle(name),
				toTitle(propName),
				widget,
				propName,
				property.Value.Title,
				property.Value.Description,
				required,
				readonly,
				string(options),
			)
		}

		components = append(components, component)

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
	return strings.Join(components, "\n\n")
}
