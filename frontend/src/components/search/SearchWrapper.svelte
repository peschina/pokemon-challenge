<script>
  import Result from "./Result.svelte";
  import Searchbar from "./Searchbar.svelte";

  let result = {
    name: "Ditto",
    description:
      "It can freely recombine its own cellular structure to\ntransform into other life-forms.",
  };
</script>

<div class="search-layout">
  <Searchbar />
  <Result {result} />
</div>

<style>
  .search-layout {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 calc(100vw - 95%) 0 calc(100vw - 95%);
    width: 100%;
  }
  @media (min-width: 768px) {
    .search-layout {
      padding: 0 calc(100vw - 90%) 0 calc(100vw - 90%);
    }
  }
  @media (min-width: 1200px) {
    .search-layout {
      padding: 0 calc(100vw - 75%) 0 calc(100vw - 75%);
    }
  }
</style>
