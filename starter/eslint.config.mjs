import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
    {
        files: ["**/*.{js,mjs,cjs}"],
        plugins: { js },
        extends: ["js/recommended", "plugin:cypress/recommended"],
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
                ...globals.mocha,
            },
        },
        rules: {
            "no-var": "error",
            "no-unused-vars": "error",
            semi: ["error", "always"],
            camelcase: "error",
            "no-console": "warn",
        },
    },
]);
