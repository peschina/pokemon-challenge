/**
 * @jest-environment jsdom
 */

import "regenerator-runtime/runtime";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/svelte";
import Searchbar from "./Searchbar.svelte";

describe("searchbar", () => {
  it("should render", () => {
    const { getByRole } = render(Searchbar);
    expect(getByRole("textbox")).toBeInTheDocument();
  });

  it("should display value of search passed as prop", async () => {
    const { getByRole } = render(Searchbar, {
      props: { search: "foo" },
    });

    const input = getByRole("textbox");
    expect(input.value).toBe("foo");
  });
});
