<script>
	export let coinType = 'ckUSDC';
	export let amount = '0';
</script>

<div class="balance-info">
	<input
		class="balance"
		type="text"
		bind:value={amount}
		style="width: {String(amount).length}ch"
	/>
	<span class="token">{coinType}</span>
</div>

<style lang="postcss">
	.balance-info {
		@apply flex items-baseline gap-6 text-8xl;
	}

	.balance {
		@apply text-white bg-transparent border-none outline-none;
	}

	.token {
		@apply text-midnight-slate;
	}
</style>
