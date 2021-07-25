/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Casdoor',
  tagline: 'A UI-first centralized authentication / Single-Sign-On (SSO) platform based on OAuth 2.0 / OIDC',
  url: 'https://ERIKQQY6.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'casdoor', // Usually your GitHub org/user name.
  projectName: 'casdoor-website', // Usually your repo name.
  themeConfig: {
    gtag: {
    trackingID: 'G-FY8D6DN1Z6',
      anonymizeIP: true,
    },
    navbar: {
      title: 'Casdoor',
      logo: {
        alt: 'My Site Logo',
        src: 'img/casbin.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'overview',
          position: 'left',
          label: 'Docs',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://door.casbin.com/swagger/',
          label: 'API',
          position: 'left',
        },
        {
          href: 'https://oa.casbin.com/',
          label: 'OA',
          position: 'left',
        },
        {
          type: 'localeDropdown',
          position: 'right',
          dropdownItemsAfter: [
            {
              to: 'https://crowdin.com/project/casdoor',
              label: 'Help translate',
            },
          ],
        },
        {
          href: 'https://github.com/casbin/casdoor',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
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
              label: 'Overview',
              to: '/docs/overview',
            },
            {
              label: 'Get Started',
              to: '/docs/basic/installation'
            },
            {
              label: 'Casdoor API',
              href: 'https://door.casbin.com/swagger/'
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Casbin',
              href: 'https://casbin.org/'
            },
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/search?q=casbin',
            },
            {
              label: 'Gitter',
              href: 'https://gitter.im/casbin/Lobby'
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/casbinHQ',
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
              href: 'https://github.com/casbin/casdoor',
            },
            {
              html: `
              <iframe src="https://ghbtns.com/github-btn.html?user=casbin&repo=casdoor&type=star&count=true&size=large" frameborder="0" scrolling="0" width="170" height="30" title="GitHub">Casdoor</iframe>
              `
            },
            {
              html: `
              <head>
              <div id="disqus_thread"></div>
        <script>
    /**
    *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
    *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables    */
    /*
    var disqus_config = function () {
    this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
    this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };
    */
    (function() { // DON'T EDIT BELOW THIS LINE
    var d = document, s = d.createElement('script');
    s.src = 'https://erikqqy.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
    })();
</script>
<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript></head>
<body></body>
              `
            },
          ],
        },
      ],
      logo: {
        alt: 'Casbin Logo',
        src: 'img/casbin_min.svg',
        href: 'https://casbin.org/',
      },
      copyright: `Copyright © ${new Date().getFullYear()} Casbin contributors.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/casdoor/casdoor-website/tree/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/casdoor/casdoor-website/tree/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'daily',
          priority: 0.5,
          trailingSlash: false,
        },
      },
    ],
  ],
};
