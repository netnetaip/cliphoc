<svelte:options immutable />

<!-- Server -->
<script context="module">
	export async function preload(page) {
		// URL + ID
		const { uid } = page.params;
		const url = "https://6016e904f534300017a4509d.mockapi.io/board/" + uid;
		// Fetch
		const res = await this.fetch(url);
		// Validate
		if (res.status === 200) {
			const adhoc = await res.json();
			return { adhoc };
		}
		// Error
		this.error(404, "Post is no longer valid.");
	}
</script>

<script>
	import { fly } from "svelte/transition";

	// Exported
	export let adhoc;

	// Back
	const historyback = () => {
		if (typeof window !== "undefined") {
			window.history.back();
		}
	};
</script>

<!-- Special -->
<svelte:head>
	<title>{adhoc.title}</title>
</svelte:head>

<!-- HTML -->
<div in:fly={{ duration: 320, y: 40, opacity: 1 }}>
	<section>
		<header>
			<!-- <mark>{adhoc.type}</mark> -->
			<h1>{adhoc.title}</h1>
			<dl>
				<dt>{adhoc.author}</dt>
				<dd>{adhoc.city}</dd>
			</dl>
		</header>
		<strong>
			{adhoc.amount}&euro;
			{#if adhoc.hour}
				an hour
			{/if}
		</strong>
	</section>
	<!-- &nbsp;
		<strong>{adhoc.amount} {adhoc.currency} / {adhoc.paytype}</strong>
		{#if adhoc.currency === "USD"}
			<a href="https://www.google.com/search?q={adhoc.amount}+usd+to+eur" target="_blank" rel="noopener noreferrer">
				<svg><use xlink:href="/sprite.svg#plus"></use></svg>
			</a>
		{/if} -->
	<section>
		<header>
			<h2>Brief</h2>
		</header>
		<ul>
			{#each adhoc.brief as list}
				<li>{list}</li>
			{/each}
		</ul>
	</section>
	<section>
		<header>
			<h2>Requirements</h2>
		</header>
		<ul>
			{#each adhoc.requirements as list}
				<li>{list}</li>
			{/each}
		</ul>
	</section>
	<button type="button">Show contacts</button>
</div>
<!-- <address>
	{adhoc.email}
</address>
<address>
	{#if adhoc.phone != null}
		{adhoc.phone}
	{/if}
</address> -->
<!-- CTA's -->

<!-- CSS -->
<style>
	div, section {
		/* Display */
		display: grid;
		align-items: start;
		align-content: start;
		justify-items: start;
		justify-content: start;
		grid-auto-flow: column;
		grid-template-columns: 100%;
		grid-template-rows: repeat(4, auto);
		grid-column-gap: calc(var(--pt) / 2);
		/* Sizing */
		min-width: 100%;
		max-width: 100%;
		width: 100%;
	}
	div {
		padding: calc(var(--pt) * 3);
	}
	section {
		margin-bottom: calc(var(--pt) * 3);
	}
	header {
		/* Display */
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		align-content: flex-start;
		justify-content: flex-start;
		/* Sizing */
		min-width: inherit;
		max-width: inherit;
		width: inherit;
	}
	strong {
		margin-top: calc(var(--pt) * 2);
		/* Rest */
		background-color: var(--col-ghost);
		color: var(--col-seco);
		padding: var(--pt) calc(var(--pt) * 2);
		border-radius: var(--pt);
	}
	ul {
		margin: var(--pt) 0;
	}
	li {
		list-style-type: none;
	}
	button {
		/* Display */
		display: flex;
		flex-direction: row;
		align-items: center;
		align-content: center;
		justify-content: center;
		/* Sizing */
		min-width: 100%;
		max-width: 100%;
		width: 100%;
		/* Rest */
		padding: calc(var(--pt) * 2) calc(var(--pt) * 3);
		border-radius: var(--pt);
		background-color: var(--col-seco);
		color: var(--col-prime);
		/* Transition */
		transition: transform 0.2s cubic-bezier(0.44, 0.21, 0, 1);
		will-change: transform;
	}
	button:active {
		transform: scale3d(0.96, 0.96, 1);
	}
</style>
