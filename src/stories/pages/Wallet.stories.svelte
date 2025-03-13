<script context="module">
	import {defineMeta} from '@storybook/addon-svelte-csf';
	import WalletPage from '../../lib/pages/WalletPage.svelte';

	const {Story} = defineMeta({
		title: 'Page / Wallet',
		component: WalletPage
	});
</script>

<Story name="default" />
