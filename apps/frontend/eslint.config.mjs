import js from "@eslint/js";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat();

/** @type { import("eslint").Linter.FlatConfig[] } */
export default [
  js.configs.recommended,
  ...compat.config({
    env: { node: true },
    extends: ["plugin:@typescript-eslint/recommended"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: ["@typescript-eslint"],
    ignorePatterns: ["dist", "node_modules"],
    rules: {
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/no-empty-interface": "error",
    },
  }),
  eslintPluginPrettierRecommended,
  {
    rules: {
      semi: ["error", "always"],
      "prettier/prettier": "error"
    },
  },
];
