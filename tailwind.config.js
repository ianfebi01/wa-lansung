/** @type {import('tailwindcss').Config} */
export default {
	content  : ['./src/**/*.{js,jsx,ts,tsx}'],
	darkMode : 'selector',
	theme    : {
		extend : {
			colors : {
				primary           : '#25D366',
				secondary         : '#075E54',
				dark              : '#222222',
				'dark-secondary'  : '#393939',
				orange            : '#F26B50',
				green             : '#4FAA84',
				white             : '#FBFBFB',
				'white-overlay'   : 'rgba(251, 251, 251, 0.40)',
				'white-overlay-2' : 'rgba(251, 251, 251, 0.20)',
				'custom-gray'     : '#273442'
			},
		},
	},
	plugins : [],
}
