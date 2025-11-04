<script lang="ts">
	import * as m from '$lib/paraglide/messages';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import { scrollReveal } from '$lib/utils/scroll-reveal';

	let { data }: { data: any } = $props();

	let searchQuery = $state('');
	let selectedCategory = $state('all');

	const menuItems = [
		{
			id: '1',
			name: m.menu_tuna_tartare_name(),
			description: m.menu_tuna_tartare_desc(),
			price: 320,
			category: 'appetizers'
		},
		{
			id: '2',
			name: m.menu_spring_rolls_fusion_name(),
			description: m.menu_spring_rolls_fusion_desc(),
			price: 280,
			category: 'appetizers'
		},
		{
			id: '3',
			name: m.menu_pork_belly_name(),
			description: m.menu_pork_belly_desc(),
			price: 380,
			category: 'appetizers'
		},
		{
			id: '4',
			name: m.menu_ceviche_name(),
			description: m.menu_ceviche_desc(),
			price: 340,
			category: 'appetizers'
		},
		{
			id: '5',
			name: m.menu_dumplings_name(),
			description: m.menu_dumplings_desc(),
			price: 260,
			category: 'appetizers'
		},
		{
			id: '6',
			name: m.menu_pad_thai_fusion_name(),
			description: m.menu_pad_thai_fusion_desc(),
			price: 350,
			category: 'mains'
		},
		{
			id: '7',
			name: m.menu_curry_risotto_name(),
			description: m.menu_curry_risotto_desc(),
			price: 380,
			category: 'mains'
		},
		{
			id: '8',
			name: m.menu_beef_massaman_name(),
			description: m.menu_beef_massaman_desc(),
			price: 450,
			category: 'mains'
		},
		{
			id: '9',
			name: m.menu_duck_confit_name(),
			description: m.menu_duck_confit_desc(),
			price: 480,
			category: 'mains'
		},
		{
			id: '10',
			name: m.menu_sea_bass_name(),
			description: m.menu_sea_bass_desc(),
			price: 420,
			category: 'seafood'
		},
		{
			id: '11',
			name: m.menu_prawn_curry_name(),
			description: m.menu_prawn_curry_desc(),
			price: 380,
			category: 'seafood'
		},
		{
			id: '12',
			name: m.menu_squid_name(),
			description: m.menu_squid_desc(),
			price: 320,
			category: 'seafood'
		},
		{
			id: '13',
			name: m.menu_tofu_fusion_name(),
			description: m.menu_tofu_fusion_desc(),
			price: 280,
			category: 'vegetarian'
		},
		{
			id: '14',
			name: m.menu_vegetable_curry_name(),
			description: m.menu_vegetable_curry_desc(),
			price: 260,
			category: 'vegetarian'
		},
		{
			id: '15',
			name: m.menu_mango_sticky_rice_name(),
			description: m.menu_mango_sticky_rice_desc(),
			price: 180,
			category: 'desserts'
		},
		{
			id: '16',
			name: m.menu_chocolate_lava_name(),
			description: m.menu_chocolate_lava_desc(),
			price: 220,
			category: 'desserts'
		},
		{
			id: '17',
			name: m.menu_coconut_ice_name(),
			description: m.menu_coconut_ice_desc(),
			price: 160,
			category: 'desserts'
		}
	];

	const categories = [
		{ id: 'all', label: m.category_all() },
		{ id: 'appetizers', label: m.category_appetizers() },
		{ id: 'mains', label: m.category_mains() },
		{ id: 'seafood', label: m.category_seafood() },
		{ id: 'vegetarian', label: m.category_vegetarian() },
		{ id: 'desserts', label: m.category_desserts() }
	];

	const filteredItems = $derived(() => {
		let items = menuItems;

		if (selectedCategory !== 'all') {
			items = items.filter((item) => item.category === selectedCategory);
		}

		if (searchQuery.trim()) {
			const query = searchQuery.toLowerCase();
			items = items.filter(
				(item) =>
					item.name.toLowerCase().includes(query) || item.description.toLowerCase().includes(query)
			);
		}

		return items;
	});
</script>

<svelte:head>
	<title>Menu - Moon Spoon</title>
</svelte:head>

<PageHeader title={m.menu_title()} subtitle={m.menu_subtitle()} />

<section class="bg-white py-16">
	<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
		<!-- Search -->
		<div class="mb-8" use:scrollReveal={{ delay: 0 }}>
			<input
				type="text"
				bind:value={searchQuery}
				placeholder={m.search_placeholder()}
				class="w-full rounded-full border-2 px-6 py-3 text-lg focus:border-transparent focus:ring-2 focus:outline-none"
				style="border-color: var(--blue-medium); focus:ring-color: var(--sand-gold);"
			/>
		</div>

		<!-- Category Filters -->
		<div class="mb-8 flex flex-wrap gap-3" use:scrollReveal={{ delay: 100 }}>
			{#each categories as category}
				<button
					type="button"
					onclick={() => (selectedCategory = category.id)}
					class="rounded-full px-6 py-2 text-sm font-semibold transition-all hover:scale-105"
					class:gradient-ocean-sunset={selectedCategory === category.id}
					class:bg-gray-100={selectedCategory !== category.id}
					class:text-white={selectedCategory === category.id}
					class:text-gray-700={selectedCategory !== category.id}
				>
					{category.label}
				</button>
			{/each}
		</div>

		<!-- Currency Note -->
		<div class="mb-6 text-center text-sm" style="color: var(--text-secondary);">
			{m.currency_note()}
		</div>

		<!-- Menu Items -->
		{#if filteredItems().length === 0}
			<div class="py-12 text-center" use:scrollReveal={{ delay: 200 }}>
				<p class="mb-2 text-xl font-semibold" style="color: var(--text-primary);">
					{m.no_results()}
				</p>
				<p style="color: var(--text-secondary);">{m.no_results_text()}</p>
			</div>
		{:else}
			<div class="grid gap-6 md:grid-cols-2">
				{#each filteredItems() as item (item.id)}
					<div
						class="rounded-lg border-2 p-6 transition-all hover:shadow-lg"
						style="border-color: var(--blue-light);"
						use:scrollReveal={{ delay: 200 }}
					>
						<div class="flex items-start justify-between gap-4">
							<div class="flex-1">
								<h3 class="mb-2 text-xl font-bold" style="color: var(--blue-dark);">
									{item.name}
								</h3>
								<p class="mb-3 text-sm" style="color: var(--text-secondary);">
									{item.description}
								</p>
							</div>
							<div class="text-right">
								<span class="text-2xl font-bold" style="color: var(--sand-gold);">
									{item.price}฿
								</span>
							</div>
						</div>
					</div>
				{/each}
			</div>
		{/if}

		<!-- Call to Action -->
		<div class="mt-12 text-center" use:scrollReveal={{ delay: 300 }}>
			<a
				href="/reservations"
				class="gradient-ocean-sunset inline-block rounded-full px-8 py-4 font-semibold text-white shadow-lg transition-all hover:scale-105"
			>
				{m.book_table()}
			</a>
		</div>
	</div>
</section>
