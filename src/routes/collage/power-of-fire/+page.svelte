<script lang="ts">
  import CollageMeta from "../CollageMeta.svelte";
  import Section from "../Section.svelte";

  import ceramics from "$lib/img/Hamana-Otani-Ueda-ceramics.jpeg";
  import yojimboRiceBowl from "$lib/img/Yojimbo-rice-bowl.webp";
  import oldFireplace from "$lib/img/old-fireplace.jpg";

  const title = "the power of fire";
  const description = "Fire leaves its soul where it steps";
</script>

<CollageMeta {title} {description} imgSrc={ceramics} />

<Section>
  <figure>
    <a
      href="https://www.blumandpoe.com/exhibitions/kazunori_hamana_yuji_ueda_otani_workshop"
    >
      <img
        src={ceramics}
        alt="Roughly formed ceramic objects on a wooden surface. Spheres, a broken cup, and in the center a small unglazed piece with minimal markings of a face cut into it."
      />
    </a>
  </figure>

  <p>
    Fire leaves its soul where it steps<br />
    clinging to its spent fuel<br />
    shadows in its wake as it follows<br />
    its hunger and the dry wind<br />
    <br />
    <a href="/poems/fire-leaves-its-soul-where-it-steps"
      >what follows fire but us</a
    ><br />
    and flowers that dot the charred earth<br />
    after long slumbering in the soil<br />
    rising only at the scent of smoke<br />
  </p>

  <aside>
    <p>
      Pottery <a
        href="https://www.google.com/books/edition/The_Art_of_Rosanjin/EOUxAQAAIAAJ?hl=en&gbpv=1&bsq=Pottery+draws+on+the+power+of+fire,+which+plays+a+role+far+beyond+the+capabilities+of+men.+Even+painted+figures+or+designs+on+pottery+are+improved+by+passing+through+fire.+Pottery+has+a+great+advantage+in+its+ability+to+draw+in+this+way+on+the+power+of+nature.+Paintings,+on+the+other+hand,+being+%22un-processed,%22+are+not+able+to+make+use+of+that+source+of+power.+Only+when+a+thousand+years+or+so+pass,+and+a+painting+is+very+ancient,+does+it+acquire+a+becoming+patina+that+increases+its+beauty+and+intrinsic+value.+This,+too,+is+the+power+of+nature,+which+explains+why+all+old+things+are+correspondingly+more+attractive.&dq=Pottery+draws+on+the+power+of+fire,+which+plays+a+role+far+beyond+the+capabilities+of+men.+Even+painted+figures+or+designs+on+pottery+are+improved+by+passing+through+fire.+Pottery+has+a+great+advantage+in+its+ability+to+draw+in+this+way+on+the+power+of+nature.+Paintings,+on+the+other+hand,+being+%22un-processed,%22+are+not+able+to+make+use+of+that+source+of+power.+Only+when+a+thousand+years+or+so+pass,+and+a+painting+is+very+ancient,+does+it+acquire+a+becoming+patina+that+increases+its+beauty+and+intrinsic+value.+This,+too,+is+the+power+of+nature,+which+explains+why+all+old+things+are+correspondingly+more+attractive.&printsec=frontcover"
        >draws on the power of fire</a
      >, which plays a role far beyond the capabilities of men. Even painted
      figures or designs on pottery are improved by passing through fire.
      Pottery has a great advantage in its ability to draw in this way on the
      power of nature. Paintings, on the other hand, being "un-processed," are
      not able to make use of that source of power. Only when a thousand years
      or so pass, and a painting is very ancient, does it acquire a becoming
      patina that increases its beauty and intrinsic value. This, too, is the
      power of nature, which explains why all old things are correspondingly
      more attractive.
    </p>
  </aside>

  <figure>
    <a href="https://www.youtube.com/watch?v=8ncG5Ohb4Eo">
      <img
        src={yojimboRiceBowl}
        alt="Black and white still from Akira Kurosawa samurai film. Toshiro Mifune eats rice out of a ceramic bowl with brush strokes; he is inside of a wooden shack, with an older man sitting to his right, scowling."
      />
    </a>
  </figure>

  <aside>
    <p>
      Although the continuity for a film is all worked out in advance, that
      sequence may not necessarily be the most interesting way to shoot the
      picture. Things can happen without warning that produce a startling
      effect. When these can be incorporated in the film without upsetting the
      balance, the whole becomes much more interesting. This process is similar
      to that of a pot being fired in a kiln. Ashes and other particles can fall
      onto the melted glaze during the firing and cause unpredictable but
      beautiful results. Similarly unplanned but interesting effects arise in
      the course of directing a movie, so I call them “<a
        href="https://akirakurosawa.info/akira-kurosawa-quotes/kurosawa-quotes-directing"
        >kiln changes</a
      >.”
    </p>
  </aside>

  <figure>
    <a href="https://www.instagram.com/p/CnfC5OXu4fa/"
      ><img
        src={oldFireplace}
        alt="Photograph of the inside of an old house with no furniture. In the center is a fireplace, with aparent smoke stains above it. Plaster is falling down around it onto the wooden floor."
      /></a
    >
  </figure>
</Section>
