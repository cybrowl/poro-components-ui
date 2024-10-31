<!-- src/components/Button.svelte -->
<script>
	import Icon from './Icon.svelte';

	export let label = 'Continue with Google';
	export let logo_name = 'google_logo';
	export let logo_view_size = {width: 32, height: 32};
	export let logo_size = '2rem';
</script>

<button class="sign_in_button">
	<Icon
		name={logo_name}
		class="cursor_pointer"
		size={logo_size}
		scale="1"
		viewSize={logo_view_size}
	/>

	<p>{label}</p>
</button>

<style lang="postcss">
	.sign_in_button {
		@apply font-sans flex items-center w-80 gap-6 p-2 rounded-md text-xl text-white;
	}
</style>
