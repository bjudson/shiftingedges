<script lang="ts">
    import CollageMeta from "../CollageMeta.svelte";
    import Section from "../Section.svelte";

    import angelusNovus from "$lib/img/klee-angelus-novus.webp";
    import blakeAngel from "$lib/img/blake-albions-angel.webp";

    const title = "angel of history";
    const description = "the pile of debris before him grows skyward";
</script>

<CollageMeta {title} {description} imgSrc={angelusNovus} />

<Section>
    <figure>
        <a
            href="https://www.commonwealmagazine.org/klee-angelus-novus-benjamin-bourneuf-Quaytman"
        >
            <img
                src={angelusNovus}
                alt="A stylized figure with a simplified facial expression, featuring large eyes, curly hair or headdress, and raised hands."
            />
        </a>
        <figcaption>Angelus Novus</figcaption>
    </figure>

    <aside>
        A Klee painting named “Angelus Novus” shows an angel looking as though
        he is about to move away from something he is fixedly contemplating. His
        eyes are staring, his mouth is open, his wings are spread. This is how
        one pictures the angel of history. His face is turned toward the past.
        Where we perceive a chain of events, he sees one single catastrophe
        which keeps piling wreckage upon wreckage and hurls it in front of his
        feet. The angel would like to stay, awaken the dead, and make whole what
        has been smashed. But a <a
            href="https://users.manchester.edu/FacStaff/SSNaragon/Naragon/misc/Klee.html"
            >storm is blowing from Paradise</a
        >; it has got caught in his wings with such violence that the angel can
        no longer close them. This storm irresistibly propels him into the
        future to which his back is turned, while the pile of debris before him
        grows skyward. This storm is what we call progress.
    </aside>

    <p>
        Wasn’t all this a miracle? <a
            href="https://rilkepoetry.com/duino-elegies/seventh-duino-elegy/"
            >Be astonished, Angel</a
        >, for we<br />
        are this, O Great One; proclaim that we could achieve this, my breath<br
        />
        is too short for such praise. So, after all, we have not<br />
        failed to make use of these generous spaces, these<br />
        spaces of ours. (How frighteningly great they must be,<br />
        since thousands of years have not made them overflow with our feelings.)<br
        />
        But a tower was great, wasn’t it? Oh Angel, it was—<br />
        even when placed beside you? Chartres was great—, and music<br />
        reached still higher and passed far beyond us. But even<br />
        a woman in love—, oh alone at night by her window. . . .<br />
        didn’t she reach your knee—?
    </p>

    <figure>
        <a
            href="https://www.blakearchive.org/copy/europe.k?descId=europe.k.illbk.14"
        >
            <img
                src={blakeAngel}
                alt="A watercolor religious scene with a pope or bishop-like figure in red robes and a tall headdress seated at the top, with bat-like wings behind him. Below, two white-robed angels with large wings hold measuring instruments over a yellow cloud, while handwritten text appears at the bottom on a scroll-like element."
            />
        </a>
        <figcaption>Albion’s Angel rose upon the Stone of Night</figcaption>
    </figure>
</Section>
