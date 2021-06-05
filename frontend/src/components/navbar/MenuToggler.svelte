<script>
  export let showMobileMenu;
</script>

<span
  class="material-icons toggler"
  on:click={() => (showMobileMenu = !showMobileMenu)}>menu</span>

<style>
  .toggler {
    font-size: 2rem;
    color: var(--secondary);
  }

  @media (min-width: 576px) {
    .toggler {
      display: none;
    }
  }
</style>
