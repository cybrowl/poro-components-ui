<script context="module">
	import SignInPage from '../../lib/pages/SignInPage.svelte';

	export const meta = {
		title: 'SignInPage',
		component: SignInPage
	};
</script>

<script>
	import {Template, Story} from '@storybook/addon-svelte-csf';
</script>

<Template let:args>
	<SignInPage {...args} />
</Template>

<Story name="default" />
