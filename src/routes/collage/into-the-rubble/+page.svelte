<script lang="ts">
  import CollageMeta from "../CollageMeta.svelte";
  import Section from "../Section.svelte";


  import dreamlandtheatre from "$lib/img/dreamland-theatre.webp";

  const title = "into the rubble";
  const description =
    "It began as an expression of the necessity for art education";
</script>

<CollageMeta {title} {description} imgSrc={dreamlandtheatre} />

<Section>
  <figure>
    <a href="http://cinematreasures.org/theaters/68409">
      <enhanced:img alt="Faded black and white photograph of a brick building with the a sign reading Williams Dreamland Theatre on the front. A box office and movie posters are visible." src="$lib/img/dreamland-theatre.webp">
    </a>
    <figcaption>Williams Dreamland Theatre (Tulsa, OK)</figcaption>
  </figure>

  <p>
    On the evening of May 31st, I was busy with a class in Typewriting until
    about 9 P. M. After my pupils were gone I immediately began reading a book
    which I was very anxious to finish (must admit, however, that I was never
    able to complete it), so did not notice the excitement until a late hour.
    The evening being a pleasant one, my little girl had not retired, but was
    watching the people from the window. Occasionally she would call to me,
    “Mother, look at the cars full of people.” I would reply, “Baby, do not
    disturb me, I want to read.” Finally she said, “Mother, I see men with
    guns.” <a href="https://archive.org/details/events-of-the-tulsa-disaster/"
      >Then I ran to the window and looked out</a
    >. There I saw many people gathered in little squads talking excitedly.
    Going down stairs to the street I was told of the threatened lynching and
    that some of our group were going to give added protection to the boy.
  </p>

  <figure>
    <a href="https://projectrowhouses.org/our-work/">
      <enhanced:img alt="Photograph of a small row house painted with crude but rhythmic shapes, from the first exhibition at Project Row Houses in Houston." src="$lib/img/Project-Row-Houses-1994-Installation.jpg">
    </a>
    <figcaption>Project Row Houses</figcaption>
  </figure>

  <p>
    66 Signs of Neon exists on several levels as an art exhibition dominated by <a
      href="http://www.noahpurifoy.com/66signs"
      >assemblages of artifacts of the Watts riots</a
    > (August 1965); as a one-to-one format of communication between individuals
    who otherwise would not or could not communicate; as an evolving system of philosophy.
    It began as an expression of the necessity for art education, affirming the importance
    of this avenue of self-expression to individuals in the community of Watts. Noah
    Purifoy and Judson Powell began with six assemblages created from the lead drippings
    of melted neon signs, artifacts of the riots.
  </p>

  <figure>
    <a href="/junk-art-66-signs-of-neon.pdf">
      <enhanced:img alt="Page from a catalog of the exhibition '66 Signs of Neon', showing 3 assemblage sculptures made from detritus of the Watts riots, and text describing the origins of the exhibit." src="$lib/img/66-signs-of-neon.jpg">
    </a>
    <figcaption>66 Signs of Neon catalog</figcaption>
  </figure>
</Section>
