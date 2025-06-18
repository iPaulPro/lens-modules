import { defineConfig } from "tsup";

export default defineConfig({
  bundle: false,
  entry: {
    index: "src/index.ts",
    abis: "src/abis.ts",
    deployments: "src/deployments.ts",
  },
  clean: true,
  sourcemap: false,
  dts: true,
  minifyWhitespace: true,
  format: ["esm", "cjs"],
  outDir: "dist",
  outExtension: ({ format }) => (format === "cjs" ? { js: ".cjs" } : { js: ".js" }),
});
