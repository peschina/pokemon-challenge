import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import replace from '@rollup/plugin-replace';
import postcss from 'rollup-plugin-postcss';
import copy from 'rollup-plugin-copy';
import html from '@rollup/plugin-html';
import del from 'rollup-plugin-delete';
import autoPreprocess from 'svelte-preprocess';
import { babel } from '@rollup/plugin-babel';
import environments from './environments';

const htmlOptions = {
	template: ({ attributes, bundle, files, publicPath, title }) => {
		const scripts = (files.js || []).map(({ fileName }) => `<script defer src="${fileName}"></script>`).join("\n");

		const css = (files.css || []).map(({ fileName }) => `<link rel="stylesheet" href="${fileName}" />`).join("\n");

		return `<!DOCTYPE html>
<html>
	<head>
		<meta charset='utf-8'>
		<meta name='viewport' content='width=device-width,initial-scale=1'>
		<title>Svelte app</title>

		<link rel='icon' type='image/png' href='favicon.png'>
		<link rel='stylesheet' href='global.css'>
		<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
		<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700">
		<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto+Mono">
		${css}

		${scripts}
	</head>

	<body>
	</body>
</html>
		`;
	}
};

const watchDir = process.env.ROLLUP_WATCH;

export default CLIArgs => {
	const env = CLIArgs.configEnv ? environments[CLIArgs.configEnv] : environments.local;
	console.log("Environment:", CLIArgs.configEnv || "local");

	return {
		input: 'src/main.js',
		output: {
			sourcemap: watchDir ? true : false,
			format: 'iife',
			name: 'app',
			dir: 'build',
			entryFileNames: 'bundle-[hash].js'
		},
		plugins: [
			del({
				targets: ['build/*'],
				runOnce: watchDir
			}),

			replace({
				env: JSON.stringify(env),
				preventAssignment: true
			}),

			copy({
				targets: [
					{ src: 'public/*', dest: 'build' }
				],
				copyOnce: watchDir
			}),

			svelte({
				// enable run-time checks when not in production
				compilerOptions: {
					dev: watchDir
				},
				preprocess: autoPreprocess(),
				emitCss: true
			}),

			// If you have external dependencies installed from
			// npm, you'll most likely need these plugins. In
			// some cases you'll need additional configuration -
			// consult the documentation for details:
			// https://github.com/rollup/plugins/tree/master/packages/commonjs
			resolve({
				browser: true,
				dedupe: ['svelte']
			}),

			commonjs(),

			babel({ babelHelpers: 'bundled' }),

			postcss({
				extract: true,
				minimize: !watchDir,
				sourceMap: watchDir ? true : false,
				use: [
					['sass', {
						includePaths: [
							'./theme',
							'./node_modules'
						]
					}]
				]
			}),

			html(htmlOptions),

			// In dev mode, call `npm run start` once
			// the bundle has been generated
			watchDir && serve(),

			// Watch the `build` directory and refresh the
			// browser on changes when not in production
			watchDir && livereload('build'),

			// If we're building for production (npm run build
			// instead of npm run dev), minify
			!watchDir && terser()
		],

		watch: {
			clearScreen: false
		}
	}
};

function serve() {
	let started = false;

	return {
		writeBundle() {
			if (!started) {
				started = true;

				require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
					stdio: ['ignore', 'inherit', 'inherit'],
					shell: true
				});
			}
		}
	};
}
