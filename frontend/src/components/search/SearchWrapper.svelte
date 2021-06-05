<script>
  import ErrorMessageAlert from "../common/ErrorMessageAlert.svelte";
  import Pokemon from "../common/Pokemon.svelte";
  import Searchbar from "./Searchbar.svelte";
  import { getPokemonDescription } from "../../services/pokemonServices";

  let search = "";

  let pokemon;
  let error;

  $: {
    error = "";
    search = search;
  }

  const handleSearchPokemon = async () => {
    try {
      pokemon = await getPokemonDescription(search);
      search = "";
    } catch (ex) {
      error = ex.message.error || "Whoops, looks like something went wrong.";
      pokemon = null;
    }
  };
</script>

<div class="container">
  <Searchbar bind:search on:searchPokemon={handleSearchPokemon} />
  <ErrorMessageAlert {error} />
  {#if pokemon}
    <Pokemon {pokemon} />
  {/if}
</div>
