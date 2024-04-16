<script lang="ts">
  import Nav from "./Nav.svelte";

  export let currentPage: string;
  export let pages: string[] = [];

  $: currentIndex = pages.findIndex((page) => page === currentPage);
  $: visiblePages = pages.slice(
    0,
    currentIndex > -1 ? currentIndex + 1 : pages.length - 1
  );
</script>

<Nav {visiblePages} {currentPage} />
