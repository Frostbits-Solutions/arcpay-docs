---
layout: home

hero:
  name: "Arcpay"
  text: "Effortless Web3 Payments"
  tagline: "Easy Monetization for AVM Dapps"
  image:
    src: /Dashboard.png
    alt: "Arcpay Logo"
  actions:
    - theme: brand
      text: Get Started
      link: /guide/getstarted.md
    - theme: alt
      text: View NPM Package
      link: https://www.npmjs.com/package/arcpay-sdk

features:
  - icon: ⚙️
    title: Organization Management
    details: Manage your team and listings effortlessly by creating organizations and assigning roles.
    link: /guide/organization.md
  - icon: 🛍️
    title: Seamless Listings
    details: Create, manage, and customize sales, auctions, and reverse auctions for digital assets.
    link: /guide/listing.md
  - icon: 💸
    title: Buy with Ease
    details: A simplified process to purchase NFTs, ASAs, and RWAs in a secure, decentralized environment.
    link: /guide/buy.md
  - icon: 📊
    title: Transaction Monitoring
    details: Stay updated on your transaction activity by reviewing your sales and purchases.
    link: /guide/activity.md
---
---

# Welcome to Arcpay

Arcpay simplifies Web3 transactions, making them accessible for businesses and users alike. Built on AVM technology, Arcpay allows you to:

- **Effortlessly transact using AVM tokens**
- **Buy and sell NFTs, ASAs, and real-world assets (RWAs)**
- **Collaborate as a team through organization management**
- **Create new revenue streams with self-deployed primary listings and SDK powered secondary markets**

---

<div class="vp-feature">
  <div class="vp-feature-icon">🔌</div>
  <div class="vp-feature-content">
    <h3><a href="./integrations">SDK Integration</a></h3>
    <p>For developers looking to integrate Arcpay into their platforms.</p>
  </div>
</div>

<div class="vp-feature">
  <div class="vp-feature-icon">⚙️</div>
  <div class="vp-feature-content">
    <h3><a href="/settings">Settings and Customization</a></h3>
    <p>Manage API keys, team settings, and subscription plans.</p>
  </div>
</div>

<div class="vp-feature">
  <div class="vp-feature-icon">❓</div>
  <div class="vp-feature-content">
    <h3><a href="/faq">Frequently Asked Questions</a></h3>
    <p>Have questions? Find answers to common issues in our FAQ.</p>
  </div>
</div>

<style>
.vp-feature {
  display: flex;
  align-items: center;
  background-color: var(--vp-c-bg-soft);
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
}

.vp-feature-icon {
  font-size: 2rem;
  margin-right: 16px;
}

.vp-feature-content h3 {
  margin: 0;
}

.vp-feature-content p {
  margin: 0;
}

/* CSS to increase the hero image size */
.VPHomeHero-image {
  max-width: 400px; /* Adjust as needed */
  width: 100%;
}

/* CSS to adjust the image size for the hero */
.VPImage.image-src {
  max-width: 500px; /* Increase the maximum width */
  height: auto;     /* Maintain aspect ratio */
  margin: 0 auto;   /* Center the image */
  display: block;   /* Ensure it's treated as a block-level element */
  border-radius: 12px;

  /* New properties for the transparent border */
  border: 0px solid transparent;  /* Add a 5px transparent border */
  box-shadow: 0 0 0 7px rgba(255, 255, 255, 0.2); /* Optional: Adds an outline or effect around the image */
}
</style>
