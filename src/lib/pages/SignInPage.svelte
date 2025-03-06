<script>
	import Icon from '../components/basic_elements/Icon.svelte';
	import Button from '../components/sign_in/Button.svelte';

	const buttons = [
		{
			label: 'Continue with Google',
			logo: {
				name: 'google_logo',
				size: '1.75rem',
				viewSize: {width: 32, height: 32}
			},
			variant: 'highlighted'
		},
		{
			label: 'Continue with DFINITY',
			logo: {
				name: 'dfinity_logo',
				size: '2rem',
				viewSize: {width: 48, height: 24}
			},
			variant: 'default'
		}
	];
</script>

<div class="main-grid">
	<div class="panel read-panel">
		<Icon
			name="poro_logo"
			class="cursor-default"
			size="12rem"
			scale="1"
			viewSize={{width: 221, height: 59}}
		/>
	</div>
	<div class="panel write-panel">
		<div class="sign-in-buttons">
			{#each buttons as btn}
				<Button
					label={btn.label}
					logo_name={btn.logo.name}
					logo_size={btn.logo.size}
					logo_view_size={btn.logo.viewSize}
					variant={btn.variant}
				/>
			{/each}
		</div>
	</div>
</div>

<div class="mobile-not-supported">
	<h1>Sorry, Mobile Not Supported</h1>
</div>

<style lang="postcss">
	.main-grid {
		@apply hidden lg:grid grid-cols-12 h-screen fixed inset-0;
	}

	.panel {
		@apply flex justify-center items-center w-full h-full;
	}

	.read-panel {
		@apply col-span-6 bg-background-primary;
	}

	.write-panel {
		@apply col-span-6 bg-background-secondary;
	}

	.sign-in-buttons {
		@apply flex flex-col gap-6;
	}

	.mobile-not-supported {
		@apply grid lg:hidden h-screen place-items-center text-white text-4xl;
	}
</style>
