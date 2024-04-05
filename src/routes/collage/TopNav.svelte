<script lang="ts">
	export let currentPage: string;
	export let pages: string[] = [];

	$: currentIndex = pages.findIndex((page) => page === currentPage);
	$: visiblePages = pages.slice(0, currentIndex > -1 ? currentIndex + 1 : pages.length - 1);
</script>

<nav>
	{#each visiblePages as page}
		{#if page === currentPage}
			<span>{page.replace(/-/g, ' ')}</span>
		{:else}
			<a href="/collage/{page}">
				{page.replace(/-/g, ' ')}
			</a>
		{/if}
	{/each}
</nav>
