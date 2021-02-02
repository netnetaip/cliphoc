<script>
    import { onMount } from 'svelte'

    // Exported
    export let src;
    export let alt;

    // Lets
    let loaded = false;
    let image;

    onMount(() => {
        image.onload = () => {
            loaded = true;
        }
    });
</script>

<!-- CSS -->
<style>
    img {
        /* Sizing */
        min-height: 100%;
        max-height: 100%;
        height: 100%;
        min-width: 100%;
        max-width: 100%;
        width: 100%;
        /* Rest */
        object-position: center;
        object-fit: cover;
        border-radius: calc(var(--pt) * 2);
        background-color: var(--col-primelight);
        /* transform: scale3d(.9, .9, 1); */
    }
</style>

<!-- HTML -->
<img src={src} alt={alt} height="144" width="144" class:loaded bind:this={image}>
<!-- {#if intersect}
    <img src={src} alt={alt} height="144" width="144" loading="lazy">
{:else}
    <img src={src} alt={alt} height="144" width="144" loading="eager">
{/if} -->
