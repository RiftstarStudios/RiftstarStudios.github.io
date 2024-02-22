/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			'white': {
				100: '#FFFFFF',
				200: '#F9F9F9',
				200: '#F3F8FF',
			},
			'blue': {
				100: '#113A5D',
				200: '#062743',
			},
			'red': '#FF7A8A',
			'green': {
				100: '#34d399',
				200: '#10b981',
				200: '#059669',
			},
		},
		extend: {
			boxShadow: {
				'3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
			},
		},
	},
	plugins: [],
}
