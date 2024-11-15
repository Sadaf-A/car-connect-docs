// @ts-check
// @type {import('@docusaurus/types').Config}

import { themes as prismThemes } from 'prism-react-renderer';

const config = {
  title: 'Car Connect',
  tagline: 'Your complete Car Management Application',
  favicon: 'ihttps://img.icons8.com/?size=100&id=15126&format=png&color=000000',

  url: 'https://example.com', // Replace with actual deployment URL
  baseUrl: '/',

  organizationName: '', // Replace with your GitHub org/user name
  projectName: 'car-connect', // Replace with your repo name

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com//car-connect/tree/main/', // Replace with your repo URL
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/car-connect-social-card.jpg',
    navbar: {
      style: 'dark',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Made By Sadaf Ahmed 🤖',
        },
        {
          title: 'Connect',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/sadaf-ahmed-in/',
            },
            {
              label: 'Github',
              href: 'https://github.com/Sadaf-A',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'https://medium.com/@sadaf20043006',
            },
            {
              label: 'Leetcode',
              href: 'https://leetcode.com/u/sadaf04/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Sadaf Ahmed.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
    },
    stylesheets: [
      {
        href: '/src/css/custom.css', // Ensure custom CSS path is correct
        type: 'text/css',
      },
    ],
  },
};

export default config;
