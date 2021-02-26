<svelte:options immutable />

<script>
    // Exports
    export let adhoc;
    export let adhocFiltered = [];

    // Props
    let labels = ["designer", "developer", "all"];
    let label;
    let flavours = [];

    // Filtering
    $: adhocFiltered = adhoc.filter((tag) => tag.type === label);

    // // Checkbox Filtering
    // $: subbyhubby = () => {
    //     return (checkgroup = adhoc.filter(({ type }) =>
    //         adhoc.every((tag) => type.includes(tag))
    //     ));
    // };

    // Check Local Storage
    $: (async () => {
        if (typeof window !== "undefined") {
            if (!sessionStorage.getItem("adhoc_type")) {
                return (flavours = "designer");
            } else {
                return (flavours = sessionStorage.getItem("adhoc_type"));
            }
        }
    })();

    // Mark Checkbox
    const markit = async () => {
        if (!sessionStorage.getItem(flavours)) {
            return sessionStorage.setItem("Session_Key", flavours);
        }
    };

    // DEVELOPMENT
    $: console.log("Flavours", flavours);
</script>

<!-- HTML -->
<form on:submit|preventDefault>
    {#each labels as label}
        <label for={label}>{label}</label>
        <input
            id={label}
            name="checkbox"
            type="checkbox"
            value={label}
            bind:group={flavours}
            on:change={markit}
        />
    {/each}
</form>

<!-- CSS -->
<style>
    form,
    label {
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
    input {
        /* Appearance */
        /* appearance: none;
        -webkit-appearance: none;
        background: transparent;
        border: none; */
        /* Rest */
        text-transform: capitalize;
        padding: calc(var(--pt) * 2) calc(var(--pt) * 3);
    }
</style>
