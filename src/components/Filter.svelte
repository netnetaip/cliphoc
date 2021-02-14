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
    {#each labels as label}
        <label>
            <input
                type="checkbox"
                value={label}
                name={label}
                aria-pressed="false"
                bind:group={checkgroup} />
                {label}
        </label>
    {/each}
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
    label {
        /* Display */
		display: flex;
		flex-direction: row;
		align-items: center;
		align-content: center;
		justify-content: flex-start;
        /* Sizing */
		min-width: 50%;
		max-width: 50%;
		width: 50%;
        /* Rest */
		padding: var(--pt);
        background-color: var(--col-primelight);
        border-radius: var(--pt);
    }
    label:first-of-type {
        background-color: rgba(204, 0, 204, 0.2);
    }
    label:last-of-type {
        background-color: rgba(34, 102, 238, 0.2);
    }
    input[type=checkbox] {
         /* Display */
		display: flex;
		flex-direction: row;
		align-items: center;
		align-content: center;
		justify-content: flex-start;
        /* Rest */
        appearance: none;
        -webkit-appearance: none;
        background-color: blanchedalmond;
        padding: 8px;
    }
    input[type=checkbox]:checked {
        color: red;
        background-color: lightsalmon !important;
    }
</style>
