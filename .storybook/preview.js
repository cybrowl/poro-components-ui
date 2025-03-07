import {themes} from '@storybook/theming';
import '../src/tailwind.css';
import '../src/carta_default.css';

/** @type { import('@storybook/svelte').Preview } */
const preview = {
	parameters: {
		darkMode: {
			dark: {
				...themes.dark,
				brandImage:
					'https://raw.githubusercontent.com/cybrowl/poro-components/main/src/lib/assets/poro_logo.png'
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
		},
		backgrounds: {
			default: 'poro_dark',
			values: [
				{
					name: 'background-primary',
					value: '#0A0A0B'
				},
				{
					name: 'background-secondary',
					value: '#111113'
				}
			]
		}
	}
};

export default preview;
