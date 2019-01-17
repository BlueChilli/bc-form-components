import autoprefixer from 'autoprefixer';
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';

import pkg from './package.json';


export default {
	input: 'src/components/index.js',
	output: [
		{
			file: pkg.main,
			format: 'cjs',
      sourcemap: true,
      exports: 'named'
		},
		{
			file: pkg.module,
			format: 'es',
      sourcemap: true,
      exports: 'named'
		}
	],
	external: ['react', 'prop-types'],
	plugins: [
		postcss({
			plugins: [autoprefixer]
		}),
		babel({
			exclude: 'node_modules/**',
			externalHelpers: true
		})
	]
};
