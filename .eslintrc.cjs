module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react-hooks/recommended',
		"eslint-config-prettier",
	],
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	parser: '@typescript-eslint/parser',
	plugins: ['react-refresh'],
	rules: {
		"quotes": "off",
		"@typescript-eslint/quotes": ["error", "double"],
		"semi": "off",
		"@typescript-eslint/semi": "error",
		"indent": ["error", "tab"],
		"no-unused-vars": "off",
		"@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
		"@typescript-eslint/explicit-function-return-type": "error",
		'react-refresh/only-export-components': ['warn', { allowConstantExport: true },],
	},
}
