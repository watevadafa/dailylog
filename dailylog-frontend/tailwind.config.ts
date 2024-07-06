import type { Config } from 'tailwindcss';
import daisyui from "daisyui"
import typography from "@tailwindcss/typography"

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},

	plugins: [
		require('@tailwindcss/typography'), 
		require('daisyui'),
	],

} as Config;
