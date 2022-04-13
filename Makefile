.PHONY: info

info:
	@echo Getting project info
	@echo --------------------
	@echo PROJECT = ${PROJECT}
	@echo PROJECT_ID = ${PROJECT_ID}

local:
	$(eval ENV := "local")
	$(eval SCHEMA_URL := http://dev.anzel.me:8080)

dev:
	$(eval ENV := "dev")
	$(eval SCHEMA_URL := https://onboarding-qa.kanda.co.uk)

qa:
	$(eval ENV := "qa")
	$(eval SCHEMA_URL := https://onboarding-qa.kanda.co.uk)

production:
	$(eval ENV := "production")
	$(eval SCHEMA_URL := https://onboarding.kanda.co.uk)

clean-frontend: 
	@echo Cleaning frontend client built artefact...
	rm -rf dist/ frontend/generated

clean-backend: 
	@echo Cleaning built artefact...
	rm -rf pkg/schema/*.gen.go

clean: clean-frontend clean-backend

gen-frontend:
	@echo Code generation and build for frontend 
	LC_ALL=C find . -type f -name 'schema.yaml' -exec sed -i '' s%https://SCHEMA_URL%${SCHEMA_URL}%g {} +
	npx openapi-typescript-codegen --input schema.yaml --output frontend/generated --client axios --exportSchemas true
	# npm run build
	LC_ALL=C find . -type f -name 'schema.yaml' -exec sed -i '' s%${SCHEMA_URL}%https://SCHEMA_URL%g {} +

gen-backend:
	@echo Code generation for backend from OpenAPI...
	mkdir -p pkg/schema
	LC_ALL=C find . -type f -name 'schema.yaml' -exec sed -i '' s%https://SCHEMA_URL%${SCHEMA_URL}%g {} +
	oapi-codegen -generate types,server,spec -package schema schema.yaml > pkg/schema/schema.gen.go
	LC_ALL=C find . -type f -name 'schema.yaml' -exec sed -i '' s%${SCHEMA_URL}%https://SCHEMA_URL%g {} +

build: gen-backend gen-frontend
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
