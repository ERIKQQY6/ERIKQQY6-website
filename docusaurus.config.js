/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Casnode',
  tagline: 'Official site of casnode',
  url: 'https://casnode.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'ERIKQQY6', // Usually your GitHub org/user name.
  projectName: 'ERIKQQY6-website', // Usually your repo name.
  plugins: [ '@docusaurus/plugin-google-analytics'],
  themeConfig: {
      googleAnalytics: {
      trackingID: 'G-FY8D6DN1Z6',
      anonymizeIP: true,
  },
    navbar: {
      title: 'Casnode',
      logo: {
        alt: 'My Site Logo',
        src: 'img/casbin.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/casbin/casnode',
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
              label: 'Getting Started',
              to: 'docs/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Casbin Website',
              href: 'https://casbin.org/',
            },
            {
              label: 'Casbin Forum',
              href: 'https://forum.casbin.com/',
            },
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/search?q=casbin',
            },
            {
              label: 'Chat on Gitter',
              href: 'https://gitter.im/casbin/Lobby',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/casbin/casnode',
            },
            {
               html: `
              <head>
              <script>
              var _hmt = _hmt || [];
              </script>
              </head>
              <body>
              <script type="text/javascript">
              (function() {
                var hm = document.createElement("script");
                hm.src = "https://hm.baidu.com/hm.js?3afd414918db784168090ec9eecc64ba";
                var s = document.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(hm, s);
                })();
                </script>
                </body>
              `
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Casbin contributors.`,

    },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  }
};
