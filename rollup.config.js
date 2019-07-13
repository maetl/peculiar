import pkg from './package.json';

export default [
	{
		input: 'src/peculiar.js',
		output: {
      name: 'rung',
			file: pkg.browser,
			format: 'iife'
		}
	},
	{
		input: 'src/peculiar.js',
		output: [
			{ file: pkg.main, format: 'cjs' }
		]
	}
];
