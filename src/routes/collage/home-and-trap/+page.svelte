<script lang="ts">
  import CollageMeta from "../CollageMeta.svelte";
  import Section from "../Section.svelte";

  import bourgeoisSpiderCell from "$lib/img/bourgeois-spider-cell.jpg";

  const title = "home and trap";
  const description =
    "Her mom said spiders carry miles of web in their bodies, miles of story";
</script>

<CollageMeta {title} {description} imgSrc={bourgeoisSpiderCell} />

<Section>
  <p>
    Opal and Jacquie’s mom never let them kill a spider if they found one in the
    house, or anywhere else for that matter. Her mom said spiders carry <a
      href="https://www.kqed.org/arts/13835114/tommy-oranges-novel-there-there-is-a-gripping-portrait-of-oakland"
      >miles of web</a
    >
    in their bodies, miles of story, miles of potential home and trap. She said that’s
    what we are. Home and trap.
  </p>

  <figure>
    <a
      href="https://www.artnews.com/art-news/artists/louise-bourgeois-spider-sculptures-history-1202687603/"
    >
      <img
        src={bourgeoisSpiderCell}
        alt="Large cylindrical cage with some tapestries on the walls, and wavy spider legs coming out of the top down to the floor."
      />
    </a>
  </figure>

  <aside>
    <p>
      Inside a glass case, two headless knitted dolls were copulating: blindly
      driven by instinct and need, the body has no awareness of its own moral
      preposterousness. But <a
        href="https://www.newyorker.com/magazine/2023/04/24/the-stuntman-fiction-rachel-cusk"
        >the female body has a special insanity</a
      >, the insanity of the spider, for whom there is no boundary between the
      material and the immaterial self.
    </p>
  </aside>

  <p>
    A Spider<br />
    <a href="http://www.earlywomenmasters.net/dickinson/ed_1138/"
      >sewed at Night</a
    ><br />
    Without a Light<br />
    Upon an Arc of<br />
    White —<br />
    <br />
    If Ruff it was<br />
    of Dame<br />
    Or Shroud of Gnome<br />
    Himself himself<br />
    inform —<br />
    <br />
    Of Immortality<br />
    His Strategy<br />
    Was Physiognomy —<br />
  </p>
</Section>
