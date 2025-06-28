<script>
  import { page } from "$app/stores";
  import { posts } from "../data.js";
  import PageContainer from "../../PageContainer.svelte";

  $: currentSlug = $page.params.slug;
  $: currentPost = posts.find((post) => post.slug === currentSlug);
  $: currentIndex = posts.findIndex((post) => post.slug === currentSlug);
  $: previousPost = currentIndex > 0 ? posts[currentIndex - 1] : null;
  $: nextPost =
    currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;
</script>

<svelte:head>
  <title>{currentPost?.title || "Tree"} • Trees of Los Angeles</title>
  <meta
    name="description"
    content="A tree photographed on {currentPost?.title ||
      'a street'} in Los Angeles"
  />
</svelte:head>

{#if currentPost}
  <PageContainer>
    <main class="tree-detail">
      <nav class="tree-nav">
        <a href="/treesoflosangeles" class="back-link">trees of los angeles</a>
        <div class="nav-arrows">
          {#if previousPost}
            <a href="/treesoflosangeles/{previousPost.slug}" class="nav-arrow"
              >← Previous</a
            >
          {/if}
          {#if nextPost}
            <a href="/treesoflosangeles/{nextPost.slug}" class="nav-arrow"
              >Next →</a
            >
          {/if}
        </div>
      </nav>

      <div class="image-container">
        <img src={currentPost.imagePath} alt={currentPost.title} />
      </div>

      <div class="tree-info">
        <h1>{currentPost.title}</h1>
        <time>{currentPost.date}</time>
      </div>
    </main>
  </PageContainer>
{:else}
  <PageContainer>
    <main>
      <p>Tree not found.</p>
      <a href="/treesoflosangeles">trees of los angeles</a>
    </main>
  </PageContainer>
{/if}

<style>
  .tree-detail {
    max-width: 600px;
    margin: 0 auto;
  }

  .tree-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
  }

  .back-link {
    color: var(--link-color);
    text-decoration: none;
    font-weight: 500;
  }

  .back-link:hover {
    text-decoration: underline;
  }

  .nav-arrows {
    display: flex;
    gap: 20px;
  }

  .nav-arrow {
    color: var(--link-color);
    text-decoration: none;
    font-size: 14px;
  }

  .nav-arrow:hover {
    text-decoration: underline;
  }

  .image-container {
    margin-bottom: 3rem;
  }

  .image-container img {
    width: 100%;
    height: auto;
    display: block;
  }

  .tree-info h1 {
    font-size: 1rem;
    margin: 0 0 8px 0;
    color: var(--fg-color);
  }

  .tree-info time {
    color: var(--fg-color);
    opacity: 0.7;
    font-size: 14px;
  }

  /* Mobile responsiveness */
  @media (max-width: 600px) {
    .tree-nav {
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
    }

    .nav-arrows {
      justify-content: space-between;
      width: 100%;
    }
  }
</style>
