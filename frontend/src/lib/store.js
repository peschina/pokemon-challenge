import { writable } from 'svelte/store';
import sveltePersistentStore from 'svelte-persistent-store';

export const loading = writable(false);
