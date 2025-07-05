<script lang="ts">
  import CollageMeta from "../CollageMeta.svelte";
  import Section from "../Section.svelte";


  import linM_Wavefield_2013_09_304 from "$lib/img/LinM_Wavefield_2013_09_30.4.jpg";

  const title = "nothing much";
  const description =
    "I’d like to retire there and do nothing, or nothing much";
</script>

<CollageMeta {title} {description} imgSrc={linM_Wavefield_2013_09_304} />

<Section>
  <figure>
    <a href="https://collections.stormking.org/Detail/objects/416">
      <enhanced:img alt="Grassy hills in the shape of waves, trees in the background." src="$lib/img/LinM_Wavefield_2013_09_30.4.jpg">
    </a>
    <figcaption>Waveforms (Storm King)</figcaption>
  </figure>

  <p>
    I wanted to get as far as my proto-dream-house,<br />
    my crypto-dream-house, that crooked box<br />
    set up on pilings, shingled green,<br />
    a sort of artichoke of a house, but greener<br />
    (boiled with bicarbonate of soda?),<br />
    protected from spring tides by a palisade<br />
    of–are they railroad ties?<br />
    (Many things about this place are dubious.)<br />
    I’d like to retire there and do nothing,<br />
    or
    <a
      href="https://www.tumblr.com/poem-today/613853909046444032/a-poem-by-elizabeth-bishop"
      >nothing much</a
    >, forever, in two bare rooms:<br />
    look through binoculars, read boring books,<br />
    old, long, long books, and write down useless notes,<br />
    talk to myself, and, foggy days,<br />
    watch the droplets slipping, heavy with light.<br />
  </p>

  <aside>
    <p>
      Now it is imperative that I <a
        href="https://www.google.com/books/edition/A_Man_s_Place/6HD8If3kJuYC?hl=en&gbpv=1&pg=PA61&printsec=frontcover"
        >unravel these memories</a
      >, all the more so since I have long suppressed them, believing them to be
      of no consequence. If they have survived, it is through sheer humiliation.
      I surrendered to the will of the world in which I live, where memories of
      a lowly existence are seen as a sign of bad taste.
    </p>
  </aside>

  <figure>
    <a href="https://www.moma.org/calendar/exhibitions/1537">
      <enhanced:img alt="A stone statue of a nude reclining woman; in place of a head is a large, active bees nest." src="$lib/img/Pierre-Huyghe-bees.jpg">
    </a>
    <figcaption>Untitled (Liegender Frauenakt)</figcaption>
  </figure>
</Section>
