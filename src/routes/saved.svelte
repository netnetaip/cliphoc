<!-- Server -->
<script context="module">
	export async function preload(page, session) {
		// URL
		const url = "https://6016e904f534300017a4509d.mockapi.io/board";
		// Fetch
		const res = await this.fetch(url);
		// Validate
		if (res.status === 200) {
			const list = await res.json();
			return { list };
		}
		// Error
		this.error(500, "Problems with server. Be right back soon ;)");
	}
</script>

<!-- Client -->
<script>
	import { fly } from "svelte/transition";
	import Figure from "../components/image/Figure.svelte";

	// Exported
	export let list;
	export let intersect = true;

	// Lets
	let getLocal;
	let cards = [];

	// Filtering
	$: cards = list.filter((uid) => {
		if (typeof window !== "undefined") {
			getLocal = Object.keys(localStorage);
			return getLocal.includes(uid.id);
		}
	});
</script>

<!-- Special -->
<svelte:head>
	<title>Favourites</title>
</svelte:head>
<svelte:options immutable />

<!-- CSS -->
<style>
	section {
		/* Display */
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		align-content: flex-start;
		justify-content: flex-start;
		/* Sizing */
		min-height: 100%;
		max-height: none;
		height: 100%;
		min-width: 100vw;
		max-width: 100vw;
		width: 100vw;
		/* Rest */
		padding-top: calc(var(--pt) * 2);
		background-color: var(--col-prime);
	}
	section > div {
		/* Display */
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		align-content: flex-start;
		justify-content: flex-start;
		/* Sizing */
		min-height: none;
		max-height: none;
		height: auto;
		min-width: 100%;
		max-width: 100%;
		width: 100%;
		/* Rest */
		position: relative;
		overflow-x: hidden;
	}
	section > div > :global(a) {
		padding: calc(var(--pt) * 1.5) calc(var(--pt) * 3);
	}
	section > div > :global(a):not(:last-of-type) {
		border-bottom: 2px solid var(--col-primelight);
	}
	section > div > :global(a > figure) {
		/* Sizing */
		min-height: calc(var(--pt) * 8);
		max-height: calc(var(--pt) * 8);
		height: calc(var(--pt) * 8);
		min-width: calc(var(--pt) * 8);
		max-width: calc(var(--pt) * 8);
		width: calc(var(--pt) * 8);
	}
	a {
		/* Display */
		display: flex;
		flex-direction: row;
		align-items: center;
		align-content: center;
		justify-content: flex-start;
		/* Sizing */
		min-height: none;
		max-height: none;
		height: auto;
		min-width: 100%;
		max-width: 100%;
		width: 100%;
	}
    dl {
		/* Sizing */
		min-height: none;
		max-height: none;
		height: auto;
		min-width: none;
		max-width: 100%;
		width: 100%;
        /* Rest */
		padding: var(--pt) calc(var(--pt) * 2);
		overflow-x: hidden;
    }
    dt, dd {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
	}
	svg {
        /* Sizing */
		min-height: calc(var(--pt) * 3);
		max-height: calc(var(--pt) * 3);
		height: calc(var(--pt) * 3);
		min-width: calc(var(--pt) * 3);
		max-width: calc(var(--pt) * 3);
        width: calc(var(--pt) * 3);
        /* Rest */
        stroke: var(--col-black);
        stroke-width: 2;
		fill: none;
	}
</style>

<!-- HTML -->
<section in:fly={{ duration: 320, y: 40, opacity: 1 }}>
	<div>
		{#each cards as card (card.id)}
			<a href="locations/{card.id}" rel=prefetch>
				<Figure {card} {intersect}/>
				<dl>
					<dt>{card.title}</dt>
					<dd>{card.city}</dd>
				</dl>
				<svg><use xlink:href="/sprite.svg#right"></use></svg>
			</a>
		{/each}
	</div>
</section>
