<script lang="ts">
  import CollageMeta from "../CollageMeta.svelte";
  import Section from "../Section.svelte";

  import bettyBlue from "$lib/img/betty-blue.jpg";
  import peaceLikeARiver from "$lib/img/peace-like-a-river.jpg";

  const title = "peace like a river";
  const description =
    "My whole life has been an effort to tear myself away from male desire";
</script>

<CollageMeta {title} {description} imgSrc={bettyBlue} />

<Section>
  <figure>
    <a href="https://www.youtube.com/watch?v=74XLgWZ79VI">
      <img
        src={bettyBlue}
        alt="A woman, clothed, floating in a river looking up."
      />
    </a>
    <figcaption>Betty Blue</figcaption>
  </figure>

  <p>
    My whole life has been an effort to tear myself away from male desire, in
    other words, from <a
      href="https://www.google.com/books/edition/Getting_Lost/vlxTEAAAQBAJ"
      >my own desire</a
    >. In '63, I repeated to myself these words from the Bible: “And I will
    extend peace to her like a river,” not even knowing that these words
    referred to my desire, sperm flowing over me like a river.
  </p>

  <figure>
    <a href="https://www.youtube.com/watch?v=LpgLuPmF66g">
      <img
        src={peaceLikeARiver}
        alt="A sepia-toned photograph of a waterfall."
      />
    </a>
    <figcaption>Peace Like a River</figcaption>
  </figure>
</Section>
