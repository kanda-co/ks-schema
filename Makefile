.PHONY: info

info:
	@echo Getting project info
	@echo --------------------
	@echo PROJECT = ${PROJECT}
	@echo PROJECT_ID = ${PROJECT_ID}

local:
	$(eval ENV := "local")

qa:
	$(eval ENV := "qa")

production:
	$(eval ENV := "production")

clean-frontend:
	@echo Cleaning frontend client built artefact...
	rm -rf dist/ frontend/generated
	rm -rf ks-component-ts/dist ks-component-ts/src/generated

clean-backend:
	@echo Cleaning built artefact...
	rm -rf pkg/schema/*.gen.go

clean: clean-frontend clean-backend

gen-frontend:
	@echo Code generation and build for frontend
	# npx openapi-typescript-codegen --input schema.yaml --output frontend/generated --client axios
	npx openapi-io-ts -i schema.yaml -o frontend/generated
	npx prettier --write frontend/generated
	echo "\nexport interface Operations {\n" >> frontend/generated/operations/index.ts
	grep ": .*Operation," frontend/generated/operations/index.ts | sed -E 's/(.*): (.*),/\1: typeof \2,/' >> frontend/generated/operations/index.ts 
	echo "\n}" >> frontend/generated/operations/index.ts
ifeq ($(shell uname), Darwin)
	@echo Running sed under MacOS...
	sed -i '' "s/export const operations =/export const operations: Operations =/g" frontend/generated/operations/index.ts
else
	@echo Running sed under non-Darwin...
	sed -i "s/export const operations =/export const operations: Operations =/g" frontend/generated/operations/index.ts
endif
	npx prettier --write frontend/generated

gen-backend:
	@echo Code generation for backend from OpenAPI...
	mkdir -p pkg/schema
	go run github.com/deepmap/oapi-codegen/cmd/oapi-codegen@v1.11.0 -generate types,client,server,spec -package schema schema.yaml > pkg/schema/schema.gen.go

build-frontend: gen-frontend widget ts-widget
	@echo Build frontend...
	npx openapi2schema -i schema.yaml > frontend/generated/schema.json
	echo "import * as Widget from './widget';" >> frontend/generated/index.ts
	echo "import * as JSONSchema from './schema.json';" >> frontend/generated/index.ts
	echo "import { servers } from './servers';" >> frontend/generated/index.ts
	echo "export { JSONSchema, Widget, servers };" >> frontend/generated/index.ts
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

ts-widget:
	@echo Generating TS React Field components, validators from schema...
	rm -rf ks-component-ts/src/generated
	rm -rf ks-frontend-services/src/generated
	mkdir -p ks-component-ts/src/generated/widget
	npx openapi-io-ts -i schema.yaml -o ks-component-ts/src/generated
	npx prettier --write ks-component-ts/src/generated
	echo "\nexport interface Operations {\n" >> ks-component-ts/src/generated/operations/index.ts
	grep ": .*Operation," ks-component-ts/src/generated/operations/index.ts | sed -E 's/(.*): (.*),/\1: typeof \2,/' >> ks-component-ts/src/generated/operations/index.ts
	echo "\n}" >> ks-component-ts/src/generated/operations/index.ts
ifeq ($(shell uname), Darwin)
	@echo Running sed under MacOS...
	sed -i '' "s/export const operations =/export const operations: Operations =/g" ks-component-ts/src/generated/operations/index.ts
else
	@echo Running sed under non-Darwin...
	sed -i "s/export const operations =/export const operations: Operations =/g" ks-component-ts/src/generated/operations/index.ts
endif
	npx prettier --write ks-component-ts/src/generated/operations/index.ts
	cp -r ks-component-ts/src/generated ks-frontend-services/src/generated
	go run ./cmd/ts-form/main.go -in schema.yaml > ks-component-ts/src/generated/widget/index.tsx
	echo "import Widget from './widget';" >> ks-component-ts/src/generated/index.ts
	echo "import { servers } from './servers';" >> ks-component-ts/src/generated/index.ts
	echo "export { Widget, servers };" >> ks-component-ts/src/generated/index.ts
	npx prettier --write ks-component-ts/src/generated/widget
	cd ks-component-ts; yarn && yarn build

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
