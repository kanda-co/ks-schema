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

clean-backend: 
	@echo Cleaning built artefact...
	rm -rf pkg/schema/*.gen.go

clean: clean-frontend clean-backend

gen-frontend:
	@echo Code generation and build for frontend 
	npx openapi-typescript-codegen --input schema.yaml --output frontend/generated --client axios 

gen-backend:
	@echo Code generation for backend from OpenAPI...
	mkdir -p pkg/schema
	oapi-codegen -generate types,server,spec -package schema schema.yaml > pkg/schema/schema.gen.go

build-frontend: gen-frontend
	@echo Build frontend...
	npx openapi2schema -i schema.yaml > frontend/generated/schema.json
	echo "import * as JSONSchema from './schema.json';" >> frontend/generated/index.ts
	echo "export { JSONSchema };" >> frontend/generated/index.ts
	npm run build

build: gen-backend build-frontend
	@echo Build both frontend and backend...

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
