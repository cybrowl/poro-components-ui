<script context="module">
	import {defineMeta} from '@storybook/addon-svelte-csf';
	import CoinAddressContainer from '../../lib/components/wallet/CoinAddressContainer.svelte';

	const {Story} = defineMeta({
		title: 'Components/ Wallet / CoinAddressContainer',
		component: CoinAddressContainer
	});
</script>

<Story
	name="icp"
	args={{
		coinType: 'ICP',
		address: '87a4427b0ae47c3a92f0f2132a98f9a5d69d5ecefa97ad9ac3919766bbae85ac'
	}}
/>

<Story
	name="bitcoin"
	args={{
		coinType: 'BTC',
		address: '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa'
	}}
/>
