<script lang="ts">
  import CollageMeta from "../CollageMeta.svelte";
  import Section from "../Section.svelte";

  import comeAway from "$lib/img/kiki-smith-come-away-from-her.jpg";
  import heartSutra from "$lib/img/heart-sutra-tōzai-yūki.jpg";

  const title = "she dressed me";
  const description = "Fantasying posesses her like an evil spirit.";
</script>

<CollageMeta {title} {description} imgSrc={comeAway} />

<Section>
  <figure>
    <a href="https://www.moma.org/collection/works/89069">
      <img
        src={comeAway}
        alt="An etching with aquatint of a girl in a dress sitting down on a rock while a clump of birds fly away."
      />
    </a>
    <figcaption>Come away from her</figcaption>
  </figure>

  <p>
    Sparkly silver chains on my ankles<br />
    As soon as Mommy hatched, she dressed me in a birdcage<br />
    <br />
    My feet keep sinking into the trampoline night<br />
    Like a white aurora the rabbit-shaped shadow dissipates<br />
    I bounce into the
    <a href="https://www.poetryfoundation.org/poems/160147/floor-is-not-a-floor"
      >trampoline night</a
    ><br />
  </p>

  <aside>
    <p>
      We came round in the end to a discussion of this dream that she had
      reported at the beginning (<a
        href="https://www.google.com/books/edition/Playing_and_Reality/glDHJG81NjAC?hl=en&gbpv=1&pg=PA45&printsec=frontcover"
        >cutting out a dress</a
      >) which was experienced while she was awake and was a defense against
      dreaming: 'But how is she to know?' Fantasying posesses her like an evil
      spirit.
    </p>
  </aside>

  <figure>
    <a
      href="https://publicdomainreview.org/collection/buddhist-texts-for-the-illiterate/"
    >
      <img
        src={heartSutra}
        alt="An open book showing a grid of small pictographic images."
      />
    </a>
    <figcaption>Heart Sutra</figcaption>
  </figure>
</Section>
