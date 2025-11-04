<script lang="ts">
	import * as m from '$lib/paraglide/messages';
	import { Sunset, UtensilsCrossed, Wine } from 'lucide-svelte';
	import { scrollReveal } from '$lib/utils/scroll-reveal';

	let scrollY = $state(0);
	let heroParallax = $derived(scrollY * 0.5);
</script>

<svelte:window bind:scrollY />

<!-- Hero Section - Sunset & Fusion Theme -->
<section class="relative min-h-screen overflow-hidden">
	<!-- Background Image -->
	<div class="absolute inset-0">
		<img
			src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1920&h=1080&fit=crop&q=85"
			alt="Fusion restaurant sunset"
			class="h-full w-full object-cover"
			style="transform: translateY({heroParallax}px);"
			loading="eager"
		/>
		<!-- Sunset Gradient Overlay -->
		<div
			class="absolute inset-0 bg-gradient-to-b from-[#1e3a5f]/90 via-[#2d4f7c]/80 to-[#ff6b35]/90"
		></div>
	</div>

	<!-- Hero Content -->
	<div class="relative z-10 flex min-h-screen items-center px-4 py-32 sm:px-6 lg:px-8">
		<div class="mx-auto w-full max-w-6xl">
			<div class="text-center">
				<!-- Location Badge -->
				<div class="mb-6 inline-flex items-center space-x-2">
					<span
						class="glass-sunset inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold shadow-lg"
						style="color: white;"
					>
						<Sunset size={16} />
						{m.hero_location()}
					</span>
				</div>

				<!-- Main Title -->
				<h1
					class="text-hero mb-8 font-serif leading-tight tracking-tight"
					style="color: white !important;"
					use:scrollReveal={{ delay: 0 }}
				>
					{m.hero_title()}
				</h1>

				<!-- Subtitle -->
				<p
					class="text-display mb-6 font-semibold"
					style="color: rgba(255, 255, 255, 0.95) !important;"
					use:scrollReveal={{ delay: 150 }}
				>
					{m.hero_subtitle()}
				</p>

				<!-- Tagline -->
				<p
					class="font-script mx-auto mb-8 max-w-2xl text-2xl leading-relaxed"
					style="color: rgba(255, 255, 255, 0.95) !important;"
					use:scrollReveal={{ delay: 300 }}
				>
					{m.hero_tagline()}
				</p>

				<!-- CTA Buttons -->
				<div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
					<a
						href="/menu"
						class="hover-lift gradient-sunset relative overflow-hidden rounded-full px-10 py-4 text-lg font-bold text-white shadow-lg transition-all hover:scale-105"
					>
						<span class="relative z-10">{m.hero_cta()}</span>
					</a>
					<a
						href="/reservations"
						class="rounded-full border-2 border-white bg-transparent px-10 py-4 text-lg font-bold shadow-md transition-all hover:scale-105 hover:bg-white"
						style="color: white; border-color: white; hover:color: var(--blue-dark);"
					>
						{m.book_table()}
					</a>
				</div>

				<!-- Trust Indicators -->
				<div
					class="mt-16 flex flex-wrap items-center justify-center gap-8 text-base font-medium"
					style="color: rgba(255, 255, 255, 0.95) !important;"
				>
					<div class="flex items-center gap-2">
						<UtensilsCrossed style="color: var(--sand-gold) !important;" size={24} />
						<span>Fusion Cuisine</span>
					</div>
					<div class="flex items-center gap-2">
						<Sunset style="color: var(--sand-gold) !important;" size={24} />
						<span>Sunset Dining</span>
					</div>
					<div class="flex items-center gap-2">
						<Wine style="color: var(--sand-gold) !important;" size={24} />
						<span>Handcrafted Cocktails</span>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Bottom Wave -->
	<div class="absolute right-0 bottom-0 left-0">
		<svg
			viewBox="0 0 1440 120"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			preserveAspectRatio="none"
			class="h-24 w-full"
		>
			<path d="M0 60 Q360 80 720 60 T1440 60 L1440 120 L0 120 Z" fill="white" />
		</svg>
	</div>
</section>

<!-- About Section -->
<section id="about" class="relative overflow-hidden bg-white py-24">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 gap-16 md:grid-cols-2">
			<!-- About Content -->
			<div class="flex flex-col justify-center" use:scrollReveal={{ delay: 0, origin: 'left' }}>
				<div class="mb-4 inline-block">
					<span class="gradient-sunset rounded-full px-4 py-2 text-sm font-semibold text-white">
						About
					</span>
				</div>
				<h2
					class="mb-8 font-serif text-5xl font-extrabold tracking-tight md:text-6xl"
					style="color: var(--blue-dark);"
				>
					{m.about_title()}
				</h2>
				<p class="mb-8 text-xl leading-relaxed" style="color: var(--text-secondary);">
					{m.about_text()}
				</p>
				<a
					href="/contact"
					class="gradient-ocean-sunset inline-block rounded-full px-8 py-4 font-semibold text-white shadow-lg transition-all hover:scale-105"
				>
					{m.get_directions()}
				</a>
			</div>

			<!-- Image Collage -->
			<div use:scrollReveal={{ delay: 200, origin: 'right' }}>
				<div class="grid grid-cols-2 gap-6">
					<div class="shadow-ocean overflow-hidden rounded-3xl">
						<img
							src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&h=600&fit=crop&q=80"
							alt="Fusion cuisine"
							class="h-full w-full object-cover"
							loading="lazy"
						/>
					</div>
					<div class="shadow-ocean overflow-hidden rounded-3xl">
						<img
							src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop&q=80"
							alt="Sunset dining"
							class="h-full w-full object-cover"
							loading="lazy"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Featured Section -->
<section
	class="relative overflow-hidden py-24"
	style="background: linear-gradient(135deg, var(--blue-dark) 0%, var(--sunset-primary) 100%);"
>
	<div class="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
		<div class="mb-12" use:scrollReveal={{ delay: 0 }}>
			<h2
				class="mb-6 font-serif text-5xl font-extrabold tracking-tight md:text-6xl"
				style="color: white;"
			>
				{m.menu_title()}
			</h2>
			<p class="text-xl leading-relaxed" style="color: rgba(255, 255, 255, 0.9);">
				{m.menu_subtitle()}
			</p>
		</div>

		<div class="mt-12">
			<a
				href="/menu"
				class="inline-block rounded-full bg-white px-10 py-4 text-lg font-bold shadow-2xl transition-all hover:scale-105"
				style="color: var(--blue-dark);"
			>
				{m.see_menu()}
			</a>
			<a
				href="/cocktails"
				class="ml-4 inline-block rounded-full border-2 border-white bg-transparent px-10 py-4 text-lg font-bold transition-all hover:bg-white"
				style="color: white; border-color: white; hover:color: var(--blue-dark);"
			>
				{m.see_cocktails()}
			</a>
		</div>
	</div>
</section>
