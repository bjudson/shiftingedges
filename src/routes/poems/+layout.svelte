<script>
  import { linksClicked } from "./stores";
</script>

<svelte:head>
  <title>waves without sea: poems</title>
  <meta property="og:title" content="waves without sea" />
  <meta property="og:description" content="a collection of hypertext poems" />
  <link rel="icon" type="image/png" href="/favicon.png?v=1" />
</svelte:head>

<div class="poem-container">
  <slot />

  <section class="footer">
    <header>
      <h1>waves without sea</h1>
    </header>

    {#if $linksClicked.length > 0}
      <div class="footsteps">
        <h2>footsteps</h2>
        {#each $linksClicked as { href, text }, i}
          <a {href}>{text || "missing text"}</a><br />
        {/each}
      </div>
    {/if}

    <p class="author">
      by <a href="/">Ben Judson</a>
    </p>
  </section>
</div>

<style>
  @font-face {
    font-family: "Alegreya";
    src: url("/Alegreya-Regular.otf");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "Alegreya";
    src: url("/Alegreya-Bold.otf");
    font-weight: bold;
    font-style: normal;
  }

  .poem-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    @media (max-width: 768px) {
      padding: 0;
    }
  }

  section.footer {
    font-family: "Alegreya", serif;
    width: 100%;
    max-width: 700px;
  }

  header {
    font-size: 1.25rem;
    color: rgb(177, 177, 177);
    padding: 0 3rem;
    margin: 2rem 0;
    @media (max-width: 768px) {
      padding: 0 2rem;
    }
  }

  div.footsteps {
    margin-top: 2rem;
    background: #dcdfe4;

    padding: 2rem 3rem;

    @media (prefers-color-scheme: dark) {
      background: #353c3e;
    }

    @media (max-width: 768px) {
      padding: 2rem;
    }
  }

  .author {
    color: rgb(177, 177, 177);
    padding: 0 3rem;
    @media (max-width: 768px) {
      padding: 0 2rem;
    }
  }

  h2 {
    font-size: 1.25rem;
    margin-top: 0;
    margin-bottom: 1rem;
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: all 1s ease;

    &:focus,
    &:hover {
      outline: none;
      background-color: rgb(180, 180, 221);
    }

    @media (prefers-color-scheme: dark) {
      &:focus,
      &:hover {
        outline: none;
        background-color: rgb(99, 116, 121);
      }
    }
  }
</style>
