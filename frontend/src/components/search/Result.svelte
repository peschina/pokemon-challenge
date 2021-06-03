<script>
  import { fade } from "svelte/transition";

  export let result;

  let favorite = false;

  const handleFavoriteClick = () => (favorite = !favorite);
</script>

{#if result}
  <div class="result-wrapper" in:fade={{ duration: 250, delay: 250 }}>
    <div class="text-wrapper">
      <span class="name">{result.name}:</span>
      <span class="description">{result.description}</span>
    </div>
    <span class="material-icons favorite-icon" on:click={handleFavoriteClick}
      >{`favorite${favorite ? "" : "_border"}`}</span>
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
    color: #da0825;
    font-size: 2rem;
    padding-left: 1rem;
  }
</style>
