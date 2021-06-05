<script>
  import Pokemon from "../common/Pokemon.svelte";
  import { favorites } from "../../lib/store";
</script>

<ul>
  {#each $favorites as pokemon}
    <li>
      <Pokemon {pokemon} />
    </li>
  {/each}
</ul>
