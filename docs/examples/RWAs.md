# Sell RWAs or any Off-chain Asset

## Merch Shop Boilerplate

Creating a merch shop or e-commerce site using Arcpay allows businesses to handle transactions efficiently. Below is the logical flow of setting up your merch shop and the transaction workflow, with diagrams illustrating each step.

### Flowchart: Transaction Flow Overview

This flowchart outlines the complete transaction process, starting from **order creation** to **confirmation on-chain**. The process covers interactions between:
- **E-commerce Front-end**: Where customers initiate orders.
- **Arcpay SDK**: Facilitates asset listing and payment processing.
- **Blockchain**: Verifies and records transactions securely.
- **Back-end Systems**: Finalizes and updates orders after transaction completion.

<div class="rwa-images">
  <img 
    class="light-only zoomable" 
    src="/diagrams/rwa_flowchart_light.png" 
    alt="RWA Flowchart" 
    data-zoomable 
  />
  <img 
    class="dark-only zoomable" 
    src="/diagrams/rwa_flowchart_dark.png" 
    alt="RWA Flowchart" 
    data-zoomable 
  />
</div>

### Step-by-Step Process for RWA Transactions

The following steps break down how transactions flow through the Arcpay platform and SDK, ensuring secure and efficient management of RWAs.

1. **Set up Arcpay SDK Integration**  
   - Install the SDK in your e-commerce platform.
   - Configure payment methods using AVM-compatible tokens like Algo, Voi or stablecoins.

2. **Create Listings for Products as RWAs**  
   - Use the SDK to define your RWA product listings with details such as pricing, images, and accepted currency.
   - Launch the product listing for customers to browse and purchase.

### Steps: RWA Transaction Workflow

This step diagram highlights the critical moments in an RWA transaction, ensuring seamless payment transfer between buyers and sellers:

1. **Select Asset**: Choose the RWA to be purchased.
2. **Set Listing Details**: Buy using the Arcpay modal.
3. **Execute Transaction**: Process payments on-chain.
4. **Confirm Payment Transfer**: Finalize and verify payment.

<div class="rwa-images">
  <img 
    class="light-only" 
    src="/diagrams/rwa_steps_light.png" 
    alt="RWA Steps" 
  />
  <img 
    class="dark-only" 
    src="/diagrams/rwa_steps_dark.png" 
    alt="RWA Steps" 
  />
</div>

By following these steps, you can efficiently manage product listings, payments through the Arcpay SDK. Whether for **primary sales** or **secondary markets**, this platform offers a seamless way to integrate AVM transactions into your e-commerce strategy.

<script setup>
import { onMounted } from 'vue'
import mediumZoom from 'medium-zoom'

// Ensure zoom initializes with correct background and margin
onMounted(() => {
  mediumZoom('[data-zoomable]', {
    background: 'rgba(0, 0, 0, 0.6)', // Transparent background with dark overlay
  })
})
</script>

<style>
  /* Ensure only one theme's images are shown at a time */
  html.dark .light-only {
    display: none;
  }

  html:not(.dark) .dark-only {
    display: none;
  }

  /* Styling for all images */
  .zoomable img {
    width: 100%;
    height: auto;
    cursor: zoom-in; /* Indicate zoomable images */
  }

  /* Ensure zoomed images and overlay appear above all elements */
  .medium-zoom-overlay,
  .medium-zoom-image--opened {
    z-index: 1050 !important; /* Ensure it appears above the navbar and content */
  }

  /* Optional: Blur effect on the overlay background */
  .medium-zoom-overlay {
    backdrop-filter: blur(8px); /* Create the blur effect */
  }
</style>
