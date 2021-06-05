<script>
  export let showMobileMenu;
</script>

<img
  class="toggler"
  src="assets/menu.svg"
  alt="menu-toggler"
  on:click={() => (showMobileMenu = !showMobileMenu)} />

<style>
  .toggler {
    width: 2rem;
  }

  @media (min-width: 576px) {
    .toggler {
      display: none;
    }
  }
</style>
