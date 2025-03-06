<script>
	let {
		label = 'Button',
		variant = 'dark',
		width = 'w-auto',
		height = 'h-14'
	} = $props();

	let buttonClasses = $derived(
		`base-button ${variant === 'dark' ? 'dark' : 'gold'} ${width} ${height}`
	);
</script>

<button class={buttonClasses}>
	{label}
</button>

<style lang="postcss">
	.base-button {
		@apply inline-flex items-center justify-center px-4 py-2 rounded-md font-medium;
	}

	.dark {
		@apply bg-graphite text-white;
	}

	.gold {
		@apply bg-merigold text-black;
	}
</style>
