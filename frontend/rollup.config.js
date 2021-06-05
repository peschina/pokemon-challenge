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
		
		<link rel="preconnect" href="https://fonts.gstatic.com">
		<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap" rel="stylesheet">

		<link rel='icon' type='image/png' href='favicon.png'>
		<link rel='stylesheet' href='global.css'>
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

			watchDir && serve(),

			watchDir && livereload('build'),

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
