// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
import {Config} from "@docusaurus/types";
import type * as Preset from '@docusaurus/preset-classic';
import remarkGfm from 'remark-gfm';
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
    markdown: {
        mermaid: true,
    },
    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            {
                sitemap: {
                    lastmod: 'date',
                    changefreq: 'daily',
                    priority: 0.5,
                    ignorePatterns: [],
                    filename: 'sitemap.xml',
                    createSitemapItems: async (params) => {
                        const {defaultCreateSitemapItems, ...rest} = params;
                        const items = await defaultCreateSitemapItems(rest);
                        return items.filter((item) => !item.url.includes('/page/'));
                    },
                },
                docs: {
                    remarkPlugins: [remarkGfm],
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
                    blogSidebarTitle: '博客列表',
                    blogSidebarCount: 'ALL',
                },
                theme: {
                    customCss: './src/css/custom.scss',
                },
            } satisfies Preset.Options,
        ],
    ],

    themes: [
        // ... Your other themes.
        [
            require.resolve("@easyops-cn/docusaurus-search-local"),
            /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
            ({
                // ... Your options.
                // `hashed` is recommended as long-term-cache of index file is possible.
                hashed: true,

                // For Docs using Chinese, it is recomended to set:
                language: ["en", "zh"],

                // If you're using `noIndex: true`, set `forceIgnoreNoIndex` to enable local index:
                // forceIgnoreNoIndex: true,
            }),
        ],
        '@docusaurus/theme-live-codeblock',
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
                    label: '文档',
                    className: 'header-docs-link',
                    items: [
                        {
                            type: 'doc',
                            docId: 'java-dev/index',
                            label: 'Java 开发指南',
                        },
                        {
                            type: 'doc',
                            docId: 'mc-plugin-dev/index',
                            label: 'Bukkit 插件开发指南',
                        },
                        {
                            type: 'doc',
                            docId: 'web-dev/index',
                            label: '个人网站建站指南',
                        },
                    ]
                },
                {
                    className: "header-blog-link",
                    to: '/blog',
                    label: '博客',
                    position: 'left'
                },
                {
                    type: 'dropdown',
                    label: '工具',
                    className: 'header-utilities-link',
                    position: 'left',
                    items: [
                    ]
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
                    title: '文档',
                    items: [
                        {
                            label: 'Java 开发指南',
                            to: '/docs/java-dev',
                        },
                        {
                            label: 'Bukkit 插件开发指南',
                            to: '/docs/mc-plugin-dev',
                        },
                        {
                            label: 'Docusaurus 建站指南',
                            to: '/docs/web-dev',
                        },
                    ],
                },
                {
                    title: '联系我',
                    items: [
                        {
                            label: '哔哩哔哩:65959464',
                            href: 'https://space.bilibili.com/65959464',
                        },
                        {
                            label: 'QQ: 1309635304',
                            to: "/",
                        },
                        {
                            label: '邮箱: qscbm187531@outlook.com',
                            to: "/",
                        },
                    ],
                },
                {
                    title: '其它',
                    items: [
                        {
                            label: '我的博客',
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
        docs: {
            sidebar: {
                hideable: true,
            }
        },
        colorMode: {
            defaultMode: 'light',
            disableSwitch: false,
            respectPrefersColorScheme: false,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,
}

export default config;