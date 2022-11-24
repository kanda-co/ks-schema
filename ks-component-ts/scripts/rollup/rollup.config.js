import typescriptPaths from "rollup-plugin-typescript-paths";

import pkg from "../../package.json";
import { createRollupConfig } from "./createRollupConfig";

const name = "index";
const options = [
  {
    name,
    format: "cjs",
    input: pkg.source,
  },
  { name, format: "esm", input: pkg.source },
];

const plugins = [typescriptPaths()];

export default options.map((option) =>
  createRollupConfig({ ...option, plugins })
);
