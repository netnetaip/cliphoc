<script>
	// Exported
	export let adhoc;
	export let link;
	export let state = false;

	// Check Local Storage
	$: (async() => {
		if (typeof window !== "undefined") {
			if (localStorage.getItem(adhoc.id, "Saved")) {
				return state = true;
			} else {
				return state = false;
			}
		}
	})();

	// Mark Checkbox
	$: pin = async () => {
		if (!localStorage.getItem(adhoc.id)) {
			return localStorage.setItem(adhoc.id, "Saved");
		} else {
			return localStorage.removeItem(adhoc.id, "Saved");
		}
	};
</script>

<!-- CSS -->
<style>
	div {
		/* Display */
		display: flex;
		flex-direction: row;
		align-items: center;
		align-content: center;
		justify-content: space-between;
		/* Sizing */
		min-height: calc(10vh + (var(--pt) * 2));
		max-height: calc(10vh + (var(--pt) * 2));
		height: calc(10vh + (var(--pt) * 2));
		min-width: 100%;
		max-width: 100%;
		width: 100%;
		/* Position */
		position: sticky;
		position: -webkit-sticky;
		bottom: 0;
		/* Rest */
		background-color: var(--col-prime);
		border-top: 2px solid var(--col-primelight);
		padding: calc(var(--pt) * 2) calc(var(--pt) * 3);
	}
	a, label {
		/* Display */
		display: flex;
		flex-direction: row;
		align-items: center;
		align-content: center;
		justify-content: center;
	}
	a {
		/* Sizing */
		min-height: 100%;
		max-height: 100%;
		height: 100%;
		min-width: 70vw;
		max-width: 70vw;
		width: 100%;
		/* Rest */
		border-radius: var(--pt);
		background-color: var(--col-seco);
		color: var(--col-prime);
		margin-right: var(--pt);
	}
	label {
		/* Sizing */
		min-height: 100%;
		max-height: 100%;
		height: 100%;
		min-width: none;
		max-width: none;
		width: 100%;
		/* Rest */
		border-radius: var(--pt);
		background-color: var(--col-primelight);
	}
	input[type=checkbox] {
		-moz-appearance: none;
		-webkit-appearance: none;
		appearance: none;
		display: none;
	}
	input[type=checkbox]:checked ~ svg {
		fill: var(--col-black);
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
    }
</style>

<!-- HTML -->
<div>
	<a href={link}>Open map</a>
	<label>
		<input
			on:input={() => navigator.vibrate(10)}
			on:click={pin} 
			bind:checked={state} 
			type="checkbox" 
			value={adhoc.id} 
			name="save" 
			aria-pressed="false" />
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
	</label>
</div>