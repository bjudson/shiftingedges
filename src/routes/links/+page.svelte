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

    <h2>Art</h2>

    <ul>
      <li>
        <a href="https://citiesandmemory.com">Cities &amp; Memory</a>: Cities
        and Memory is one of the world’s largest sound projects, with more than
        1,800 artists foming a global community with the aim of remixing the
        world, one sound at a time.
      </li>

      <li>
        <a href="https://cari.institute/aesthetics">Index of Aesthetics</a>:
        CARI, or Consumer Aesthetics Research Institute, is an online community
        dedicated to developing a visual lexicon of consumer ephemera from the
        1970s until now.
      </li>

      <li>
        <a href="https://publicdomainreview.org/">Public Domain Review</a>:
        Dedicated to the exploration of curious and compelling works from the
        history of art, literature, and ideas – focusing on works now fallen
        into the public domain, the vast commons of out-of-copyright material
        that everyone is free to enjoy, share, and build upon without
        restrictions.
      </li>

      <li>
        <a href="https://anthology.rhizome.org/">Net Art Anthology:</a> Net Art Anthology
        aims to address the shortage of historical perspectives on a field in which
        even the most prominent artworks are often inaccessible.
      </li>

      <li>
        <a href="https://ubu.com/">UbuWeb</a>: Founded in 1996, UbuWeb is a
        pirate shadow library consisting of hundreds of thousands of freely
        downloadable avant-garde artifacts. By the letter of the law, the site
        is questionable; we openly violate copyright norms and almost never ask
        for permission.
      </li>
    </ul>

    <h2>Software</h2>

    <ul>
      <li>
        <a href="https://maggieappleton.com/garden-history"
          >A Brief History & Ethos of the Digital Garden</a
        >: A garden is a collection of evolving ideas that aren't strictly
        organised by their publication date. They're inherently exploratory –
        notes are linked through contextual associations. They aren't refined or
        complete - notes are published as half-finished thoughts that will grow
        and evolve over time. They're less rigid, less performative, and less
        perfect than the personal websites we're used to seeing.
      </li>

      <li>
        <a href="https://www.cs.unc.edu/techreports/86-020.pdf"
          >No Silver Bullet</a
        >: Not only are there no silver bullets now in view, the very nature of
        software makes it unlikely that there will be any - no inventions that
        will do for software productivity, reliability, and simplicity what
        electronics, transistors, large-scale integration did for computer
        hardware. We cannot expect ever to see two-fold gains every two years.
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
        <a href="https://martinfowler.com/architecture/"
          >Software Architecture Guide</a
        >: Like many in the software world, I’ve long been wary of the term
        “architecture” as it often suggests a separation from programming and an
        unhealthy dose of pomposity. But I resolve my concern by emphasizing
        that good architecture is something that supports its own evolution, and
        is deeply intertwined with programming.
      </li>

      <h2>Talks</h2>

      <li>
        <a href="https://youtu.be/8LbePBiOvZ4"
          >A Few Observations on the Marvelous Resilience of Bone & Resilience
          Engineering</a
        >: The possibility of deliberately exploiting or enhancing resilience is
        tantalizing. But what exactly is resilience engineering? There are at
        least two possible forms: first, engineering that exploits what we know
        about resilient systems and, second, engineering that shapes resilience
        itself. Bone is useful example of resilience and both types of
        resilience engineering.
      </li>

      <li>
        <a href="https://youtu.be/mVVNJKv9esE">On the Spectrum of Abstraction</a
        >: This talk goes over the tools we've come to recognize, from Angular,
        Ember and Grunt, all the way go Gulp, Webpack, React and beyond, and
        captures all these in a unifying mental framework for reasoning in terms
        of abstraction levels, in an attempt to make sense of what is and might
        be happening.
      </li>

      <li>
        <a href="https://youtu.be/vrKTSg5gWN4"
          >Promoting Civil Discourse with Software</a
        >: Jeff Atwood compares the design of Stack Overflow to his new project,
        Discourse, and discusses how designing to promote useful answers is
        different from designing to promote civil discourse and empathy.
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
    font-size: 1.5rem;
    line-height: 2.25rem;
    margin: 0 0 1.5rem 0;
  }

  h2 {
    font-size: 1.25rem;
    line-height: 1.75rem;
    margin: 1.5rem 0 1rem 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    margin-bottom: 1rem;
  }

  a {
    color: var(--link-color);
  }

  @media only screen and (max-width: 768px) {
    h1 {
      font-size: 1rem;
      line-height: 1.5rem;
    }

    h2 {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
</style>
