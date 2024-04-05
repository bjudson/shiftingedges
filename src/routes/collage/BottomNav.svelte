<script lang="ts">
	export let currentPage: string;
	export let pages: string[] = [];

	$: visiblePages = pages.slice(pages.findIndex((page) => page === currentPage) + 1);
</script>

<nav>
	{#each visiblePages as page}
		<a href="/collage/{page}">
			{page.replace(/-/g, ' ')}
		</a>
	{/each}
</nav>
