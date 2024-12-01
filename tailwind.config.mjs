/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		spacing: {
			'1': '4px',
			'2': '8px',
			'2.5': '10px',
			'3': '12px',
			'3.5': '14px',
			'4': '16px',
			'5': '24px',
			'6': '32px',
			'6.5': '40px',
			'7': '48px',
			'7.5': '56px',
			'8': '64px',
			'9': '128px',
			'10': '192px',
			'11': '224px',
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
			'white': '#F5F5F5',
			'red': '#F05454',
			'blue': '#6366F1',
			'black': '#121212',
		},
	},
	plugins: [],
}
