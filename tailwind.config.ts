import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
	corePlugins: {
		preflight: false,
		container: false,
	},
	darkMode: ["class", '[data-theme="dark"]'],
	content: ["./src/**/*.{js,jsx,tsx,html}", "./docs/**/*.{md,mdx}"],
	theme: {
		extend: {
			fontFamily: {
				// sans: ["Inter", ...defaultTheme.fontFamily.sans],
				// jakarta: ["Plus Jakarta Sans", ...defaultTheme.fontFamily.sans],
				mono: ["IBM Plex Mono", "monospace"],
			},
			colors: {},
		},
	},
	plugins: [],
} satisfies Config;
