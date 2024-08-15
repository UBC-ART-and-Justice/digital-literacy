import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Digital Literacy",
  description: "Digital Literacy Content",
  srcDir: './src',
  head: [
    ['link', { rel: 'icon', href: '/stack-of-books.png' }]
  ],
  cleanUrls: true,
  lastUpdated: false,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Content', link: '/content' },
      { text: 'About', link: '/about' }
    ],

    sidebar: [
      {
        text: 'Content',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ]
  }
})
