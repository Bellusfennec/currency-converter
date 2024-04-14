module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/errors",
    "plugin:import/warnings"
  ],
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".tsx", ".ts"]
      }
    }
  },
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh", "import", "i18n"],
  rules: {
    "semi": ["error", "always"],
    "space-before-function-paren": "off",
    "quotes": ["warn", "double", { allowTemplateLiterals: true }],
    // "no-unused-vars": "warn",
    "multiline-ternary": "off",
    "react-refresh/only-export-components": "off",
    "react-hooks/exhaustive-deps": "off",
    "import/no-unresolved": "error",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "i18n/no-chinese-character": 1,
    "i18n/no-greek-character": 1,
    "i18n/no-japanese-character": 1,
    "i18n/no-korean-character": 1,
    "i18n/no-russian-character": 1,
    "i18n/no-thai-character": 1
  }
};