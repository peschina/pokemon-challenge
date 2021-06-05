<script>
  import { onMount } from "svelte";
  import { navigate } from "svelte-routing";

  export let to = "/search";

  onMount(() => navigate(to));
</script>
