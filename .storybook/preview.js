import '../src/tailwind.css';
import {themes} from '@storybook/theming';

/** @type { import('@storybook/svelte').Preview } */
const preview = {
	parameters: {
		darkMode: {
			dark: {
				...themes.dark,
				brandImage:
					'https://raw.githubusercontent.com/cybrowl/dsign-components/main/src/lib/assets/dsign_logo.png'
			},
			light: {...themes.normal, appBg: 'white'},
			stylePreview: true,
			current: 'dark'
		},
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		}
	}
};

export default preview;
