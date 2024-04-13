<script>
  import PageContainer from "./PageContainer.svelte";
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
    <h1>Hi, my name is Ben</h1>

    <p>
      Are you here to <a href="/software">hire me</a> to write software, see my
      <a href="/collage">hypertext collage</a>, read my old
      <a href="/poems">poems</a>, or learn why I use
      <a href="/shifting-edges">the name “shifting edges”</a>?
    </p>

    <p>
      Or maybe you just want to follow me on <a
        rel="me"
        href="https://hachyderm.io/@shiftingedges">Mastodon</a
      >, <a href="https://medium.com/@shiftingedges">Medium</a>,
      <a href="https://www.instagram.com/shiftingedges/">Instagram</a>, or
      <a href="https://www.linkedin.com/in/ben-judson/">LinkedIn</a>.
    </p>
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

  @media only screen and (max-width: 768px) {
    h1 {
      font-size: 18px;
      line-height: 24px;
    }
  }
</style>
