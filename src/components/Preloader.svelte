<script>
	import { onMount } from "svelte";

	// Lets
	let p = 0;
	let visible = false;

	// Rest
	onMount(() => {
		function next() {
			visible = true;
			p += 0.1;
			const remaining = 1 - p;
			if (remaining > 0.15) setTimeout(next, 500 / remaining);
		}
		setTimeout(next, 250);
	});
</script>

{#if visible}
	<div>
		<span style="width: {p * 100}%" />
	</div>
{/if}

<style>
	div {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: calc(var(--pt) / 2);
		z-index: 200;
	}
	span {
		position: absolute;
		left: 0;
		top: 0;
		height: 100%;
		background-color: var(--col-seco);
		transition: width 0.4s;
	}
</style>
