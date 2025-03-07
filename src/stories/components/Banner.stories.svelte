<script context="module">
	import {defineMeta} from '@storybook/addon-svelte-csf';
	import Banner from '../../lib/components/wallet/Banner.svelte';

	const {Story} = defineMeta({
		title: 'Components/ Wallet / Banner',
		component: Banner
	});
</script>

<Story name="default" args={{}} />
