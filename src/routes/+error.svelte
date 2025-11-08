<script>
  import { page } from "$app/stores";
  import PageContainer from "./PageContainer.svelte";
</script>

<svelte:head>
  <title>You still have to lose something</title>
</svelte:head>

<PageContainer>
  <section class="error-content">
    <p>
      And if you still find something, you have not lost everything. You still have to lose something.
    </p>

    {#if $page.status}
      <p class="error-code">Error {$page.status}</p>
    {/if}
  </section>
</PageContainer>

<style>
  .error-content {
    max-width: 600px;
  }

  h1 {
    font-size: 24px;
    line-height: 36px;
    margin: 0 0 24px 0;
  }

  p {
    margin-bottom: 1rem;
  }

  a {
    color: var(--link-color);
  }

  .error-code {
    margin-top: 2rem;
    color: #999;
    font-size: 0.9rem;
  }

  @media only screen and (max-width: 768px) {
    h1 {
      font-size: 18px;
      line-height: 24px;
    }
  }
</style>
