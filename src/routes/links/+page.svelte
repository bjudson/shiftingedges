<script>
  import PageContainer from "../PageContainer.svelte";
</script>

<svelte:head>
  <title>My favorite links</title>
  <meta property="og:title" content="My favorite links" />
  <link rel="icon" type="image/png" href="/favicon.png?v=1" />
</svelte:head>

<PageContainer>
  <section>
    <h1>My favorite links</h1>

    <p>Some things that make the web great (a work in progress).</p>

    <ul>
      <li>
        <a href="https://how.complexsystems.fail/">How complex systems fail</a>:
        Being a Short Treatise on the Nature of Failure; How Failure is
        Evaluated; How Failure is Attributed to Proximate Cause; and the
        Resulting New Understanding of Patient Safety
      </li>

      <li>
        <a href="http://laputan.org/mud/">Big ball of mud</a>: This paper
        examines this most frequently deployed of software architectures: the
        BIG BALL OF MUD. A BIG BALL OF MUD is a casually, even haphazardly,
        structured system. Its organization, if one can call it that, is
        dictated more by expediency than design. Yet, its enduring popularity
        cannot merely be indicative of a general disregard for architecture.
      </li>

      <li>
        <a href="https://melconway.com/research/committees.html"
          >How do committees invent?</a
        >: The basic thesis of this article is that organizations which design
        systems (in the broad sense used here) are constrained to produce
        designs which are copies of the communication structures of these
        organizations.
      </li>

      <li>
        <a href="https://ubu.com/">UbuWeb</a>: Founded in 1996, UbuWeb is a
        pirate shadow library consisting of hundreds of thousands of freely
        downloadable avant-garde artifacts. By the letter of the law, the site
        is questionable; we openly violate copyright norms and almost never ask
        for permission.
      </li>

      <li>
        <a href="https://youtu.be/mVVNJKv9esE">On the Spectrum of Abstraction</a
        >: This talk goes over the tools we've come to recognize, from Angular,
        Ember and Grunt, all the way go Gulp, Webpack, React and beyond, and
        captures all these in a unifying mental framework for reasoning in terms
        of abstraction levels, in an attempt to make sense of what is and might
        be happening.
      </li>
    </ul>
    <p>— <a href="/">Ben Judson</a></p>
  </section>
</PageContainer>

<style>
  section {
    max-width: 600px;
  }

  h1 {
    font-size: 24px;
    line-height: 36px;
    margin: 0 0 1.5rem 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    margin-bottom: 1rem;
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
