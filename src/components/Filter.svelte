<script>
    // Exported
    export let checkgroup = [];

    // Props
    let labels = ["designer", "developer"];

    // Checkbox Filtering
    // const subbyhubby = () => {
    //     return (cards = list.filter(({ tags }) =>
    //         checkgroup.every((tag) => tags.includes(tag))
    //     ));
    // };
</script>

<!-- HTML -->
<form on:submit|preventDefault>
    <fieldset>
        {#each labels as label}
            <label>
                {label}
                <input
                    type="checkbox"
                    value={label}
                    name={label}
                    aria-pressed="false"
                    bind:group={checkgroup} />
            </label>
        {/each}
    </fieldset>
</form>

<!-- CSS -->
<style>
    form {
        /* Display */
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		align-content: flex-start;
		justify-content: flex-start;
		/* Sizing */
		min-width: 100%;
		max-width: 100%;
		width: 100%;
		/* Rest */
		/* padding: calc(var(--pt) * 3) calc(var(--pt) * 3); */
    }
    fieldset {
        /* Display */
		display: grid;
		align-items: flex-start;
		align-content: flex-start;
		justify-content: flex-start;
        grid-auto-flow: column;
        grid-gap: calc(var(--pt) * 2);
        /* Sizing */
		min-width: 100%;
		max-width: 100%;
		width: 100%;
        /* Rest */
        border: none;
    }
    label {
        /* Display */
		display: flex;
		flex-direction: row;
		align-items: center;
		align-content: center;
		justify-content: flex-start;
        /* Rest */
		padding: var(--pt);
        background-color: var(--col-primelight);
        border-radius: var(--pt);
    }
    input {
        /* appearance: none; */
        /* -webkit-appearance: none; */
        margin-left: 8px;
    }
    input:checked + label {
        color: red;
    }
</style>
