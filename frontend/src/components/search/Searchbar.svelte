<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let search = "";

  const submitSearch = (e) => {
    if (search == "") return;
    if (e.key == "Enter") dispatch("searchPokemon");
  };
</script>

<div class="input-wrapper">
  <img src="assets/search.svg" alt="search-icon" />
  <input
    placeholder="Search a Pokemon by name..."
    type="text"
    on:keydown={submitSearch}
    bind:value={search} />
</div>

<style>
  .input-wrapper {
    border-radius: 20px;
    border: 1px solid var(--secondary);
    box-shadow: 0px 1px 6px #00000029;
    display: flex;
    padding: 8px 16px;
    width: -webkit-fill-available;
  }
  @media (min-width: 768px) {
    .input-wrapper {
      width: 60%;
    }
  }
  @media (min-width: 1200px) {
    .input-wrapper {
      width: 50%;
    }
  }
  img {
    padding-right: 0.5rem;
  }
  input {
    background-color: var(--background);
    border: none;
    width: 100%;
  }
  input:focus {
    outline: none;
  }
</style>
