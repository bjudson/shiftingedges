<script lang="ts">
	export let title = 'hyptertext collage';
	export let description = '';
	export let imgSrc = '';
</script>

<svelte:head>
	<title>{title}</title>
	<meta property="og:title" content={title} />
	<meta property="og:image" content={imgSrc} />
	<meta property="og:description" content={description} />
</svelte:head>
