<script lang="ts">
	import * as m from '$lib/paraglide/messages';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import { Cocktail, Sunset } from 'lucide-svelte';
	import { scrollReveal } from '$lib/utils/scroll-reveal';
</script>

<svelte:head>
	<title>Cocktails - Moon Spoon</title>
</svelte:head>

<PageHeader title={m.cocktails_title()} subtitle={m.cocktails_subtitle()} />

<section class="bg-white py-16">
	<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
		<div class="mb-12 text-center" use:scrollReveal={{ delay: 0 }}>
			<div class="mb-6 inline-flex items-center gap-2">
				<Sunset size={32} style="color: var(--sunset-primary);" />
				<Cocktail size={32} style="color: var(--sunset-primary);" />
			</div>
			<p class="text-lg" style="color: var(--text-secondary);">
				Handcrafted cocktails menu coming soon. Perfect for sunset dining.
			</p>
		</div>

		<div class="text-center">
			<a
				href="/reservations"
				class="inline-block rounded-full px-8 py-4 font-semibold text-white shadow-lg transition-all hover:scale-105 gradient-sunset"
			>
				{m.book_table()}
			</a>
		</div>
	</div>
</section>

