import json from "@rollup/plugin-json";
import { terser } from "rollup-plugin-terser";
import pkg from "./package.json";

export default [
	{
		input: "bundle.config.js",
		output: [
			{
	      name: "peculiar",
				file: pkg.main,
				format: "cjs"
			},
			{
				name: "peculiar",
				file: "dist/peculiar.min.js",
				format: "iife",
				plugins: [terser()]
			}
		],
		plugins: [json()]
	}
];
