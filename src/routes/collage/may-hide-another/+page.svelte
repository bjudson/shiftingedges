<script lang="ts">
	import CollageMeta from '../CollageMeta.svelte';

	import noDrugsAllowed from '$lib/img/no-drugs-allowed.jpg';
	import smithsonNonsite from '$lib/img/smithson-nonsite.jpg';

	const title = 'may hide another';
	const description = 'One evening may hide another, one shadow, a nest of shadows.';
</script>

<CollageMeta {title} {description} imgSrc={noDrugsAllowed} />

<section>
	<figure>
		<img
			src={noDrugsAllowed}
			alt="Photograph take inside a bar. On the wall a dry erase board with a drink menu 
        offers beer, wine, shots, etc. Through the door, a cinder block wall painted blue is visible, with the hand-painted 
        words NO DRUGS ALLOWED."
		/>
	</figure>

	<p>
		One idea <a href="https://www.poetryfoundation.org/poems/57327/one-train-may-hide-another"
			>may hide another</a
		>: Life is simple<br />
		Hide Life is incredibly complex, as in the prose of Gertrude Stein<br />
		One sentence hides another and is another as well. And in the laboratory<br />
		One invention may hide another invention,<br />
		One evening may hide another, one shadow, a nest of shadows.
	</p>

	<aside>
		Frequently, the organization of the system reflects the sprawl and history of the organization
		that built it (as per CONWAY’S LAW [<a
			href="http://laputan.org/pub/papers/processpatterns.pdf"
			title="A Development Process Generative Pattern Language">Coplien 1995</a
		>]) and the
		<a href="http://www.laputan.org/mud/mud.html">compromises that were made along the way</a>.
		Renegotiating these relationships is often difficult once the basic boundaries among system
		elements are drawn. These relationships can take on the immutable character of “site” boundaries
		that Brand [<a
			href="https://openlibrary.org/works/OL823146W/How_Buildings_Learn"
			title="How Building Learn (OpenLibrary)">Brand 1994</a
		>] observed in real cities.
	</aside>

	<figure>
		<a href="https://holtsmithsonfoundation.org/robert-smithson-nonsite-franklin-new-jersey-1968">
			<img
				src={smithsonNonsite}
				alt="Bin-like structures in which artist Robert Smithson deposited rocks, sand, broken concrete, 
            and other elements he collected  at various sites in New Jersey. Accompanying these sculptures, Smithson hung on gallery 
            walls photographs he’d snapped at the same Garden State locations, as well as fragments of maps that could lead other people 
            to these places"
			/>
		</a>
		<figcaption>A Nonsite (Franklin, New Jersey)</figcaption>
	</figure>
</section>
