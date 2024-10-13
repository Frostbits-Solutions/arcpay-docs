---
layout: home

hero:
  name: "Arcpay"
  text: "Effortless <span id='scrolling-keyword'>Web3</span> Payments"
  tagline: "Easy Monetization for AVM Dapps"
  image:
    src: /images/Dashboard.png
    alt: "Arcpay Logo"
  actions:
    - theme: brand
      text: Get Started
      link: /guide/getstarted.md
    - theme: alt
      text: View NPM Package
      link: https://www.npmjs.com/package/arcpay-sdk

features:
  - icon:
      src: /3dicons/setting-dynamic-gradient.png 
      alt: "Setting Icon"
      width: "50px" 
      height: "50px" 
    title: Organization Management #Sell NFTs and on-chain assets
    details: Manage your team and listings effortlessly by creating organizations and assigning roles.
    link: /guide/organization.md #NFT boilerplate
  - icon:
      src: /3dicons/folder-dynamic-gradient.png 
      alt: "Folder Icon"
      width: "50px" 
      height: "50px"  
    title: Seamless Listings #Sell RWAs and off-chain assets
    details: Create, manage, and customize sales, auctions, and reverse auctions for any asset.
    link: /guide/listing.md #RWA boilerplate
  - icon:
      src: /3dicons/money-bag-dynamic-gradient.png 
      alt: "Money Bag Icon"
      width: "50px" 
      height: "50px"  
    title: Sell with Ease #Create Secondary Markets
    details: A simplified user process to purchase NFTs, ASAs, and RWAs in a secure, decentralized environment.
    link: /guide/buy.md #SDK integration
  - icon:
      src: /3dicons/chart-dynamic-gradient.png 
      alt: "Chart Icon"
      width: "50px" 
      height: "50px"  
    title: Monitor Activity
    details: Stay updated on your transaction activity by reviewing your sales and purchases.
    link: /guide/activity.md
---
---

# Welcome to Arcpay

Arcpay simplifies Web3 transactions, making them accessible for businesses and users alike. Built on AVM technology, Arcpay allows you to:

- **Effortlessly transact using AVM tokens**
- **Buy and sell NFTs, SFTs, and real-world assets (RWAs)**
- **Collaborate as a team through organization management**
- **Create new revenue streams with self-deployed primary listings and SDK powered secondary markets**

---

<div class="vp-feature">
  <div class="vp-feature-icon">
  <img src="/3dicons/tool-dynamic-gradient.png" alt="Tool Icon" class="icon-image" />
  </div>
  <div class="vp-feature-content">
    <h3><a href="./integrations">SDK Integration</a></h3>
    <p>For developers looking to integrate Arcpay into their platforms.</p>
  </div>
</div>

<div class="vp-feature">
  <div class="vp-feature-icon">
  <img src="/3dicons/setting-dynamic-gradient.png" alt="Setting Icon" class="icon-image" />
  </div>
  <div class="vp-feature-content">
    <h3><a href="/settings">Settings and Customization</a></h3>
    <p>Manage API keys, team settings, and subscription plans.</p>
  </div>
</div>

<div class="vp-feature">
  <div class="vp-feature-icon">
  <img src="/3dicons/puzzle-dynamic-gradient.png" alt="Puzzle Icon" class="icon-image" />
  </div>
  <div class="vp-feature-content">
    <h3><a href="/faq">Frequently Asked Questions</a></h3>
    <p>Have questions? Find answers to common issues in our FAQ.</p>
  </div>
</div>

<style>

#scrolling-keyword {
  font-weight: bold;
  background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: opacity 0.3s ease;
}

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
  max-width: 500px !important;  /* Increase the maximum width */
  height: auto;     /* Maintain aspect ratio */
  margin: 0 auto;   /* Center the image */
  display: block;   /* Ensure it's treated as a block-level element */
  border-radius: 12px;
  border: 0px solid transparent;  /* Add a 5px transparent border */
  box-shadow: 0 0 0 7px rgba(255, 255, 255, 0.2); /* Optional: Adds an outline or effect around the image */
}

.icon-image {
  width: 48px; /* Adjust the size as needed */
  height: auto;
}
</style>

<script>
  if (typeof window !== 'undefined') {
    const keywords = ['Web3', 'AVM', 'Algorand', 'Voi', 'Crypto'];
    let currentIndex = 0;

    setInterval(() => {
      const keywordElement = document.getElementById('scrolling-keyword');

      if (keywordElement) {
        // Fade out the current keyword
        keywordElement.style.opacity = '0';

        // After a short delay, change the keyword and fade it back in
        setTimeout(() => {
          currentIndex = (currentIndex + 1) % keywords.length;
          keywordElement.textContent = keywords[currentIndex];
          keywordElement.style.opacity = '1';
        }, 300); // Timing matches the CSS transition
      }
    }, 7000); // Change every 5 seconds
  }
</script>