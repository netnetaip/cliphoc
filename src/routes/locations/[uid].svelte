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
	p {
		padding: calc(var(--pt) * 3);
	}
	svg {
        /* Sizing */
		min-height: calc(var(--pt) * 2.5);
		max-height: calc(var(--pt) * 2.5);
		height: calc(var(--pt) * 2.5);
		min-width: calc(var(--pt) * 2.5);
		max-width: calc(var(--pt) * 2.5);
        width: calc(var(--pt) * 2.5);
        /* Rest */
        stroke: var(--col-black);
        stroke-width: 2;
		fill: none;
		margin-right: var(--pt);
	}
	/* Fonts */
	dt, p, address {
		font-size: 1rem;
	}
	dd {
		font-size: .9rem;
	}
</style>

<!-- HTML -->
<div in:fly={{ duration: 320, y: 40, opacity: 1 }}>
	<section>
		<header>
			{#if adhoc.type === "designer"}
				<em style="color: var(--col-tert)">#{adhoc.type}</em>
			{:else}
				<em style="color: var(--col-seco)">#{adhoc.type}</em>
			{/if}
			<h2>{adhoc.title}</h2>
			<dl>
				<dt>{adhoc.author}</dt>
				<dd>{adhoc.city}, {adhoc.country}</dd>
			</dl>
		</header>
		<p>
			Voluptate ea aliquip nisi consequat ipsum ipsum enim non Lorem.
			Nulla ullamco ut nostrud Lorem quis officia dolore adipisicing.
			Ex Lorem officia reprehenderit velit aute voluptate aliquip
			exercitation in. Nulla anim ex amet do aliqua sunt laborum anim
			ad. Cupidatat voluptate deserunt sint elit ipsum aliquip aliquip
			excepteur. Elit irure sunt eu proident sit. Consectetur in
			consectetur ex sint exercitation enim amet laboris nisi. Cillum
			esse non ut id quis aliquip duis amet officia eu irure aliquip
			sint quis. Magna voluptate dolor in esse aliqua esse adipisicing
			commodo. Amet laboris id sit pariatur labore nostrud laborum
			velit exercitation ea veniam minim mollit duis. Voluptate ea aliquip nisi consequat ipsum ipsum enim non Lorem.
			Nulla ullamco ut nostrud Lorem quis officia dolore adipisicing.
			Ex Lorem officia reprehenderit velit aute voluptate aliquip
			exercitation in. Nulla anim ex amet do aliqua sunt laborum anim
			ad. Cupidatat voluptate deserunt sint elit ipsum aliquip aliquip
			excepteur. Elit irure sunt eu proident sit. Consectetur in
			consectetur ex sint exercitation enim amet laboris nisi. Cillum
			esse non ut id quis aliquip duis amet officia eu irure aliquip
			sint quis. Magna voluptate dolor in esse aliqua esse adipisicing
			commodo. Amet laboris id sit pariatur labore nostrud laborum
			velit exercitation ea veniam minim mollit duis.
		</p>
		<hr>
		<address>
			{adhoc.email}
		</address>
		<address>
			{#if adhoc.phone != null}
				{adhoc.phone}
			{/if}
		</address>
	</section>
	<!-- CTA's -->
	<Button {adhoc} {link}/>
</div>
