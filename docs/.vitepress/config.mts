import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [
    // Add the various favicons to your site
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  ],
  title: "Arcpay Docs",
  description: "Arcpay documentation",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    search: {
      provider: 'local'
    },

    nav: [
      { text: 'Arcpay Dashboard', link: 'https://app.arcpay.dev' }
    ],

    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Get Started', link: '/guide/getstarted' },
          { text: 'Organization', link: '/guide/organization' },
          { text: 'Listing', link: '/guide/listing' },
          { text: 'Buy', link: '/guide/buy' },
          { text: 'Activity', link: '/guide/activity' }
        ]
      },
      {
        text: 'Additional Information',
        items: [
          { text: 'Integrations', link: '/integrations' },
          { text: 'Listings', link: '/listings' },
          { text: 'Settings', link: '/settings' },
          { text: 'FAQ', link: '/faq' }
        ]
      }
    ],
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/frostbits-solutions' }
    ],

    footer: {
      message: 'Follow us on <a href="https://x.com/FrostbitsLtd" target="_blank">X</a> | Visit our <a href="https://frostbits.solutions" target="_blank">website</a>',
      copyright: `Copyright © ${new Date().getFullYear()} Frostbits Solutions`
    }
  }
})
