<script lang="ts">
  import Nav from "./Nav.svelte";

  export let currentPage: string;
  export let pages: string[] = [];

  $: visiblePages = pages.slice(
    pages.findIndex((page) => page === currentPage) + 1
  );
</script>

<Nav {visiblePages} />
