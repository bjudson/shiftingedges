<script>
  import { page } from "$app/stores";

  import BottomNav from "./BottomNav.svelte";
  import TopNav from "./TopNav.svelte";

  const pages = [
    "may-hide-another",
    "contain-life",
    "content-warning",
    "into-the-rubble",
    "concepts-of-time",
    "the-story-or-the-truth",
    "home-and-trap",
    "so-desparately-sought",
    "seabirds-cry",
    "uncertain-longing",
    "an-old-worn-ring",
    "power-of-fire",
    "cloud-dump",
    "scenes-of-learning",
    "peace-like-a-river",
    "levels-of-experience",
    "ring-formed-world",
    "contradictory-combinations",
    "systems-disintegrate",
    "nothing-much",
  ];

  $: currentPage = $page.url.pathname.split("/").pop() || "";
</script>

<svelte:head>
  <link rel="stylesheet" href="/collage.css" />
</svelte:head>

<main>
  {#if pages.includes(currentPage)}
    <TopNav {pages} {currentPage} />
  {/if}

  <slot />

  <BottomNav {pages} {currentPage} />
</main>

<style>
  main {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans",
      Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px;
  }
</style>
