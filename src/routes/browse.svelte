<!-- Server -->
<script context="module">
	export async function preload(page, session) {
		// URL
		const url = "https://6016e904f534300017a4509d.mockapi.io/board";
		// Fetch
		const res = await this.fetch(url);
		// Validate
		if (res.status === 200) {
			const list = await res.json();
			return { list };
		}
		// Error
		this.error(500, "Problems with server. Be right back soon ;)");
	}
</script>

<!-- Client -->
<script>
	// import Filter from "../components/Filter.svelte";
	// import Figure from "../components/image/Figure.svelte";

	// Exported
	export let list = [];
	export let checkgroup = [];

	// DEVELOPER_CONSOLE_LOG
	$: console.log("%c BROWSE List ", "color:blue; font-weight:bold; font-size:14px", list);
	$: console.log("%c BROWSE Checkgroup ", "color:green; font-weight:bold; font-size:14px", checkgroup);
	// DEVELOPER_FUNCTIONS
	let takeactionval;
	$: (async() => {
		if (typeof window !== "undefined") {
			if (sessionStorage.getItem("Session_state", takeactionval)) {
				return takeactionval = "Session_is_SET";
			} else {
				return takeactionval = "Session_is_EMPTY";
			}
		}
	})();
	const takeaction = async () => {
		if (!sessionStorage.getItem("Session_state", takeactionval)) {
			return sessionStorage.setItem("Session_state", takeactionval);
		} else {
			return sessionStorage.removeItem("Session_state", takeactionval);
		}
	};
</script>

<!-- Special -->
<svelte:head>
	<title>Browse</title>
</svelte:head>
<svelte:options immutable />

<!-- CSS -->
<style>
	section {
		/* Display */
		display: flex;
		flex-direction: column;
		align-items: center;
		align-content: center;
		justify-content: center;
		/* Sizing */
		min-height: 100%;
		max-height: none;
		height: auto;
		min-width: 100vw;
		max-width: 100vw;
		width: 100vw;
		/* Rest */
		background-color: var(--col-prime);
		overflow-y: scroll;
		overflow-x: hidden;
		overscroll-behavior: contain;
	}
	section > div, section > div > div, a, article {
		/* Display */
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		align-content: flex-start;
		justify-content: flex-start;
	}
	section > div {
		/* Sizing */
		min-height: none;
		max-height: none;
		height: auto;
		min-width: 100%;
		max-width: 100%;
		width: 100%;
		/* Rest */
		overflow: auto;
	}
	header {
		/* Display */
		display: flex;
		flex-direction: row;
		align-items: flex-end;
		align-content: flex-end;
		justify-content: flex-start;
		/* Sizing */
		min-height: 8vh;
		max-height: 8vh;
		height: 8vh;
		min-width: 100%;
		max-width: 100%;
		width: 100%;
		/* Rest */
		padding: 0 calc(var(--pt) * 3);
	}
	a {
		/* Sizing */
		min-height: none;
		max-height: none;
		height: auto;
		min-width: 100%;
		max-width: 100%;
		width: 100%;
		/* Rest */
		padding: calc(var(--pt) * 3.5) calc(var(--pt) * 3) calc(var(--pt) * 2.5);
	}
	article {
		/* Sizing */
		min-height: none;
		max-height: none;
		height: auto;
		min-width: 100%;
		max-width: 100%;
		width: 100%;
	}
    article > h3, article > p {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
        /* Sizing */
        min-width: 100%;
		max-width: 100%;
        width: 100%;
	}
	article > p {
		padding-top: var(--pt);
	}
	/* Fonts */
	dt, p {
		font-size: .9rem;
	}
	dd {
		font-size: .8rem;
	}
</style>

<!-- HTML -->
<section>
	<header>
		<h1>Board</h1>
	</header>
	<div>
		<div>
			{#each list as list (list.id)}
				<a href="locations/{list.id}">
					<article>
						<h3>{list.title}</h3>
						<dl>
							<dt>{list.author}</dt>
							<dd>{list.city}, {list.country}</dd>
						</dl>
						<p>{list.brief}</p>
					</article>
				</a>
				<hr>
			{/each}
		</div>
	</div>
</section>
<!-- <Filter bind:checkgroup bind:translate bind:lists bind:list/> -->
