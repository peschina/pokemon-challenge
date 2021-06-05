<script>
  import { onMount } from "svelte";
  import NavLinks from "./NavLinks.svelte";

  let pathname;

  history.pushState = ((f) =>
    function pushState() {
      let ret = f.apply(this, arguments);
      window.dispatchEvent(new Event("pushstate"));
      window.dispatchEvent(new Event("locationchange"));
      return ret;
    })(history.pushState);

  history.replaceState = ((f) =>
    function replaceState() {
      let ret = f.apply(this, arguments);
      window.dispatchEvent(new Event("replacestate"));
      window.dispatchEvent(new Event("locationchange"));
      return ret;
    })(history.replaceState);

  window.addEventListener("popstate", () =>
    window.dispatchEvent(new Event("locationchange"))
  );

  window.addEventListener("locationchange", () => {
    window.scrollTo(0, 0);
    pathname = window.location.pathname;
  });

  onMount(() => {
    window.scrollTo(0, 0);
    pathname = window.location.pathname;
  });
</script>

<nav>
  <span>Pokemon Searcher</span>
  <NavLinks {pathname} />
</nav>

<style>
  nav {
    align-items: center;
    background-color: rgba(6, 0, 19, 0.05);
    display: flex;
    justify-content: space-between;
    padding: 0.8rem 3rem;
  }
  span {
    color: var(--tertiary);
    font-size: 1.7rem;
    font-style: italic;
    font-weight: 600;
    padding-left: 1.5rem;
  }
</style>
