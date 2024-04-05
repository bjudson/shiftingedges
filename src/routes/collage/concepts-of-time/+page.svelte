<script lang="ts">
	import CollageMeta from '../CollageMeta.svelte';

	import hayaosMachine from '$lib/img/hayaos-machine.jpg';
	import theClock from '$lib/img/the-clock.jpg';

	const title = 'concepts of time';
	const description = 'I think of a world where each memory could create its own legend.';
</script>

<CollageMeta {title} {description} imgSrc={hayaosMachine} />

<section>
	<figure>
		<a href="https://archive.org/details/ChrisMarkerSansSoleil1/"
			><img
				src={hayaosMachine}
				alt="Analog electronic equipment 
			of some kind with words 'overlay gates' and 'invert' printed above gride of holes, a few filled with pegs."
			/></a
		>
		<figcaption>Sans Soleil</figcaption>
	</figure>

	<p>
		Legends are born out of the need to decipher the indecipherable. Memories must make do with
		their delirium, with their drift. A moment stopped would burn like a frame of film blocked
		before the furnace of the projector. Madness protects, as fever does.
	</p>

	<p>
		I envy <a
			href="https://yhancik.tumblr.com/post/137271009763/hayao-yamaneko-was-more-meaningful-i-was-very"
			>Hayao</a
		>
		in his ‘zone,’ he
		<a href="https://www.markertext.com/sans_soleil.htm">plays with the signs of his memory</a>. He
		pins them down and decorates them like insects that would have flown beyond time, and which he
		could contemplate from a point outside of time: the only eternity we have left. I look at his
		machines. I think of a world where each memory could create its own legend.
	</p>
	<figure>
		<a href="https://youtu.be/0gSwtr3E4Fo?t=263"
			><img
				src={theClock}
				alt="A man in a suit looking at himself in a mirror that has gold hands of a clock over it."
			/></a
		>
		<figcaption>The Clock</figcaption>
	</figure>

	<aside>
		<h2><a href="https://www.moma.org/collection/works/156543">TIME-TABLE MUSIC</a></h2>

		<p>For performance in a railway station.</p>
		<p>The performers enter a railway station and obtain time-tables.</p>
		<p>
			They stand or seat themselves so as to be visible to each other, and, when ready, start their
			stopwatches simultaneously.
		</p>
		<p>
			Each performer interprets the tabled time indications in terms of minutes and seconds (e.g.
			7:16 = 7 minutes and 16 seconds). He selects one time by chance to determine the total
			duration of his performing. This done, he selects one row or column, and makes a sound at all
			points where tabled times within that row or column fall within the total duration of his
			performance.
		</p>
		<p>
			George Brecht<br />
			Summer, 1959
		</p>
	</aside>

	<p>
		<a href="https://www.mjt.org/exhibits/delson/sonabend.html">Sonnabend</a> believed that long
		term or "distant" memory was illusion, but similarly he questioned short term or "immediate"
		memory. On a number of occasions Sonnabend wrote, "<a
			href="https://www.mjt.org/exhibits/delson/oblisci.html"
			>there is only experience and its decay</a
		>" by which he meant to suggest that what we typically call short term memory is, in fact, our
		experiencing the decay of an experience. Interestingly, however, Sonnabend employed the term
		true memory, to describe this process of decay which, he held, was, in actuality, not memory at
		all.
	</p>
</section>
