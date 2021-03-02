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
			if (remaining > 0.2) setTimeout(next, 600 / remaining);
		}
		setTimeout(next, 600);
	});
</script>

{#if visible}
	<progress value={p * 100} max="100"></progress>
{/if}

<style>
	progress {
		/* Position */
		position: absolute;
		top: calc(var(--pt) * 8);
		/* Sizing */
		min-height: calc(var(--pt) / 2);
		max-height: calc(var(--pt) / 2);
		height: calc(var(--pt) / 2);
        min-width: 100%;
        max-width: 100%;
        width: 100%;
		/* Rest */
		-webkit-appearance: none;
   		appearance: none;
		transition: all 0.4s;
		z-index: 200;
	}
	progress::-webkit-progress-bar {
		background-color: var(--col-primelight);
	}
	progress[value]::-webkit-progress-value {
		background-color: var(--col-seco);
	}
</style>
