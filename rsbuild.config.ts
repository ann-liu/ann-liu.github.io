import { defineConfig } from "@rsbuild/core";
import { pluginHtmlMinifierTerser } from "rsbuild-plugin-html-minifier-terser";

// https://rsbuild.dev/config/
export default defineConfig({
  source: {
    entry: {
      index: "./src/scripts/index.ts",
    },
  },
  plugins: [
    pluginHtmlMinifierTerser({
      removeComments: true,
    }),
  ],
  html: {
    template: "./static/index.html",
    favicon: "./static/favicon.ico",
  },
  output: {
    minify: true,
    inlineStyles: true,
    inlineScripts: true,
  },
});
