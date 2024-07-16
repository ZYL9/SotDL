import { defineConfig } from "vitepress";
import { withPwa } from "@vite-pwa/vitepress";
import { SearchPlugin } from "vitepress-plugin-search";
import { chunkSplitPlugin } from 'vite-plugin-chunk-split';
import viteCompression from 'vite-plugin-compression';
import { sidebarData } from "./sidebar.js";

import Segment from 'segment'
// 创建实例
var segment = new Segment();
// 使用默认的识别模块及字典，载入字典文件需要1秒，仅初始化时执行一次即可
segment.useDefault();

var searchOptions = {

  // 采用分词器优化，
  encode: function (str) {
    return segment.doSegment(str, { simple: true });
  },
  tokenize: "foward",
  // // 解决汉字搜索问题。来源：https://github.com/emersonbottero/vitepress-plugin-search/issues/11


  // 以下代码返回完美的结果，但内存与空间消耗巨大，索引文件达到80M+
  // encode: false,
  // tokenize: "full",

  // encode: false,
  // tokenize: function (str) {
  //   return segment.doSegment(str, { simple: true });
  // }
};

var compressOptions = {
  verbose: true,
  disable: false,
  threshold: 1024,
  algorithm: "brotliCompress",
  ext: ".br",
}

// https://vitepress.dev/reference/site-config
export default withPwa(
  defineConfig({
    title: "魔王之影",
    head: [["link", { rel: "icon", href: "/favicon.ico" }]],
    description: "Shadow of the Demon lord",
    themeConfig: {
      // https://vitepress.dev/reference/default-theme-config
      logo: "/logo.png",
      nav: [
        { text: "Home", link: "/" },
        { text: "Docs", link: "魔王之影大全200/关于本文件.md" },
        { text: "About", link: "魔王之影大全200/关于本文件.md" },
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
      // search: {
      //   provider: "local",
      // },
      editLink: {
        pattern: "https://github.com/ZYL9/SotDL/edit/main/docs/:path",
        text: "Edit this page on GitHub",
      },
      sidebar: sidebarData,
    },
    ignoreDeadLinks: true,
    metaChunk: true,
    lang: "zh-cn",
    vite: {
      plugins: [
        SearchPlugin(searchOptions),
        chunkSplitPlugin(),
        viteCompression(compressOptions)
      ],
    },
    pwa: {
      includeAssets: ["favicon.ico"],
      registerType: "autoUpdate",
      workbox: {
        globPatterns: ["**/*.{css,js,html,jpg,svg,png,webp,ico,txt,woff2}"],
      },
      manifest: {
        name: "魔王之影",
        short_name: "魔王之影",
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
