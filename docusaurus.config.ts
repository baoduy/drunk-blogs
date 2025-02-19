import { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import { themes as prismThemes } from "prism-react-renderer";

const config: Config = {
	title: "drunkcoding.net",
	tagline: "shares insights on cloud computing, software development methodologies, and diverse tech stacks",
	favicon: "images/fa.svg",

	// Set the production url of your site here
	url: "https://drunkcoding.net",
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: "/",

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: "baoduy", // Usually your GitHub org/user name.
	projectName: "drunk-blogs", // Usually your repo name.

	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",

	// Even if you don't use internationalization, you can use this field to set
	// useful metadata like html lang. For example, if your site is Chinese, you
	// may want to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: "en",
		locales: ["en"],
	},

	// Enable Mermaid for diagrams
	markdown: {
		mermaid: true,
	},
	themes: ["@docusaurus/theme-mermaid"],

	presets: [
		[
			"classic",
			{
				docs: {
					sidebarPath: "./sidebars.ts",
					routeBasePath: "/",
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					// editUrl: "https://github.com/open-webui/docs/blob/main",
					//exclude: ["**/tab-**/**"],
				},
				blog: {
					showReadingTime: true,
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					// editUrl:
					// "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
				},
				theme: {
					customCss: "./src/css/custom.css",
				},
			} satisfies Preset.Options,
		],
	],

	themeConfig: {
		// Replace with your project's social card
		// image: "images/docusaurus-social-card.jpg",
		navbar: {
			title: "drunkcoding.net",
			logo: {
				src: "images/logo.svg",
				srcDark: "images/logo.svg",
			},
			items: [
				// {
				// 	href: "https://github.com/open-webui/open-webui",
				// 	position: "right",
				// 	className: "header-github-link",
				// 	"aria-label": "GitHub repository",
				// },
			],
		},
		footer: {
			logo: {
				alt: 'Buy me a coffee',
				src: 'images/bmc-button.png',
				href: 'https://buymeacoffee.com/baoduy2412',
				target: '_blank',
				height: 40,
			  },
			style: "dark",
			copyright: `Copyright © ${new Date().getFullYear()} drunkcoding.net`,
		},
		prism: {
			theme: prismThemes.github,
			darkTheme: prismThemes.dracula,
		},
	} satisfies Preset.ThemeConfig,
	plugins: [require.resolve("docusaurus-lunr-search")],
};

export default config;
