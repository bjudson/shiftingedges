<svelte:head>
  <title>Things not to lose track of</title>
</svelte:head>

<section class="archive-content">
  <h1>Things not to lose track of</h1>

  <ul>
    <li><a href="/archive/the-visitor">The Visitor</a></li>
    <li><a href="/archive/kind-valentine">Kind Valentine</a></li>
  </ul>
</section>

<style>
  h1 {
    font-size: 24px;
    line-height: 36px;
    margin: 0 0 24px 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  ul li:before {
    content: "✦";
    margin-right: 0.5rem;
  }

  @media only screen and (max-width: 768px) {
    h1 {
      font-size: 18px;
      line-height: 24px;
    }
  }
</style>
