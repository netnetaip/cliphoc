<svelte:options immutable />

<!-- Server -->
<script context="module">
	export async function preload(page, session) {
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
		this.error(500, "Problems with server. Be right back soon ;)");
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
			<mark style="color: #BBB">{adhoc.type}</mark>
			<h1>{adhoc.title}</h1>
			<dl>
				<dt>{adhoc.author}</dt>
				<dd>{adhoc.city}</dd>
			</dl>
		</header>
	</section>
	<!-- &nbsp;
		<strong>{adhoc.amount} {adhoc.currency} / {adhoc.paytype}</strong>
		{#if adhoc.currency === "USD"}
			<a href="https://www.google.com/search?q={adhoc.amount}+usd+to+eur" target="_blank" rel="noopener noreferrer">
				<svg><use xlink:href="/sprite.svg#plus"></use></svg>
			</a>
		{/if} -->
	<strong>{adhoc.amount} {adhoc.currency} / {adhoc.paytype}</strong>
	<section>
		<header>
			<h2>Brief</h2>
		</header>
		<ul>
			{#each adhoc.brief as item}
				<li>{item}</li>
			{/each}
		</ul>
	</section>
	<section>
		<header>
			<h2>Requirements</h2>
		</header>
		<ul>
			{#each adhoc.requirements as item}
				<li>{item}</li>
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
		display: flex;
		flex-direction: column;
		align-items: center;
		align-content: center;
		justify-content: flex-start;
	}
	header {
		/* Display */
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		align-content: flex-start;
		justify-content: flex-start;
		/* Sizing */
		min-width: 100vw;
		max-width: 100%;
		width: 100%;
		/* Rest */
		padding: calc(var(--pt) * 3) calc(var(--pt) * 3) 0;
	}
	ul, strong {
		/* Sizing */
		min-width: none;
		max-width: 100%;
		width: 100%;
		/* Rest */
		padding: var(--pt) calc(var(--pt) * 3);
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
		min-width: none;
		max-width: 100%;
		width: calc(100% - (var(--pt) * 6));
		/* Rest */
		padding: calc(var(--pt) * 2) calc(var(--pt) * 3);
		border-radius: var(--pt);
		background-color: var(--col-seco);
		color: var(--col-prime);
		margin: calc((var(--pt) * 3)) 0;
	}
</style>
