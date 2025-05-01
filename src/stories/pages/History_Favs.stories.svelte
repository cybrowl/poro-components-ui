<script context="module">
	import {defineMeta} from '@storybook/addon-svelte-csf';
	import History_Favs from '../../lib/pages/History_Favs.svelte';

	const {Story} = defineMeta({
		title: 'Page / History_Favs',
		component: History_Favs
	});
</script>

<Story name="default" args={{}} />
