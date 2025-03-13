<script>
	import Icon from '../basic_elements/Icon.svelte';

	export let selected_icon = 'gpt';

	const icons = [
		{name: 'gpt', size: '1.5rem', viewSize: {width: 24, height: 24}},
		{
			name: 'line',
			size: '1.5rem',
			viewSize: {width: 24, height: 24},
			clickable: false,
			class: 'fill_white'
		},
		{name: 'history', size: '1.5rem', viewSize: {width: 24, height: 24}},
		{name: 'wallet', size: '1.5rem', viewSize: {width: 24, height: 24}},
		{name: 'settings', size: '1.5rem', viewSize: {width: 24, height: 24}},
		{
			name: 'new_session_white',
			size: '2rem',
			viewSize: {width: 32, height: 32},
			class: 'fill_none ml-6',
			clickable: true
		}
	];

	function select_icon(icon_name) {
		selected_icon = icon_name;
	}

	function getIconClass(icon) {
		return (
			icon.class || (selected_icon === icon.name ? 'fill_gold' : 'fill_white')
		);
	}
</script>

<div class="main">
	{#each icons as icon}
		<Icon
			name={icon.name}
			class={getIconClass(icon)}
			viewSize={icon.viewSize}
			size={icon.size}
			clickable={icon.clickable !== false}
			on:click={() => icon.clickable !== false && select_icon(icon.name)}
		/>
	{/each}
</div>

<style lang="postcss">
	.main {
		@apply flex flex-row gap-6 items-center;
	}
</style>
