<script>
  import { navigate } from "svelte-routing";

  export let pathname;

  const links = ["search", "favorites"];

  const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
</script>

<ul>
  {#each links as link}
    <li class="link" class:selected={pathname == `/${link}`}>
      <span on:click={() => navigate(`/${link}`)}>{capitalize(link)}</span>
    </li>
  {/each}
</ul>

<style>
  ul {
    align-items: center;
    display: flex;
  }
  .link {
    cursor: pointer;
    font-weight: 500;
    opacity: 0.5;
    padding: 0 1.5rem;
  }
  .selected {
    font-weight: 600;
    opacity: 0.7;
  }
</style>
