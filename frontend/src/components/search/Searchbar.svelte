<script>
  let search = "";

  const submitSearch = (e) => {
    if (search == "") return;
    if (e.key == "Enter") console.log("click", search, e.detail);
  };
</script>

<div class="input-wrapper">
  <span class="material-icons">search</span>
  <input
    placeholder="Search a Pokemon by name..."
    type="text"
    on:keydown={submitSearch}
    bind:value={search} />
</div>

<style>
  .input-wrapper {
    border-radius: 20px;
    border: 1px solid var(--secondary);
    box-shadow: 0px 1px 6px #00000029;
    display: flex;
    padding: 8px 16px;
    width: -webkit-fill-available;
  }
  @media (min-width: 768px) {
    .input-wrapper {
      width: 60%;
    }
  }
  @media (min-width: 1200px) {
    .input-wrapper {
      width: 50%;
    }
  }
  span {
    color: var(--secondary);
    padding-right: 8px;
  }
  input {
    background-color: var(--background);
    border: none;
    width: 100%;
  }
  input:focus {
    outline: none;
  }
</style>
