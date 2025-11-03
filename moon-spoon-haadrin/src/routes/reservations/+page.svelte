<script lang="ts">
	import * as m from '$lib/paraglide/messages';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import { Calendar, Clock } from 'lucide-svelte';
	import { scrollReveal } from '$lib/utils/scroll-reveal';
</script>

<svelte:head>
	<title>Reservations - Moon Spoon</title>
</svelte:head>

<PageHeader title={m.reservations_title()} subtitle={m.reservations_subtitle()} />

<section class="bg-white py-16">
	<div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
		<div class="rounded-2xl shadow-xl p-8 glass-sunset" use:scrollReveal={{ delay: 0 }}>
			<div class="mb-8 text-center">
				<div class="mb-4 inline-flex items-center gap-3">
					<Calendar size={32} style="color: var(--blue-dark);" />
					<Clock size={32} style="color: var(--sunset-primary);" />
				</div>
				<h2 class="mb-4 text-3xl font-bold font-serif" style="color: var(--blue-dark);">
					Book Your Sunset Dining Experience
				</h2>
				<p class="text-lg" style="color: var(--text-secondary);">
					{m.hours_daily()}
				</p>
				<p class="mt-2 font-semibold" style="color: var(--sunset-primary);">
					{m.hours_sunset()}
				</p>
			</div>

			<div class="mb-8 text-center">
				<p class="mb-6 text-lg" style="color: var(--text-secondary);">
					For reservations, please contact us directly or visit us during opening hours.
				</p>
				<a
					href="/contact"
					class="inline-block rounded-full px-8 py-4 font-semibold text-white shadow-lg transition-all hover:scale-105 gradient-ocean-sunset"
				>
					{m.contact_title()}
				</a>
			</div>
		</div>
	</div>
</section>

