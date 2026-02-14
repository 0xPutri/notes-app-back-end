import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default [
  daStyle,
  { files: ['**/*.js'], languageOptions: { sourceType: 'module' } },
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
];
