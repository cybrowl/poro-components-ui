<script>
	import {createEventDispatcher, onMount} from 'svelte';
	import Icon from '../components/basic_elements/Icon.svelte';
	import MainToolBar from '../components/home/MainToolbar.svelte';

	import {Carta, MarkdownEditor} from 'carta-md';

	const carta = new Carta({
		theme: 'dracula'
	});

	const dispatch = createEventDispatcher();

	let value = '';

	export let has_chats = false;
</script>

<div class="main-grid">
	<div class="read-panel">
		{#if has_chats === true}
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
		<div class="editor-root">
			<div class="markdown">
				<MarkdownEditor
					bind:value
					mode="split"
					{carta}
					disableToolbar={true}
					placeholder="#"
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
            justify-between flex flex-col
            bg-background-secondary
            w-full h-full;
	}

	.toolbar {
		@apply w-full h-16
            z-10 flex items-center
            justify-end p-10;
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
