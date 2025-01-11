import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({

  head: [
    ['link', { rel: 'android-chrome-large', sizes: '512x512', href: '/favicons/android-chrome-512x512.png' }],
    ['link', { rel: 'android-chrome-small', sizes: '192x192', href: '/favicons/android-chrome-192x192.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicons/apple-touch-icon.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicons/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicons/favicon-16x16.png' }],
    ['link', { rel: 'manifest', href: '/favicons/site.webmanifest' }],
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicons/favicon.ico' }]
  ],
  title: "Arcpay Docs",
  description: "Arcpay documentation",
  themeConfig: {

    logo: '/images/logo-transparent.png',

    outline: [2, 3],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/frostbits-solutions' }
    ],

    search: {
      provider: 'local'
    },

    nav: [
      { text: 'Arcpay Dashboard', link: 'https://app.arcpay.dev' }
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Get Started', link: '/introduction/get-started' },
          { text: 'SDK Integration', link: '/introduction/sdk-integration' }
        ]
      },
      {
        text: 'Listings',
        items: [
          { text: 'Listing Types', link: '/listings/listing-types' },
          { text: 'Algorand', link: '/listings/algorand' },
          { text: 'Voi', link: '/listings/voi' }
        ]
      },
      {
        text: 'Dashboard',
        items: [
          { text: 'Activity Insights', link: '/dashboard/activity' },
          { text: 'Organization Management', link: '/dashboard/organization' },
          { text: 'Settings', link: '/dashboard/settings' }
        ]
      },
      {
        text: 'SDK',
        items: [
          { text: 'Introduction', link: '/sdk/introduction' },
          { text: 'Integration', link: '/sdk/integration' },
          { text: 'API Keys', link: '/sdk/api-keys' },
          { text: 'API Reference', link: '/sdk/api-reference' },
          { text: 'IPFS Gateway', link: '/sdk/ipfs-gateway' }
        ]
      },
      {
        text: 'Examples',
        items: [
          { text: 'NFT Project', link: '/examples/NFTs' },
          { text: 'Merch Shop', link: '/examples/RWAs' },
          { text: 'Secondary Market', link: '/examples/Secondary' }
        ]
      },
      {
        text: 'FAQ',
        link: '/faq'
      },
      {
        text: 'Guides',
        items: [
          { text: 'Organization', link: '/guides/organization' },
          { text: 'Listing', link: '/guides/listing' },
          { text: 'Buy', link: '/guides/buy' },
          { text: 'Activity', link: '/guides/activity' }
        ]
      }
    ],

    footer: {
      message: 'Follow us on <a href="https://x.com/FrostbitsLtd" target="_blank">X</a> | Visit our <a href="https://frostbits.solutions" target="_blank">website</a>',
      copyright: `Copyright © ${new Date().getFullYear()} Frostbits Solutions`
    }
  }
})
