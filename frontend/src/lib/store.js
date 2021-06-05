import { writable } from "svelte/store";
import sveltePersistentStore from "svelte-persistent-store";

export const loading = writable(false);

export const favourites = sveltePersistentStore.local.writable(
  "favourites",
  []
);

export const searchHistory = sveltePersistentStore.local.writable(
  "searchHistory",
  {}
);
