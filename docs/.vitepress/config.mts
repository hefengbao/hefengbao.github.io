import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-Hans',
  title: "风暴号",
  description: "贺丰宝路过人间",
  base: '/',
  lastUpdated: true,
  assetsDir: 'static',
  head: [
    ['meta', { name: 'baidu-site-verification', content: 'code-y0HFipBUbj' }],
    ['meta', { name: 'msvalidate.01', content: 'E357CFC93603D3C5E68E137CE32303B1' }],
    ['meta', { name: '360-site-verification', content: '89718167fcee3af890dfffd0e179866d' }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    lastUpdated: {
      text: '最后更新',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    outline: {
      level: [2, 3],
      label: '页面导航'
    },
    footer: {
      message: '哎，终究只是一场空。',
      copyright: `Copyright © 2018-${new Date().getFullYear()} ♥贺丰宝♥`
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    nav: [
      { text: '知识库', link: 'https://hefengbao.github.io/knowledge', target: '_blank' },
      { text: '读写', link: 'https://hefengbao.github.io/rw', target: '_blank' },
      { text: '码农', link: 'https://hefengbao.github.io/hw', target: '_blank' },
      { text: '游玩', link: 'https://hefengbao.github.io/travel', target: '_blank' },
    ],

    sidebar: [

    ],
  }
})
