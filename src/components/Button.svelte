<script>
	// Exported
	export let adhoc;
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
	button {
		/* Display */
		display: flex;
		flex-direction: row;
		align-items: center;
		align-content: center;
		justify-content: center;
		/* Sizing */
		min-height: calc((var(--pt) * 6));
		max-height: calc((var(--pt) * 6));
		height: calc((var(--pt) * 6));
		min-width: none;
		max-width: 100%;
		width: calc(100% - (var(--pt) * 6));
		/* Position */
		position: relative;
		bottom: 0;
		/* Rest */
		margin: calc(var(--pt) * 3);
		border-radius: var(--pt);
		background-color: var(--col-primelight);
		color: var(--col-black);
		margin: calc((var(--pt) * 3)) 0;
	}
</style>

<!-- HTML -->
<button type="button">{labelContact}</button>