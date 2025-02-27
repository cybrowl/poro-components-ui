<script context="module">
	import {defineMeta} from '@storybook/addon-svelte-csf';
	import HomePage from '../../lib/pages/HomePage.svelte';

	const {Story} = defineMeta({
		title: 'Page / Home',
		component: HomePage
	});
</script>

<Story
	name="default"
	args={{
		has_chats: true
	}}
/>
