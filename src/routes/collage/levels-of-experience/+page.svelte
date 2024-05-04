<script lang="ts">
  import CollageMeta from "../CollageMeta.svelte";
  import Section from "../Section.svelte";

  import redstoneGameOfLife from "$lib/img/redstone-game-of-life.jpg";
  import paprikaDreams from "$lib/img/paprika-dreams.jpg";

  const title = "levels of experience";
  const description =
    "This smooth reality is only experienced by conscious microcosms";
</script>

<CollageMeta {title} {description} imgSrc={redstoneGameOfLife} />

<Section>
  <figure>
    <a href="https://www.youtube.com/watch?v=jaoSzCfa9OM">
      <img
        src={redstoneGameOfLife}
        alt="Screenshot of the game Minecraft, in which a player has built a redstone computer that runs Conway's Game of 
      Life simulation. The simulation is displayed on a large screen in the game, with a grid of cells that are either 
      alive or dead."
      />
    </a>
  </figure>

  <aside>
    <p>
      Thus we have described <a href="/ssotbme.pdf"
        >three levels of experience</a
      >. Firstly, to the macrocosm it is the processing of digital information.
      Secondly, what is being modelled is a smooth universe based on continuous
      mathematical equations. This smooth reality is only experienced by
      conscious microcosms, and they, thirdly, experience it only as binary
      digital information. This is like the way I only experience the
      <a href="https://mandelbrot.site/">continuous Mandlebrot set</a> in my
      computer when I invoke it as pixellated screen images — only in our
      reality the consciousness lies within the universe that it perceives. So
      also the physicist who wishes to pin down which slit
      <a href="https://en.wikipedia.org/wiki/Double-slit_experiment"
        >the photon passed through</a
      > can only do so by destroying the wavelike continuity of light. (I should
      explain that this model evades Penrose's argument in 'Shadows of Mind' because
      it places consciousness not within any algorithmic program but in the relationship
      between the microcosmic program and the macrocosm which contains it).
    </p>
  </aside>

  <p>
    All the gold that exists was transmuted once<br />
    by men learning to change themselves<br />
    who broke it and buried it<br />
    those who found it<br />
    took it for a metal<br />
    wanted it for its own sake<br />
    to have
    <a
      href="https://www.theatlantic.com/magazine/archive/1973/01/history-of-alchemy/664740/"
      >rather than to foresee</a
    ><br />
    and for them it was evil<br />
    and they declared that transmuting it was impossible<br />
    and evil<br />
  </p>

  <figure>
    <a href="https://youtu.be/HNWiPM2WWHY">
      <img
        src={paprikaDreams}
        alt="A girl sitting at a table with her hand in the air, drawn in the style of manga. The caption reads 'Don't you think dreams and the internet are similar?'"
      />
    </a>
  </figure>
</Section>
