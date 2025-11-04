<script lang="ts">
	import * as m from '$lib/paraglide/messages';
	import { getLocale, setLocale, locales } from '$lib/paraglide/runtime';
	import { ChevronDown, Menu, X, UtensilsCrossed, Music } from 'lucide-svelte';

	let { transparent = false } = $props();
	let mobileMenuOpen = $state(false);
	let languageDropdownOpen = $state(false);

	const navLinks = [
		{ href: '/', label: m.nav_home },
		{ href: '/menu', label: m.nav_menu },
		{ href: '/cocktails', label: m.nav_cocktails },
		{ href: '/reservations', label: m.nav_reservations },
		{ href: '/contact', label: m.nav_contact }
	];

	const languageNames: Record<string, string> = {
		en: 'EN',
		th: 'ไทย',
		fr: 'FR',
		de: 'DE',
		ru: 'RU',
		my: 'MY'
	};

	function switchLanguage(lang: string) {
		setLocale(lang as any);
		languageDropdownOpen = false;
	}

	function handleClickOutside(event: MouseEvent) {
		const target = event.target as HTMLElement;
		if (languageDropdownOpen && !target.closest('.language-dropdown')) {
			languageDropdownOpen = false;
		}
	}
</script>

<svelte:window onclick={handleClickOutside} />

<nav
	class="fixed top-0 z-50 w-full backdrop-blur-md transition-all duration-300"
	class:glass-sunset={!transparent}
	class:shadow-ocean={!transparent}
	class:bg-transparent={transparent}
>
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 items-center justify-between md:h-20">
			<!-- Logo -->
			<a href="/" class="flex items-center">
				<span class="font-serif text-2xl font-bold" style="color: var(--blue-dark);"
					>Moon Spoon</span
				>
			</a>

			<!-- Desktop Navigation -->
			<div class="hidden items-center space-x-8 md:flex">
				{#each navLinks as link}
					<a
						href={link.href}
						class="font-medium transition-all hover:scale-105"
						style="color: var(--text-primary); hover:color: var(--sunset-primary);"
					>
						{link.label()}
					</a>
				{/each}

				<!-- Moon Family Links -->
				<div class="flex items-center space-x-3 border-r border-gray-200 pr-6">
					<span class="text-xs font-semibold opacity-80" style="color: var(--text-primary);"
						>{m.moon_family()}:</span
					>
					<a
						href="https://mamahomemade-haadrin.com"
						target="_blank"
						rel="noopener noreferrer"
						class="flex items-center space-x-1 rounded-lg px-3 py-1.5 text-sm font-medium transition-all hover:scale-105"
						style="background: linear-gradient(135deg, var(--blue-dark), var(--sunset-primary)); color: white; box-shadow: 0 2px 8px rgba(30, 58, 95, 0.2);"
						title="Mama Homemade"
					>
						<UtensilsCrossed size={14} />
						<span>Mama Homemade</span>
					</a>
					<a
						href="https://moonlandbar-haadrin.com"
						target="_blank"
						rel="noopener noreferrer"
						class="flex items-center space-x-1 rounded-lg px-3 py-1.5 text-sm font-medium transition-all hover:scale-105"
						style="background: linear-gradient(135deg, var(--sunset-primary), var(--ocean-blue)); color: white; box-shadow: 0 2px 8px rgba(30, 58, 95, 0.2);"
						title="Moonland Bar"
					>
						<Music size={14} />
						<span>Moonland Bar</span>
					</a>
				</div>

				<!-- Language Switcher -->
				<div class="language-dropdown relative">
					<button
						onclick={() => (languageDropdownOpen = !languageDropdownOpen)}
						class="hover-lift flex items-center space-x-1 rounded-full px-5 py-2.5 font-bold transition-all hover:scale-105"
						style="background-color: var(--blue-dark); color: white; box-shadow: 0 4px 12px rgba(30, 58, 95, 0.2);"
					>
						<span>{languageNames[getLocale()]}</span>
						<span class="transition-transform" class:rotate-180={languageDropdownOpen}>
							<ChevronDown size={16} />
						</span>
					</button>
					{#if languageDropdownOpen}
						<div class="shadow-ocean absolute right-0 mt-2 w-32 rounded-lg bg-white">
							{#each locales as lang}
								<button
									onclick={() => switchLanguage(lang)}
									class="block w-full px-4 py-2 text-left transition-colors hover:bg-gray-100"
									style="color: var(--text-primary);"
									class:bg-gray-100={lang === getLocale()}
								>
									{languageNames[lang]}
								</button>
							{/each}
						</div>
					{/if}
				</div>
			</div>

			<!-- Mobile menu button -->
			<button
				class="md:hidden"
				style="color: var(--text-primary);"
				onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
			>
				{#if mobileMenuOpen}
					<X size={24} />
				{:else}
					<Menu size={24} />
				{/if}
			</button>
		</div>
	</div>

	<!-- Mobile menu -->
	{#if mobileMenuOpen}
		<div class="shadow-ocean bg-white md:hidden">
			<div class="space-y-1 px-4 pt-2 pb-3">
				{#each navLinks as link}
					<a
						href={link.href}
						class="block rounded-lg px-3 py-2 transition-colors hover:bg-gray-100"
						style="color: var(--text-primary);"
					>
						{link.label()}
					</a>
				{/each}

				<!-- Mobile Moon Family Links -->
				<div class="border-t border-gray-200 pt-2">
					<p class="px-3 text-sm font-semibold" style="color: var(--text-primary);">
						{m.moon_family()}
					</p>
					<div class="mt-2 space-y-1">
						<a
							href="https://mamahomemade-haadrin.com"
							target="_blank"
							rel="noopener noreferrer"
							class="flex items-center space-x-2 rounded-lg px-3 py-2 transition-colors hover:bg-gray-100"
							style="color: var(--text-primary);"
						>
							<UtensilsCrossed size={16} />
							<span>Mama Homemade</span>
						</a>
						<a
							href="https://moonlandbar-haadrin.com"
							target="_blank"
							rel="noopener noreferrer"
							class="flex items-center space-x-2 rounded-lg px-3 py-2 transition-colors hover:bg-gray-100"
							style="color: var(--text-primary);"
						>
							<Music size={16} />
							<span>Moonland Bar</span>
						</a>
					</div>
				</div>

				<!-- Mobile Language Switcher -->
				<div class="border-t border-gray-200 pt-2">
					<p class="px-3 text-sm font-semibold" style="color: var(--text-primary);">Language</p>
					<div class="mt-2 space-y-1">
						{#each locales as lang}
							<button
								onclick={() => switchLanguage(lang)}
								class="block w-full rounded-lg px-3 py-2 text-left transition-colors hover:bg-gray-100"
								style="color: var(--text-primary);"
								class:bg-gray-100={lang === getLocale()}
							>
								{languageNames[lang]}
							</button>
						{/each}
					</div>
				</div>
			</div>
		</div>
	{/if}
</nav>
