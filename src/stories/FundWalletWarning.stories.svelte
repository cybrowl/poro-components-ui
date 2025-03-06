<script context="module">
	import {defineMeta} from '@storybook/addon-svelte-csf';
	import FundWalletWarning from '../lib/components/wallet/FundWalletWarning.svelte';

	const {Story} = defineMeta({
		title: 'Components/ Wallet / Warning',
		component: FundWalletWarning
	});
</script>

<Story name="default" args={{}} />
