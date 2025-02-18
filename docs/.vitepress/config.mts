import { defineConfig } from 'vitepress'

const contentSidebar = [
  {
    text: 'Introduction',
    items: [
      { text: 'Technology Terror Experience', link: '/tech-terror-experience.md' },
    ]
  },
  {
    'text': 'Navigating Your Tablet',
    items: [
      { text: 'Unit 1 Topics', link: '/1-tablet-navigation/index.md' },
      { text: 'The Basics', link: '/1-tablet-navigation/1.1-basics.md' },
      { text: 'Features and Settings', link: '/1-tablet-navigation/1.2-tablet-features.md' },
      { text: 'Restrictions', link: '/1-tablet-navigation/1.3-restrictions.md' },
      { text: 'Content Navigation', link: '/1-tablet-navigation/1.4-content-navigation.md' }
    ]
  },
  {
    'text': 'Apps and the Internet',
    items: [
      { text: 'Unit 2 Topics', link: '/2-apps-and-internet/index.md' },
      { text: 'Connecting to the Internet', link: '/2-apps-and-internet/2.1-the-internet.md' },
      { text: 'Websites, Web pages, Links', link: '/2-apps-and-internet/2.2-websites.md' },
      { text: 'Searching the Internet', link: '/2-apps-and-internet/2.3-searching.md' },
      { text: 'Web Browser Features', link: '/2-apps-and-internet/2.4-browser-features.md' },
      { text: 'Reputable Sources', link: '/2-apps-and-internet/2.5-reputable-sources.md' },
      { text: 'Apps', link: '/2-apps-and-internet/2.6-apps.md' }
    ]
  },
  {
    'text': 'Files',
    items: [
      { text: 'Unit 3 Topics', link: '/3-file-system/index.md' },
      { text: 'What is a file?', link: '/3-file-system/3.1-files.md' },
      { text: 'Folders', link: '/3-file-system/3.2-folders.md' },
      { text: 'Saving Files', link: '/3-file-system/3.3-saving-files.md' },
      { text: 'Sharing Files', link: '/3-file-system/3.4-sharing-files.md' }
    ]
  },
  {
    'text': 'Staying Safe',
    items: [
      { text: 'Unit 4 Topics', link: '/4-staying-safe/index.md' },
      { text: 'Updates', link: '/4-staying-safe/4.1-updates.md' },
      { text: 'Passwords', link: '/4-staying-safe/4.2-passwords.md' },
      { text: 'Encryption', link: '/4-staying-safe/4.3-encryption.md' },
      { text: 'Viruses', link: '/4-staying-safe/4.4-viruses.md' },
      { text: 'Internet Safety', link: '/4-staying-safe/4.5-internet-safety.md' }
    ]
  },
  {
    'text': 'Communication',
    items: [
      { text: 'Unit 5 Topics', link: '/5-communication/index.md' },
      { text: 'Email', link: '/5-communication/5.1-email.md' },
      { text: 'Texting', link: '/5-communication/5.2-texting.md' },
      { text: 'Direct Messaging', link: '/5-communication/5.3-direct-message.md' },
      { text: 'Video Calls', link: '/5-communication/5.4-video-calls.md' },
      { text: 'Social Media', link: '/5-communication/5.5-social-media.md' },
    ]
  },
  {
    'text': 'Conclusion',
    items: [
      { text: 'Conclusion', link: '/6-conclusion/index.md' },
      { text: 'Bonus Terminology', link: '/6-conclusion/6.1-terminology.md' },
      { text: 'Image Sources', link: '/6-conclusion/6.2-sources.md' },
    ]
  }
]

const gallerySidebar = [
  {
    text: 'All Galleries',
    items:[
      {
        text: 'Past Events',
        items: [
          // { text: 'Locked Up: The Soul Speaks Out', link: '/blog/gallery/2022-07-23_locked-up-the-soul-speaks-out' },
          { text: 'Forgotten Artists: Art is Out Freedom', link: '/blog/gallery/2022-09-23_forgotten-artists-art-is-our-freedom' },
          { text: 'A.R.T. & Justice', link: '/blog/gallery/2023-10-13_art-and-justice' },
          { text: 'shift', link: '/blog/gallery/2024-01-17_shift' },
          { text: 'Pause: A Showcase of Presence', link: '/blog/gallery/2024-05-08_pause-a-showcase-of-presence' },
        ]
      },
      {
        text: 'Art Activism',
        items: [
          { text: 'Art Activism 2023', link: '/blog/art-activism/2023_art-activism' },
          { text: 'Art Activism 2024', link: '/blog/art-activism/2024_art-activism' },
        ]
      }
    ]
  }
]

















// https://vitepress.dev/reference/site-config
export default (
  defineConfig({
    title: "Digital Literacy",
    description: "Digital Literacy Content",
    base: process.env.VITEPRESS_BASE || '/',
    srcDir: './src',
    head: [
      ['link', { rel: 'stylesheet', href: '@mdi/font/css/materialdesignicons.css' }],
      ['link', { rel: 'icon', href: 'https://ubc-art-and-justice.github.io/digital-literacy/logo-square-rounded.png' }],
      ['meta', { property: 'og:image', content: 'https://ubc-art-and-justice.github.io/digital-literacy/social-share.png' }]
    ],
    cleanUrls: true,
    lastUpdated: false,
    vite: { 
      ssr: { noExternal: ['@cynber/vitepress-valence']} 
    },
    themeConfig: {
      // https://vitepress.dev/reference/default-theme-config
      search: {
        provider: 'local'
      },
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Content', link: '/introduction/content.md' },
        { text: 'About', link: '/about' },
        { text: 'Galleries', link: '/gallery' }
      ],

      sidebar: {
        '/introduction/': contentSidebar,
        '/1-tablet-navigation/': contentSidebar,
        '/2-apps-and-internet/': contentSidebar,
        '/3-file-system/': contentSidebar,
        '/4-staying-safe/': contentSidebar,
        '/5-communication/': contentSidebar,
        '/6-conclusion/': contentSidebar,
        '/blog/art-activism/': gallerySidebar,
        '/blog/gallery/': gallerySidebar,
      }
    }
  })
);