<script>
  import PageContainer from "../PageContainer.svelte";
</script>

<svelte:head>
  <title>Notes on shifting edges</title>
  <meta property="og:title" content="Notes on shifting edges" />
  <link rel="icon" type="image/png" href="/favicon.png?v=1" />
</svelte:head>

<PageContainer>
  <section>
    <h1>Notes on shifting edges</h1>

    <p>
      When I was younger I wrote poetry. I came into a practice of building
      poems that echoed each other, borrowing lines and phrases from one to the
      next.
    </p>
    <p>
      Each poem was part of a network of imagery, the images almost like modules
      that could find new meaning in a new context. One of these lines was
      “shifting edges and shattered light” – originally referring to the waves
      of the sea, which have a brief individual identity before falling back
      into the whole, reflecting flashes of light in the process.
    </p>
    <p>
      I imagined this kind of poem reflected the structure of thought; ideas
      connecting, disconnecting, forming larger concepts and then being
      forgotten. This churn happens constantly within a single mind, but also
      through communities and cultures, indeed helps bind and fracture and
      dissolve communities over time, like rivers cutting through rock.
    </p>
    <p>
      Though there were years of overlap, as I became more serious about writing
      software, my poetry practice receded and eventually vanished.
    </p>
    <p>
      It wasn’t until I was deep into a software practice that I started to
      connect this image to writing programs. When we build software systems an
      analogous process is at play.
    </p>
    <p>
      We borrow some code from this module for that one, enlist a class that was
      intended for one purpose into a different task. The behavior shifts
      slightly. Two functions become one. One function splits into several, as
      our mental models shift and we seek congruence between our image of the
      system and the written structure of the system.
    </p>
    <p>
      The whole project is about defining boundaries so that they can naturally
      shift in helpful ways. We migrate to new structures with more or less
      struggle depending on our luck and our ability to anticipate the dynamic
      needs of the community that relies on this code.
    </p>
    <p>
      The boundaries of the community, of course, shift as well. The engineering
      team grows, and splits into several teams. The community of users
      discovers different use cases, “internal” tools are built, APIs allow
      other software systems to bring their own communities into contact with
      this system.
    </p>
    <p>
      Each shift in the community requires changes to the software, so that the
      mental models of the practitioners remain congruent with the tools they
      are using. The tools we build are just language, with its precision, its
      ambiguity, its shifting edges.
    </p>
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
    margin: 0 0 24px 0;
  }

  p {
    margin: 0 0 16px 0;
  }

  a {
    color: var(--link-color);
  }

  @media only screen and (max-width: 768px) {
    h1 {
      font-size: 16px;
      line-height: 24px;
    }
  }
</style>
