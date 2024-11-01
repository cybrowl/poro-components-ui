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

<Story
	name="new_session_none"
	args={{
		name: 'new_session_none',
		class: 'cursor_pointer fill_none',
		size: '3rem',
		scale: 1,
		viewSize: {
			width: 32,
			height: 32
		}
	}}
/>

<Story
	name="new_session_gold"
	args={{
		name: 'new_session_gold',
		class: 'cursor_pointer fill_none',
		size: '3rem',
		scale: 1,
		viewSize: {
			width: 32,
			height: 32
		}
	}}
/>

<Story
	name="wallet_none"
	args={{
		name: 'wallet_none',
		class: 'cursor_pointer',
		size: '4rem',
		scale: 1,
		viewSize: {
			width: 44,
			height: 44
		}
	}}
/>

<Story
	name="wallet_gold"
	args={{
		name: 'wallet_gold',
		class: 'cursor_pointer',
		size: '4rem',
		scale: 1,
		viewSize: {
			width: 44,
			height: 44
		}
	}}
/>

<Story
	name="settings_none"
	args={{
		name: 'settings_none',
		class: 'cursor_pointer',
		size: '4rem',
		scale: 1,
		viewSize: {
			width: 44,
			height: 44
		}
	}}
/>

<Story
	name="settings_gold"
	args={{
		name: 'settings_gold',
		class: 'cursor_pointer',
		size: '4rem',
		scale: 1,
		viewSize: {
			width: 44,
			height: 44
		}
	}}
/>

<Story
	name="history_none"
	args={{
		name: 'history_none',
		class: 'cursor_pointer',
		size: '4rem',
		scale: 1,
		viewSize: {
			width: 44,
			height: 44
		}
	}}
/>

<Story
	name="history_gold"
	args={{
		name: 'history_gold',
		class: 'cursor_pointer',
		size: '4rem',
		scale: 1,
		viewSize: {
			width: 44,
			height: 44
		}
	}}
/>

<Story
	name="history_gold"
	args={{
		name: 'history_gold',
		class: 'cursor_pointer',
		size: '4rem',
		scale: 1,
		viewSize: {
			width: 44,
			height: 44
		}
	}}
/>

<Story
	name="gpt_white"
	args={{
		name: 'gpt_white',
		class: 'cursor_pointer',
		size: '4rem',
		scale: 1,
		viewSize: {
			width: 44,
			height: 44
		}
	}}
/>

<Story
	name="gpt_gold"
	args={{
		name: 'gpt_gold',
		class: 'cursor_pointer',
		size: '4rem',
		scale: 1,
		viewSize: {
			width: 44,
			height: 44
		}
	}}
/>
