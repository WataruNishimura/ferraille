import js from "@eslint/js";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import typescriptParser from "@typescript-eslint/parser";
import typescriptPlugin from "@typescript-eslint/eslint-plugin";

/** @type { import("eslint").Linter.FlatConfig[] } */
export default [
  js.configs.recommended,
  {
    plugins: {
      "@typescript-eslint": typescriptPlugin,
    },
    languageOptions: {
      parser: typescriptParser,
    },
    rules: {
      ...typescriptPlugin.configs["recommended"].rules,
      ...typescriptPlugin.configs["eslint-recommended"].rules,
    },
  },
  eslintPluginPrettierRecommended,
];
