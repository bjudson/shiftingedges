<script lang="ts">
  import CollageMeta from "../CollageMeta.svelte";
  import Section from "../Section.svelte";

  import curtisEclipse from "$lib/img/curtis-eclipse.webp";
  import werckmeisterHarmonies from "$lib/img/werckmeister-harmonies.jpg";

  const title = "an old, worn ring";
  const description = "The hole where the sun belongs is very small";
</script>

<CollageMeta {title} {description} imgSrc={werckmeisterHarmonies} />

<Section>
  <figure>
    <a href="https://www.getty.edu/art/collection/object/104CY4">
      <img
        src={curtisEclipse}
        alt="An old sepia-toned print of a solar eclipse at four stages, arranged in two rows"
      />
    </a>
    <figcaption>Views of the Great Solar Eclipse, 1869</figcaption>
  </figure>

  <p>
    From all the hills came screams. A piece of sky beside the crescent sun was
    detaching. It was a loosened circle of evening sky, suddenly lighted from
    the back. It was an abrupt black body out of nowhere; it was a flat disk; it
    was almost over the sun. That is when there were screams. At once this disk
    of sky slid over the sun like a lid. The sky snapped over the sun like a
    lens cover. The hatch in the brain slammed. Abruptly it was dark night, on
    the land and in the sky. In the night sky was a tiny ring of light. The hole
    where the sun belongs is very small. <a
      href="https://home.ubalt.edu/ntygfit/ai_05_mapping_directions/ai_05_see/ad_total_eclipse.htm"
      >A thin ring of light marked its place</a
    >. There was no sound. The eyes dried, the arteries drained, the lungs
    hushed. There was no world. We were the world's dead people rotating and
    orbiting around and around, embedded in the planet's crust, while the earth
    rolled down. Our minds were light-years distant, forgetful of almost
    everything. Only an extraordinary act of will could recall to us our former,
    living selves and our contexts in matter and time. We had, it seems, loved
    the planet and loved our lives, but could no longer remember the way of
    them. We got the light wrong. In the sky was something that should not be
    there. In the black sky was a ring of light. It was a thin ring, an old,
    thin silver wedding band, an old, worn ring. It was an old wedding band in
    the sky, or a morsel of bone. There were stars. It was all over.
  </p>

  <figure>
    <a href="https://www.youtube.com/watch?v=_d5X2t_s9g8">
      <img
        src={werckmeisterHarmonies}
        alt="A black and white photograph of men standing in a bar with no tables or chairs visible."
      />
    </a>
    <figcaption>Werckmeister Harmonies</figcaption>
  </figure>
</Section>
