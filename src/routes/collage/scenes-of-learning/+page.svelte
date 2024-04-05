<script lang="ts">
	import CollageMeta from '../CollageMeta.svelte';

	import chineseBookie from '$lib/img/killing-of-chinese-bookie.jpg';
	import chocolateGrinder from '$lib/img/duchamp-chocolate-grinder.jpeg';

	const title = 'scenes of learning';
	const description = 'Aroused by emptiness, you push a hand inside my jeans.';
</script>

<CollageMeta {title} {description} imgSrc={chineseBookie} />

<section>
	<figure>
		<a href="https://youtu.be/RHFLJm7VXOw">
			<img
				src={chineseBookie}
				alt="A still from a movie in which a woman gives a seductive look toward the camera. Her arms are held up above her head, and we can see the blurry back of a man's head in front of her, looking at her."
			/>
		</a>
		<figcaption>The Killing of a Chinese Bookie</figcaption>
	</figure>

	<p>
		Aroused by emptiness,<br />
		you push a hand <a href="landscape.html">inside my jeans</a>.<br />
		<br />
		The wind in the three-hundred-year-old<br />
		Lebanon cedars<br />
		makes a noise like nothing living.
	</p>

	<aside>
		<p>
			We don't need to advocate for promiscuity per se to note that recasting the scene of sex as a
			potential site of learning, of intelligence gathering, could be a worthwhile addition to and
			perhaps worthwhile displacement of the more socially palatable ways of describing sex and
			one's role in it. Without <a
				href="https://www.google.com/books/edition/On_Freedom/QkYtEAAAQBAJ?hl=en&gbpv=1&dq=We+don%27t+need+to+advocate+for+promiscuity+per+se+to+note+that+recasting+the+scene+of+sex+as+a+potential+site+of+learning&pg=PT104&printsec=frontcover"
				>scenes of learning</a
			>, we have no chance of figuring out what we want (or what we might want to get away from).
		</p>
	</aside>

	<figure>
		<a href="https://whitney.org/collection/works/7874">
			<img
				src={chocolateGrinder}
				style="border: 1px solid var(--fg-color)"
				alt="Etching of an old-fashioned chocolate grinder (black and gray on white paper)"
			/>
		</a>
		<figcaption>The Chocolate Grinder</figcaption>
	</figure>
</section>
