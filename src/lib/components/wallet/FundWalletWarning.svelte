<script>
	import Icon from '../basic_elements/Icon.svelte';
	import Button from '../basic_elements/Button.svelte';
</script>

{#snippet WarningMessage()}
	<p class="message">Please ensure that your wallet has sufficient funds!</p>
{/snippet}

{#snippet ActionButtons()}
	<div class="actions">
		<Button label="Ok" variant="dark" width="w-16" height="h-14" />
		<Button label="Fund wallet" variant="gold" width="w-32" height="h-14" />
	</div>
{/snippet}

<div class="wallet-funds-warning">
	<Icon
		name="piggy_bank_placeholder"
		class="cursor-pointer"
		size="4rem"
		scale="1"
		viewSize={{width: 64, height: 64}}
	/>
	{@render WarningMessage()}
	{@render ActionButtons()}
</div>

<style lang="postcss">
	.wallet-funds-warning {
		@apply bg-background-primary
      font-sans
      flex flex-col items-center justify-center
      w-[672px] h-[400px] p-6
      text-center
      rounded-xl
      border border-white border-opacity-25;
	}

	.message {
		@apply text-white text-xl mt-4;
	}

	.actions {
		@apply flex gap-4 mt-6;
	}
</style>
