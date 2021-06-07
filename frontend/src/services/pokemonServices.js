import { get } from "svelte/store";
import { GET } from "./httpServices";
import { searchHistory } from "../lib/store";

export const getPokemonDescription = async (name) => {
  try {
    const cached = get(searchHistory)[name];
    if (cached) {
      if (cached.message) throw cached;
      return cached;
    }

    const res = await GET(`/pokemon/${name}`);
    cacheSearch(name, res);
    return res;
  } catch (error) {
    cacheSearch(name, error);
    throw error;
  }
};

const cacheSearch = (search, res) => {
  const historyClone = { ...get(searchHistory) };
  historyClone[search] = res;
  searchHistory.set(historyClone);
};
