import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Modela 3D",
  tagline: "Crie e visualize objetos 3D online",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://modela3d.vercel.app",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "jefersonapps", // Usually your GitHub org/user name.
  projectName: "modela3d", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "pt-br",
    locales: ["pt-br"],
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
      title: "Modela3D",
      logo: {
        alt: "Logo do Modela3D",
        src: "img/favicon.ico",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Tutorial",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Aprender",
          items: [
            {
              label: "Documentação",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Comunidade",
          items: [
            {
              label: "Blog",
              href: "https://modela3dblog.vercel.app/",
            },
          ],
        },
        {
          title: "Desenvolvedor",
          items: [
            {
              label: "Jeferson Leite",
              href: "https://portfolio-jeferson-leite.vercel.app/",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Modela3D, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.oneDark,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
