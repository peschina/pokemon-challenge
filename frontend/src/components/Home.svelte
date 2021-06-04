<script>
  import FavoritesWrapper from "./favorites/FavoritesWrapper.svelte";
  import SearchWrapper from "./search/SearchWrapper.svelte";
</script>

<div>
  <span>POKEMON SEARCHER</span>
</div>
<div class="wrapper">
  <SearchWrapper />
  <FavoritesWrapper />
</div>

<style>
  .wrapper {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 3rem;
  }
  div {
    padding: 1rem;
  }
  span {
    font-size: 2rem;
    font-weight: 600;
    font-style: italic;
    color: #da0825;
  }
</style>
