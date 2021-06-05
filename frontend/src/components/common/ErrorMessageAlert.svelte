<script>
  import { fly } from "svelte/transition";

  export let error;
</script>

{#if error}
  <span in:fly={{ x: 500, duration: 1500 }}>{error}</span>
{/if}

<style>
  span {
    color: var(--tertiary);
    font-size: 0.9rem;
    padding: 1rem 0;
  }
</style>
