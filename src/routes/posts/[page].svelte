<!-- Server -->
<svelte:options immutable />

<!-- Server -->
<script context="module">
	export async function preload({ params }) {
		const page = +params.page;
		// Fetch
		const res = await this.fetch(`https://6016e904f534300017a4509d.mockapi.io/board?page=${page}&limit=20`);
		console.log("URL", res);

		// Validate
		if (res.status === 200) {
			const adhoc = await res.json();
			return { adhoc, page };
		}

		// Error
		this.error(500, "Problems with server. Be right back soon ;)");
	}
</script>

<!-- Client -->
<script>
	import { fly } from "svelte/transition";
	import Post from "./_Post.svelte";

	// Exported
	export let adhoc = [];
	export let page;

	// Next
	$: next = `/posts/${+page + 1}`;

	// DEVELOPER_CONSOLE_LOG
	$: console.log(
		"%c BROWSE adhoc ",
		"color:blue; font-weight:bold; font-size:14px",
		adhoc
	);
</script>

<!-- Special -->
<svelte:head>
	<title>Browse</title>
</svelte:head>

<!-- HTML -->
<section in:fly={{ duration: 320, y: 40, opacity: 1 }}>
	<header>
		<h1>Board</h1>
	</header>
	<div>
		{#each adhoc as adhoc, i}
			<Post {adhoc} />
		{/each}
	</div>
	{#if next && adhoc.length > 0}
		<a class="more" href={next}>
			<svg><use xlink:href="/sprite.svg#plus" /></svg>
			&nbsp;Load more
		</a>
	{/if}
</section>

<!-- CSS -->
<style>
	section {
		/* Display */
		display: flex;
		flex-direction: column;
		align-items: center;
		align-content: center;
		justify-content: center;
		/* Sizing */
		min-height: 100%;
		max-height: none;
		height: auto;
		min-width: 100vw;
		max-width: 100vw;
		width: 100vw;
		/* Rest */
		background-color: var(--col-prime);
		overflow-y: scroll;
		overflow-x: hidden;
		overscroll-behavior: contain;
	}
	section > div {
		/* Display */
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		align-content: flex-start;
		justify-content: flex-start;
	}
	section > div {
		/* Sizing */
		min-height: none;
		max-height: none;
		height: auto;
		min-width: 100%;
		max-width: 100%;
		width: 100%;
		/* Rest */
		overflow: auto;
	}
	header {
		/* Display */
		display: flex;
		flex-direction: row;
		align-items: flex-end;
		align-content: flex-end;
		justify-content: flex-start;
		/* Sizing */
		min-height: 8vh;
		max-height: 8vh;
		height: 8vh;
		min-width: 100%;
		max-width: 100%;
		width: 100%;
		/* Rest */
		padding: 0 calc(var(--pt) * 3);
	}
	a {
		/* Display */
		display: flex;
		flex-direction: row;
		align-items: center;
		align-content: center;
		justify-content: center;
		/* Sizing */
		min-width: none;
		max-width: 100%;
		width: auto;
		/* Rest */
		padding: calc(var(--pt) * 1.5) calc(var(--pt) * 3);
		border-radius: var(--pt);
		background-color: var(--col-primelight);
		color: var(--col-black);
		margin: calc((var(--pt) * 3)) 0;
	}
	svg {
		/* Sizing */
		min-height: calc(var(--pt) * 2);
		max-height: calc(var(--pt) * 2);
		height: calc(var(--pt) * 2);
		min-width: calc(var(--pt) * 2);
		max-width: calc(var(--pt) * 2);
		width: calc(var(--pt) * 2);
		/* Rest */
		stroke: var(--col-black);
		stroke-width: 2.5;
		fill: none;
	}
</style>
