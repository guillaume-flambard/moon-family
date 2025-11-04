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
		content="Moon Spoon - Fusion Dining & Sunset Cocktails in Haad Rin, Koh Phangan. Where East meets West under the Koh Phangan sunset. Innovative cuisine meets tropical island vibes."
	/>
	<meta
		name="keywords"
		content="fusion restaurant, Koh Phangan, Haad Rin, sunset cocktails, fusion dining, Moon Spoon"
	/>
	<meta name="author" content="Moon Spoon" />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Moon Spoon - Fusion Dining & Sunset Cocktails" />
	<meta
		property="og:description"
		content="Fusion dining & sunset cocktails in Haad Rin, Koh Phangan. Where East meets West under the sunset."
	/>
	<meta property="og:site_name" content="Moon Spoon" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Moon Spoon - Fusion Dining & Sunset Cocktails" />
	<meta
		name="twitter:description"
		content="Fusion dining & sunset cocktails in Haad Rin, Koh Phangan. Where East meets West under the sunset."
	/>

	<!-- Structured Data -->
	{@html `<script type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@type": "Restaurant",
		"name": "Moon Spoon",
		"description": "Fusion dining & sunset cocktails in Haad Rin, Koh Phangan. Where East meets West under the sunset.",
		"address": {
			"@type": "PostalAddress",
			"addressLocality": "Haad Rin",
			"addressRegion": "Koh Phangan",
			"addressCountry": "TH"
		},
		"servesCuisine": "Fusion",
		"priceRange": "$$",
		"openingHours": "Mo-Su 17:00-23:00"
	}
	</script>`}
</svelte:head>

<div class="flex min-h-screen flex-col">
	<Navigation />

	<main class="flex-grow pt-16 md:pt-20">
		{@render children?.()}
	</main>

	<Footer />
</div>
