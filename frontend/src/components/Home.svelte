<script>
  import Result from "./Result.svelte";
  import Searchbar from "./Searchbar.svelte";
</script>

<div class="wrapper">
  <div class="search-layout container">
    <Searchbar />
    <Result />
  </div>
</div>

<style>
  .wrapper {
    display: flex;
    justify-content: center;
    padding-top: 5rem;
  }
  .search-layout {
    align-items: center;
    display: flex;
    justify-content: center;
    width: calc(100vw - 25%);
  }
  @media (min-width: 768px) {
    .search-layout {
      width: calc(100vw - 10%);
    }
  }
  @media (min-width: 1200px) {
    .search-layout {
      width: calc(100vw - 5%);
    }
  }
</style>
