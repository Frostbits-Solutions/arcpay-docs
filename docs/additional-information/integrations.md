# SDK Integration

To integrate Arcpay into your platform, use the Arcpay SDK. The SDK allows seamless listing management, transaction processing, and wallet integration.

## Installation

To install the Arcpay SDK, simply run this command:

```shell
 npm install arcpay-sdk 
 ```

## Usage

```typescript
import { createClient, useArcpay } from 'arcpay-sdk';

// Instantiate the arcpay client singleton for a given network. Calling this method twice with the same network will return the same instance.
const arcpayClient = createClient('voi:testnet', {
  apiKey: '<your-api-key>', // API key can be obtained from the arcpay dashboard
});

// You can use the useArcpay helper to get the client instance after instantiating it.
const arcpayClient = useArcpay('voi:testnet');

// Create a VOI -> ARC-72 sale
const listingId: string = await arcpayClient.create({listingType: 'sale'});

// Get all listings for your account
const listings: Listing[] = await arcpayClient.getListings();

// Buy a listing
const confirmation: TransactionConfirmation = arcpayClient.buy(listingId);
```

### Methods

---

#### `createClient`

Instantiate an arcpay client instance for a given network. Calling this method twice with the same network will return
the same instance.

##### Parameters

- `network: PublicNetwork`: The network to use. Use `'voi:testnet'` for VOI testnet. `REQUIRED`
- `options: ArcpayClientOptions`: Options to instantiate the client `REQUIRED`
    - `apiKey?: string`: Account API key. Can be obtained from the arcpay dashboard. The API key origin must match the
      request's origin. API key is required in most cases unless client is provided.
    - `darkMode?: boolean`: Use dark mode for the arcpay modal. Default is `false`.
    - `client?: SupabaseClient`: SupabaseClient to use. if not provided API key is required. This is for advanced use
      cases and shouldn't be used in most cases.

##### Returns

- `ArcpayClient`: Client object to interact with arcpay.

---

#### `useArcpay`

Return the arcpay client instance for a given network. This method is meant to be called from inside components, after
instantiating the client using `createClient`.

##### Parameters

- `network: PublicNetwork`: The network to use. Use `'voi:testnet'` for VOI testnet. `REQUIRED`

##### Returns

- `ArcpayClient`: Client object to interact with arcpay.

---

#### `client.create`

Creates a new listing. Calling this method will display the arcpay listing creation modal to the user.

##### Parameters

- `options?: CreateOptions`: Optional options to create listing
    - `assetId?: string`: Asset ID to create listing for. If provided, the asset will be automatically selected and
      displayed when the asset is present in the user's wallet. If not provided or not present in the user wallet, the
      user will be prompted to select an asset.
    - `listingType?: ListingType`: Listing type to create. When provided the listing type selection radio will be hidden
      from the UI. Default is `sale`.
    - `listingName?: string`: Name for the listing. If not provided, the asset name will be used.
    - `tags?: string[]`: Tags for the listing. Can be used to filter listings. Default is `[]`.
    - `accountId?: number`: Account ID to create the listing for. This is for advanced use cases and shouldn't be used
      in most cases.

##### Returns

- `Promise<string>`: A promise that resolves to the listing ID.

---

#### `client.buy`

Buy / bid on a listing. Calling this method will display the arcpay purchase modal to the user.

##### Parameters

- `id: string`: Listing ID to purchase.

##### Returns

- `Promise<TransactionConfirmation>`: A promise that resolves to the algosdk transaction confirmation object.

---

#### `client.close`

Close a listing. Calling this method will display the sign modal to close the listing. Listings such as auctions must be
closed by their creator / winner for the winner to receive the asset.

##### Parameters

- `id: string`: Listing ID to close.

##### Returns

- `Promise<TransactionConfirmation>`: A promise that resolves to the algosdk transaction confirmation object.

---

#### `client.cancel`

Cancel a listing. Calling this method will display the sign modal to cancel the listing.

##### Parameters

- `id: string`: Listing ID to cancel.

##### Returns

- `Promise<TransactionConfirmation>`: A promise that resolves to the algosdk transaction confirmation object.

---

#### `client.getListings`

Returns all listings for the account.

##### Returns

- `Promise<Listing[]>`: A promise that resolves to the list of listings.

---

#### `client.getListingById`

Returns details for a listing given it's ID.

##### Parameters

- `id: string`: Listing ID to query.

##### Returns

- `Promise<Listing>`: A promise that resolves to the details of the listing.

---

#### `client.toggleDarkMode`

Toggle dark mode for the arcpay modal.

##### Parameters

- `bool?: string`: Optional boolean to set dark mode. If not provided, it will toggle the current dark mode.

## API Keys

Arcpay requires API keys for advanced integration and interaction with the Arcpay backend. Each API key must be associated with a specified origin to prevent unauthorized access.

### Generate New API Key

To generate a new API key:

1. Navigate to **Settings** > **Integrations** > **Generate new key**.
2. Enter your **Key name** and **Allowed origin**. The origin is the domain from which requests will be sent.

Example:

- **Key Name:** SDK Test  
  **Allowed Origin:** `http://localhost:5173`
    
- **Key Name:** SDK Prod  
  **Allowed Origin:** `https://frostbits.solutions`

::: tip
After setting up the key, use it to authenticate requests and ensure secure access to Arcpay APIs.
:::

## Opensource Repositories

Arcpay is built on a foundation of open-source technologies supported by several key repositories maintained by Frostbits Solutions. Below are the core repositories and their roles within the Arcpay ecosystem.

- **[arcpay-contracts](https://github.com/Frostbits-Solutions/arcpay-contracts)**  
  :::info
  Manages smart contracts for handling Algorand Standard Assets ([ASAs](https://developer.algorand.org/docs/get-details/asa/)) as well as [ARC200](https://arc.algorand.foundation/ARCs/arc-0200) and [ARC72](https://arc.algorand.foundation/ARCs/arc-0072) Smart Assets. These contracts enable secure, decentralized transaction functionality on Arcpay.
  :::

- **[arcpay-dashboard](https://github.com/Frostbits-Solutions/arcpay-dashboard)**  
  :::info
  Allows users to create and manage their organizations, track transaction activity, and manage assets in a user-friendly interface.
  :::

- **[arcpay-sdk](https://github.com/Frostbits-Solutions/arcpay-sdk)**  
  :::info
  Handles the modal for creating, managing and purchasing listings, as well as integrating with wallets. It enables developers to integrate Arcpay functionalities like asset listing, wallet connectivity, and transaction processing into their platforms.
  :::

- **[arcpay-indexer](https://github.com/Frostbits-Solutions/arcpay-indexer)**  
  :::info
  Real-time block indexer that tracks and processes transactions on the Arcpay platform, ensuring up-to-date synchronization and real-time transaction monitoring by constantly interacting with the AVM networks.
  :::

- **[arcpay-docs](https://github.com/Frostbits-Solutions/arcpay-docs)**  
  :::info
  Contains all documentation related to Arcpay, including user guides, SDK integration instructions, and API reference material. Provides clear and detailed instructions for developers and users working with Arcpay.
  :::

