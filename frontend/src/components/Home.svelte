<script>
  import SearchWrapper from "./search/SearchWrapper.svelte";
</script>

<div>
  <span>POKEMON SEARCHER</span>
</div>
<div class="wrapper">
  <SearchWrapper />
</div>

<style>
  .wrapper {
    display: flex;
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
