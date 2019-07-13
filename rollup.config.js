import pkg from './package.json';

export default [
	{
		input: 'peculiar.js',
		output: {
      name: 'rung',
			file: pkg.browser,
			format: 'iife'
		}
	},
	{
		input: 'peculiar.js',
		output: [
			{ file: pkg.main, format: 'cjs' }
		]
	}
];
