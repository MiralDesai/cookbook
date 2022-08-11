// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Cookbook',
  tagline: 'A collection of recipes built on top of docusaurus',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  // GitHub pages deployment config.
  organizationName: 'MiralDesai', // Usually your GitHub org/user name.
  projectName: 'cookbook', // Usually your repo name.
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  themeConfig: {
    navbar: {
      title: 'Cookbook',
      hideOnScroll: false,
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
        srcDark: "img/logo_dark.svg"
      },
      items: [
      ],
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      'classic', {
        docs: {
          routeBasePath: 'recipes',
          path: 'recipes',
          sidebarPath: require.resolve('./sidebars.js'),
          breadcrumbs: false,
        },
        theme: {
          customCss: require.resolve('./src/styles/custom.scss'),
        },
        blog: false,
      },
    ],
  ],
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
      },
    ],
  ],
  plugins: [
    'docusaurus-plugin-sass'
  ]
};

module.exports = config;
