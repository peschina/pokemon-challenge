import { get } from "svelte/store";
import { GET } from "./httpServices";
import { searchHistory } from "../lib/store";

export const getPokemonDescription = async (name) => {
  try {
    const cached = get(searchHistory)[name];
    if (cached) {
      if (cached.message) throw cached; // we cached a 404 Error
      return cached;
    }

    const res = await GET(`/pokemon/${name}`);
    cacheSearch(name, res);
    return res;
  } catch (error) {
    if (error.status == 404) cacheSearch(name, error);
    throw error;
  }
};

const cacheSearch = (search, res) =>
  searchHistory.set({ ...get(searchHistory), [search]: res });
