<script lang="ts">
  import CollageMeta from "../CollageMeta.svelte";
  import Section from "../Section.svelte";


  import nicomirror from "$lib/img/nico-mirror.jpg";

  const title = "so desperately sought";
  const description =
    "It is for this reason that love is so desperately sought and so cunningly avoided";
</script>

<CollageMeta {title} {description} imgSrc={nicomirror} />

<Section>
  <figure>
    <a href="https://youtu.be/ZudHYTya-dQ">
      <enhanced:img alt="Grainy, black and white photograph of a woman looking into a small mirror." src="$lib/img/nico-mirror.jpg">
    </a>
    <figcaption>I’ll Be Your Mirror</figcaption>
  </figure>

  <aside>
    <p>
      There was a mirror in that apartment, ornate and gilded, that was so large
      it reflected the looker not as the center of the image but as part of a
      greater scene. To be reflected in it was to be seen in proportion to other
      things. The loss of the mirror was like the loss of a compass or a
      navigation point. It was surprising how deeply it had bestowed a feeling
      of orientation. Sometimes a minor change can bring down a major structure,
      and this was the case with the lady’s apartment. After we left, <a
        href="https://www.newyorker.com/magazine/2023/04/24/the-stuntman-fiction-rachel-cusk"
        >a number of things happened</a
      >
      whose roots could be found there.
    </p>
  </aside>

  <p>
    I think of the friends<br />
    Who came to see me, of what yesterday<br />
    Was like. A peculiar slant<br />
    Of memory that intrudes on the dreaming model<br />
    In the silence of the studio as he considers<br />
    Lifting the pencil to the self-portrait. <br />
    How many people came and stayed a certain time, <br />
    Uttered light or dark speech that became part of you <br />
    Like light behind windblown fog and sand, <br />
    Filtered and influenced by it, until no part <br />
    Remains that is surely you. Those voices in the dusk <br />
    Have told you all and still the tale goes on <br />
    In the form of memories deposited in irregular <br />
    Clumps of crystals. Whose curved hand controls, <br />
    Francesco, the turning seasons and the thoughts <br />
    That peel off and fly away at breathless speeds<br />
    Like the last stubborn leaves ripped <br />
    From wet branches?
    <a
      href="https://www.poetryfoundation.org/poetrymagazine/browse?volume=124&issue=5&page=6"
      >I see in this only the chaos</a
    > <br />
    Of your round mirror which organizes everything <br />
    Around the polestar of your eyes which are empty,<br />
    Know nothing, dream but reveal nothing.
  </p>
  <figure>
    <a
      href="https://www.anothermag.com/art-photography/gallery/717/nan-goldin-berlin/2"
    >
      <enhanced:img alt="A young woman looking into a bathroom mirror holding a compact in her hand." src="$lib/img/goldin-amanda-in-the-mirror.jpg">
    </a>
    <figcaption>Amanda in the Mirror</figcaption>
  </figure>

  <aside>
    <p>
      All of us know, whether or not we are able to admit it, that <a
        href="https://www.google.com/books/edition/The_Fire_Next_Time/lNYwEAAAQBAJ?hl=en&gbpv=1&bsq=mirrors%20can%20only%20lie"
        title="Google Books">mirrors can only lie</a
      >, that death by drowning is all that awaits one there. It is for this
      reason that love is so desperately sought and so cunningly avoided. Love
      takes off the masks that we fear we cannot live without and know we cannot
      live within.
    </p>
  </aside>

  <figure>
    <a
      href="http://openfileblog.blogspot.com/2011/06/michelangelo-pistoletto-seventeen-one.html"
    >
      <enhanced:img alt="Older man wearing black clothes and a white hat, smashing a large mirror with a large mallet. In the mirror, a large group of people taking photographs can be seen behind him." src="$lib/img/pistoletto-mirror.jpg">
    </a>
    <figcaption>Seventeen One Less</figcaption>
  </figure>
</Section>
