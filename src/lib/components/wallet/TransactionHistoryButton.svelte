<script>
	import Icon from '../basic_elements/Icon.svelte';

	let {title = 'Transaction History'} = $props();
</script>

{#snippet TransactionHeader()}
	<div class="transaction-header">
		<span class="header-title">{title}</span>
		<Icon
			name="arrow_right"
			class="cursor_default"
			size="1rem"
			viewSize={{width: 7, height: 12}}
		/>
	</div>
{/snippet}

<div class="transaction-history-container">
	{@render TransactionHeader()}
</div>

<style lang="postcss">
	.transaction-history-container {
		@apply flex items-center;
		@apply h-12  text-white cursor-pointer hover:bg-gray-800 transition-colors duration-200;
	}

	.transaction-header {
		@apply flex items-center justify-center w-full;
	}

	.header-title {
		@apply text-base font-medium pr-3;
	}
</style>
