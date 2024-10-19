// src/stories/Button.stories.js
import Button from '../lib/Button.svelte';

export default {
	title: 'Components/Button', // The title under which this story appears in Storybook
	component: Button, // The Svelte component to render
	argTypes: {
		label: {control: 'text'}, // Add control for 'label' property
		onClick: {action: 'onClick'} // Add action handler for 'onClick' event
	}
};

// Create a story for the "Primary" button
export const Primary = args => ({
	Component: Button,
	props: args
});

// Define the default args for the Primary story
Primary.args = {
	label: 'Primary Button'
};
