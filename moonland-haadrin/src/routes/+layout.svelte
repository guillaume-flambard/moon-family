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
		content="Moonland Bar - Beach Bar, Music & Nightlife in Haad Rin, Koh Phangan. Live music, DJ sets, beach vibes, and unforgettable nights. The heart of Haad Rin's nightlife scene."
	/>
	<meta
		name="keywords"
		content="beach bar, Koh Phangan, Haad Rin, nightlife, live music, DJ, Moonland Bar"
	/>
	<meta name="author" content="Moonland Bar" />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Moonland Bar - Beach Bar, Music & Nightlife" />
	<meta
		property="og:description"
		content="Beach bar, music & nightlife in Haad Rin, Koh Phangan. Live music, DJ sets, beach vibes, and unforgettable nights."
	/>
	<meta property="og:site_name" content="Moonland Bar" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Moonland Bar - Beach Bar, Music & Nightlife" />
	<meta
		name="twitter:description"
		content="Beach bar, music & nightlife in Haad Rin, Koh Phangan. Live music, DJ sets, beach vibes, and unforgettable nights."
	/>

	<!-- Structured Data -->
	{@html `<script type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@type": "BarOrPub",
		"name": "Moonland Bar",
		"description": "Beach bar, music & nightlife in Haad Rin, Koh Phangan. Live music, DJ sets, beach vibes, and unforgettable nights.",
		"address": {
			"@type": "PostalAddress",
			"addressLocality": "Haad Rin",
			"addressRegion": "Koh Phangan",
			"addressCountry": "TH"
		},
		"openingHours": "Mo-Su 18:00-02:00"
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
