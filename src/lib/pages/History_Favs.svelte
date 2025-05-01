<script>
	import Icon from '../components/basic_elements/Icon.svelte';
	import MainToolBar from '../components/home/MainToolbar.svelte';

	// Handlers for coin address copy
	function handleCopy(coinType) {
		console.log(`${coinType} address copied!`);
	}
</script>

<div class="ai-interface">
	<div class="interface-panel interface-panel--response">
		<Icon
			name="poro_logo"
			class="cursor-default"
			size="12rem"
			scale="1"
			viewSize={{width: 221, height: 59}}
		/>
	</div>
	<div class="interface-panel interface-panel--settings">
		<div class="toolbar">
			<MainToolBar />
		</div>

		<div class="settings-content"></div>
	</div>
</div>

<style lang="postcss">
	.ai-interface {
		@apply lg:grid md:grid grid-cols-12 h-screen fixed inset-0;
	}

	.interface-panel {
		@apply flex w-full h-full;
	}

	.interface-panel--response {
		@apply col-span-6 bg-background-primary justify-center items-center;
	}

	.interface-panel--settings {
		@apply col-span-6 bg-background-secondary flex-col items-start;
	}

	.settings-content {
		@apply flex flex-col items-start w-full gap-8 p-6;
	}

	.toolbar {
		@apply w-full h-16 z-10 flex items-center justify-end p-10;
	}
</style>
