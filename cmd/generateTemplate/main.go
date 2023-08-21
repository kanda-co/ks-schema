package main

import (
	"fmt"
	"io/ioutil"
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
	for _, path := range paths {
		b, err := ioutil.ReadFile(path)
		if err != nil {
			panic(err)
		}
		bits := strings.Split(path, "/")
		fname := strings.ToUpper(strings.Split(bits[len(bits)-1], ".")[0])

		fmt.Println()
		fmt.Printf("const %v = `%v`", fname, strings.TrimSpace(string(b)))
		fmt.Println()
	}
}
