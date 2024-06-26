<script lang="ts">
  import CollageMeta from "../CollageMeta.svelte";
  import Section from "../Section.svelte";

  import mapProjectionSnail from "$lib/img/denes-map-projection-snail.jpeg";
  import brainticketCelestialOcean from "$lib/img/brainticket-celestial-ocean.jpg";

  const title = "contradictory combinations";
  const description = "See how many contradictory combinations you can find";
</script>

<CollageMeta {title} {description} imgSrc={mapProjectionSnail} />

<Section>
  <figure>
    <a href="https://www.moma.org/collection/works/60464">
      <img
        src={mapProjectionSnail}
        alt="Map of the world projected onto a three dimensional grid in the form of a snail shell (spiraling cylinder)"
      />
    </a>
  </figure>

  <p>
    In addition to being represented by their own records, such so-called
    “attributes” can exhibit another characteristic property of entities (or
    relationships): they themselves might be the subject of some information
    (like intersection data). Thus, the intersection records required to list
    the children of employees might include their birthdays; the intersection
    records listing the colors of multi-colored cars might include the
    percentage of a car’s surface covered by a given color. To summarize,
    consider the contradictions in the following assertions:
  </p>
  <ul>
    <li>Every record represents an entity.</li>
    <li>Every entity is represented by a distinct record.</li>
    <li>All relationships are entities.</li>
    <li>Some relationships are not represented by distinct records.</li>
    <li>The “subject” of an attribute is an entity.</li>
    <li>Some attributes are the subjects of other attributes.</li>
    <li>Attributes are not entities.</li>
    <li>Some records represent attributes (and nothing else).</li>
  </ul>

  <p>
    <a href="/data-and-reality.pdf">You play the game</a>. See how many
    contradictory combinations you can find.
  </p>
  <p>
    Then decide which of those assertions you’re willing to give up in order to
    achieve consistency.
  </p>

  <figure>
    <a href="https://www.youtube.com/watch?v=A__yAxxgZYo">
      <img
        src={brainticketCelestialOcean}
        alt="Poster titled 'Celestial Ocean - Brainticket' with various line drawings, including ancient Egyptian imagery, scientific wave diagrams, etc"
      />
    </a>
  </figure>
</Section>
