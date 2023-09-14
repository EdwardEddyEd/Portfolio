/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	variants: {
		extends: {
			opacity: ['active']
		}
	},
	theme: {
		extend: {
			colors: {
				"neon-teal": "#05E3E4",
				"neon-purple": "#9265F6",
				dark: "#181621",
				light: "#FFFFFF"
			},
			fontFamily: {
				inter: ["Inter", "sans-serif"],
				barlow: ["Barlow", "sans-serif"],
			},
		},
	},
	plugins: [],
}
