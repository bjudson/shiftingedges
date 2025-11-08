<script>
  import PageContainer from "../PageContainer.svelte";
</script>

<svelte:head>
  <title>Things not to lose track of</title>
  <link rel="icon" type="image/png" href="/favicon.png?v=1" />
</svelte:head>

<PageContainer>
  <slot />
</PageContainer>

<style>
  :global(.archive-content) {
    max-width: 800px;
  }

  :global(.archive-content a) {
    color: var(--link-color);
  }
</style>
