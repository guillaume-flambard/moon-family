<script lang="ts">
	import * as m from '$lib/paraglide/messages';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import { scrollReveal } from '$lib/utils/scroll-reveal';

	let selectedImage = $state<number | null>(null);

	const galleryImages = [
		{
			category: 'Bar',
			image:
				'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&h=600&fit=crop&q=80',
			title: 'Beach Bar',
			description: 'Moonland Bar at night'
		},
		{
			category: 'Events',
			image:
				'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=800&h=600&fit=crop&q=80',
			title: 'Live Music',
			description: 'Live performance at Moonland Bar'
		},
		{
			category: 'Bar',
			image:
				'https://images.unsplash.com/photo-1571875257727-256c39da42af?w=800&h=600&fit=crop&q=80',
			title: 'Cocktails',
			description: 'Handcrafted cocktails'
		}
	];
</script>

<svelte:head>
	<title>Gallery - Moonland Bar</title>
</svelte:head>

<PageHeader title={m.gallery_title()} subtitle={m.gallery_subtitle()} />

<section class="bg-white py-16">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each galleryImages as image, idx}
				<div
					class="cursor-pointer overflow-hidden rounded-2xl shadow-nightlife hover-lift"
					onclick={() => (selectedImage = idx)}
					use:scrollReveal={{ delay: idx * 100 }}
				>
					<img
						src={image.image}
						alt={image.title}
						class="h-64 w-full object-cover"
						loading="lazy"
					/>
					<div class="bg-white p-4">
						<h3 class="font-bold" style="color: var(--black-primary);">{image.title}</h3>
						<p class="text-sm" style="color: var(--text-secondary);">{image.description}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

{#if selectedImage !== null}
	<div
		class="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
		onclick={() => (selectedImage = null)}
		onkeydown={(e) => e.key === 'Escape' && (selectedImage = null)}
	>
		<img
			src={galleryImages[selectedImage].image}
			alt={galleryImages[selectedImage].title}
			class="max-h-full max-w-full rounded-lg"
			onclick={(e) => e.stopPropagation()}
		/>
	</div>
{/if}
