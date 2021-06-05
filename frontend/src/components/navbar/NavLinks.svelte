<script>
  import { navigate } from "svelte-routing";

  export let pathname;

  const links = ["search", "favourites"];

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
    align-items: start;
    display: flex;
    flex-direction: column;
    padding-top: 0.5rem;
  }
  .link {
    cursor: pointer;
    font-weight: 500;
    opacity: 0.5;
    padding: 0.5rem 0;
  }
  .selected {
    font-weight: 600;
    opacity: 0.7;
  }
  @media (min-width: 576px) {
    ul {
      align-items: center;
      flex-direction: row;
      padding: 0;
    }
    .link {
      padding: 0 1.5rem;
    }
  }
</style>
