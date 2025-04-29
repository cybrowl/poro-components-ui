<script>
	import Icon from '../basic_elements/Icon.svelte';

	let {
		value = '',
		placeholder = '',
		icon = 'bank',
		width = 'w-full',
		disabled = false,
		class: customClass = '',
		oninput = () => {}
	} = $props();

	function handleInput(event) {
		value = event.target.value;
		oninput(value);
	}
</script>

<div class={`input-with-icon ${width} ${customClass}`}>
	<Icon
		name={icon}
		clickable={false}
		class="stroke_gray"
		size="2rem"
		viewSize={{width: 32, height: 32}}
	/>

	<input
		class="text-input"
		type="text"
		{placeholder}
		bind:value
		{disabled}
		oninput={handleInput}
	/>
</div>

<style lang="postcss">
	.input-with-icon {
		@apply flex items-center gap-6 rounded-lg border border-silver-mist px-6 py-4;
	}

	.text-input {
		@apply flex-1 bg-transparent text-white placeholder-gray-500 outline-none border-none font-sans text-base;
	}
</style>
