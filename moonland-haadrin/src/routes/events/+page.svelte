<script lang="ts">
	import * as m from '$lib/paraglide/messages';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import { Calendar, Clock, Music } from 'lucide-svelte';
	import { scrollReveal } from '$lib/utils/scroll-reveal';
</script>

<svelte:head>
	<title>Events - Moonland Bar</title>
</svelte:head>

<PageHeader title={m.events_title()} subtitle={m.events_subtitle()} />

<section class="bg-white py-16">
	<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
		<div class="mb-12 text-center" use:scrollReveal={{ delay: 0 }}>
			<div class="mb-6 inline-flex items-center gap-3">
				<Calendar size={32} style="color: var(--violet-medium);" />
				<Music size={32} style="color: var(--turquoise-medium);" />
			</div>
			<p class="text-lg" style="color: var(--text-secondary);">
				Upcoming events calendar coming soon. Check back regularly for live music, DJ sets, and
				special events.
			</p>
		</div>

		<div class="rounded-2xl shadow-nightlife p-8 glass-nightlife" use:scrollReveal={{ delay: 200 }}>
			<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
				<div class="flex items-start gap-4">
					<div
						class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full gradient-violet"
					>
						<Clock size={24} style="color: white;" />
					</div>
					<div>
						<h3 class="mb-2 text-xl font-bold" style="color: white;">Weekly Schedule</h3>
						<p style="color: rgba(255, 255, 255, 0.9);">{m.hours_daily()}</p>
						<p style="color: rgba(255, 255, 255, 0.9);">{m.hours_weekend()}</p>
					</div>
				</div>
				<div class="flex items-start gap-4">
					<div
						class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full gradient-turquoise"
					>
						<Music size={24} style="color: white;" />
					</div>
					<div>
						<h3 class="mb-2 text-xl font-bold" style="color: white;">Live Music</h3>
						<p style="color: rgba(255, 255, 255, 0.9);">Regular DJ sets and live performances</p>
					</div>
				</div>
			</div>
		</div>

		<div class="mt-12 text-center">
			<a
				href="/contact"
				class="inline-block rounded-full px-8 py-4 font-semibold text-white shadow-lg transition-all hover:scale-105 gradient-nightlife"
			>
				{m.contact_title()}
			</a>
		</div>
	</div>
</section>
