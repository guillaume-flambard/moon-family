<script lang="ts">
	let { title, subtitle }: { title: string; subtitle?: string } = $props();
</script>

<section
	class="py-20 glass-nightlife"
	style="background: linear-gradient(135deg, var(--violet-dark) 0%, var(--turquoise-dark) 100%);"
>
	<div class="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
		<h1 class="mb-6 text-5xl font-extrabold font-serif tracking-tight md:text-6xl" style="color: #ffffff !important;">
			{title}
		</h1>
		{#if subtitle}
			<p class="text-2xl leading-relaxed" style="color: rgba(255, 255, 255, 0.95) !important;">
				{subtitle}
			</p>
		{/if}
	</div>
</section>

