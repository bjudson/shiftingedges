<script lang="ts">
	import CollageMeta from '../CollageMeta.svelte';

	import theConversation from '$lib/img/the-conversation.jpg';
	import tinguelyHomage from '$lib/img/tinguely-homage.jpg';

	const title = 'systems disintegrate';
	const description = 'The world doesn’t need a center';
</script>

<CollageMeta {title} {description} imgSrc={theConversation} />

<section>
	<figure>
		<a
			href="https://scrapsfromtheloft.com/movies/the-making-of-the-conversation-an-interview-with-francis-ford-coppola/"
		>
			<img
				src={theConversation}
				alt="A man playing saxophone in a room that has been ripped apart"
			/>
		</a>
		<figcaption>The Conversation</figcaption>
	</figure>

	<p>
		The light does not know<br />
		what we need<br />
		<br />
		the light sinks down trying<br />
		to build <a href="https://whenithides.org/index.php?pid=52">a center in the world</a><br />
		<br />
		the world doesn’t need a center<br />
		the grass holds it together<br />
		at the edges the tips reaching<br />
		for the wind the roots<br />
		strangling the light
	</p>

	<aside>
		<p>
			Why do large systems disintegrate? The process seems to occur in three steps, the first two of
			which are controllable and the third of which is a direct result of <a
				href="http://www.melconway.com/Home/Committees_Paper.html">our homomorphism</a
			>.
		</p>
		<ul>
			<li>
				First, the realization by the initial designers that the system will be large, together with
				certain pressures in their organization, make irresistible the temptation to assign too many
				people to a design effort.
			</li>
			<li>
				Second, application of the conventional wisdom of management to a large design organization
				causes its communication structure to disintegrate.
			</li>
			<li>
				Third, the homomorphism insures that the structure of the system will reflect the
				disintegration which has occurred in the design organization.
			</li>
		</ul>
	</aside>

	<figure>
		<a href="https://www.moma.org/collection/works/81174">
			<img src={tinguelyHomage} alt="A strange machine or sculpture assembled haphazardly" />
		</a>
		<figcaption>Fragment from Homage to New York</figcaption>
	</figure>
</section>
