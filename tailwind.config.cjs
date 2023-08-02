/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				highvis: '#ff5515'
			},
		fontFamily: {
			montserrat: ['Montserrat', 'sans-serif'],
		},
		keyframes: {
			compass: {
				'50%': { transform: 'rotate(420deg)' },
				'100%': { transform: 'rotate(100deg)' },
			}
		}
		},
	},
	plugins: [],
}
