<script context="module">
	import {defineMeta} from '@storybook/addon-svelte-csf';
	import SignInPage from '../../lib/pages/SignInPage.svelte';

	const {Story} = defineMeta({
		title: 'Page / Sign In',
		component: SignInPage
	});
</script>

<Story name="default" />
