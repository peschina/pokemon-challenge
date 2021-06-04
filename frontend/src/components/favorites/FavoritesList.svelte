<script>
  import Result from "../search/Result.svelte";
  import { favorites } from "../../lib/store";
</script>

<ul>
  {#each $favorites as item}
    <li>
      <Result result={item} />
    </li>
  {/each}
</ul>
