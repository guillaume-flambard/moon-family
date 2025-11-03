<script lang="ts">
	import * as m from '$lib/paraglide/messages';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import { scrollReveal } from '$lib/utils/scroll-reveal';
</script>

<svelte:head>
	<title>Menu - Moon Spoon</title>
</svelte:head>

<PageHeader title={m.menu_title()} subtitle={m.menu_subtitle()} />

<section class="bg-white py-16">
	<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
		<div class="mb-12 text-center" use:scrollReveal={{ delay: 0 }}>
			<p class="text-lg" style="color: var(--text-secondary);">
				Fusion menu coming soon. Please contact us for current offerings.
			</p>
		</div>

		<div class="text-center">
			<a
				href="/contact"
				class="inline-block rounded-full px-8 py-4 font-semibold text-white shadow-lg transition-all hover:scale-105 gradient-ocean-sunset"
			>
				{m.contact_title()}
			</a>
		</div>
	</div>
</section>

