<script>
  import MenuToggler from "./MenuToggler.svelte";
  import NavLinks from "./NavLinks.svelte";

  export let pathname;

  let showMobileMenu = false;
</script>

<div class="title-wrapper">
  <MenuToggler bind:showMobileMenu />
  <span class="title">Pokemon Searcher</span>
</div>
{#if showMobileMenu}
  <div class="mobile-menu">
    <NavLinks {pathname} />
  </div>
{/if}
<div class="links-container">
  <NavLinks {pathname} />
</div>

<style>
  .title-wrapper {
    display: flex;
    align-items: center;
  }
  .title {
    color: var(--tertiary);
    font-size: 1.7rem;
    font-weight: 600;
    opacity: .8;
    padding-left: 1.5rem;
  }
  .links-container {
    display: none;
  }

  @media (min-width: 576px) {
    .links-container {
      display: flex;
    }
    .mobile-menu {
      display: none;
    }
  }
</style>
