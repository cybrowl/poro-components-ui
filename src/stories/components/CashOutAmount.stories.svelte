<script context="module">
	import {defineMeta} from '@storybook/addon-svelte-csf';
	import CashOutAmount from '../../lib/components/wallet/CashOutAmount.svelte';

	const {Story} = defineMeta({
		title: 'Components/Wallet/CashOutAmount',
		component: CashOutAmount,
		argTypes: {
			coinType: {control: 'text'},
			amount: {control: 'text'},
			onAddCash: {action: 'clicked'}
		}
	});
</script>

<div class="balance-info"></div>

<!-- Storybook Stories -->
<Story
	name="Default"
	args={{
		amount: '20.50',
		coinType: 'ckUSDC'
	}}
/>

<Story
	name="LargeAmount"
	args={{
		amount: '9999.99',
		coinType: 'ckUSDC'
	}}
/>

<Story
	name="ZeroBalance"
	args={{
		amount: '0.00',
		coinType: 'ckUSDC'
	}}
/>

<Story
	name="WithCallback"
	args={{
		amount: '150.75',
		coinType: 'ckUSDC',
		onAddCash: () => alert('Add cash action triggered for ckUSDC!')
	}}
/>

<style lang="postcss">
	.balance-info {
		@apply flex items-baseline gap-2;
	}
</style>
