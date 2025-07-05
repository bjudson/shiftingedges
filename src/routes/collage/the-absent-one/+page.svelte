<script lang="ts">
  import CollageMeta from "../CollageMeta.svelte";
  import Section from "../Section.svelte";


  import thebrood from "$lib/img/the-brood.jpg";

  const title = "the absent one";
  const description = "then strange, dark things take the place";
</script>

<CollageMeta {title} {description} imgSrc={thebrood} />

<Section>
  <figure>
    <a href="https://www.youtube.com/watch?v=ONF_JWWKFsY">
      <enhanced:img alt="Three children walking hand in hand down the side of a street in the snow. A truck is driving by." src="$lib/img/the-brood.jpg">
    </a>
    <figcaption>those things, those creatures</figcaption>
  </figure>

  <p>
    For a long time I have stayed looking at my long legs,<br />
    with infinite and curious tenderness, with my accustomed passion,<br />
    as if they had been the legs of a divine woman,<br />
    deeply sunk in
    <a
      href="https://blog.bestamericanpoetry.com/the_best_american_poetry/2013/03/ritual-of-my-legs.html"
      >the abyss of my thorax</a
    >:<br />
    and, to tell the truth, when time, when time passes<br />
    over the earth, over the roof, over my impure head,<br />
    and it passes, time passes, and in my bed I do not feel at night that a woman
    is breathing sleeping naked and at my side,<br />
    then strange, dark things take the place of the absent one,<br />
    vicious, melancholy thoughts<br />
    sow heavy possibilities in my bedroom,<br />
    and so, then, I look at my legs as if they belonged to another body<br />
    and were stuck strongly and gently to my insides.
  </p>

  <aside>
    <p>
      that knowledge can be classified as follows:<br />
      A. innate and acquired knowledge concerning
      <a href="/somatic-marker-hypothesis.pdf">bioregulatory processes</a>
      and body states and actions, including those which are made explicit as emotions.
      <br />
      B. knowledge about entities, facts (e.g. relations, rules), actions and action-complexes,
      and stories, which are usually made explicit as images.<br />
      C. knowledge about the linkages between B items and A items, as reflected in
      individual experience.<br />
      D. knowledge resulting from the categorizations of items in A, B and C
    </p>
  </aside>

  <figure>
    <a href="https://www.moma.org/collection/works/56715">
      <enhanced:img alt="A black and white photograph of a woman lying on a bed with black sheets, wearing a white shirt, with bear legs are visible. She stares longingly into space." src="$lib/img/cindy-sherman-film-still.jpg">
    </a>
    <figcaption>Untitle Film Still #34</figcaption>
  </figure>
</Section>
