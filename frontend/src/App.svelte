<script>
  import { Router, Route } from "svelte-routing";
  import Home from "./components/Home.svelte";
  import FavoritesWrapper from "./components/favorites/FavoritesWrapper.svelte";
  import Navbar from "./components/navbar/Navbar.svelte";
  import Redirect from "./components/common/Redirect.svelte";

  let url;
</script>

<Navbar />
<main role="main">
  <Router {url}>
    <Route path="/search" component={Home} />
    <Route path="/favorites" component={FavoritesWrapper} />
    <Route component={Redirect} />
  </Router>
</main>

<style>
  main {
    min-height: 100vh;
  }
</style>
