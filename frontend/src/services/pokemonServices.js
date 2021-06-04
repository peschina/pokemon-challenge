import { GET } from "./httpServices";

export const getPokemonDescription = async (name) => {
  try {
    return await GET(`/pokemon/${name}`);
  } catch (error) {
    throw error;
  }
};
