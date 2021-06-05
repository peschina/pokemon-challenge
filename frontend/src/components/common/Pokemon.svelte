<script>
  import { fade } from "svelte/transition";
  import { favourites } from "../../lib/store";

  export let pokemon;

  $: isFavourite = $favourites.find((i) => i.name == pokemon?.name);

  const handleFavouriteClick = () =>
    ($favourites = isFavourite
      ? $favourites.filter((i) => i.name != pokemon.name)
      : [...$favourites, pokemon]);
</script>

<div class="pokemon-wrapper" in:fade>
  <div class="text-wrapper">
    <span class="name">{pokemon.name}:</span>
    <span class="description">{pokemon.description}</span>
  </div>
  <span class="material-icons favourite-icon" on:click={handleFavouriteClick}
    >{`favorite${isFavourite ? "" : "_border"}`}</span>
</div>

<style>
  .pokemon-wrapper {
    align-items: center;
    display: flex;
    padding-top: 2rem;
  }
  .text-wrapper {
    display: flex;
    flex-direction: column;
  }
  .name {
    font-size: 1.3rem;
    font-weight: 600;
    opacity: 0.8;
    padding-bottom: 0.8rem;
    text-transform: capitalize;
  }
  .description {
    font-size: 1.1rem;
  }
  .favourite-icon {
    color: var(--tertiary);
    cursor: pointer;
    font-size: 2rem;
    padding-left: 1rem;
  }
</style>
