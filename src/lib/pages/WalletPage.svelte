<script>
	import AddressToInput from '../components/wallet/AddressToInput.svelte';
	import Banner from '../components/wallet/Banner.svelte';
	import Button from '../components/basic_elements/Button.svelte';
	import CashBalanceContainer from '../components/wallet/CashBalanceContainer.svelte';
	import CashOutAmount from '../components/wallet/CashOutAmount.svelte';
	import CoinAddressContainer from '../components/wallet/CoinAddressContainer.svelte';
	import Icon from '../components/basic_elements/Icon.svelte';
	import MainToolBar from '../components/home/MainToolbar.svelte';
	import ToggleSwitch from '../components/wallet/ToggleSwitch.svelte';
	import Transaction from '../components/wallet/Transaction.svelte';
	import TransactionHistoryButton from '../components/wallet/TransactionHistoryButton.svelte';

	let {
		isDeposit = false,
		isCashOut = false,
		isTransactionHistory = false
	} = $props();

	let transactions = [
		{
			status: 'Deposited',
			description: 'Converted to Dollar (ckUSDC)',
			date: 'June 12, 2024',
			fiatAmount: '$100.00',
			cryptoAmount: '500 ICP'
		},
		{
			status: 'Cash Out',
			date: 'June 12, 2024',
			cashOutAmount: '-$500.00'
		}
	];

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

		{#if !isTransactionHistory}
			<div class="transaction-button-container">
				<TransactionHistoryButton />
			</div>
		{/if}

		<div class="settings-content">
			<!-- Deposit -->
			{#if isDeposit}
				<ToggleSwitch bind:checked={isDeposit} />

				<div class="mb-10">
					<Banner />
				</div>

				<CashBalanceContainer
					promptLabel="Add Cash To"
					amount={20}
					onAddCash={() => handleAddCash()}
				/>
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
			{/if}

			<!-- Cash Out -->
			{#if isCashOut}
				<ToggleSwitch bind:checked={isDeposit} />

				<span class="mt-12"></span>

				<CashOutAmount coinType="ckUSDC" amount={500} />

				<CashBalanceContainer
					promptLabel="Cash Out From"
					amount={1000}
					onAddCash={() => handleAddCash()}
				/>

				<Icon
					name="line_down"
					class="cursor-default ml-4"
					size="1rem"
					scale="1"
					viewSize={{width: 1, height: 12}}
				/>

				<AddressToInput />

				<Button
					class="self-end ml-auto"
					label="Cash Out"
					onClick={() => handleDeposit()}
				/>
			{/if}

			<!-- Transaction History -->
			{#if isTransactionHistory}
				<Icon
					name="arrow_left"
					class="cursor-pointer"
					size="2rem"
					scale="1"
					viewSize={{width: 24, height: 24}}
				/>

				<Icon
					name="icp_transactions"
					class="cursor-pointer"
					size="6rem"
					scale="1"
					viewSize={{width: 88, height: 56}}
				/>

				<h2 class="text-2xl text-white font-bold">Internet Computer</h2>

				<span class="mt-4"></span>

				<div class="transactions">
					{#each transactions as t}
						<Transaction {...t} />
					{/each}
				</div>
			{/if}
		</div>
	</div>
</div>

<style lang="postcss">
	.ai-interface {
		@apply lg:grid md:grid grid-cols-12 h-screen fixed inset-0;
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
		@apply flex flex-col items-start w-full gap-8 p-6;
	}

	.transaction-button-container {
		@apply w-full flex justify-end px-10 pt-8;
	}

	.transactions {
		@apply flex flex-col gap-12 w-full;
	}

	.toolbar {
		@apply w-full h-16 z-10 flex items-center justify-end p-10;
	}
</style>
