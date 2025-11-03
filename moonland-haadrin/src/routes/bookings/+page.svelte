<script lang="ts">
	import * as m from '$lib/paraglide/messages';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import { Calendar, Users, Mail } from 'lucide-svelte';
	import { scrollReveal } from '$lib/utils/scroll-reveal';
</script>

<svelte:head>
	<title>Private Bookings - Moonland Bar</title>
</svelte:head>

<PageHeader title={m.bookings_title()} subtitle={m.bookings_subtitle()} />

<section class="bg-white py-16">
	<div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
		<div class="rounded-2xl shadow-nightlife p-8 glass-nightlife" use:scrollReveal={{ delay: 0 }}>
			<div class="mb-8 text-center">
				<div class="mb-4 inline-flex items-center gap-3">
					<Calendar size={32} style="color: var(--violet-light);" />
					<Users size={32} style="color: var(--turquoise-light);" />
				</div>
				<h2 class="mb-4 text-3xl font-bold font-serif" style="color: white;">
					Host Your Event at Moonland Bar
				</h2>
				<p class="text-lg" style="color: rgba(255, 255, 255, 0.9);">
					Perfect for private parties, celebrations, corporate events, and more
				</p>
			</div>

			<div class="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
				<div class="text-center">
					<div class="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full gradient-violet">
						<Users size={32} style="color: white;" />
					</div>
					<h3 class="mb-2 font-bold" style="color: white;">Private Events</h3>
					<p class="text-sm" style="color: rgba(255, 255, 255, 0.8);">Birthdays, anniversaries, celebrations</p>
				</div>
				<div class="text-center">
					<div class="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full gradient-turquoise">
						<Calendar size={32} style="color: white;" />
					</div>
					<h3 class="mb-2 font-bold" style="color: white;">Corporate Events</h3>
					<p class="text-sm" style="color: rgba(255, 255, 255, 0.8);">Team building, meetings, launches</p>
				</div>
				<div class="text-center">
					<div class="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full gradient-nightlife">
						<Mail size={32} style="color: white;" />
					</div>
					<h3 class="mb-2 font-bold" style="color: white;">Custom Packages</h3>
					<p class="text-sm" style="color: rgba(255, 255, 255, 0.8);">Tailored experiences for your needs</p>
				</div>
			</div>

			<div class="text-center">
				<p class="mb-6 text-lg" style="color: rgba(255, 255, 255, 0.9);">
					For booking inquiries, please contact us directly
				</p>
				<a
					href="/contact"
					class="inline-block rounded-full bg-white px-8 py-4 font-semibold shadow-lg transition-all hover:scale-105"
					style="color: var(--black-primary);"
				>
					{m.contact_title()}
				</a>
			</div>
		</div>
	</div>
</section>

