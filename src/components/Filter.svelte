<script>
    // Exports
    export let adhoc;
    export let adhocfiltered = [];

    // Props
    let labels = ["designer", "developer", "all"];
    let selected;

    // Filtering
    $: adhocfiltered = adhoc.filter((tag) => tag.type === selected);

    // // Checkbox Filtering
    // $: subbyhubby = () => {
    //     return (checkgroup = adhoc.filter(({ type }) =>
    //         adhoc.every((tag) => type.includes(tag))
    //     ));
    // };

    // Check Local Storage
    $: (async () => {
        if (typeof window !== "undefined") {
            if (sessionStorage.getItem("adhoc_type") === null) {
                return selected = "designer";
            } else {
                return selected = sessionStorage.getItem("adhoc_type");
            }
        }
    })();

    // Mark Checkbox
    const markit = async () => {
        if (!sessionStorage.getItem(selected)) {
            return sessionStorage.setItem("adhoc_type", selected);
        } else {
            return sessionStorage.removeItem("adhoc_type", selected);
        }
    };
</script>

<!-- HTML -->
<form on:submit|preventDefault>
    <select name="labels" id="labels" bind:value={selected} on:blur={markit}>
        {#each labels as label}
            <option value={label}>{label}</option>
        {/each}
    </select>
</form>

<!-- CSS -->
<style>
    form,
    select {
        /* Display */
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        align-content: flex-start;
        justify-content: space-between;
        /* Sizing */
        min-width: 100%;
        max-width: 100%;
        width: 100%;
    }
    select {
        /* Appearance */
        appearance: none;
        -webkit-appearance: none;
        background: transparent;
        border: none;
        /* Rest */
        text-transform: capitalize;
        padding: calc(var(--pt) * 2) calc(var(--pt) * 3);
    }
</style>
