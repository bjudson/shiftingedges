<script>
  import PageContainer from "./PageContainer.svelte";

  import MastodonLogo from "./MastodonLogo.svelte";
  import MediumLogo from "./MediumLogo.svelte";
  import InstagramLogo from "./InstagramLogo.svelte";
  import LinkedInLogo from "./LinkedInLogo.svelte";
</script>

<svelte:head>
  <title>Ben Judson</title>
  <meta property="og:title" content="Ben Judson" />
  <meta
    property="og:description"
    content="Hi, I’m a software engineer who cares about craft and collaboration. I build software that
      supports healthy engagement with creative culture."
  />
  <link rel="icon" type="image/png" href="favicon.png?v=1" />
</svelte:head>

<PageContainer>
  <section>
    <h1>Hi, my name is Ben Judson</h1>

    <p>On this site you can</p>

    <ul>
      <li>see my <a href="/collage">hypertext collage</a></li>
      <li>
        explore
        <a href="/links">my favorite links</a>
      </li>
      <li>
        learn about <a href="/software">my experience writing software</a>
      </li>
      <li>
        learn why I use
        <a href="/shifting-edges">the name “shifting edges”</a>
      </li>
    </ul>

    <div class="social-logos">
      <a rel="me" href="https://hachyderm.io/@shiftingedges"
        ><MastodonLogo size="1.5rem" /></a
      >
      <a href="https://medium.com/@shiftingedges"
        ><MediumLogo size="1.5rem" /></a
      >
      <a href="https://www.instagram.com/shiftingedges/"
        ><InstagramLogo size="1.5rem" /></a
      >
      <a href="https://www.linkedin.com/in/ben-judson/"
        ><LinkedInLogo size="1.5rem" /></a
      >
    </div>
  </section></PageContainer
>

<style>
  section {
    max-width: 600px;
  }

  h1 {
    font-size: 24px;
    line-height: 36px;
    margin: 0 0 24px 0;
  }

  a {
    color: #fe5f55;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  ul li:before {
    content: "✦";
    margin-right: 0.5rem;
  }

  .social-logos {
    display: flex;
    align-items: center;
    margin-top: 2rem;
    gap: 1rem;
  }

  .social-logos a {
    color: var(--fg-color);
  }

  @media only screen and (max-width: 768px) {
    h1 {
      font-size: 18px;
      line-height: 24px;
    }
  }
</style>
