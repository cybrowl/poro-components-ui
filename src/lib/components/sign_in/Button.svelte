<script>
	import Icon from '../basic_elements/Icon.svelte';

	export let label = 'Continue with Google';
	export let logo_name = 'google_logo';
	export let logo_view_size = {width: 32, height: 32};
	export let logo_size = '2rem';

	export let variant = 'none';
</script>

<button
	class={`sign_in_button
    ${variant === 'highlighted' ? 'bg-gray-a' : ''}
    ${variant === 'none' ? '' : ''}
  `}
>
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
		@apply font-sans flex items-center w-80 gap-6 p-4  text-xl text-white border-solid rounded-xl border border-white;
		border-color: rgba(255, 255, 255, 0.25);
	}
</style>
