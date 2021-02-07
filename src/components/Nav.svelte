<!-- CSS -->
<style>
    nav {
        /* Display */
		display: flex;
		flex-direction: row;
		align-items: center;
		align-content: center;
		justify-content: space-between;
		/* Sizing */
		min-height: 10vh;
		max-height: 10vh;
		height: 10vh;
		min-width: 100vw;
		max-width: 100vw;
		width: 100vw;
		/* Position */
		position: fixed;
		top: 0;
		/* Other */
		backdrop-filter: blur(calc(var(--pt) * 2));
		-webkit-backdrop-filter: blur(calc(var(--pt) * 2));
		background-color: rgba(255, 255, 255, .8);
		border-bottom: 2px solid var(--col-primelight);
		padding: 0 calc(var(--pt) * 3);
		z-index: 200;
	}
    a {
        /* Display */
		display: flex;
		flex-direction: row;
		align-items: center;
		align-content: center;
		justify-content: center;
		/* Sizing */
		min-height: 100%;
		max-height: 100%;
		height: 100%;
		/* Rest */
		text-transform: capitalize;
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
        stroke-width: 2.5;
		fill: none;
	}
</style>

<!-- HTML -->
	<nav>
		<a rel="prefetch" href="/new" sapper:noscroll>
			<svg><use xlink:href="/sprite.svg#plus"></use></svg>
			&nbsp;
			Create
		</a>
		<a rel="prefetch" href="/posts/1" sapper:noscroll>
			<svg><use xlink:href="/sprite.svg#menu"></use></svg>
		</a>
	</nav>