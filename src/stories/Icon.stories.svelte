<script context="module">
	import Icon from '../lib/components/basic_elements/Icon.svelte';

	export const meta = {
		title: 'Basic Elems / Icons',
		component: Icon
	};
</script>

<script>
	import {Template, Story} from '@storybook/addon-svelte-csf';
</script>

<Template let:args>
	<Icon {...args} />
</Template>

<Story
	name="dfinity_logo"
	args={{
		name: 'dfinity_logo',
		class: 'cursor_pointer',
		size: '4rem',
		scale: 1,
		viewSize: {
			width: 48,
			height: 24
		}
	}}
/>

<Story
	name="google_logo"
	args={{
		name: 'google_logo',
		class: 'cursor_pointer',
		size: '3rem',
		scale: 1,
		viewSize: {
			width: 32,
			height: 32
		}
	}}
/>

<Story
	name="poro_logo"
	args={{
		name: 'poro_logo',
		class: 'cursor_pointer',
		size: '10rem',
		scale: 1,
		viewSize: {
			width: 221,
			height: 59
		}
	}}
/>
