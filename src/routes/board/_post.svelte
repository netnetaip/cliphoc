<script>
	export let adhoc;
</script>

<!-- HTML -->
<a href="post/{adhoc.id}">
	<article>
		<!-- {#if adhoc.type === "designer"}
            <mark style="color: var(--col-tert)">{adhoc.type}</mark>
        {:else}
            <mark style="color: var(--col-seco)">{adhoc.type}</mark>
        {/if} -->
		<mark>{adhoc.type}</mark>
		<h2>{adhoc.title}</h2>
		<dl>
			<dt>{adhoc.author}</dt>
			<dd>{adhoc.city}</dd>
		</dl>
		<strong>{adhoc.amount} {adhoc.currency} / {adhoc.paytype}</strong>
	</article>
</a>
<hr />

<!-- CSS -->
<style>
	a {
		/* Display */
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		align-content: flex-start;
		justify-content: flex-start;
		/* Sizing */
		min-height: none;
		max-height: none;
		height: auto;
		min-width: 100%;
		max-width: 100%;
		width: 100%;
		/* Rest */
		padding: calc(var(--pt) * 3) calc(var(--pt) * 3);
	}
	article {
		/* Display */
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		align-content: flex-start;
		justify-content: flex-start;
		/* Sizing */
		min-height: none;
		max-height: none;
		height: auto;
		min-width: 100%;
		max-width: 100%;
		width: 100%;
	}
	article > h2 {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		/* Sizing */
		min-width: 100%;
		max-width: 100%;
		width: 100%;
	}
	article > strong {
		padding-top: var(--pt);
	}
</style>
