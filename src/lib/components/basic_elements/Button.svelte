<script>
	const {label = 'Button', variant = 'dark', width = 'w-auto'} = $props();
</script>

<button class={`base-button ${variant === 'dark' ? 'dark' : 'gold'} ${width}`}>
	{label}
</button>

<style lang="postcss">
	.base-button {
		@apply inline-flex items-center justify-center px-4 py-2 h-14 rounded-md font-medium;
	}

	.dark {
		@apply bg-graphite text-white;
	}

	.gold {
		@apply bg-merigold text-black;
	}
</style>
