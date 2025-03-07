<script>
	let {message = 'ICP and Bitcoin will automatically be converted to ckUSDC'} =
		$props();
</script>

<div class="banner">
	<div class="banner-edge"></div>
	<span class="banner-text">{message}</span>
</div>

<style lang="postcss">
	.banner {
		@apply flex items-center rounded-lg overflow-hidden bg-carbon-black bg-opacity-50 border border-white border-opacity-10;
		@apply h-12;
	}

	.banner-edge {
		@apply w-4 h-full bg-merigold rounded-l-lg;
	}

	.banner-text {
		@apply text-white text-sm font-sans ml-2;
	}
</style>
