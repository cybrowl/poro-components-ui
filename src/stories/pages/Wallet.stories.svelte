<script context="module">
	import {defineMeta} from '@storybook/addon-svelte-csf';
	import WalletPage from '../../lib/pages/WalletPage.svelte';

	const {Meta, Story} = defineMeta({
		title: 'Pages / Wallet',
		component: WalletPage
		// any “argTypes” or docs parameters go here
	});
</script>

<!-- Single “template” story usage -->
<Story name="Deposit" args={{isDeposit: true}} />
<Story name="Cash Out" args={{isCashOut: true}} />
<Story name="Transaction History" args={{isTransactionHistory: true}} />
