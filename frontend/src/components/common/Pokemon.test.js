/**
 * @jest-environment jsdom
 */

import "regenerator-runtime/runtime";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, waitFor } from "@testing-library/svelte";
import Pokemon from "./Pokemon.svelte";
import {
  addToFavourites,
  isPokemonFavourite,
  removeFromFavourites,
} from "../../services/favouritesServices";

jest.mock("../../services/favouritesServices");

let arrayFavourites = [];
isPokemonFavourite.mockImplementation((item) => arrayFavourites.includes(item));
addToFavourites.mockImplementation(
  (item) => (arrayFavourites = [...arrayFavourites, item])
);
removeFromFavourites.mockImplementation(
  (item) =>
    (arrayFavourites = arrayFavourites.filter((i) => i.name != item.name))
);

const dummyPokemon = {
  name: "foo",
  description: "bar",
};

describe("Pokemon", () => {
  it("should render if valid pokemon object is passed as prop", () => {
    const { getByText, getByRole } = render(Pokemon, {
      props: { pokemon: dummyPokemon },
    });

    expect(getByText(`${dummyPokemon.name}:`)).toBeInTheDocument();
    expect(getByText(dummyPokemon.description)).toBeInTheDocument();
    expect(getByRole("img")).toBeInTheDocument();
  });

  it("should add or remove pokemon from favourites when clicking on icon", async () => {
    const { getByRole } = render(Pokemon, {
      props: { pokemon: dummyPokemon },
    });

    const icon = getByRole("img");

    await fireEvent.click(icon);
    await waitFor(() => expect(isPokemonFavourite(dummyPokemon)).toBe(true));

    await fireEvent.click(icon);
    await waitFor(() => expect(isPokemonFavourite(dummyPokemon)).toBe(false));
  });
});
