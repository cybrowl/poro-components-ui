export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	safelist: [/^carta-/],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Nano Sans', 'sans-serif']
			},
			colors: {
				'background-primary': '#0C0C0D',
				'background-secondary': '#111113',
				'graphite': '#313135',
				merigold: '#DAA520'
			},
			screens: {
				'3xl': '2222px'
			}
		}
	},

	plugins: []
};
