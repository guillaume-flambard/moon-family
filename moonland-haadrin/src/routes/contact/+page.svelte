<script lang="ts">
	import * as m from '$lib/paraglide/messages';
	import PageHeader from '$lib/components/PageHeader.svelte';

	const mapEmbedUrl =
		'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.958267788679!2d100.0618504!3d9.6798194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3054fd4a2592b285%3A0xff799655f839b76f!2sMama%20Homemade%20Restaurant!5e0!3m2!1sen!2s!4v1735800000000!5m2!1sen!2s';
</script>

<svelte:head>
	<title>Contact - Moonland Bar</title>
</svelte:head>

<PageHeader title={m.contact_title()} subtitle={m.footer_location()} />

<section class="bg-white py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 gap-12 lg:grid-cols-2">
			<!-- Contact Details -->
			<div>
				<div class="rounded-2xl shadow-nightlife p-8 glass-nightlife">
					<h2 class="mb-8 text-3xl font-bold font-serif" style="color: white;">
						{m.get_directions()}
					</h2>

					<!-- Address -->
					<div class="mb-6 flex items-start space-x-4">
						<div
							class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full gradient-turquoise"
						>
							<svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
								/>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
								/>
							</svg>
						</div>
						<div>
							<h3 class="mb-1 font-semibold" style="color: white;">{m.contact_address()}</h3>
							<p style="color: rgba(255, 255, 255, 0.9);">Haad Rin, Koh Phangan</p>
							<p style="color: rgba(255, 255, 255, 0.9);">Surat Thani, Thailand 84280</p>
						</div>
					</div>

					<!-- Hours -->
					<div class="mb-6 flex items-start space-x-4">
						<div
							class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full gradient-violet"
						>
							<svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
						</div>
						<div>
							<h3 class="mb-1 font-semibold" style="color: white;">{m.contact_hours()}</h3>
							<p style="color: rgba(255, 255, 255, 0.9);">{m.hours_daily()}</p>
							<p style="color: rgba(255, 255, 255, 0.9);">{m.hours_weekend()}</p>
						</div>
					</div>

					<!-- Social Media -->
					<div class="mt-8 border-t pt-8" style="border-color: rgba(255, 255, 255, 0.2);">
						<h3 class="mb-4 font-semibold" style="color: white;">{m.follow_us()}</h3>
						<div class="flex space-x-4">
							<a
								href="https://facebook.com"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Facebook"
								class="flex h-10 w-10 items-center justify-center rounded-full text-white transition-all hover:scale-110 gradient-violet"
							>
								<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
									<path
										d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
									/>
								</svg>
							</a>
							<a
								href="https://instagram.com"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Instagram"
								class="flex h-10 w-10 items-center justify-center rounded-full text-white transition-all hover:scale-110 gradient-turquoise"
							>
								<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
									<path
										d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
									/>
								</svg>
							</a>
						</div>
					</div>
				</div>
			</div>

			<!-- Map -->
			<div class="h-[600px] overflow-hidden rounded-2xl shadow-nightlife">
				<iframe
					src={mapEmbedUrl}
					width="100%"
					height="100%"
					style="border:0;"
					allowfullscreen
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
					title="Moonland Bar Location"
				></iframe>
			</div>
		</div>
	</div>
</section>
