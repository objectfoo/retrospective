module.exports = {
	root: true,
	env: { node: true },
	extends: [ "eslint:recommended" ],
	ignorePatterns: ["dist","vite.config.ts"],
	rules: {
		"quotes": ["error", "double"],
		"semi": "error",
		"indent": ["error", "tab"],
		"no-unused-vars": "error",
	},
	overrides: [
		{
			files: ["./src/**/*"],
			"settings": {
				"react": {
					"version": "detect"
				}
			},
			env: { browser: true, es2020: true },
			parser: "@typescript-eslint/parser",
			parserOptions: {
				jsx: true,
				project: true,
				tsconfigRootDir: __dirname,
			},
			extends: [
				"eslint:recommended",
				"plugin:@typescript-eslint/strict-type-checked",
				"plugin:@typescript-eslint/stylistic-type-checked",
				"plugin:react-hooks/recommended",
				"plugin:react/recommended",
				"plugin:react/jsx-runtime",
				"eslint-config-prettier",
			],
			plugins: ["react-refresh"],
			rules: {
				"quotes": "off",
				"@typescript-eslint/quotes": ["error", "double"],
				"semi": "off",
				"@typescript-eslint/semi": "error",
				"no-unused-vars": "off",
				"@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
				"@typescript-eslint/explicit-function-return-type": "error",
				"react-refresh/only-export-components": ["warn", { allowConstantExport: true },],
			},
		}
	]
};
