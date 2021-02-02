<script>
    import { onMount } from "svelte";

    // Exported
    export let intersecting;
    export let once = false;
    export let top = 0;
    export let bottom = 0;
    export let left = 0;
    export let right = 0;

    // Lets
    let container;

    // Intersection
    onMount(() => {
        if (typeof IntersectionObserver !== "undefined") {
            const rootMargin = `${bottom}px ${left}px ${top}px ${right}px`;
            const observer = new IntersectionObserver(
                (entries) => {
                    intersecting = entries[0].isIntersecting;
                    if (intersecting && once) {
                        observer.unobserve(container);
                    }
                },
                {
                    rootMargin,
                }
            );
            observer.observe(container);
            return () => observer.unobserve(container);
        }
    });
</script>

<!-- CSS -->
<style>
    figure {
        /* Display */
		display: flex;
		flex-direction: column;
		align-items: center;
		align-content: center;
		justify-content: center;
        /* Rest */
        border-radius: calc(var(--pt) * 2);
        /* background-color: var(--col-primelight); */
        overflow: hidden;
    }
</style>

<!-- HTML -->
<figure bind:this={container}>
    <slot {intersecting}/>
</figure>