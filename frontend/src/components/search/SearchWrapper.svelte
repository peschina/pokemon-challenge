<script>
  import Result from "./Result.svelte";
  import Searchbar from "./Searchbar.svelte";
  import { getPokemonDescription } from "../../services/pokemonServices";

  let search = "";

  let result;

  const handleSearchPokemon = async () => {
    try {
      result = await getPokemonDescription(search);
      search = "";
    } catch (error) {
      result = null;
      console.log("err", error);
      // display alert
    }
  };
</script>

<div class="search-layout">
  <Searchbar bind:search on:searchPokemon={handleSearchPokemon} />
  <Result {result} />
</div>

<style>
  .search-layout {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 calc(100vw - 95%) 0 calc(100vw - 95%);
    width: 100%;
  }
  @media (min-width: 768px) {
    .search-layout {
      padding: 0 calc(100vw - 90%) 0 calc(100vw - 90%);
    }
  }
  @media (min-width: 1200px) {
    .search-layout {
      padding: 0 calc(100vw - 75%) 0 calc(100vw - 75%);
    }
  }
</style>
