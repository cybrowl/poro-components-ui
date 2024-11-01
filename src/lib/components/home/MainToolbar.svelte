<script>
	import Icon from '../basic_elements/Icon.svelte';
</script>

<div class="main">
	<Icon
		name="gpt"
		class="fill_gold"
		viewSize={{width: 44, height: 44}}
		size="4rem"
	/>
	<Icon
		name="line"
		class="fill_gold"
		clickable={false}
		size="2rem"
		viewSize={{width: 1, height: 24}}
	/>
	<Icon
		name="wallet"
		class="fill_gold"
		viewSize={{width: 44, height: 44}}
		size="4rem"
	/>
	<Icon
		name="history"
		class="fill_gold"
		viewSize={{width: 44, height: 44}}
		size="4rem"
	/>
	<Icon
		name="settings"
		class="fill_gold"
		viewSize={{width: 44, height: 44}}
		size="4rem"
	/>
	<Icon
		name="new_session_white"
		class="fill_none ml-6"
		viewSize={{width: 32, height: 32}}
		size="2.6rem"
	/>
</div>

<style lang="postcss">
	.main {
		@apply flex flex-row gap-2 items-center;
	}
</style>
