import { get } from "svelte/store";
import { searchHistory } from "../lib/store";
import { GET } from "./httpServices";

export const getPokemonDescription = async (name) => {
  try {
    const cached = get(searchHistory)[name];
    if (cached) return cached;

    const res = await GET(`/pokemon/${name}`);

    const historyClone = { ...get(searchHistory) };
    historyClone[name] = res;
    searchHistory.set(historyClone);
    
    return res;
  } catch (error) {
    throw error;
  }
};
