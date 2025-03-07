<script>
	let {active = 'deposit', onToggle = newState => {}} = $props();

	function handleToggle(newState) {
		if (active !== newState) {
			active = newState;
			onToggle(newState);
		}
	}
</script>

<div class="toggle-switch">
	<button
		class="toggle-button {active === 'deposit' ? 'active' : ''}"
		onclick={() => handleToggle('deposit')}
	>
		Deposit
	</button>
	<button
		class="toggle-button {active === 'cashout' ? 'active' : ''}"
		onclick={() => handleToggle('cashout')}
	>
		Cash Out
	</button>
</div>

<style lang="postcss">
	.toggle-switch {
		@apply inline-flex;
	}

	.toggle-button {
		@apply font-sans font-bold text-lg px-10 py-2 rounded-full transition-all duration-300 ease-in-out focus:outline-none;
		@apply bg-transparent text-white cursor-pointer;
		@apply relative z-10;
	}

	.toggle-button.active {
		@apply bg-graphite text-white shadow-lg transform translate-x-0 z-20;
	}

	.toggle-button:first-child {
		@apply rounded-l-full;
		@apply -mr-[10%];
	}

	.toggle-button:last-child {
		@apply rounded-r-full;
	}

	/* Ensure only one button is active at a time */
	.toggle-button:not(.active) {
		@apply bg-white text-carbon-black z-10;
	}

	/* Hover effect */
	.toggle-button:hover:not(.active) {
		@apply bg-graphite bg-opacity-50 text-white;
	}
</style>
