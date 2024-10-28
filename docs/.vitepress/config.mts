import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  cleanUrls: true,
  title: "TrylieWiki",
  description: "База знаний майнкрафт сервера TrylieWorld",
  themeConfig: {
    outline: {
      label: "На этой странице",
    },
    logo: '/64.webp',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      // { text: 'Home', link: '/' },
      {
        text: 'TrylieWorld',
        items: [
          {
            // You may also omit the title.
            items: [
              { text: 'Основной сайт', link: 'https://TrylieWorld' },
              { text: 'Discord', link: 'https://discord.gg/TrylieWorld' },
              { text: 'Вконтакте', link: 'https://vk.com/TrylieWorld' },
              { text: 'Telegram', link: 'https://TrylieWorld' },
            ]
          }
        ]
      }
    ],

    sidebar: [
      {
        text: 'Старт',
        collapsed: false,
        items: [
          { text: 'Начать', link: '/start' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/TrylieWorld' }
    ]
  }
})