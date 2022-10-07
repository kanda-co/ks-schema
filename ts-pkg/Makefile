.PHONY: info

link:
	@echo "Linking libraries"
	yarn link
	cd app/
	yarn link @kanda-libs/ks-form-library-2
	cd ..

build: link
	rm -rf dist/
	yarn build

dev: build
	cd app && yarn dev
