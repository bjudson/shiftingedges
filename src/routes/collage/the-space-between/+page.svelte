<script lang="ts">
  import CollageMeta from "../CollageMeta.svelte";
  import Section from "../Section.svelte";


  import kikismithcomeawayfromher from "$lib/img/kiki-smith-come-away-from-her.jpg";

  const title = "the space between";
  const description = "Fantasying posesses her like an evil spirit.";
</script>

<CollageMeta {title} {description} imgSrc={kikismithcomeawayfromher} />

<Section>
  <figure>
    <a href="https://www.moma.org/collection/works/89069">
      <enhanced:img alt="An etching with aquatint of a girl in a dress sitting down on a rock while a clump of birds fly away." src="$lib/img/kiki-smith-come-away-from-her.jpg">
    </a>
    <figcaption>Come away from her</figcaption>
  </figure>

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

  <p>
    I want to slay the space between sky and land<br />
    I want to slay everyplace except where Mommy is lying<br />
    <br />
    I want to slay the rain falling like a black velvet curtain<br />
    I want to slay the geraniums under the drops of moonlight<br />

    Why did you let Mommy be born?<br />
    And why do you let her die?<br />
    <br />
    I can’t take off my birdcage dress<br />
    It strangles me more each day<br />
    <br />
    I’m entirely
    <a href="https://www.poetryfoundation.org/poems/160147/floor-is-not-a-floor"
      >dependent on the floor</a
    ><br />
    <br />
    Trampoline<br />
    Trampoline
  </p>

  <aside>
    <p>
      The key word to be <a
        href="https://www.google.com/books/edition/Playing_and_Reality/glDHJG81NjAC?hl=en&gbpv=1&pg=PA45&printsec=frontcover"
        >carried back into the dream</a
      >
      was <em>formlessness</em>, which is what the material is like before it is
      patterned and cut and shaped and put together. In other words, in a dream
      this would be a comment on her own personality and self-establishment.
    </p>
  </aside>

  <figure>
    <a
      href="https://publicdomainreview.org/collection/buddhist-texts-for-the-illiterate/"
    >
      <enhanced:img alt="An open book showing a grid of small pictographic images." src="$lib/img/heart-sutra-tōzai-yūki.jpg">
    </a>
    <figcaption>Heart Sutra</figcaption>
  </figure>
</Section>
