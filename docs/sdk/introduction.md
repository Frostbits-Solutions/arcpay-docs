# SDK Introduction

---

The Arcpay SDK is designed to seamlessly integrate AVM payment processing, asset listing, and marketplace management into your platform with minimal effort. It empowers developers to quickly add blockchain functionality without reworking existing infrastructure, making it ideal for those looking to incorporate fast and efficent transactions.

## Creating Listings
With the SDK, you can create listings for NFTs, SFTs, and RWAs with just a few lines of code. Whether you’re offering fixed sales, auctions, or reverse auctions, the SDK makes configuration and management straightforward.

```typescript
import { createClient } from 'arcpay-sdk';

// Instantiate the client for the 'voi:testnet' network
const arcpayClient = createClient('voi:testnet', {
  apiKey: '<your-api-key>', // Your API key from the Arcpay dashboard
});

// Create a listing for a specific asset
const listingId: string = await arcpayClient.create({
  assetId: '123',  // Replace with your asset ID
  listingType: 'sale',  // 'sale', 'auction', or 'reverse'
  listingName: 'Exclusive NFT',  // Optional: Name for the listing
  price: 100,  // Set the price or starting bid for the listing
});

/* 
 * The listingId returned can be used to track, display, or manage this listing 
 * in your app's interface or marketplace.
 */
console.log(`Listing created with ID: ${listingId}`);

```

**Key Benefits:**
- Easy integration for managing asset listings.
- Support for various sale types: fixed-price, auction, and reverse.
- Flexibility to sell tokenized or non-tokenized assets.

## Buying Listings
The SDK simplifies the buying and bidding processes. It offers a secure, out-of-the-box transaction experience, enabling you to provide users with an intuitive and smooth buying journey without building your own payment logic.

```typescript
import { createClient } from 'arcpay-sdk';

// Instantiate the client
const arcpayClient = createClient('voi:testnet', {
  apiKey: '<your-api-key>',
});

// Buy a listing using the listing ID
const confirmation: TransactionConfirmation = await arcpayClient.buy('listingId');

/* 
 * After calling the buy method, a TransactionConfirmation object is returned, 
 * which contains details about the successful purchase.
 */
console.log(`Purchase confirmed: ${confirmation}`);

```

**Key Benefits:**
- Ready-to-use UI for listing purchases and bids.
- Simplified transaction handling through the SDK.
- Minimal code changes required to integrate with your platform.

## Secondary Markets
Enable secondary market functionality to allow users to resell purchased assets, like NFTs, SFTs, or RWAs. The SDK supports managing these listings and enables on-chain resale of digital and off-chain assets for a dynamic marketplace!

```typescript
import { createClient } from 'arcpay-sdk';

// Instantiate the client
const arcpayClient = createClient('voi:testnet', {
  apiKey: '<your-api-key>',
});

// Fetch all active listings for the account
const listings: Listing[] = await arcpayClient.getListings();

/* 
 * This will return an array of active listings. You can iterate through these listings
 * to display them in your marketplace or allow users to resell assets.
 */
listings.forEach(listing => {
  console.log(`Listing: ${listing.listingName}, Price: ${listing.price}`);
});
```

**Key Benefits:**
- Allows user-driven asset resale for ongoing transaction volume.
- Captures additional revenue through secondary sales.
- Enables efficient tracking and management of resold assets.
