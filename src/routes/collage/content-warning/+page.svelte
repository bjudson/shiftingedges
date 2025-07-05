<script lang="ts">
  import CollageMeta from "../CollageMeta.svelte";
  import Section from "../Section.svelte";


  import goberlynch from "$lib/img/gober-lynch.webp";

  const title = "content warning";
  const description = "O Solomon don’t leave me here/Cotton balls to choke me";
</script>

<CollageMeta {title} {description} imgSrc={goberlynch} />

<Section>
  <figure>
    <a
      href="https://contemporaryartreview.la/non-fiction-at-the-underground-museum/"
    >
      <enhanced:img alt="Photograph by Marion Palfi titled 'Wife of a Lynching Victim' hangs on top of wall paper by Robert Gober with drawing of a lynching juxtaposed with drawing of a sleeping white man." src="$lib/img/gober-lynch.webp">
    </a>
  </figure>

  <p>
    <a href="https://spiny.com/naomi/thesis/">O Solomon don’t leave me here</a
    ><br />
    Cotton balls to choke me<br />
    O Solomon don’t leave me here<br />
    Buckra's arms to yoke me<br />
    <br />
    Solomon done fly, Solomon done gone<br />
    Solomon cut across the sky, Solomon gone home.
  </p>

  <aside>
    <p>
      It is tricky because different instances responded differently with their
      moderation policies, however, the
      <a
        href="https://zirk.us/@shengokai/109585637621322960"
        title="Mastodon thread">overall effect</a
      > was that white users and moderators would increasingly treat the experiences
      of users of color as "politics" and thus demand that they were censored or
      hidden under content warnings.
    </p>
    <p>
      This had the effect of sanitizing the experiences of users of color across
      instances on the fediverse, and thereby preserving white comfort by
      treating race as "politics" and not "experience."
    </p>
  </aside>

  <figure>
    <a
      href="https://www.museum-brandhorst.de/en/essays/sinister-pop-guersoy-dogtas/"
    >
      <enhanced:img alt="Andy Warhol diptych 'Mustard Race Riot'; left half consists of repeated images of black protesters being attacked by police dogs, right half is blank. The entire piece has mustard yellow background color." src="$lib/img/warhol-race-riot.webp">
    </a>
  </figure>
</Section>
