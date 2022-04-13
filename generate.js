const toJsonSchema = require("@openapi-contrib/openapi-schema-to-json-schema");
const yaml = require("js-yaml");
const fs = require("fs");
const parser = require("@apidevtools/json-schema-ref-parser");
const obj = yaml.load(fs.readFileSync("schema.yaml", { encoding: "utf-8" }));

parser.dereference(obj, (err, schema) => {
  if (err) {
    console.error(err);
    return;
  }
  const out = toJsonSchema(schema["components"]["schemas"]);
  console.log(JSON.stringify(out, null, "  "));
});
