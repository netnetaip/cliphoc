<script>
	import { stores } from "@sapper/app";
	import Preloader from "../components/Preloader.svelte";
	import Footer from "../components/Footer.svelte";
	import Nav from "../components/Nav.svelte";

	const { preloading } = stores();
</script>

<!-- HTML -->
<Nav />
{#if $preloading}
	<Preloader />
{:else}
	<main>
		<slot />
	</main>
{/if}
<!-- <Footer /> -->
