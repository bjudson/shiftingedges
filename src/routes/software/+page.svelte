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
    <h1>Ben Judson # principal software engineer</h1>

    <div id="work">
      <p>
        I’m a software engineer who cares about craft and collaboration. I build
        software that supports healthy engagement with creative culture.
      </p>
      <p>
        I have spent most of <a href="https://www.linkedin.com/in/ben-judson/"
          >my career</a
        > building web applications using Django and React. I’m comfortable leading
        large projects, designing systems, mentoring, communicating with stakeholders,
        as well as writing Python, JavaScript/TypeScript, raw SQL, CSS, Bash scripts,
        combing through observability tools and logs, and many other random skills
        that keep a product humming along.
      </p>
      <h2>Projects</h2>
      <p>
        Summaries of some key projects that demonstrate the range of my skill
        set:
      </p>
      <p>
        <strong>Alexandria:</strong> At
        <a href="https://literati.com/">Literati</a>, I built an internal
        service to collect and manage metadata for the entire book inventory
        (~6,000 titles). This service aggregated data from internal and external
        sources (consuming internal data from Google Pub/sub, and external data
        primarily from Ingram's XML book API), flagged missing data and
        anomalies, fed it to internal ML services for automated curation, and
        included a faceted search interface. It was used by about 40 internal
        stakeholders in curation, product, marketing, operations, and data
        science. I designed and built this service from the ground up using
        Django, React, GraphQL, and Google Pub/sub, wrote documentation for
        internal stakeholders, and on-boarded other engineers to maintain and
        extend the service.
      </p>
      <p>
        <strong>Book tag taxonomy:</strong> As Alexandria grew to maturity, conversations
        with stakeholders led me to realize that the schema-less tagging system we
        developed for machine learning-based book curation was not well suited to
        other uses. I gathered stakeholders from product, design, curation, data
        science, and marketing teams to develop a new taxonomy for book tags. I led
        the development of a new tagging system that was more structured, more flexible,
        and more user-friendly. I built tools into Alexandria to remove useless tags,
        merge duplicates, and analyze the distribution of tags across the inventory.
        I worked with the data science team to ensure that the new schema would perform
        well with the models, and with curation to ensure that the new schema would
        be meaningful and useful for customers.
      </p>
      <p>
        <strong>Literati book clubs:</strong> I build the web client UI for
        Literati’s
        <a href="https://literati.com/book-clubs/susan-orlean/"
          >online book clubs</a
        >, collaborating closely with one front-end engineer, and a UX designer.
        This app included threaded discussion forums, notifications, account
        management, and reading stats. We used TypeScript, React, and GraphQL.
      </p>
      <p>
        <strong>Lingo API:</strong> At
        <a href="https://www.lingoapp.com/">Lingo</a>, I re-architected the API
        to reduce latency and increase reliability. This is a RESTful API built
        using Flask and SQLAlchemy that serves web and native iOS clients. I
        collaborated closely with an iOS engineer on this project, and helped
        him ramp up his Python and SQL skills as part of the process. The design
        of this API is discussed in some detail in
        <a
          href="https://medium.com/@shiftingedges/implementing-a-command-bus-in-python-18b60bbe216"
          >this Medium post</a
        >.
      </p>
      <p>
        <strong>wabiStory:</strong> This was a solo passion project I worked on while
        freelancing in 2013. I created a mobile app using Sencha Touch and PhoneGap
        (aka Apache Cordova) that allowed artists to place audio recordings in physical
        locations. Users would only be able to hear the audio if they were physically
        present at the location. The mobile app allowed creating the recordings and
        saving them at a location, and also UI for discovering and listening to recordings,
        with a walking directions feature (using Google Maps API). This app was released
        in the Apple Store and was used by a small community of artists in San Antonio,
        TX.
      </p>
    </div>
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
