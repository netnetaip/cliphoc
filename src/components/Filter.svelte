<script>
    import { fly } from "svelte/transition";

    // Exported
    export let checkgroup;
    export let translate;
    export let cards;
    export let list;

    // Let
    let labels = ["fee", "water", "pets", "wc"];

    // Checkbox Filtering
    const subbyhubby = () => {
		if (translate) {
			return cards = list.filter(({ tags }) =>
				checkgroup.every((tag) => tags.includes(tag))
            );
		}
	};

    // DEVELOPER_CONSOLE_LOG
	$: console.log("%c FILTER Checkgroup ", "color:orange; font-weight:bold; font-size:14px", checkgroup);
</script>

<!-- Filters -->
{#if translate}
    <section id="filter" 
        transition:fly={{duration: 240, y: 400, opacity: .9}}>
        <header>
            <h3>Filter by</h3>
            <button on:click={() => (translate = false)}>
                {#if checkgroup.length == 0}
                    <svg><use xlink:href="/sprite.svg#close"></use></svg>
                {:else}
                    <svg><use xlink:href="/sprite.svg#check"></use></svg>
                {/if}
            </button>
        </header>
        <form on:submit|preventDefault>
            <!-- General -->
            <fieldset>
                {#each labels as label}
                    <label>
                        <dfn>
                            {#if label === "water"}
                                Water source
                            {:else if label === "fee"}
                                Paid services
                            {:else if label === "pets"}
                                Pets allowed
                            {:else if label === "wc"}
                                Toilet
                            {/if}
                        </dfn>
                        <input
                            type="checkbox" 
                            value={label} 
                            name={label} 
                            aria-pressed="false" 
                            bind:group={checkgroup}/>
                    </label>
                    <hr />
                {/each}
            </fieldset>
        </form>
    </section>
    <hr>
{/if}
