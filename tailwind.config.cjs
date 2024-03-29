// eslint-disable-next-line @typescript-eslint/no-var-requires
const daisyui = require('daisyui');

/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},
	daisyui: {
		themes: ['light', 'dark', 'dracula']
	},

	plugins: [daisyui]
};

module.exports = config;
