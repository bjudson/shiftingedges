<script lang="ts">
  import CollageMeta from "../CollageMeta.svelte";
  import Section from "../Section.svelte";

  import asawaFlower from "$lib/img/flower-xi-asawa.jpg";
  import dickinsonHerbarium from "$lib/img/herbarium-dickinson.jpg";

  const title = "uncertain longing";
  const description = "Wet as one who weeps, you lean against the dawn";
</script>

<CollageMeta {title} {description} imgSrc={asawaFlower} />

<Section>
  <figure>
    <a href="https://www.moma.org/collection/works/77374">
      <img
        src={asawaFlower}
        alt="Print of a flower, dark brown ink on green paper"
      />
    </a>
    <figcaption>Flower XI</figcaption>
  </figure>

  <p>
    Overflowing with your dream,<br />
    flower within so many others,<br />
    wet as one who weeps,<br />
    <a href="https://archive.org/details/roseswindows00rilk/mode/2up"
      >you lean against the dawn</a
    >.<br />
    <br />
    Your gentle, sleeping powers,<br />
    in an uncertain longing,<br />
    trace the tender forms<br />
    of cheeks and breasts.<br />
  </p>

  <aside>
    <p>
      Sometimes nature skips completely over the organ of the calyx, as it were,
      and goes directly to the corolla. We then have the <a
        href="https://maypoleofwisdom.files.wordpress.com/2020/03/the-metamorphosis-of-plants.pdf"
        >opportunity to observe</a
      > how stem leaves turn into petals. Thus, for example, an almost fully formed
      and colored petal often appears on tulip stems. It is even more remarkable
      when half of this leaf is green and attached as part of the stem, while its
      other, more colorful half rises up as part of the corolla, thereby dividing
      the leaf in two.
    </p>
  </aside>

  <p>
    There’s rosemary, <a
      href="https://www.google.com/books/edition/The_Plays_of_William_Shakspeare_In_Fifte/t5oNAAAAQAAJ?hl=en&gbpv=1&pg=PA275&printsec=frontcover"
      >that’s for rememberance</a
    >.<br />
    Pray you, love, remember. And there is pansies,<br />
    that’s for thoughts.
  </p>

  <figure>
    <a href="https://iiif.lib.harvard.edu/manifests/view/drs:4184689$1i">
      <img
        src={dickinsonHerbarium}
        alt="Dried flowers pressed into the pages of a book with handwritten labels on them"
      />
    </a>
    <figcaption>Herbarium (ca 1839-1846)</figcaption>
  </figure>
</Section>
