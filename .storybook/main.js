/** @type { import('@storybook/svelte-vite').StorybookConfig } */
const config = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|ts|svelte)'],
	addons: [
		'@storybook/addon-svelte-csf',
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@chromatic-com/storybook',
		'@storybook/addon-interactions'
	],
	framework: {
		name: '@storybook/sveltekit',
		options: {}
	},
	core: {
		builder: '@storybook/builder-vite', 
	},
	  async viteFinal(config) {
		// Merge custom configuration into the default config
		const { mergeConfig } = await import('vite');
	 
		return mergeConfig(config, {
		  // Add dependencies to pre-optimization
		  optimizeDeps: {
			include: ['storybook-dark-mode'],
		  },
		});
	}
};
export default config;
