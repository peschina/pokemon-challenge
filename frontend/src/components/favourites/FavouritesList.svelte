<script>
  import { fade } from "svelte/transition";
  import { navigate } from "svelte-routing";
  import Pokemon from "../common/Pokemon.svelte";
  import { favourites } from "../../lib/store";
</script>

<ul in:fade>
  {#each $favourites as pokemon}
    <li>
      <Pokemon {pokemon} />
    </li>
  {:else}
    <div>
      <span>
        Your favourites list is empty.
        <span class="link" on:click={() => navigate("/search")}>Search</span>
        a pokemon to add it to your favourites.</span>
    </div>
  {/each}
</ul>

<style>
  div {
    padding-top: 1.5rem;
    text-align: center;
  }
  .link {
    cursor: pointer;
    color: var(--tertiary);
  }
  span {
    line-height: 21px;
  }
</style>
