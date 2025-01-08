<script>
	import {createEventDispatcher} from 'svelte';
	import Icon from '../components/basic_elements/Icon.svelte';
	import Button from '../components/sign_in/Button.svelte';

	const dispatch = createEventDispatcher();
</script>

<div class="main-grid">
	<div class="read-panel">
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
	</div>
	<div class="write-panel">
		<span class="sign-in-buttons">
			<Button />
			<Button
				label="Continue with DFINITY"
				logo_name="dfinity_logo"
				logo_size="2.5rem"
				logo_view_size={{width: 48, height: 24}}
			/>
		</span>
	</div>
</div>

<!-- Mobile Not Supported -->
<div class="grid lg:hidden h-screen place-items-center text-white text-4xl">
	<h1>Sorry, Mobile Not Supported</h1>
</div>

<style lang="postcss">
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
			flex justify-center items-center
			bg-background-secondary
			w-full h-full;
	}

	.sign-in-buttons {
		@apply flex flex-col
			gap-6;
	}
</style>
