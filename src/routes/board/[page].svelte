<svelte:options immutable />

<!-- Server -->
<script context="module">
	export async function preload({ params }) {
		const page = +params.page;
		const limit = 50;
		// Fetch
		const res = await this.fetch(`https://6016e904f534300017a4509d.mockapi.io/board?page=${page}&limit=${limit}`)

		// Validate
		if (res.status === 200) {
			const adhoc = await res.json();
			return { adhoc, page, limit };
		}

		// Error
		this.error(500, "Problems with server. Be right back soon.");
	}
</script>

<!-- Client -->
<script>
	import { fly } from "svelte/transition";
	import Post from "./_post.svelte";
	import Filter from "../../components/Filter.svelte";

	// Exported
	export let adhoc = [];
	export let page;
	export let limit;

	// Load More
	$: next = `/board/${+page + 1}`;

	// DEVELOPER_CONSOLE_LOG
	$: console.log(
		"%c BROWSE adhoc ",
		"color:blue; font-weight:bold; font-size:14px",
		adhoc
	);
	// $: console.log(
	// 	"%c BROWSE AdhocStore ",
	// 	"color:green; font-weight:bold; font-size:14px",
	// 	AdhocStore
	// );
</script>

<!-- Special -->
<svelte:head>
	<title>Board</title>
</svelte:head>

<!-- HTML -->
<section in:fly={{ duration: 320, y: 40, opacity: 1 }}>
	<header>
		{#if adhoc.length > 0}
			<h1>Job board</h1>
			<p>Use filter for easier find</p>
		{:else}
			<h1>List ended</h1>
		{/if}
	</header>
	<Filter bind:adhoc />
	<div>
		{#each adhoc as adhoc}
			<Post {adhoc} />
		{/each}
	</div>
	{#if next && adhoc.length === limit}
		<a class="more" href={next}>Next page</a>
	{/if}
</section>

<!-- CSS -->
<style>
	section, section > div, header {
		display: flex;
		flex-direction: column;
	}
	a {
		display: flex;
		flex-direction: row;
	}
	section {
		/* Display */
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
		overscroll-behavior: contain;
	}
	section > div {
		/* Display */
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
	}
	header {
		/* Display */
		align-items: flex-start;
		align-content: flex-start;
		justify-content: flex-end;
		/* Sizing */
		min-width: none;
		max-width: 100%;
		width: 100%;
		/* Rest */
		padding: calc(var(--pt) * 3);
	}
	a {
		/* Display */
		align-items: center;
		align-content: center;
		justify-content: center;
		/* Sizing */
		min-width: none;
		max-width: 100%;
		width: calc(100% - (var(--pt) * 6));
		/* Rest */
		padding: calc(var(--pt) * 2) calc(var(--pt) * 3);
		border-radius: var(--pt);
		background-color: var(--col-primelight);
		color: var(--col-black);
		margin: calc((var(--pt) * 3)) 0;
		/* Transition */
		transition: transform 0.2s cubic-bezier(0.44, 0.21, 0, 1);
		will-change: transform;
	}
	a:hover, a:active {
		transform: scale3d(0.96, 0.96, 1);
	}
</style>
