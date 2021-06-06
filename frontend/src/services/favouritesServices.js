import { get } from "svelte/store";
import { favourites } from "../lib/store";

export const addToFavourites = (pokemon) =>
  favourites.set([...get(favourites), pokemon]);

export const removeFromFavourites = (pokemon) =>
  favourites.set(get(favourites).filter((i) => i.name != pokemon.name));

export const isPokemonFavourite = (pokemon) =>
  pokemon ? get(favourites).find((i) => i.name == pokemon.name) : false;
