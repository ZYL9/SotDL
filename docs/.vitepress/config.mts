import { defineConfig } from "vitepress";
import { withPwa } from "@vite-pwa/vitepress";
const sidebar = require("./sidebar");

// https://vitepress.dev/reference/site-config
export default withPwa(
  defineConfig({
    title: "魔王之影",
    description: "Shadow of the Demon lord",
    themeConfig: {
      // https://vitepress.dev/reference/default-theme-config
      logo: "/logo.png",
      nav: [
        { text: "Home", link: "/" },
        { text: "Docs", link: "/1.魔王之影核心书/C00：介绍.md" },
        { text: "About", link: "/0.关于.md" },
      ],

      socialLinks: [{ icon: "github", link: "https://github.com/ZYL9/SotDL" }],
      footer: {
        message: "《魔王之影》为©2015 Schwalb Entertainment, LLC版权所有",
        copyright:
          "《魔王之影》， Schwalb Entertainment，与其相关的logo合法版权均属于Schwalb Entertainment, LLC。",
      },
      outline: {
        level: [1, 3],
      },
      search: {
        provider: "local",
      },
      editLink: {
        pattern: "https://github.com/ZYL9/SotDL/edit/main/docs/:path",
        text: "Edit this page on GitHub",
      },
      sidebar,
    },
    pwa: {
      includeAssets: ["favicon.ico"],
      registerType: "autoUpdate",
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,jpg,png,svg}"],
      },
      manifest: {
        name: "魔王之影",
        short_name: "MyApp",
        description: "Shadow of the Demon lord",
        theme_color: "#ffffff",
        icons: [
          {
            src: "logo192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "logo512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    },
  })
);
