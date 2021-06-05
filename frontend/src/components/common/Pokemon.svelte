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
  <img
    src={`assets/favorite${isFavourite ? "" : "_border"}.svg`}
    alt="favourite-icon"
    on:click={handleFavouriteClick} />
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
  img {
    cursor: pointer;
    padding-left: 1rem;
    width: 2rem;
  }
</style>
