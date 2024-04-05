<script lang="ts">
	import CollageMeta from '../CollageMeta.svelte';

	import catesbyJackdaw from '$lib/img/catesby-jackdaw.jpg';
	import catesbyStarling from '$lib/img/catesby-starling.jpg';

	const title = 'seabird’s cry';
	const description = 'What came first, the seabird’s cry or the soul';
</script>

<CollageMeta {title} {description} imgSrc={catesbyJackdaw} />

<section>
	<figure>
		<a href="https://www.nga.gov/collection/art-object-page.53847.html">
			<img src={catesbyJackdaw} alt="Antique print of a jackdaw" />
		</a>
		<figcaption>The Purple Jack Daw</figcaption>
	</figure>

	<p>
		Where does spirit live? Inside or outside<br />
		<a href="https://www.nytimes.com/1992/05/17/books/seeing-things.html"
			>Things remembered, made things, things unmade?</a
		><br />
		What came first, the seabird's cry or the soul<br />
		<br />
		Imagined in the dawn cold when it cried?<br />
		Where does it roost at last? On dungy sticks<br />
		In a jackdaw’s nest up in the old stone tower<br />
		<br />
		Or a marble bust commanding the parterre?<br />
		How habitable is perfected form?<br />
		And how inhabited the windy light?<br />
		<br />
		What’s the use of a held note or held line <br />
		That cannot be assailed for reassurance?<br />
		(Set questions for the ghost of W. B.)
	</p>

	<aside>
		<p>
			We’ve since learned that the spectacular collective behavior of flocking birds (and schooling
			fish, herding mammals, swarming insects, and human crowds) is self-organized, emerging from
			simple rules of interaction among individuals. Birds are not “transfusing thought,”
			communicating telepathically with their flock members to act in unison, as Selous surmised.
			Instead, each bird is interacting with up to seven close neighbors, making individual movement
			decisions based on maintaining velocity and distance from fellow flock members and copying how
			sharply a neighbor turns, so that a group of, say, four hundred birds can veer in another
			direction in a little over half a second. What emerges is almost instantaneous ripples of
			movement in what appears to be <a
				href="https://www.google.com/books/edition/The_Genius_of_Birds/gjRSDgAAQBAJ?hl=en&gbpv=1&bsq=What%20emerges%20is%20almost%20instantaneous%20ripples%20of%20movement%20in%20what%20appears%20to%20be%20one%20living%20curtain%20of%20bird."
				>one living curtain of bird</a
			>.
		</p>
	</aside>

	<figure>
		<a
			href="https://www.rct.uk/collection/924826/the-red-wingd-starling-and-the-broad-leaved-candle-berry-myrtle"
		>
			<img src={catesbyStarling} alt="Antique print of a starling" />
		</a>
		<figcaption>The Red wing'd Starling and the Broad-leaved Candle-berry Myrtle</figcaption>
	</figure>
</section>
