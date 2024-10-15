# SDK Integration

To integrate Arcpay into your platform, use the Arcpay SDK. The SDK allows seamless listing management, transaction processing, wallet integration and elegant user facing modals.

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

<!--@include: ../sdk/api-reference.md-->

<!--@include: ../sdk/api-keys.md-->

