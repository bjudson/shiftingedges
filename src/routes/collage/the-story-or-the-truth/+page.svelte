<script lang="ts">
  import CollageMeta from "../CollageMeta.svelte";
  import Section from "../Section.svelte";

  import bourgeois from "$lib/img/bourgeoid-a-linfini.jpg";
  import richterSailors from "$lib/img/richter-matrosen.jpg";

  const title = "the story or the truth";
  const description =
    "It was his story and lately I have come to hate stories.";
</script>

<CollageMeta {title} {description} imgSrc={bourgeois} />

<Section>
  <figure>
    <a href="https://www.moma.org/collection/works/139280"
      ><img
        src={bourgeois}
        alt="Etching with watercolor and gouache. Two red human figures painted in simple, blurry lines inside round light red forms connected by two tubes, which also connect to gray twisting tubes."
      /></a
    >
    <figcaption>À L’Infini (1)</figcaption>
  </figure>

  <p>
    My husband believed that I had treated him monstrously. This belief of his
    could not be shaken: his whole world depended on it. It was his story and
    lately I have come to hate stories. If someone were to ask me what disaster
    had befallen my life, I might ask them if they wanted <a
      href="https://www.google.com/books/edition/Aftermath/khxOpy8es5wC?hl=en&gbpv=1&dq=truth&pg=PT7&printsec=frontcover"
      >the story or the truth.</a
    >
  </p>

  <aside>
    <p>
      <a
        href="https://www.google.com/books/edition/Drift_into_Failure/p4UfEAAAQBAJ?hl=en&gbpv=1&pg=PA85&printsec=frontcover"
        >Newtonian hegemony</a
      >, then, is maintained not by imposition but by interpellation, by the
      confluences of shared relationships, shared discourses, institutions, and
      knowledge. Foucault called the practices that produce knowledge and keep
      knowledge in circulation an episteme: a set of rules and conceptual tools
      for what counts as factual. Such practices are exclusionary. They function
      in part to establish distinctions between those statements that will be
      considered true and those that will be considered false. Or factual rather
      than speculative. Or just rather than unjust.
    </p>
  </aside>

  <p>
    In the meantime I am listening to a story<br />
    about a salesman and somebody’s daughter<br />
    the story goes that the salesman
    <a href="https://www.youtube.com/watch?v=ueqMm_1Ao-Y">learned his lesson</a
    ><br />
    and now he lives in the country like he oughta<br />
    <br />
    I laugh when someone tells a joke<br />
    but I always keep my mind on you<br />
    or am I just a fool to keep believing<br />
    that the map which you gave me was true?
  </p>

  <figure>
    <a
      href="https://gerhard-richter.com/en/art/paintings/photo-paintings/everyday-life-18/sailors-5764"
      ><img
        src={richterSailors}
        alt="Blurry grayscale painting of a group of sailors."
      /></a
    >
    <figcaption>Matrosen (Sailors)</figcaption>
  </figure>
</Section>
