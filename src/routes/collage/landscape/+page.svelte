<script>
  import CollageMeta from "../CollageMeta.svelte";
  import Section from "../Section.svelte";

  import landscapeGreenlaw from "$lib/img/landscape-greenlaw.jpg";
</script>

<CollageMeta
  title="landscape"
  description="Poem by Lavinia Greenlaw"
  imgSrc={landscapeGreenlaw}
/>

<Section>
  <figure>
    <img src={landscapeGreenlaw} alt="Photograph of poem (text below)" />
  </figure>

  <div>
    <h1>Landscape</h1>
    <p>
      A dog’s tombstone, its eroded elegy.<br />
      Sunk ponds of algae and carp.<br />
      A nymph with no arms and improbable breasts.<br />
      <br />
      Dilapidated perspectives<br />
      hum with the A-road and InterCity line.<br />
      <br />
      Aroused by emptiness,<br />
      you push a hand inside my jeans.<br />
      <br />
      The wind in the three-hundred-year-old<br />
      Lebanon cedars<br />
      makes a noise like nothing living.
    </p>

    <p style="border-top: 1px dotted var(--fg-color); padding-top: 1rem;">
      Lavinia Greenlaw (from <a
        href="https://openlibrary.org/works/OL3611211W/A_World_Where_News_Travelled_Slowly_%28Faber_Poetry%29"
        >A World where New Travelled Slowly</a
      >)
    </p>
  </div>
</Section>
