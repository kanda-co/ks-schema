.PHONY: info

info:
	@echo Getting project info
	@echo --------------------
	@echo PROJECT = ${PROJECT}
	@echo PROJECT_ID = ${PROJECT_ID}

local:
	$(eval ENV := "local")
	$(eval KANDA_SEARCH_API_KEY := ${KANDA_SEARCH_API_KEY})

qa:
	$(eval ENV := "qa")
	$(eval KANDA_SEARCH_API_KEY := ${KANDA_SEARCH_API_KEY})

production:
	$(eval ENV := "production")
	$(eval KANDA_SEARCH_API_KEY := ${KANDA_SEARCH_API_KEY})

clean-frontend:
	@echo Cleaning frontend client built artefact...
	rm -rf dist/ frontend/generated
	rm -rf ks-frontend-sevices/dist ks-frontend-sevices/src/generated
	rm -rf ks-component-ts/dist ks-component-ts/src/generated

clean-widget:
	@echo Cleaning frontend client built artefact...
	rm -rf ks-component-ts/dist ks-component-ts/src/generated

clean-backend:
	@echo Cleaning built artefact...
	rm -rf pkg/schema/*.gen.go

clean: clean-frontend clean-backend

gen-frontend:
	@echo Code generation and build for frontend
	# npx openapi-typescript-codegen --input schema.yaml --output frontend/generated --client axios
	npx ks-openapi-io-ts -i schema.yaml -o frontend/generated
	echo "\nexport interface Operations {\n" >> frontend/generated/operations/index.ts
	grep ": .*Operation," frontend/generated/operations/index.ts | sed -E 's/(.*): (.*),/\1: typeof \2,/' >> frontend/generated/operations/index.ts 
	echo "\n}" >> frontend/generated/operations/index.ts
ifeq ($(shell uname), Darwin)
	@echo Running sed under MacOS...
	sed -i '' "s/export const operations =/export const operations: Operations =/g" frontend/generated/operations/index.ts
	# grep -rlw "./frontend" -e "DateFromISOString" | xargs -I% sed -i '' "s/\/DateFromISOString//g" %
else
	@echo Running sed under non-Darwin...
	sed -i "s/export const operations =/export const operations: Operations =/g" frontend/generated/operations/index.ts
	# grep -rlw "./frontend" -e "DateFromISOString" | xargs -I% sed -i "s/\/DateFromISOString//g" %
endif
	npx prettier --write frontend/generated

gen-backend:
	@echo Code generation for backend from OpenAPI...
	mkdir -p pkg/schema
	go run github.com/deepmap/oapi-codegen/cmd/oapi-codegen@v1.11.0 -generate types,client,server,spec -package schema schema.yaml > pkg/schema/schema.gen.go
	go run ./cmd/generateTemplate > pkg/schema/schema.templates.gen.go
	go run ./cmd/generateFields > pkg/schema/schema.fields.gen.go
	go fmt ./pkg/schema/schema.templates.gen.go
	go fmt ./pkg/schema/schema.fields.gen.go

build-frontend: gen-frontend widget ts-widget
	@echo Build frontend...
	npx openapi2schema -i schema.yaml > frontend/generated/schema.json
	echo "import * as Widget from './widget';" >> frontend/generated/index.ts
	echo "import * as JSONSchema from './schema.json';" >> frontend/generated/index.ts
	echo "import { servers } from './servers';" >> frontend/generated/index.ts
	echo "export { JSONSchema, Widget, servers };" >> frontend/generated/index.ts
	echo "export * from './components/parameters';" >> frontend/generated/index.ts
	echo "export * from './components/schemas';" >> frontend/generated/index.ts
	npm run build

build: gen-backend build-frontend
	@echo Build both frontend and backend...

ui:
	@echo Loading Swagger UI on port 8000...
	npx swagger-ui-cli -p 8000 schema.yaml

widget:
	@echo Generating React Field components, validators from schema...
	rm -rf frontend/generated/widget
	mkdir -p frontend/generated/widget
	go run ./cmd/form/main.go -in schema.yaml > frontend/generated/widget/index.tsx
	npx prettier --write frontend/generated/widget
	rm -rf ks-component-ts/src/generated
	rm -rf ks-frontend-services/src/generated
	cp -r frontend/generated ks-frontend-services/src/generated
	cp -r frontend/generated ks-component-ts/src/generated

ts-widget:
	@echo Generating TS React Field components, validators from schema...
	go run ./cmd/ts-form/main.go -in schema.yaml > ks-component-ts/src/generated/widget/index.tsx
	rm -rf ks-component-ts/src/generated/index.ts
	echo "import Widget from './widget';" >> ks-component-ts/src/generated/index.ts
	echo "import { servers } from './servers';" >> ks-component-ts/src/generated/index.ts
	echo "export { Widget, servers };" >> ks-component-ts/src/generated/index.ts
	npx prettier --write ks-component-ts/src/generated/widget
	cd ks-component-ts && yarn --ignore-scripts && yarn build

search-index:
	@echo Resetting Search Indexes...
	go run ./cmd/index/main.go -env=${ENV} -dryrun=${dryrun}

setup-cicd:
	@echo Create CI/CD global identity pool
	gcloud iam workload-identity-pools create "cicd-pool" \
		--project="${PROJECT_ID}" \
		--location="global" \
		--display-name="CICD pool"
	gcloud iam workload-identity-pools providers create-oidc "cicd-provider" \
		--project="${PROJECT_ID}" \
		--location="global" \
		--workload-identity-pool="cicd-pool" \
		--display-name="CICD provider" \
		--attribute-mapping="google.subject=assertion.sub,attribute.actor=assertion.actor,attribute.aud=assertion.aud" \
		--issuer-uri="https://token.actions.githubusercontent.com"

setup-repo:
	gcloud iam service-accounts add-iam-policy-binding "cicd-github@${PROJECT_ID}.iam.gserviceaccount.com" \
		--project="${PROJECT_ID}" \
		--role="roles/iam.workloadIdentityUser" \
		--member="principalSet://iam.googleapis.com/projects/${PROJECT_NUM}/locations/global/workloadIdentityPools/cicd-pool/*"
