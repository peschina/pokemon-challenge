<script>
  import { fade } from "svelte/transition";
  import { favorites } from "../../lib/store";

  export let result;

  $: isFavorite = $favorites.find(i => i.name == result?.name);

  const handleFavoriteClick = () =>
    ($favorites = isFavorite
      ? $favorites.filter((i) => i.name != result.name)
      : [...$favorites, result]);
</script>

{#if result}
  <div class="result-wrapper" in:fade={{ duration: 250, delay: 250 }}>
    <div class="text-wrapper">
      <span class="name">{result.name}:</span>
      <span class="description">{result.description}</span>
    </div>
    <span class="material-icons favorite-icon" on:click={handleFavoriteClick}
      >{`favorite${isFavorite ? "" : "_border"}`}</span>
  </div>
{/if}

<style>
  .result-wrapper {
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
