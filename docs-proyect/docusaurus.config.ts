import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Streaming team 2 ",
  tagline: "App de vuelos",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://dxa7x01m543ss.cloudfront.net",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Streamings-Team2", // Usually your GitHub org/user name.
  projectName: "Streamings-Team2", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Streaming team 2",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Docs",
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/Streamings-Team2",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Arquitectura",
              to: "/docs/category/arquitectura",
            },
            {
              label: "Prototipo Figma",
              to: "/docs/category/prototipo-figma",
            },
            {
              label: "Repositorios",
              to: "/docs/category/repositorios",
            },
            {
              label: "CI - CD",
              to: "/docs/category/ci---cd",
            },
            {
              label: "Sesión",
              to: "/docs/category/sesión",
            },
            {
              label: "GraphQl",
              to: "/docs/category/graphql",
            },
            {
              label: "Despliegue",
              to: "/docs/category/despliegue",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Github",
              href: "https://github.com/Streamings-Team2",
            },
            {
              label: "Canal de teams de la celula",
              href: "https://teams.microsoft.com/l/channel/19%3A7a057a4591324384ad240370971f0327%40thread.skype/Area%20-%20Micro%20Frontend?groupId=2768ca93-35c2-4d40-85cd-20c83e26aa8b&tenantId=3048dc87-43f0-4100-9acb-ae1971c79395",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/Streamings-Team2",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Streamings-Team2, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
