import { defineConfig } from "@rsbuild/core";
import { pluginHtmlMinifierTerser } from "rsbuild-plugin-html-minifier-terser";

// https://rsbuild.dev/config/
export default defineConfig({
  source: {
    entry: {
      index: "./src/scripts/index.ts",
    },
  },
  plugins: [pluginHtmlMinifierTerser()],
  html: {
    template: "./static/index.html",
  },
  output: {
    minify: true,
    inlineStyles: true,
    inlineScripts: true,
  },
});
