<script lang="ts">
  import CollageMeta from "../CollageMeta.svelte";
  import Section from "../Section.svelte";

  import wingsOfDesireTrapeze from "$lib/img/wings-of-desire-trapeze.webp";

  const title = "the paper wall";
  const description = "She rested the nape of her neck against the cool iron bed-rail";
</script>

<CollageMeta {title} {description} imgSrc={wingsOfDesireTrapeze} />

<Section>
  <figure>
    <a href="https://youtu.be/c2y_bDxDuh0">
      <enhanced:img
        alt="A still from Wings of Desire showing a trapeze artist. Her body is laying horizonally 
        with the trapeze across her back. Two spotlights shine from different directions creating 
        two shadows of her on the top of a circus tent behind her."
        src="$lib/img/wings-of-desire-trapeze.webp"
      />
    </a>
    <figcaption>Profoundly lonely circus trapeze artist - Les Ailes du désir</figcaption>
  </figure>

  <p>She hugs a white rose to her heart—<br />
    The petals flare—in her breath blown;<br />
    She’ll catch the fruit on her death day—<br />
    The flower rooted in the bone.<br />
    The face at evening comes for love;<br />
    Reeds in the river meet below.<br />
    She sleeps small child, her face a tear;<br />
    The dream comes in with stars to go<br />
    Into the window, feigning snow.<br />
    This is the <a href="/archive/kind-valentine">book that no one knows</a>.<br />
    The paper wall holds mythic oaks,<br />
    Behind the oaks a castle grows.<br />
    Over the door, and over her<br />
    (She dies! she wakes!) the steeds gallop.<br />
    The child stirs, hits the dumb air, weeps,<br />
    Afraid of night's long loving-cup.
  </p>

  <aside>
    <p>
      Polly sat for a little time on the side of the bed, crying. Then she dried
      her eyes and went over to the looking-glass. She dipped the end of the
      towel in the water-jug and refreshed her eyes with the cool water. She
      looked at herself in profile and readjusted a hairpin above her ear. Then
      she went back to the bed again and sat at the foot. She regarded the
      pillows for a long time and the sight of them awakened in her mind 
      <a href="https://www.libraryofshortstories.com/onlinereader/the-boarding-house">secret
      amiable memories</a>. She rested the nape of her neck against the cool iron
      bed-rail and fell into a revery. There was no longer any perturbation
      visible on her face.
    </p>
  </aside>

  <figure>
    <a href="https://www.museodelprado.es/en/the-collection/art-work/volaverunt/9858e963-44af-43fe-b98d-07e1185072c8">
      <enhanced:img
        alt="An etching depicting a woman with arms outstretched, a cloak behind her and butterfly wings on her 
        head. Beneath her three older women (witches) support her in flight."
        src="$lib/img/volaverunt-goya.webp"
      />
    </a>
  <figcaption>Volaverunt (They have flown)</figcaption>
  </figure>
</Section>
