<script>
	import * as icons from './icons';

	const {
		name,
		clickable = true,
		focusable = false,
		viewSize = {width: 24, height: 24},
		size = '2rem',
		scale = 1,
		class: className = ''
	} = $props();

	const viewbox = {
		width: viewSize.width / scale,
		height: viewSize.height / scale
	};

	function onClick(event) {
		event.stopPropagation();
		const host = $host;
		host.dispatchEvent(new Event('click', event));
	}
</script>

{#if clickable}
	<button onclick={onClick}>
		<svg
			class={className}
			{focusable}
			width={size}
			height={size}
			viewBox={`0 0 ${viewbox.width} ${viewbox.height}`}
			onkeypress={e => {
				// TODO: need to design how this will work for A11y
			}}
			role="button"
			tabindex="0"
		>
			{@html icons[name]}
		</svg>
	</button>
{:else}
	<span>
		<svg
			class={className}
			{focusable}
			width={size}
			height={size}
			viewBox={`0 0 ${viewbox.width} ${viewbox.height}`}
		>
			{@html icons[name]}
		</svg>
	</span>
{/if}

<style lang="postcss">
	.cursor_pointer {
		@apply cursor-pointer;
	}
	.cursor_default {
		@apply cursor-default;
	}
	.responsive_icon {
		@apply w-16 h-16 lg:w-11 lg:h-11 3xl:w-11 3xl:h-11;
	}
	.fill_none {
		@apply fill-none;
	}
	.fill_white {
		@apply fill-white;
	}
	.fill_gold {
		@apply fill-merigold;
	}
	svg:focus {
		outline: none;
		box-shadow: none;
	}
</style>
