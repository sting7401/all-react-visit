module.exports = {
	root: true,
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: ['plugin:react/recommended', 'airbnb', 'prettier/react'],
	overrides: [],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react', 'react-hooks'],
	rules: {
		'react/react-in-jsx-scope': 'off',
		'linebreak-style': ['error', 'windows'],
		indent: [4, 'tab'],
		quotes: ['error', 'single'],
		'no-duplicate-imports': 'error',
	},
};
