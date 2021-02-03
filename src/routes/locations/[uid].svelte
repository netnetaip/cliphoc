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
	import Button from "../../components/Button.svelte";

	// Exported
	export let adhoc;
	export let link = "javascript:;";

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
<svelte:options immutable />

<!-- CSS -->
<style>
	div {
		/* Display */
		display: flex;
		flex-direction: column;
		align-items: center;
		align-content: center;
		justify-content: flex-start;
		/* Rest */
		padding-top: calc(var(--pt) * 1.5);
	}
	header {
		padding: calc(var(--pt) * 3) calc(var(--pt) * 3) 0;
	}
	ul {
		padding: var(--pt) calc(var(--pt) * 3);
	}
	li {
		list-style-type: none;
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
        stroke-width: 3;
		fill: none;
		margin-right: var(--pt);
	}
	/* Fonts */
	dt, li, address {
		font-size: 1rem;
	}
	dd, em {
		font-size: .9rem;
	}
	em::before {
		content: "#";
	}
</style>

<!-- HTML -->
<div in:fly={{ duration: 320, y: 40, opacity: 1 }}>
	<section>
		<header>
			{#if adhoc.type === "designer"}
				<em style="color: var(--col-tert)">{adhoc.type}</em>
			{:else}
				<em style="color: var(--col-seco)">{adhoc.type}</em>
			{/if}
			<h1>{adhoc.title}</h1>
			<dl>
				<dt>{adhoc.author}</dt>
				<dd>{adhoc.city}</dd>
			</dl>
		</header>
	</section>
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
		<!-- <address>
			{adhoc.email}
		</address>
		<address>
			{#if adhoc.phone != null}
				{adhoc.phone}
			{/if}
		</address> -->
	<!-- CTA's -->
	<Button {adhoc} {link}/>
</div>
