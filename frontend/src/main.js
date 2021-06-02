import "regenerator-runtime/runtime";
import "core-js";
import App from './App.svelte';

const app = new App({
	target: document.body
});

export default app;