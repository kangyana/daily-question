import { defineUserConfig, defaultTheme, SidebarConfigArray } from "vuepress";
import issues from "../../data/issues.json";

const generateSiebar = () => {
  const result: SidebarConfigArray = [{ text: "目录", link: "/fe" }];
  Object.keys(issues).forEach((key) => {
    const children = issues[key].map((v) => ({
      text: v.title,
      link: `/fe/${key}/${v.number}.html`,
    }));
    result.push({ text: key, collapsible: true, children });
  });
  return result;
};

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
      {
        text: "编辑器",
        link: "/editor",
      },
      {
        text: "3d",
        link: "/3d",
      },
      {
        text: "音媒体",
        link: "/media",
      },
    ],
    sidebar: {
      "/fe": generateSiebar(),
    },
    sidebarDepth: 0,
    contributorsText: "贡献者",
    lastUpdatedText: "上次更新",
    editLink: false,
  }),
});
