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
	<div class="absolute top-0 left-0 m-8">
		<Icon
			name="poro_brand_white"
			class="cursor-pointer"
			size="2.5rem"
			scale="1"
			viewSize={{width: 32, height: 32}}
		/>
	</div>

	<Icon
		name="piggy_bank"
		class="cursor-pointer"
		size="7rem"
		scale="1"
		viewSize={{width: 112, height: 112}}
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
      border border-white border-opacity-25
      relative;
	}

	.message {
		@apply text-white text-xl mt-4;
	}

	.actions {
		@apply flex gap-4 mt-6 absolute bottom-0 right-0 m-8;
	}
</style>
