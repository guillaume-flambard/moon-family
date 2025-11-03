<script lang="ts">
	import * as m from '$lib/paraglide/messages';
</script>

<footer style="background-color: var(--blue-dark); color: white;">
	<div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 gap-8 md:grid-cols-3">
			<!-- About -->
			<div>
				<h3 class="mb-4 text-2xl font-bold font-serif" style="color: var(--sand-gold);">Moon Spoon</h3>
				<p style="color: rgba(255, 255, 255, 0.9);">{m.about_text()}</p>
			</div>

			<!-- Quick Links -->
			<div>
				<h4 class="mb-4 text-lg font-semibold" style="color: var(--sand-gold);">{m.quick_links()}</h4>
				<ul class="space-y-2">
					<li>
						<a href="/" class="transition-colors hover:opacity-80" style="color: rgba(255, 255, 255, 0.9);">{m.nav_home()}</a>
					</li>
					<li>
						<a href="/menu" class="transition-colors hover:opacity-80" style="color: rgba(255, 255, 255, 0.9);">{m.nav_menu()}</a>
					</li>
					<li>
						<a href="/cocktails" class="transition-colors hover:opacity-80" style="color: rgba(255, 255, 255, 0.9);">{m.nav_cocktails()}</a>
					</li>
					<li>
						<a href="/reservations" class="transition-colors hover:opacity-80" style="color: rgba(255, 255, 255, 0.9);">{m.nav_reservations()}</a>
					</li>
					<li>
						<a href="/contact" class="transition-colors hover:opacity-80" style="color: rgba(255, 255, 255, 0.9);">{m.nav_contact()}</a>
					</li>
				</ul>
			</div>

			<!-- Contact Info -->
			<div>
				<h4 class="mb-4 text-lg font-semibold" style="color: var(--sand-gold);">
					{m.contact_title()}
				</h4>
				<div class="space-y-2" style="color: rgba(255, 255, 255, 0.9);">
					<p>{m.footer_location()}</p>
					<p>{m.hours_daily()}</p>
				</div>
			</div>
		</div>

		<div class="mt-8 border-t pt-8 text-center" style="border-color: rgba(255, 255, 255, 0.2); color: rgba(255, 255, 255, 0.7);">
			<p>&copy; {new Date().getFullYear()} Moon Spoon. {m.footer_rights()}</p>
			<p class="mt-2 text-sm" style="color: rgba(255, 255, 255, 0.9);">{m.footer_moon_family()}</p>
		</div>
	</div>
</footer>

