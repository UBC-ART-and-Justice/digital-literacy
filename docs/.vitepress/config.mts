import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid';

// https://vitepress.dev/reference/site-config
export default withMermaid(
  defineConfig({
  title: "Digital Literacy",
  description: "Digital Literacy Content",
  base: process.env.VITEPRESS_BASE || '/',
  srcDir: './src',
  head: [
    ['link', { rel: 'icon', href: 'https://ubc-art-and-justice.github.io/digital-literacy/logo.png' }],
    ['meta', { property: 'og:image', content: 'https://ubc-art-and-justice.github.io/digital-literacy/social-share.png' }]
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
      { text: 'Content', link: '/tech-terror-experience.md' },
      { text: 'About', link: '/about' }
    ],

    sidebar: [
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
      },
      // {
      //   text: 'Test Pages',
      //   items: [
      //     { text: 'Test Page', link: '/test.md' },
      //   ]
      // }
    ]
  },
    mermaid: {
      theme: 'default',
    },
    mermaidPlugin: {
      class: "mermaid my-class",
    }
  })
);

// nav:
//   - Home: index.md
//   - Content:
//       - course/index.md

//       - 👋 Introduction | The Technology Terror Experience: course/tech-terror-experience.md

//       - 📱 Unit 1 | Navigating Your Tablet: course/1-tablet-navigation/index.md
//       - 1.1 The Keyboard: course/1-tablet-navigation/1.1-the-keyboard.md
//       - 1.2 Terminology: course/1-tablet-navigation/1.2-terminology.md
//       - 1.3 Icons: course/1-tablet-navigation/1.3-icons.md
//       - 1.4 Accessibility: course/1-tablet-navigation/1.4-accessibility.md

//       - 🌎 Unit 2 | Apps and the Internet: course/2-apps-and-internet/index.md
//       - 2.1 Connecting to the Internet: course/2-apps-and-internet/2.1-the-internet.md
//       - 2.2 Navigating Websites: course/2-apps-and-internet/2.2-websites.md
//       - 2.3 Browsers and Search Engines: course/2-apps-and-internet/2.3-browsers-and-search-engines.md
//       - 2.4 Using Apps: course/2-apps-and-internet/2.4-apps.md
//       - 2.5 Reputable Sources: course/2-apps-and-internet/2.5-reputable-sources.md

//       - 📂 Unit 3 | Files: course/3-file-system/index.md
//       - 3.1 - What is a file?: course/3-file-system/3.1-files.md
//       - 3.2 - Folders: course/3-file-system/3.2-folders.md
//       - 3.3 - Saving Files: course/3-file-system/3.3-saving-files.md
//       - 3.4 - Sharing Files: course/3-file-system/3.4-sharing-files.md

//       - 🔒 Unit 4 | Staying Safe: course/4-staying-safe/index.md
//       - 4.1 Updates: course/4-staying-safe/4.1-updates.md
//       - 4.2 Passwords: course/4-staying-safe/4.2-passwords.md
//       - 4.3 Encryption: course/4-staying-safe/4.3-encryption.md
//       - 4.4 Viruses: course/4-staying-safe/4.4-viruses.md
//       - 4.5 Internet Safety: course/4-staying-safe/4.5-internet-safety.md

//       - ✉️ Unit 5 | Communication: course/5-communication/index.md
//       - 5.1 - Email: course/5-communication/5.1-email.md
//       - 5.2 - Texting: course/5-communication/5.2-texting.md
//       - 5.3 - Direct Messaging: course/5-communication/5.3-direct-message.md
//       - 5.4 - Video Calls: course/5-communication/5.4-video-calls.md
//       - 5.5 - Social Media: course/5-communication/5.5-social-media.md

//       - Test Page 1: course/test-page-1.md
//       - Test Page 2: course/test-page-2.md
//   - About: about.md