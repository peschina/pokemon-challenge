/**
 * @jest-environment jsdom
 */

import "regenerator-runtime/runtime";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/svelte";
import Pokemon from "./Pokemon.svelte";

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
});
