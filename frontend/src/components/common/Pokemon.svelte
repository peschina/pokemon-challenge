<script>
  import { fade } from "svelte/transition";
  import { favorites } from "../../lib/store";

  export let pokemon;

  $: isFavorite = $favorites.find((i) => i.name == pokemon?.name);

  const handleFavoriteClick = () =>
    ($favorites = isFavorite
      ? $favorites.filter((i) => i.name != pokemon.name)
      : [...$favorites, pokemon]);
</script>

<div class="pokemon-wrapper" in:fade={{ duration: 250, delay: 250 }}>
  <div class="text-wrapper">
    <span class="name">{pokemon.name}:</span>
    <span class="description">{pokemon.description}</span>
  </div>
  <span class="material-icons favorite-icon" on:click={handleFavoriteClick}
    >{`favorite${isFavorite ? "" : "_border"}`}</span>
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
  .favorite-icon {
    color: var(--tertiary);
    font-size: 2rem;
    padding-left: 1rem;
  }
</style>
