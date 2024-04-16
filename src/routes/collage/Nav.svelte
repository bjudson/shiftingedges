<script lang="ts">
  export let visiblePages: string[] = [];
  export let currentPage: string = "";
</script>

<nav>
  {#each visiblePages as page}
    {#if page === currentPage}
      <span>{page.replace(/-/g, " ")}</span>
    {:else}
      <a href="/collage/{page}">
        {page.replace(/-/g, " ")}
      </a>
    {/if}
  {/each}
</nav>

<style>
  nav {
    width: 100%;
    max-width: 600px;
  }

  nav a {
    display: inline-block;
    border: 1px dotted var(--fg-color);
    padding: 0.25rem 0.5rem;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
    text-decoration: none;
    white-space: nowrap;
    color: #fe5f55;
  }

  nav span {
    display: inline-block;
    padding: 0.25rem 0.5rem;
    margin-right: 0.5rem;
    color: #a5a5a5;
  }
</style>
