---
layout: home

hero:
  name: "Arcpay"
  text: "Simple <span id='scrolling-keyword'>AVM</span> \nPayments"
  tagline: "Easy Monetization for AVM Dapps"
  image:
    src: ./images/dashboard.png
    alt: "Arcpay Logo"
  actions:
    - theme: brand
      text: Get Started
      link: /introduction/get-started
    - theme: alt
      text: View NPM Package
      link: https://www.npmjs.com/package/arcpay-sdk

features:
  - icon:
      src: /3dicons/setting-dynamic-gradient.png 
      alt: "Setting Icon"
      width: "50px" 
      height: "50px" 
    title: Organization Management
    details: Manage your team and listings effortlessly by creating organizations and assigning roles.
    link: /dashboard/organization
  - icon:
      src: /3dicons/folder-dynamic-gradient.png 
      alt: "Folder Icon"
      width: "50px" 
      height: "50px"  
    title: Seamless Listings
    details: Create, manage, and customize sales, auctions, and reverse auctions for any asset.
    link: /dashboard/other-settings
  - icon:
      src: /3dicons/money-bag-dynamic-gradient.png 
      alt: "Money Bag Icon"
      width: "50px" 
      height: "50px"  
    title: Sell with Ease
    details: A simplified user process to purchase NFTs, SFTs, and RWAs in a secure, decentralized environment.
    link: /sdk/api-reference
  - icon:
      src: /3dicons/chart-dynamic-gradient.png 
      alt: "Chart Icon"
      width: "50px" 
      height: "50px"  
    title: Monitor Activity
    details: Stay updated on your transaction activity by reviewing your sales and purchases.
    link: /dashboard/activity-dashboard
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
    <h3><a href="/sdk/integration">SDK Integration</a></h3>
    <p>For developers looking to integrate Arcpay into their platforms.</p>
  </div>
</div>

<div class="vp-feature">
  <div class="vp-feature-icon">
  <img src="/3dicons/setting-dynamic-gradient.png" alt="Setting Icon" class="icon-image" />
  </div>
  <div class="vp-feature-content">
    <h3><a href="/dashboard/settings">Settings and Customization</a></h3>
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
/* Default for larger screens (greater than 959px) */
#scrolling-keyword {
  display: inline-block;
  text-align: left;
  white-space: nowrap;
  font-weight: bold;
  background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: opacity 0.3s ease;
}

/* For screens less than 640px */
@media (max-width: 639px) {
  #scrolling-keyword {
    min-width: 140px;
  }
}

/* For screens between 640px and 959px */
@media (min-width: 640px) and (max-width: 959px) {
  #scrolling-keyword {
    min-width: 190px;
  }
}

/* Ensure hero text is left-aligned */
.VPHomeHero h1,
.VPHomeHero p,
.VPHomeHero .VPHomeHero-actions {
  text-align: left;
  justify-content: flex-start;
}

@media (max-width: 959px) {
  .VPHomeHero {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    text-align: left;
  }
}

/* Feature Box Styles */
.vp-feature {
  display: flex;
  align-items: center;
  background-color: var(--vp-c-bg-soft);
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  transition: border 0.3s ease-in-out;
  border: 1px solid transparent;
}

/* Hover effect to match the feature box with rounded corners and a new hover color */
.vp-feature:hover {
  border-color: #aeabfb; /* New border color on hover */
  border-radius: 8px;    /* Ensures the hover effect keeps rounded corners */
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

/* Image styles */
.VPHomeHero-image {
  max-width: 400px;
  width: 100%;
}

.VPImage.image-src {
  max-width: 500px !important;
  height: auto;
  margin: 0 auto;
  display: block;
  border-radius: 12px;
  border: 0px solid transparent;
  box-shadow: 0 0 0 7px rgba(255, 255, 255, 0.2);
}

.icon-image {
  width: 48px;
  height: auto;
}
</style>

<script>
  if (typeof window !== 'undefined') {
    const keywords = ['AVM', 'Algo', 'ASA', 'Voi', 'ARC200'];
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
        }, 300);
      }
    }, 4000);
  }
</script>
