import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"], // CommonJS and ES Modules
  dts: true, // Generate TypeScript declarations
  sourcemap: true, // Optional: Include sourcemaps
  clean: true, // Clean the output directory before each build
});