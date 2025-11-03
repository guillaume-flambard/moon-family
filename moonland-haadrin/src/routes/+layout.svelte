<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Navigation from '$lib/components/Navigation.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Playfair+Display:wght@700;800;900&family=Dancing+Script:wght@600;700&display=swap"
		rel="stylesheet"
	/>
	<meta
		name="description"
		content="Moonland Bar - Beach Bar, Music & Nightlife in Haad Rin, Koh Phangan"
	/>
</svelte:head>

<div class="flex min-h-screen flex-col">
	<Navigation />

	<main class="flex-grow pt-16 md:pt-20">
		{@render children?.()}
	</main>

	<Footer />
</div>
