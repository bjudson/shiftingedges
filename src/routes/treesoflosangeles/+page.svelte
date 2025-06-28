<script>
	import { posts } from './data.js';
	import PageContainer from '../PageContainer.svelte';
</script>

<svelte:head>
	<title>Trees of Los Angeles</title>
	<meta name="description" content="A photographic collection of trees throughout Los Angeles" />
</svelte:head>

<PageContainer>
	<main class="trees-grid">
		{#each posts as post}
			<a href="/treesoflosangeles/{post.slug}" class="tree-item">
				<img 
					src={post.imagePath} 
					alt={post.title}
					loading="lazy"
				/>
			</a>
		{/each}
	</main>
</PageContainer>

<style>
	.trees-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 2px;
		margin: 0;
		padding: 0;
		max-width: 600px;
	}

	.tree-item {
		display: block;
		aspect-ratio: 1;
		overflow: hidden;
		position: relative;
		background: var(--bg-color-alt);
		transition: opacity 0.2s ease;
	}

	.tree-item:hover {
		opacity: 0.8;
	}

	.tree-item img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	/* Mobile responsiveness */
	@media (max-width: 600px) {
		.trees-grid {
			gap: 1px;
		}
	}
</style>