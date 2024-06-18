const sidebar = require('./sidebar');
module.exports = {
    title: "魔王之影",
    description: "Shadow of the Demon lord",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: "Home", link: "/" },
            { text: "Docs", link: "/介绍" },
            { text: "About", link: "/about" }
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
        sidebar
    }
};