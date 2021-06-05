<script>
  import { Router, Route } from "svelte-routing";
  import FavouritesWrapper from "./components/favourites/FavouritesWrapper.svelte";
  import Navbar from "./components/navbar/Navbar.svelte";
  import Redirect from "./components/common/Redirect.svelte";
  import SearchWrapper from "./components/search/SearchWrapper.svelte";

  let url;
</script>

<Navbar />
<main role="main">
  <Router {url}>
    <Route path="/search" component={SearchWrapper} />
    <Route path="/favourites" component={FavouritesWrapper} />
    <Route component={Redirect} />
  </Router>
</main>

<style>
  main {
    min-height: 100vh;
  }
</style>
