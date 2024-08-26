package main

import (
	"fmt"
	"os"
	"path/filepath"
	"strings"
)

const (
	templateDir string = "templates/"
)

func main() {
	paths := []string{}
	err := filepath.Walk(templateDir, func(path string, info os.FileInfo, err error) error {
		if err != nil {
			fmt.Println(err)
			return err
		}
		if info.IsDir() {
			return nil
		}
		if !strings.HasSuffix(info.Name(), ".json") {
			return nil
		}
		paths = append(paths, path)
		return nil
	})
	if err != nil {
		panic(err)
	}

	fmt.Println("package schema")
	fmt.Println()
	fmt.Println("type TName string")
	fmt.Println()
	fmt.Println("const (")
	fmt.Println("\t")
	for _, path := range paths {
		bits := strings.Split(path, "/")
		fname := strings.ToUpper(strings.Split(bits[len(bits)-1], ".")[0])
		fmt.Printf("\t%v TName = \"%v\"\n", fname, fname)
	}
	fmt.Println(")")
	fmt.Println()

	fmt.Println("var TemplateM = map[string]TName{")
	for _, path := range paths {
		bits := strings.Split(path, "/")
		fname := strings.ToUpper(strings.Split(bits[len(bits)-1], ".")[0])
		fmt.Printf("\t\"%v\": %v,\n", fname, fname)
	}
	fmt.Println("}")
	fmt.Println()

	fmt.Println("func (tn TName) String() string {")
	fmt.Println("\treturn string(tn)")
	fmt.Println("}")
	fmt.Println()

	fmt.Println("func (tn TName) Render() string {")
	fmt.Println("\tif tm, ok := TMap[tn]; ok {")
	fmt.Println("\t\treturn tm")
	fmt.Println("\t}")
	fmt.Println("\tpanic(\"template name not in template map\")")
	fmt.Println("}")
	fmt.Println()

	fmt.Println("var TMap = map[TName]string{")
	for _, path := range paths {
		b, err := os.ReadFile(path)
		if err != nil {
			panic(err)
		}
		bits := strings.Split(path, "/")
		fname := strings.ToUpper(strings.Split(bits[len(bits)-1], ".")[0])
		fmt.Printf("\t%v: `%v`,\n", fname, strings.TrimSpace(string(b)))
	}
	fmt.Println("}")
}
