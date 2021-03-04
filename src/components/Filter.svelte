<svelte:options immutable />

<script>
    // Exports
    export let adhoc;
    export let adhocFiltered = [];

    // Props
    let labels = ["all", "coding", "design"];
    let ssnType;

    // Filtering
    // $: adhocFiltered = adhoc.filter((tag) => tag.type === ssnType);

    $: morbid = () => {
        if(ssnType) {
            adhocFiltered = adhoc.filter((tag) => tag.type === ssnType);
        }
    };

    // // Checkbox Filtering
    // $: adhocFiltered = () => {
    //     return (adhoc.filter(({ type }) =>
    //         adhoc.every((tag) => type.includes(ssnType))
    //     ));
    // };

    // Check Local Storage
    $: (async () => {
        if (typeof window !== "undefined") {
            if (!sessionStorage.getItem("ssnType")) {
                return (ssnType = "all");
            } else {
                return (ssnType = sessionStorage.getItem("ssnType"));
            }
        }
    })();

    // Mark Checkbox
    $: markit = async () => {
        if (!sessionStorage.getItem(ssnType)) {
            return sessionStorage.setItem("ssnType", ssnType);
        }
    };

    // DEVELOPMENT
    $: console.log(
		"%c ssnType ",
		"color:red; font-weight:bold; font-size:14px",
		ssnType
	);
    $: console.log(
		"%c adhocFiltered ",
		"color:green; font-weight:bold; font-size:14px",
		adhocFiltered
	);
</script>

<!-- HTML -->
<form on:submit|preventDefault>
    {#each labels as label}
        <input
            id={label} 
            name="checkbox" 
            type="radio" 
            value={label} 
            bind:group={ssnType} 
            on:change={markit} 
        />
        <label for={label}>
            <svg><use xlink:href="/sprite.svg#{label}" /></svg>
            {label}
        </label>
    {/each}
</form>

<!-- CSS -->
<style>
    form {
        /* Display */
        display: grid;
        grid-auto-flow: column;
        align-items: flex-start;
        align-content: flex-start;
        justify-content: space-between;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 0 calc(var(--pt) * 2);
        /* Sizing */
        min-width: 100%;
        max-width: 100%;
        width: 100%;
        /* Rest */
        padding: 0 calc(var(--pt) * 3) calc(var(--pt) * 2);
        padding-top: 0;
    }
    label {
        /* Display */
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        align-content: flex-start;
        justify-content: space-between;
        /* Sizing */
        min-height: calc(var(--pt) * 9.5);
		max-height: calc(var(--pt) * 9.5);
		height: 100%;
        /* Rest */
        background-color: var(--col-ghost);
        padding: calc(var(--pt) * 2);
        border-radius: calc(var(--pt) * 1.5);
        color: var(--col-seco);
        text-transform: capitalize;
    }
    input {
        display: none;
    }
    input:checked + label {
        background: var(--col-seco);
        color: var(--col-prime);
    }
    input:checked + label > svg {
        stroke: var(--col-prime);
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
		stroke: var(--col-seco);
		stroke-width: 2.5;
		fill: none;
	}
</style>
