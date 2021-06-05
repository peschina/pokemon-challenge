<script>
  import Pokemon from "../common/Pokemon.svelte";
  import Searchbar from "./Searchbar.svelte";
  import { getPokemonDescription } from "../../services/pokemonServices";

  let search = "";

  let pokemon;

  const handleSearchPokemon = async () => {
    try {
      pokemon = await getPokemonDescription(search);
      search = "";
    } catch (error) {
      pokemon = null;
      console.log("err", error);
      // display alert
    }
  };
</script>

<div class="container">
  <Searchbar bind:search on:searchPokemon={handleSearchPokemon} />
  {#if pokemon}
    <Pokemon {pokemon} />
  {/if}
</div>
