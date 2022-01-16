/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Job Portal",
  tagline: "Jobs at your fingertips",
  url: "https://github.com/nab-in",
  baseUrl: "/portal-docs/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "nab-in",
  projectName: "portal-docs",
  themeConfig: {
    navbar: {
      title: "Job Portal",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "doc",
          docId: "intro",
          position: "left",
          label: "API",
        },
        // { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/nab-in/portal-docs/",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${Number(new Date().getFullYear())} (We Code Together) with ❣️.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/nab-in/portal-docs/edit/develop/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
