<script lang="ts">
  import CollageMeta from "../CollageMeta.svelte";
  import Section from "../Section.svelte";

  import loieFuller from "$lib/img/loie-fuller.jpg";
  import marionette from "$lib/img/taeuber-arp-marionette.jpg";

  const title = "ring-formed world";
  const description = "Aroused by emptiness, you push a hand inside my jeans.";
</script>

<CollageMeta {title} {description} imgSrc={loieFuller} />

<Section>
  <figure>
    <a
      href="https://publicdomainreview.org/essay/loie-fuller-and-the-serpentine/"
    >
      <img
        src={loieFuller}
        alt="A woman in a long, flowing dress covered with painted snakes. She is holding a wooden snake in one hand, and lookint into its face. She has long, curled hare, and there are pillows spread out on the floor around her."
      />
    </a>
    <figcaption>Loie Fuller (Serpentine Dance)</figcaption>
  </figure>

  <p>
    I said that however cleverly he managed his paradoxes he would never make me
    believe that there was <a href="/kleist-marionette.pdf"
      >more grace in a jointed mechanical doll</a
    > than there is in the structure of the human body.
  </p>
  <p>
    He replied: “It is simply impossible for a human being to reach the grace of
    the jointed doll. Only a god can duel with matter on this level, and it is
    at this point that the two ends of the ring-formed world grasp each other.”
  </p>

  <aside>
    <p>
      Which is to say that the dancer (female) is not a woman who dances, for
      the juxtaposed reasons that (a) she isn’t a woman, but a metaphor summing
      up one of the elementary aspects of our form, sword, cup, flower, etc. and
      (b) she doesn’t dance (in the ordinary sense; rather) suggesting by the
      prodigiousness of (either) short-cuts or élans, with a <a
        href="/mallarme-dance.pdf">bodily writing</a
      > what it would take paragraphs of prose dialogue as well as descriptive (prose)
      to express in a written text: (she is) a poem freed from all the apparatus
      of a scribe.
    </p>
  </aside>

  <p>
    At midnight on the Emperor's pavement flit<br />
    Flames that no faggot feeds, nor steel has lit,<br />
    Nor storm disturbs, flames begotten of flame,<br />
    Where blood-begotten spirits come<br />
    And all
    <a href="https://www.poetryfoundation.org/poems/43296/byzantium"
      >complexities of fury</a
    >
    leave,<br />
    Dying into a dance,<br />
    An agony of trance,<br />
    An agony of flame that cannot singe a sleeve.<br />
  </p>

  <figure>
    <a href="https://www.moma.org/audio/playlist/318/4117">
      <img
        src={marionette}
        alt="A marionette of a king, painted all gold, except for his white face. The crown is a strange organic shape, not resembling a real crown, and his arms and legs are formed of cones."
      />
    </a>
    <figcaption>Sophie Taeuber-Arp. Deramo, The King</figcaption>
  </figure>
</Section>
