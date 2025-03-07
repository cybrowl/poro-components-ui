<script>
	import Icon from '../components/basic_elements/Icon.svelte';
	import MainToolBar from '../components/home/MainToolbar.svelte';
	import {Carta, MarkdownEditor} from 'carta-md';

	// Define props using $props()
	let {has_chats = false} = $props();

	// Initialize Carta with Dracula theme
	const carta = new Carta({
		theme: 'dracula'
	});

	// State for the Markdown editor value
	let value = $state('');

	// Optional: Add a callback for submit if needed
	let onSubmit = () => {
		console.log('Submit clicked with value:', value);
		// Add your submit logic here
	};
</script>

<div class="main-grid">
	<div class="read-panel">
		{#if has_chats}
			<Icon
				name="poro_logo"
				class="cursor_default"
				size="12rem"
				scale="1"
				viewSize={{
					width: 221,
					height: 59
				}}
			/>
		{/if}
	</div>
	<div class="write-panel">
		<div class="toolbar">
			<MainToolBar />
		</div>
		<div class="submit-icon">
			<Icon
				name="submit"
				class="cursor_pointer"
				size="3.5rem"
				scale="1"
				viewSize={{
					width: 56,
					height: 56
				}}
				onclick={onSubmit}
			/>
		</div>
		<div class="editor-root">
			<div class="markdown">
				<MarkdownEditor
					bind:value
					mode="split"
					{carta}
					disableToolbar={true}
					placeholder="|"
				/>
			</div>
		</div>
	</div>
</div>

<!-- Mobile Not Supported -->
<div class="grid lg:hidden h-screen place-items-center text-white text-4xl">
	<h1>Sorry, Mobile Not Supported</h1>
</div>

<style lang="postcss">
	:global(.carta-font-code) {
		font-family: '...', monospace;
		font-size: 1.1rem;
	}

	.main-grid {
		@apply hidden lg:grid
            grid-cols-12
            gap-y-2
            place-items-center
            h-screen
            fixed inset-0;
	}

	.read-panel {
		@apply col-start-1 col-end-7
            row-start-1 row-end-auto
            flex justify-center items-center
            bg-background-primary
            w-full h-full;
	}

	.write-panel {
		@apply col-start-7 col-end-13
            row-start-1 row-end-auto
            flex flex-col
            bg-background-secondary
            w-full h-full;
	}

	.toolbar {
		@apply w-full h-16
            z-10 flex items-center
            justify-end p-10;
	}

	.submit-icon {
		@apply flex justify-end px-10 py-4;
	}

	.editor-root {
		@apply flex-grow p-4;
	}

	.markdown {
		@apply overflow-auto
            w-full h-full
            fixed mb-10 z-10;
	}
</style>
