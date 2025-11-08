<section class="archive-content">
  <slot />
</section>

<style>
  :global(.archive-content h1) {
    font-size: 24px;
    line-height: 36px;
    margin: 0 0 24px 0;
  }

  :global(.archive-content .poem) {
    margin-bottom: 2rem;
  }

  :global(.archive-content .poem p) {
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }

  :global(.archive-content .attribution) {
    margin-top: 2rem;
    font-style: italic;
  }

  :global(.archive-content .attribution a) {
    text-decoration: underline;
  }

  :global(.archive-content .back-link) {
    margin-top: 3rem;
    padding-top: 2rem;
    border-top: 1px solid #ccc;
  }

  @media only screen and (max-width: 768px) {
    :global(.archive-content h1) {
      font-size: 18px;
      line-height: 24px;
    }
  }
</style>
