<script>
    import { onMount } from "svelte";
    import Observer from "./Observer.svelte";
    import Image from "./Image.svelte";

    // Exported
    export let card;
    export let intersecting = false;
    export let src = card.img;
    export let alt = card.title;

    // Let
    let nativeLoading = false;
    
    // Native LL
    onMount(() => {
        if ('loading' in HTMLImageElement.prototype) {
            nativeLoading = true
        }
    });
</script>

<!-- HTML -->
<Observer once={true} bind:intersecting>
    {#if intersecting}
        <Image {src} {alt}/>
    {/if}
</Observer>
