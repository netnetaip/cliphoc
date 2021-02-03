<script>
	// Exported
	export let adhoc;
	export let link;
	export let state = false;

	// Lets
	let labelContact = "Show contacts";

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
		position: relative;
		bottom: 0;
		/* Rest */
		margin: calc(var(--pt) * 3);
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
		min-width: 100%;
		max-width: 100%;
		width: 100%;
		/* Rest */
		border-radius: var(--pt);
		background-color: var(--col-seco);
		color: var(--col-prime);
		margin-right: var(--pt);
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
	<a href={link}>{labelContact}</a>
</div>