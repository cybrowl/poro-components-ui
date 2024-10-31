<script context="module">
	import ButtonSignIn from '../lib/components/basic_elements/ButtonSignIn.svelte';

	export const meta = {
		title: 'Basic Elems / ButtonSignIn',
		component: ButtonSignIn
	};
</script>

<script>
	import {Template, Story} from '@storybook/addon-svelte-csf';
</script>

<Template let:args>
	<ButtonSignIn {...args} />
</Template>

<Story name="Google" args={{label: 'Continue with Google'}} />
<Story
	name="Dfinity"
	args={{
		logo_name: 'dfinity_logo',
		label: 'Continue with DFINITY',
		logo_view_size: {width: 48, height: 24},
		logo_size: '3rem'
	}}
/>
