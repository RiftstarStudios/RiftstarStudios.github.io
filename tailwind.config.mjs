/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		spacing: {
			'1': '4px',
			'2': '8px',
			'3': '12px',
			'4': '16px',
			'5': '24px',
			'6': '32px',
			'7': '48px',
			'8': '64px',
			'9': '128px',
		},
		screens: {
			'mc': '372px',
			'sm': '452px',
			'nm': '640px',
			'md': '768px',
			'lg': '1024px',
			'xl': '1280px',
			'2xl': '1536px',
		},
		colors: {
			'white': {
				100: '#F5F5F5',
				200: '#F3F8FF',
			},
			'red': '#F05454',
			'green': {
				100: '#34d399',
				200: '#10b981',
				300: '#059669',
			},
			'black': '#121212',
		},
	},
	plugins: [],
}
