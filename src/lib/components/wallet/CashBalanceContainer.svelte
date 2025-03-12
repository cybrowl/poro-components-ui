<script>
	import Icon from '../basic_elements/Icon.svelte';

	let {
		amount = '20.50', // Default amount in dollars
		currency = 'ckUSDC', // Default currency (e.g., ckUSDC)
		onAddCash = () => {} // Callback for adding cash
	} = $props();

	// Derive the full currency label
	let currencyLabel = $derived(`United States Dollar (${currency})`);
</script>

{#snippet CashDetails()}
	<div class="cash-details">
		<p class="prompt-label">Add Cash To</p>
		<p class="currency-label">{currencyLabel}</p>
	</div>
{/snippet}

{#snippet CashAmount()}
	<div class="cash-amount">
		<p class="amount-label">${amount}</p>
		<p class="status-label">Available</p>
	</div>
{/snippet}

<div class="cash-balance-container">
	<div class="cash-icon">
		<Icon
			name="ckUSDC"
			class="cursor_default"
			size="3.125rem"
			viewSize={{width: 50, height: 50}}
		/>
	</div>

	{@render CashDetails()}

	{@render CashAmount()}
</div>

<style lang="postcss">
	.cash-balance-container {
		@apply flex items-center;
		@apply h-12 px-3;
	}

	.cash-icon {
		@apply mr-4 flex-shrink-0;
	}

	.cash-details {
		@apply flex-1 flex flex-col justify-center mr-3;
	}

	.prompt-label {
		@apply text-white text-base font-bold leading-none;
	}

	.currency-label {
		@apply text-silver-mist text-base font-normal leading-tight mt-1;
	}

	.cash-amount {
		@apply flex flex-col items-end justify-center;
	}

	.amount-label {
		@apply text-silver-mist text-xl font-bold leading-none;
	}

	.status-label {
		@apply text-silver-mist text-base font-normal leading-tight mt-1;
	}
</style>
