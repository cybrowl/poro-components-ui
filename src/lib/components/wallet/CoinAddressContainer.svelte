<script>
	import Icon from '../basic_elements/Icon.svelte';
	import Button from '../basic_elements/Button.svelte';

	let {
		coinType = 'ICP',
		address = '87a4427b0ae47c3a92f0f2132a98f9a5d69d5ecefa97ad9ac3919766bbae85ac',
		onCopy = () => {}
	} = $props();

	const coinIconMap = {
		ICP: 'internet_computer_protocol',
		BTC: 'bitcoin',
		ETH: 'ethereum'
	};

	let copied = $state(false);

	// Handle copy to clipboard
	async function handleCopy() {
		try {
			await navigator.clipboard.writeText(address);
			copied = true; // Update state
			setTimeout(() => (copied = false), 2000); // Reset after 2 seconds
			onCopy(); // Call the callback
		} catch (error) {
			console.error('Copy failed:', error);
		}
	}
</script>

{#snippet AddressInfo()}
	<div class="address-info">
		<p class="label">{coinType} Address</p>
		<p class="address-text">{address}</p>
	</div>
{/snippet}

<div class="coin-address-container">
	<div class="coin-icon">
		<Icon
			name={coinIconMap[coinType] || 'internet_computer_protocol'}
			class="cursor_default"
			size="3.125rem"
			viewSize={{width: 50, height: 50}}
		/>
	</div>

	{@render AddressInfo()}

	<Button
		class="copy-button"
		label="Ok"
		variant="dark"
		width="w-20"
		height="h-14"
		onclick={handleCopy}
	>
		{#if copied}
			Copied!
		{:else}
			Copy
		{/if}
	</Button>
</div>

<style lang="postcss">
	.coin-address-container {
		@apply flex;
	}

	.coin-icon {
		@apply mr-4 flex items-center;
	}

	.address-info {
		@apply flex flex-col items-start text-white;
	}

	.label {
		@apply text-lg opacity-80;
	}

	.address-text {
		@apply font-mono text-sm truncate text-silver-mist pr-4;
	}
</style>
