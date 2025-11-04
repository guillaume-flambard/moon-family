<script lang="ts">
	import * as m from '$lib/paraglide/messages';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import { Calendar, Clock, Users, Sunset, Phone, Mail } from 'lucide-svelte';
	import { scrollReveal } from '$lib/utils/scroll-reveal';
</script>

<svelte:head>
	<title>Reservations - Moon Spoon</title>
</svelte:head>

<PageHeader title={m.reservations_title()} subtitle={m.reservations_subtitle()} />

<section class="bg-white py-16">
	<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
		<!-- Main Info Card -->
		<div class="glass-sunset mb-12 rounded-2xl p-8 shadow-xl" use:scrollReveal={{ delay: 0 }}>
			<div class="mb-8 text-center">
				<div class="mb-4 inline-flex items-center gap-3">
					<Sunset size={32} style="color: var(--sunset-primary);" />
					<Calendar size={32} style="color: var(--blue-dark);" />
				</div>
				<h2 class="mb-4 font-serif text-3xl font-bold" style="color: var(--blue-dark);">
					Book Your Sunset Dining Experience
				</h2>
				<p class="text-lg" style="color: var(--text-secondary);">
					{m.hours_daily()}
				</p>
				<p class="mt-2 text-xl font-semibold" style="color: var(--sunset-primary);">
					{m.hours_sunset()}
				</p>
			</div>

			<!-- Features Grid -->
			<div class="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
				<div class="rounded-lg border-2 p-6 text-center" style="border-color: var(--blue-light);">
					<div
						class="gradient-sunset mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full"
					>
						<Users size={32} style="color: white;" />
					</div>
					<h3 class="mb-2 text-lg font-bold" style="color: var(--blue-dark);">Group Bookings</h3>
					<p class="text-sm" style="color: var(--text-secondary);">
						Perfect for celebrations and special occasions
					</p>
				</div>
				<div class="rounded-lg border-2 p-6 text-center" style="border-color: var(--blue-light);">
					<div
						class="gradient-ocean-sunset mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full"
					>
						<Sunset size={32} style="color: white;" />
					</div>
					<h3 class="mb-2 text-lg font-bold" style="color: var(--blue-dark);">Sunset Views</h3>
					<p class="text-sm" style="color: var(--text-secondary);">
						Best terrace seating for sunset dining
					</p>
				</div>
				<div class="rounded-lg border-2 p-6 text-center" style="border-color: var(--blue-light);">
					<div
						class="gradient-sunset mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full"
					>
						<Clock size={32} style="color: white;" />
					</div>
					<h3 class="mb-2 text-lg font-bold" style="color: var(--blue-dark);">Flexible Timing</h3>
					<p class="text-sm" style="color: var(--text-secondary);">
						We accommodate your preferred dining time
					</p>
				</div>
			</div>

			<!-- Contact Methods -->
			<div class="mb-8 rounded-lg bg-gray-50 p-6">
				<h3 class="mb-4 text-xl font-bold" style="color: var(--blue-dark);">How to Reserve</h3>
				<div class="space-y-4">
					<div class="flex items-start gap-4">
						<div
							class="gradient-ocean-sunset flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full"
						>
							<Phone size={24} style="color: white;" />
						</div>
						<div>
							<h4 class="font-semibold" style="color: var(--blue-dark);">Call Us</h4>
							<p style="color: var(--text-secondary);">
								Contact us directly by phone during opening hours
							</p>
						</div>
					</div>
					<div class="flex items-start gap-4">
						<div
							class="gradient-sunset flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full"
						>
							<Mail size={24} style="color: white;" />
						</div>
						<div>
							<h4 class="font-semibold" style="color: var(--blue-dark);">Email Us</h4>
							<p style="color: var(--text-secondary);">
								Send us an email with your preferred date and time
							</p>
						</div>
					</div>
					<div class="flex items-start gap-4">
						<div
							class="gradient-ocean-sunset flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full"
						>
							<Calendar size={24} style="color: white;" />
						</div>
						<div>
							<h4 class="font-semibold" style="color: var(--blue-dark);">Walk-In</h4>
							<p style="color: var(--text-secondary);">
								Visit us during opening hours - we'll do our best to accommodate you
							</p>
						</div>
					</div>
				</div>
			</div>

			<!-- CTA -->
			<div class="text-center">
				<p class="mb-6 text-lg" style="color: var(--text-secondary);">
					Ready to experience fusion dining at sunset? Get in touch with us today!
				</p>
				<a
					href="/contact"
					class="gradient-ocean-sunset inline-block rounded-full px-10 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:scale-105"
				>
					{m.contact_title()}
				</a>
			</div>
		</div>

		<!-- Tips Section -->
		<div
			class="rounded-2xl border-2 p-8"
			style="border-color: var(--blue-light);"
			use:scrollReveal={{ delay: 200 }}
		>
			<h3 class="mb-6 text-center font-serif text-2xl font-bold" style="color: var(--blue-dark);">
				Reservation Tips
			</h3>
			<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
				<div class="flex items-start gap-3">
					<span class="text-2xl">🌅</span>
					<div>
						<h4 class="mb-1 font-semibold" style="color: var(--blue-dark);">Sunset Times</h4>
						<p class="text-sm" style="color: var(--text-secondary);">
							Best time to reserve is between 6:00 PM - 7:00 PM for the perfect sunset view
						</p>
					</div>
				</div>
				<div class="flex items-start gap-3">
					<span class="text-2xl">👥</span>
					<div>
						<h4 class="mb-1 font-semibold" style="color: var(--blue-dark);">Group Size</h4>
						<p class="text-sm" style="color: var(--text-secondary);">
							Let us know your party size in advance for better seating arrangements
						</p>
					</div>
				</div>
				<div class="flex items-start gap-3">
					<span class="text-2xl">📅</span>
					<div>
						<h4 class="mb-1 font-semibold" style="color: var(--blue-dark);">Advance Booking</h4>
						<p class="text-sm" style="color: var(--text-secondary);">
							We recommend booking 1-2 days in advance, especially for weekends
						</p>
					</div>
				</div>
				<div class="flex items-start gap-3">
					<span class="text-2xl">🎉</span>
					<div>
						<h4 class="mb-1 font-semibold" style="color: var(--blue-dark);">Special Occasions</h4>
						<p class="text-sm" style="color: var(--text-secondary);">
							Mention any special celebrations - we love making moments memorable!
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
