/**
 * @jest-environment jsdom
 */

import "regenerator-runtime/runtime";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, waitFor } from "@testing-library/svelte";
import SearchWrapper from "./SearchWrapper.svelte";
import { getPokemonDescription } from "../../services/pokemonServices";

jest.mock("../../services/pokemonServices");

describe("searchWrapper", () => {
  it("should hit the API service on keydown if search is truthy and key is enter", async () => {
    const { getByRole, getByText } = render(SearchWrapper);

    const pokemon = {
      name: "ditto",
      description:
        "It can freely recombine its own cellular structure to transform into other life-forms.",
    };

    const input = getByRole("textbox");
    await fireEvent.input(input, { target: { value: "foo" } });
    expect(input.value).toBe("foo");

    await getPokemonDescription.mockResolvedValueOnce(pokemon);

    input.focus();
    await fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

    await waitFor(() => {
      expect(getPokemonDescription).toHaveBeenCalledTimes(1);
      expect(getPokemonDescription).toHaveBeenCalledWith("foo");
      expect(getByText("ditto:")).toBeInTheDocument();
      expect(getByText(pokemon.description)).toBeInTheDocument();
    });
  });

  it("should not dispatch event on keydown if search is falsy", async () => {
    const { getByRole, component } = render(SearchWrapper);

    const input = getByRole("textbox");

    const mock = jest.fn();
    component.$on("searchPokemon", mock);

    input.focus();
    await fireEvent.keyDown(input, { key: "Enter", code: "Enter" });
    expect(mock).not.toHaveBeenCalled();
  });

  it("should display error message if API call fails or there is an error", async () => {
    const { getByRole, getByText } = render(SearchWrapper);

    const input = getByRole("textbox");
    await fireEvent.input(input, { target: { value: "foo" } });
    expect(input.value).toBe("foo");

    await getPokemonDescription.mockRejectedValueOnce(new Error());

    input.focus();
    await fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

    await waitFor(() => {
      expect(getPokemonDescription).toHaveBeenCalled();
      expect(getPokemonDescription).toHaveBeenCalledWith("foo");
      expect(
        getByText("Whoops, looks like something went wrong.")
      ).toBeInTheDocument();
    });
  });
});
