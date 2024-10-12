import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "arcpay docs",
  description: "Arcpay documentation site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Arcpay', link: 'https://arcpay.dev' }
    ],

    sidebar: [
      {
        text: 'Guide',
        items: [
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
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
