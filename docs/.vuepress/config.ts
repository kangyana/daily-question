import { defineUserConfig, defaultTheme } from "vuepress";

export default defineUserConfig({
  lang: "zh-CN",
  title: "每日一题",
  description: "每天五分钟，半年大厂中",
  port: 9090,
  head: [["link", { rel: "icon", href: "/images/favicon.ico" }]],
  theme: defaultTheme({
    repo: "https://github.com/kangyana/daily-question",
    navbar: [
      {
        text: "主页",
        link: "/",
      },
      {
        text: "前端基础",
        link: "/fe",
      },
    ],
    sidebar: {
      "/fe": [
        {
          text: "目录",
          link: "/fe",
        },
        {
          text: "js",
          collapsible: true,
          children: [
            {
              text: "js 有几种基本的数据类型",
              link: "/fe/js/0",
            },
            {
              text: "如何判断 js 数据类型",
              link: "/fe/js/1",
            },
          ],
        },
      ],
    },
  }),
});
