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
	fmt.Println("	")
	for _, path := range paths {
		bits := strings.Split(path, "/")
		fname := strings.ToUpper(strings.Split(bits[len(bits)-1], ".")[0])
		fmt.Printf("	%v TName = \"%v\"\n", fname, fname)
	}
	fmt.Println(")")
	fmt.Println()

	fmt.Println("func(tn TName) String() string {")
	fmt.Println("	return string(tn)")
	fmt.Println("}")
	fmt.Println()

	fmt.Println("func(tn TName) Render() string {")
	fmt.Println("	if tm, ok := TMap[tn]; ok {")
	fmt.Println("		return tm")
	fmt.Println("	}")
	fmt.Println("	panic(\"template name not in template map\")")
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
		fmt.Printf("	\"%v\": `%v`,\n", fname, strings.TrimSpace(string(b)))
	}
	fmt.Println("}")
}
