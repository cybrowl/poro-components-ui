<script>
	import Banner from '../components/wallet/Banner.svelte';
	import CashBalanceContainer from '../components/wallet/CashBalanceContainer.svelte';
	import CoinAddressContainer from '../components/wallet/CoinAddressContainer.svelte';
	import Icon from '../components/basic_elements/Icon.svelte';
	import MainToolBar from '../components/home/MainToolbar.svelte';
	import ToggleSwitch from '../components/wallet/ToggleSwitch.svelte';
	import TransactionHistoryButton from '../components/wallet/TransactionHistoryButton.svelte';

	// State for toggle switch (Deposit/Cash out)
	let isDeposit = $state(true);

	// Handlers for coin address copy
	function handleCopy(coinType) {
		console.log(`${coinType} address copied!`);
	}
</script>

<div class="ai-interface">
	<div class="interface-panel interface-panel--response">
		<Icon
			name="poro_logo"
			class="cursor-default"
			size="12rem"
			scale="1"
			viewSize={{width: 221, height: 59}}
		/>
	</div>
	<div class="interface-panel interface-panel--settings">
		<div class="toolbar">
			<MainToolBar />
		</div>
		<div class="transaction-button-container">
			<TransactionHistoryButton />
		</div>
		<div class="settings-content">
			<ToggleSwitch />
			<div class="mb-10">
				<Banner />
			</div>

			<CashBalanceContainer />
			<Icon
				name="line_down"
				class="cursor-default ml-4"
				size="1rem"
				scale="1"
				viewSize={{width: 1, height: 12}}
			/>
			<CoinAddressContainer
				coinType="ICP"
				address="87a4427b0ae47c3a92f0f2132a98f9a5d69d5ecefa97ad9ac3919766bbae85ac"
				onCopy={() => handleCopy('ICP')}
			/>
			<CoinAddressContainer
				coinType="BTC"
				address="bgjdh38740ok382fk0973bf749dbdsb9475bsjv"
				onCopy={() => handleCopy('BTC')}
			/>
		</div>
	</div>
</div>

<div class="mobile-incompatible-notice">
	<h1>Sorry, Mobile Not Supported</h1>
</div>

<style lang="postcss">
	.ai-interface {
		@apply hidden lg:grid grid-cols-12 h-screen fixed inset-0;
	}

	.interface-panel {
		@apply flex w-full h-full;
	}

	.interface-panel--response {
		@apply col-span-6 bg-background-primary justify-center items-center;
	}

	.interface-panel--settings {
		@apply col-span-6 bg-background-secondary flex-col items-start;
	}

	.settings-content {
		@apply flex flex-col items-start w-full gap-6 p-6;
	}

	.transaction-button-container {
		@apply w-full flex justify-end px-10 pt-8;
	}

	.mobile-incompatible-notice {
		@apply grid lg:hidden h-screen place-items-center text-white text-4xl;
	}

	.toolbar {
		@apply w-full h-16 z-10 flex items-center justify-end p-10;
	}
</style>
