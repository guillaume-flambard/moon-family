<script lang="ts">
	import * as m from '$lib/paraglide/messages';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import { Calendar, Users, Mail, Music, Sparkles, Phone } from 'lucide-svelte';
	import { scrollReveal } from '$lib/utils/scroll-reveal';
</script>

<svelte:head>
	<title>Private Bookings - Moonland Bar</title>
</svelte:head>

<PageHeader title={m.bookings_title()} subtitle={m.bookings_subtitle()} />

<section class="bg-white py-16">
	<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
		<!-- Main Info Card -->
		<div
			class="mb-12 rounded-2xl shadow-nightlife p-8 glass-nightlife"
			use:scrollReveal={{ delay: 0 }}
		>
			<div class="mb-8 text-center">
				<div class="mb-4 inline-flex items-center gap-3">
					<Music size={32} style="color: var(--turquoise-light);" />
					<Calendar size={32} style="color: var(--violet-light);" />
				</div>
				<h2 class="mb-4 text-3xl font-bold font-serif" style="color: white;">
					Host Your Event at Moonland Bar
				</h2>
				<p class="text-lg" style="color: rgba(255, 255, 255, 0.9);">
					Perfect for private parties, celebrations, corporate events, and unforgettable nights
				</p>
			</div>

			<!-- Event Types Grid -->
			<div class="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
				<div
					class="rounded-lg border-2 p-6 text-center"
					style="border-color: rgba(255, 255, 255, 0.2); background-color: rgba(255, 255, 255, 0.05);"
				>
					<div
						class="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full gradient-violet"
					>
						<Users size={32} style="color: white;" />
					</div>
					<h3 class="mb-2 font-bold text-lg" style="color: white;">Private Events</h3>
					<p class="text-sm" style="color: rgba(255, 255, 255, 0.8);">
						Birthdays, anniversaries, celebrations
					</p>
				</div>
				<div
					class="rounded-lg border-2 p-6 text-center"
					style="border-color: rgba(255, 255, 255, 0.2); background-color: rgba(255, 255, 255, 0.05);"
				>
					<div
						class="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full gradient-turquoise"
					>
						<Calendar size={32} style="color: white;" />
					</div>
					<h3 class="mb-2 font-bold text-lg" style="color: white;">Corporate Events</h3>
					<p class="text-sm" style="color: rgba(255, 255, 255, 0.8);">
						Team building, meetings, launches
					</p>
				</div>
				<div
					class="rounded-lg border-2 p-6 text-center"
					style="border-color: rgba(255, 255, 255, 0.2); background-color: rgba(255, 255, 255, 0.05);"
				>
					<div
						class="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full gradient-nightlife"
					>
						<Sparkles size={32} style="color: white;" />
					</div>
					<h3 class="mb-2 font-bold text-lg" style="color: white;">Custom Packages</h3>
					<p class="text-sm" style="color: rgba(255, 255, 255, 0.8);">
						Tailored experiences for your needs
					</p>
				</div>
			</div>

			<!-- Features -->
			<div class="mb-8 rounded-lg p-6" style="background-color: rgba(255, 255, 255, 0.1);">
				<h3 class="mb-4 text-xl font-bold" style="color: white;">What We Offer</h3>
				<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
					<div class="flex items-start gap-3">
						<span class="text-xl">🎵</span>
						<div>
							<h4 class="font-semibold mb-1" style="color: white;">Live Music & DJ</h4>
							<p class="text-sm" style="color: rgba(255, 255, 255, 0.8);">
								Professional sound system and entertainment options
							</p>
						</div>
					</div>
					<div class="flex items-start gap-3">
						<span class="text-xl">🍹</span>
						<div>
							<h4 class="font-semibold mb-1" style="color: white;">Custom Bar Service</h4>
							<p class="text-sm" style="color: rgba(255, 255, 255, 0.8);">
								Tailored drink packages and signature cocktails
							</p>
						</div>
					</div>
					<div class="flex items-start gap-3">
						<span class="text-xl">🌊</span>
						<div>
							<h4 class="font-semibold mb-1" style="color: white;">Beachfront Location</h4>
							<p class="text-sm" style="color: rgba(255, 255, 255, 0.8);">
								Stunning beach views and outdoor terrace space
							</p>
						</div>
					</div>
					<div class="flex items-start gap-3">
						<span class="text-xl">🍽️</span>
						<div>
							<h4 class="font-semibold mb-1" style="color: white;">Catering Options</h4>
							<p class="text-sm" style="color: rgba(255, 255, 255, 0.8);">
								Food packages available for your event
							</p>
						</div>
					</div>
				</div>
			</div>

			<!-- Contact Methods -->
			<div class="mb-8 rounded-lg p-6" style="background-color: rgba(255, 255, 255, 0.1);">
				<h3 class="mb-4 text-xl font-bold" style="color: white;">How to Book</h3>
				<div class="space-y-4">
					<a
						href="tel:+66123456789"
						class="flex items-start gap-4 rounded-lg p-2 transition-all hover:bg-white/10 hover:scale-[1.02]"
					>
						<div
							class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full gradient-violet"
						>
							<Phone size={24} style="color: white;" />
						</div>
						<div>
							<h4 class="font-semibold mb-1" style="color: white;">Call Us</h4>
							<p class="text-sm" style="color: rgba(255, 255, 255, 0.8);">
								Contact us directly to discuss your event requirements
							</p>
						</div>
					</a>
					<a
						href="mailto:bookings@moonlandbar-haadrin.com"
						class="flex items-start gap-4 rounded-lg p-2 transition-all hover:bg-white/10 hover:scale-[1.02]"
					>
						<div
							class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full gradient-turquoise"
						>
							<Mail size={24} style="color: white;" />
						</div>
						<div>
							<h4 class="font-semibold mb-1" style="color: white;">Email Us</h4>
							<p class="text-sm" style="color: rgba(255, 255, 255, 0.8);">
								Send us details about your event - date, size, and preferences
							</p>
						</div>
					</a>
					<div class="flex items-start gap-4">
						<div
							class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full gradient-nightlife"
						>
							<Calendar size={24} style="color: white;" />
						</div>
						<div>
							<h4 class="font-semibold mb-1" style="color: white;">Advance Planning</h4>
							<p class="text-sm" style="color: rgba(255, 255, 255, 0.8);">
								We recommend booking at least 1-2 weeks in advance
							</p>
						</div>
					</div>
				</div>
			</div>

			<!-- CTA -->
			<div class="text-center">
				<p class="mb-6 text-lg" style="color: rgba(255, 255, 255, 0.9);">
					Ready to create an unforgettable event? Let's make it happen!
				</p>
				<a
					href="/contact"
					class="inline-block rounded-full bg-white px-10 py-4 text-lg font-semibold shadow-lg transition-all hover:scale-105"
					style="color: var(--black-primary);"
				>
					{m.contact_title()}
				</a>
			</div>
		</div>

		<!-- Additional Info -->
		<div
			class="rounded-2xl border-2 p-8"
			style="border-color: rgba(255, 255, 255, 0.2); background-color: rgba(255, 255, 255, 0.05);"
			use:scrollReveal={{ delay: 200 }}
		>
			<h3 class="mb-6 text-2xl font-bold font-serif text-center" style="color: white;">
				Event Planning Tips
			</h3>
			<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
				<div class="flex items-start gap-3">
					<span class="text-2xl">📅</span>
					<div>
						<h4 class="font-semibold mb-1" style="color: white;">Booking Timeline</h4>
						<p class="text-sm" style="color: rgba(255, 255, 255, 0.8);">
							Book 1-2 weeks in advance for better availability and custom arrangements
						</p>
					</div>
				</div>
				<div class="flex items-start gap-3">
					<span class="text-2xl">👥</span>
					<div>
						<h4 class="font-semibold mb-1" style="color: white;">Guest Count</h4>
						<p class="text-sm" style="color: rgba(255, 255, 255, 0.8);">
							Provide accurate guest numbers for proper space and service planning
						</p>
					</div>
				</div>
				<div class="flex items-start gap-3">
					<span class="text-2xl">🎵</span>
					<div>
						<h4 class="font-semibold mb-1" style="color: white;">Entertainment</h4>
						<p class="text-sm" style="color: rgba(255, 255, 255, 0.8);">
							Discuss music preferences and DJ/live music options when booking
						</p>
					</div>
				</div>
				<div class="flex items-start gap-3">
					<span class="text-2xl">🍹</span>
					<div>
						<h4 class="font-semibold mb-1" style="color: white;">Beverage Packages</h4>
						<p class="text-sm" style="color: rgba(255, 255, 255, 0.8);">
							Customize drink packages to fit your event budget and preferences
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
