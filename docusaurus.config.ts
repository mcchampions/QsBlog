// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
import {Config} from "@docusaurus/types";
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
    title: 'qscbm187531',
    tagline: 'Here\'s qscbm187531',
    favicon: 'img/favicon.png',

    // Set the production url of your site here
    url: 'https://qscraft.top',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'qscbm187531', // Usually your GitHub org/user name.
    projectName: 'QsBlog', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'zh-Hans',
        locales: ['zh-Hans'],
    },
    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            {
                docs: {
                    sidebarPath: './sidebars.ts',
                },
                blog: {
                    showReadingTime: true,
                    feedOptions: {
                        type: ['rss', 'atom'],
                        xslt: true,
                    },
                    // Useful options to enforce blogging best practices
                    onInlineTags: 'warn',
                    onInlineAuthors: 'warn',
                    onUntruncatedBlogPosts: 'warn',
                },
                theme: {
                    customCss: './src/css/custom.scss',
                },
            } satisfies Preset.Options,
        ],
    ],

    plugins: [
        'docusaurus-plugin-sass',
    ],

    themeConfig: {
        // Replace with your project's social card
        image: 'img/docusaurus-social-card.jpg',
        navbar: {
            title: 'qscbm187531\'s Website',
            logo: {
                alt: 'qscbm187531\'s Website Logo',
                src: 'img/favicon.png',
            },
            items: [
                {
                    type: 'dropdown',
                    sidebarId: 'docs',
                    position: 'left',
                    label: 'Docs',
                    className: 'header-docs-link',
                    items: [
                        {
                            type: 'doc',
                            docId: 'tutorial-basics/congratulations',
                            label: '1',
                        },
                        {
                            type: 'doc',
                            docId: 'tutorial-extras/translate-your-site',
                            label: '2',
                        },
                    ]
                },
                {
                    className: "header-blog-link",
                    to: '/blog',
                    label: 'Blog',
                    position: 'left'
                },
                {
                    className: "header-github-link",
                    href: 'https://github.com/mcchampions/QsWebsite',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Docs',
                    items: [
                        {
                            label: 'Tutorial',
                            to: '/docs/intro',
                        },
                    ],
                },
                {
                    title: 'Community',
                    items: [
                        {
                            label: 'Stack Overflow',
                            href: 'https://stackoverflow.com/',
                        },
                        {
                            label: 'Discord',
                            href: 'https://discordapp.com/',
                        },
                        {
                            label: 'X',
                            href: 'https://x.com/',
                        },
                    ],
                },
                {
                    title: 'More',
                    items: [
                        {
                            label: 'Blog',
                            to: '/blog',
                        },
                        {
                            label: 'GitHub',
                            href: 'https://github.com/mcchampions/',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} QsWebsite, Inc. Built with Docusaurus.`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,
}

export default config;