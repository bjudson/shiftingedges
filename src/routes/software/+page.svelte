<script>
  import PageContainer from "../PageContainer.svelte";
</script>

<svelte:head>
  <title>Ben Judson # software engineer</title>
  <meta property="og:title" content="Ben Judson # software engineer" />
  <meta
    property="og:description"
    content="Hi, I’m a software engineer who cares about craft and collaboration. I build software that
	supports healthy engagement with creative culture."
  />
  <link rel="icon" type="image/png" href="favicon.png?v=1" />
</svelte:head>

<PageContainer>
  <section>
    <h1>&lbrace;"shifting_edges": "ben judson"&rbrace;</h1>

    <div id="work">
      <p>
        I’m a software engineer who cares about craft and collaboration. I build
        software that supports healthy engagement with creative culture.
      </p>
      <p>
        For the past few years, I’ve been working to create excitement about
        literature with <a href="https://literati.com/">Literati</a>, and am
        currently leading development of an internal service that informs
        intelligent curation of books.
      </p>
      <p>
        Before joining Literati, I built <a href="https://www.lingoapp.com/"
          >Lingo’s web app</a
        >
        for
        <a href="https://thenounproject.com/">Noun Project</a>. Lingo is a tool
        used by design teams at LinkedIn, SalesForce, Workday, Headspace and
        many others to manage and distribute their design systems. Before we
        launched Lingo, I worked on Noun Project’s
        <a href="https://thenounproject.com/search/?q=origami"
          >international, crowdsourced icon marketplace</a
        >, which (at the time) was used by more than a million designers every
        month.
      </p>
      <p>
        I cut my teeth as an independent contractor building content management
        systems for artist portfolios in San Antonio. This led to contracts as
        the sole engineer building the primary web sites for Blue Star
        Contemporary Art Museum, Trinity University Press, and David Shelton
        Gallery. A couple of these sites were in production for over a decade.
      </p>
    </div>
  </section>
</PageContainer>

<style>
  section {
    max-width: 600px;
  }

  h1 {
    font-family: "Roboto Mono", sans-serif;
    font-size: 24px;
    line-height: 36px;
    margin: 0 0 24px 0;
  }

  p {
    margin: 0 0 16px 0;
  }

  a {
    color: #fe5f55;
  }

  @media only screen and (max-width: 768px) {
    h1 {
      font-size: 16px;
      line-height: 24px;
    }
  }
</style>
