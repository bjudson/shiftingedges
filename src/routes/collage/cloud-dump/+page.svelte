<script lang="ts">
  import CollageMeta from "../CollageMeta.svelte";
  import Section from "../Section.svelte";


  import girlonthebeach from "$lib/img/girl-on-the-beach.jpg";

  const title = "cloud-dump";
  const description = "Was that why it rained so much?";
</script>

<CollageMeta {title} {description} imgSrc={girlonthebeach} />

<Section>
  <figure>
    <a href="https://www.youtube.com/watch?v=8xyS8UvkzKE"
      ><enhanced:img alt="Still from a movie:
			Adolsescent girl wearing bikini bottom walking alone on a rocky beach, with a few desert plants in the background." src="$lib/img/girl-on-the-beach.jpg"></a
    >
    <figcaption>Il Deserto Rosso</figcaption>
  </figure>

  <p>
    <a href="https://poetryarchive.org/poem/crusoe-england/">My island seemed</a
    >
    to be<br />
    a sort of cloud-dump. All the hemisphere’s<br />
    left-over clouds arrived and hung<br />
    above the craters—their parched throats<br />
    were hot to touch.<br />
    Was that why it rained so much?<br />
    And why sometimes the whole place hissed?<br />
    The turtles lumbered by, high-domed,<br />
    hissing like teakettles.<br />
    (And I’d have given years, or taken a few,<br />
    for any sort of kettle of course.)<br />
    The folds of lava, running out to sea,<br />
    would hiss. I’d turn. And they’d prove<br />
    to be more turtles.
  </p>

  <aside>
    I remember having been much <a
      href="https://www.gutenberg.org/files/1228/1228-h/1228-h.htm#chap09"
      >struck when viewing volanic islands</a
    >, which have been worn by the waves and pared all round into perpendicular
    cliffs of one or two thousand feet in height; for the gentle slope of the
    lava-streams, due to their formerly liquid state, showed at a glance how far
    the hard, rocky beds had once extended into the open ocean. The same story
    is told still more plainly by faults, those great cracks along which the
    strata have been upheaved on one side, or thrown down on the other, to the
    height or depth of thousands of feet; for since the crust cracked, and it
    makes no great difference whether the upheaval was sudden, or, as most
    geologists now believe, was slow and effected by many starts, the surface of
    the land has been so completely planed down that no trace of these vast
    dislocations is externally visible.
  </aside>

  <figure>
    <a href="https://www.getty.edu/art/collection/object/107R6R">
      <enhanced:img alt="Sepia-toned landscape photograph
			looking down over a still lake. Trees in the foreground, a rock outcrop over the water
			with a single nude female figure standing on the edge, looking out over the water." src="$lib/img/figure-in-a-landscape-brigman.jpg">
    </a>
  </figure>
</Section>
