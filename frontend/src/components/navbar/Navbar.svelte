<script>
  import { onMount } from "svelte";

  import NavContent from "./NavContent.svelte";
  import { historyEventsDispatcher } from "../../lib/helpers";

  let pathname;

  // dispatch locationchange event on all history changes
  historyEventsDispatcher();

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
  <NavContent {pathname} />
</nav>

<style>
  nav {
    align-items: start;
    background-color: rgba(6, 0, 19, 0.05);
    display: flex;
    flex-direction: column;
    padding: 1rem;
  }

  @media (min-width: 576px) {
    nav {
      align-items: center;
      flex-direction: row;
      justify-content: space-between;
      padding: 0.8rem 1rem;
    }
  }
  @media (min-width: 768px) {
    nav {
      padding: 0.8rem 3rem;
    }
  }
</style>
