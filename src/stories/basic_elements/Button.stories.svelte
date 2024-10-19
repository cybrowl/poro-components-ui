<script>
	import {Template, Story} from '@storybook/addon-svelte-csf';
	import Button from '../../lib/components/basic_elements/Button.svelte';
</script>

<Template let:args>
	<div class="m-6">
		<Button {...args} on:click={args.onClick} />
	</div>
</Template>

<Story
	name="Primary"
	args={{
		primary: true,
		secondary: false,
		label: 'Button'
	}}
/>
