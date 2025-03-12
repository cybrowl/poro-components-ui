<script context="module">
	import {defineMeta} from '@storybook/addon-svelte-csf';
	import CashBalanceContainer from '../../lib/components/wallet/CashBalanceContainer.svelte';

	const {Story} = defineMeta({
		title: 'Components/Wallet/CashBalanceContainer',
		component: CashBalanceContainer
	});
</script>

<Story
	name="default"
	args={{
		amount: '20.50',
		currency: 'ckUSDC'
	}}
/>

<Story
	name="largeAmount"
	args={{
		amount: '9999.99',
		currency: 'ckUSDC'
	}}
/>

<Story
	name="zeroBalance"
	args={{
		amount: '0.00',
		currency: 'ckUSDC'
	}}
/>

<Story
	name="withCallback"
	args={{
		amount: '150.75',
		currency: 'ckUSDC',
		onAddCash: () => alert('Add cash action triggered for ckUSDC!')
	}}
/>
