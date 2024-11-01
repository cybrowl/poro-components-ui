<script>
	import Icon from '../basic_elements/Icon.svelte';
</script>

<div class="main">
	<Icon name="gpt_white" viewSize={{width: 44, height: 44}} size="4rem" />
	<Icon
		name="line"
		clickable={false}
		size="2rem"
		viewSize={{width: 1, height: 24}}
	/>
	<Icon name="wallet_white" viewSize={{width: 44, height: 44}} size="4rem" />
	<Icon name="history_white" viewSize={{width: 44, height: 44}} size="4rem" />
	<Icon name="settings_white" viewSize={{width: 44, height: 44}} size="4rem" />
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
