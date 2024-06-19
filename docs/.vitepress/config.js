const sidebar = require('./sidebar');
module.exports = {
    title: "魔王之影",
    description: "Shadow of the Demon lord",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: "/logo.png",
        nav: [
            { text: "Home", link: "/" },
            { text: "Docs", link: "/1.魔王之影核心书/C00：介绍.md" },
            { text: "About", link: "/0.关于.md" }
        ],

        socialLinks: [
            { icon: "github", link: "https://github.com/vuejs/vitepress" },
        ],
        footer: {
            message: "《魔王之影》为©2015 Schwalb Entertainment, LLC版权所有",
            copyright:
                "《魔王之影》， Schwalb Entertainment，与其相关的logo合法版权均属于Schwalb Entertainment, LLC。",
        },
        outline: {
            level: [1, 3],
        },
        search: {
            provider: 'local'
        },
        sidebar
    }
};