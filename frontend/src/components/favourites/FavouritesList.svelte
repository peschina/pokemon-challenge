<script>
  import Pokemon from "../common/Pokemon.svelte";
  import { favourites } from "../../lib/store";
</script>

<ul>
  {#each $favourites as pokemon}
    <li>
      <Pokemon {pokemon} />
    </li>
  {/each}
</ul>
