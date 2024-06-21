<script lang="ts">
  export let visiblePages: string[] = [];
  export let currentPage: string = "";
</script>

<nav>
  <ul>
    {#each visiblePages as page}
      {#if page === currentPage}
        <li><h1>{page.replace(/-/g, " ")}</h1></li>
      {:else}
        <li>
          <a href="/collage/{page}">
            {page.replace(/-/g, " ")}
          </a>
        </li>
      {/if}
    {/each}
  </ul>
</nav>

<style>
  nav {
    width: 100%;
    max-width: 600px;
  }

  nav ul {
    list-style-type: none;
    padding: 0;
  }

  nav ul li {
    display: inline-block;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
  }

  nav a {
    display: inline-block;
    border: 1px dotted var(--fg-color);
    padding: 0.25rem 0.5rem;
    text-decoration: none;
    white-space: nowrap;
    color: var(--link-color);
  }

  nav h1 {
    display: inline-block;
    font-size: 1rem;
    margin: 0;
    padding: 0.25rem 0.5rem;
    color: var(--fg-color);
  }
</style>
