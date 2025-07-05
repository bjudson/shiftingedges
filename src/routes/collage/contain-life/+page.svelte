<script lang="ts">
  import CollageMeta from "../CollageMeta.svelte";
  import Section from "../Section.svelte";

  import ssherbournedr from "$lib/img/s-sherbourne-dr.jpg";

  const title = "contain life";
  const description = "Look at those trees";
</script>

<CollageMeta {title} {description} imgSrc={ssherbournedr} />

<Section>
  <figure>
    <a href="/treesoflosangeles/s-sherbourne-dr"
      ><enhanced:img
        alt="Photograph of an old green truck 
            parked on the street. Behind the truck a juniper tree grows out over the sidwalk. Behind the tree, a building with terracotta
            ceramic shingles and white walls. A satellite dish on the roof. A subtle sunset visible in the sky."
        src="$lib/img/s-sherbourne-dr.jpg"
      ></enhanced:img></a
    >
    <figcaption>S Sherbourne Dr, Los Angeles. January 13, 2017.</figcaption>
  </figure>

  <p>
    Look at that mountain<br />
    Look at those trees<br />
    Look at that bum over there, man<br />
    He’s
    <a href="https://www.youtube.com/watch?v=KcADqxnQA_4">down on his knees</a>
  </p>

  <aside>
    When new technologies are used to eliminate well understood <a
      href="https://how.complexsystems.fail/#14">system failures</a
    >
    or to gain high precision performance they often introduce new pathways to large
    scale, catastrophic failures. Not uncommonly, these new, rare catastrophes have
    even greater impact than those eliminated by the new technology.
  </aside>

  <p>
    Because of the eye <a href="/poems/because-of-the-eye-the-hand-fell"
      >the hand fell</a
    ><br />
    apart into countless waves<br />
    which pushed the fingers of the sun back and forth<br />
    along the skin until the skin couldn’t<br />
    any longer<br />
    contain life or keep out the world
  </p>

  <figure>
    <a
      href="https://spruethmagers.com/exhibitions/jenny-holzer-highly-sensitive-cologne/"
    >
      <enhanced:img
        alt="A photocopy of a document that appears to be
            heavily redacted with black marks. Lines sticking out of the redaction marks indicate the document was 
            written by hand. Below the redacted text, words printed on the page read 'SECRET//NOFORN Formica Report  - 
            Annex 108'."
        src="$lib/img/holzer_Formica_3085_yellow_3157.jpg"
      >
      </enhanced:img></a
    >
    <figcaption>Formica 3085 yellow white. 2007.</figcaption>
  </figure>
</Section>
