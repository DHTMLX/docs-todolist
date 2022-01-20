// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  noIndex: true, // TODO: delete before release
  title: 'SVAR To Do List Docs',
  tagline: 'SVAR To Do List Docs',
  url: 'https://docs.dhtmlx.com',
  baseUrl: '/todolist/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'DHTMLX', // Usually your GitHub org/user name.
  projectName: 'docs-todolist', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/DHTMLX/docs-todolist/edit/master/',
          routeBasePath: '/',
        },
        //blog: {
         //showReadingTime: true,
          // Please change this to your repo.
          //editUrl:
            //'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        //},
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'daily',
          priority: 0.5,
          trailingSlash: true
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'To Do List Documentation',
        logo: {
          alt: 'DHTMLX To Do List Logo',
          src: 'img/dhtmlx_logo.svg',
          href: 'https://docs.dhtmlx.com/'
        },
        items: [
          {
            label: 'Examples',
            href: 'https://snippet.dhtmlx.com', // [TODO] change before release
            position: 'right',
          },
          {
            label: 'Forum',
            href: 'https://forum.dhtmlx.com/c/widgets/', // [TODO] change before release
            position: 'right',
          },
          {
            "label": "Support",
            "href": "https://dhtmlx.com/docs/technical-support.shtml",
            "position": "right"
          },
          {
            "label": "Download",
            "href": "https://dhtmlx.com/docs/products/dhtmlxTodolist/download.shtml", // [TODO] change before release
            "position": "right"
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            "title": "Development center",
            "items": [
              {
                "label": "Download JS File Manager",
                "href": "https://dhtmlx.com/docs/products/dhtmlxFilemanager/download.shtml", // [TODO] change before release
                "position": "right"
              },
              {
                "label": "Examples",
                "href": "https://snippet.dhtmlx.com", // [TODO] change before release
                "position": "right"
              },
              {
                "label": "Blog",
                "href": "https://dhtmlx.com/blog/"
              },
              {
                "label": "Forum",
                "href": "https://forum.dhtmlx.com/c/widgets/",
                "position": "right"
              }
            ]
          },
          {
            title: 'Community',
            items: [
              {
                "label": "GitHub",
                "href": "https://github.com/DHTMLX"
              },
              {
                "label": "Youtube",
                "href": "https://www.youtube.com/user/dhtmlx"
              },
              {
                "label": "Facebook",
                "href": "https://www.facebook.com/dhtmlx"
              },
              {
                "label": "Twitter",
                "href": "https://twitter.com/dhtmlx"
              },
              {
                "label": "Linkedin",
                "href": "https://www.linkedin.com/groups/3345009/"
              }
            ],
          },
          {
            "title": "Company",
            "items": [
              {
                "label": "About us",
                "href": "https://dhtmlx.com/docs/company.shtml"
              },
              {
                "label": "Contact us",
                "href": "https://dhtmlx.com/docs/contact.shtml"
              },
              {
                "label": "Licensing",
                "href": "https://dhtmlx.com/docs/products/dhtmlxTodolist/#licensing" // [TODO] change before release
              }
            ]
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} XB Software Ltd.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      
    }),
};

module.exports = config;
