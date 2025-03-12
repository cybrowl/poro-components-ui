<script context="module">
	import {defineMeta} from '@storybook/addon-svelte-csf';
	import TransactionHistoryButton from '../../lib/components/wallet/TransactionHistoryButton.svelte';

	const {Story} = defineMeta({
		title: 'Components/ Wallet / TransactionHistoryButton',
		component: TransactionHistoryButton
	});
</script>

<Story name="default" args={{}} />
