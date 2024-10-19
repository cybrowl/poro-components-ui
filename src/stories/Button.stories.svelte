<script context="module">
	import Button from '../lib/Button.svelte';

	export const meta = {
		title: 'Button',
		component: Button
	};
</script>

<script>
	import {Template, Story} from '@storybook/addon-svelte-csf';
</script>

<Template let:args>
	<Button {...args} />
</Template>

<Story name="Blue" args={{label: 'button'}} />
<Story name="Square" args={{label: 'square button'}} />
