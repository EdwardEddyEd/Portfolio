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
				"neon-teal": "#06ffff",
				"mid-blue": "#7081ff",
				"neon-purple": "#ac6dff",
				"astro": "#FF5D02",
				"tailwindcss": "#39BDF8",
				dark: "#181621",
				light: "#FFFFFF"
			},
			fontFamily: {
				inter: ["Inter", "sans-serif"],
				barlow: ["Barlow", "sans-serif"],
			},
			keyframes: {
				'slide-from-bottom': {
					'0%': { opacity: 0, transform: 'translateY(200px)' },
					'100%': { opacity: 1, transform: 'translateX(0px)' },
				},
				'slide-from-left': {
					'0%': { opacity: 0, transform: 'translateX(-200px)' },
					'100%': { opacity: 1, transform: 'translateX(0px)' },
				},
				'slide-from-right': {
					'0%': { opacity: 0, transform: 'translateX(100px)' },
					'100%': { opacity: 1, transform: 'translateX(0px)' },
				},
				'shrink-in': {
					'0%': { opacity: 0, transform: 'scale(0.75)' },
					'100%': { opacity: 1, transform: 'scale(1)' },
				}
			},
			animation: {
				'slide-in-from-left': '.8s slide-from-left .2s 1 forwards',
				'slide-in-from-right': '.8s slide-from-right .2s 1 forwards',
				'slide-in-from-bottom': '.8s slide-from-bottom .2s 1 forwards',
				'slide-in-from-bottom-delay-300': '.8s slide-from-bottom .3s 1 forwards',
				'slide-in-from-bottom-delay-400': '.8s slide-from-bottom .4s 1 forwards',
				'shrink-in-delay-500': '.6s shrink-in .5s 1 forwards',
				'shrink-in-delay-700': '.6s shrink-in .7s 1 forwards',
			}
		},
	},
	plugins: [],
}
