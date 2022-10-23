#!/bin/bash
# Get .jar with URL: https://repo1.maven.org/maven2/org/openapitools/openapi-generator-cli/6.0.0/openapi-generator-cli-6.0.0.jar
OPENAPI_GENERATOR_CLI=openapi-generator-cli-6.0.0.jar
wget 'https://repo1.maven.org/maven2/org/openapitools/openapi-generator-cli/6.0.0/openapi-generator-cli-6.0.0.jar' \
    -O "$OPENAPI_GENERATOR_CLI"

java -jar "$OPENAPI_GENERATOR_CLI" generate \
		-g 'typescript-fetch' \
		-i 'src/openapi/v1/album.yaml' \
		-o 'src/app/openapi/'

rm -f "$OPENAPI_GENERATOR_CLI"
echo "rm -f $OPENAPI_GENERATOR_CLI successfully"
