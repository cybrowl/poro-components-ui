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
				graphite: '#313135',
				'carbon-black': '#161618',
				'midnight-slate': '#44444B',
				merigold: '#DAA520',
				'silver-mist': '#AAAAAF'
			},
			screens: {
				'3xl': '2222px'
			}
		}
	},

	plugins: []
};
