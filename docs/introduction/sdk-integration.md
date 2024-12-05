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

// Instantiate the arcpay client singleton for a given network. Calling this method twice with the same network will return the same instance. If using Voi use 'voi:mainnet'.
const arcpayClient = createClient('algo:mainnet', {
  apiKey: '<your-api-key>', // API key can be obtained from the arcpay dashboard
});

// You can use the useArcpay helper to get the client instance after instantiating it. If using Voi use 'voi:mainnet'.
const arcpayClient = useArcpay('algo:mainnet');

// Create a VOI -> ARC-72 sale
const listingId: string = await arcpayClient.create({listingType: 'sale'});

// Get all listings for your account
const listings: Listing[] = await arcpayClient.getListings();

// Buy a listing
const confirmation: TransactionConfirmation = arcpayClient.buy(listingId);
```

**Listing modal and details can be viewed here:** **Listing modal example can be viewed here:** [Example GIF and description.](/guides/listing.html)


<!--@include: ../sdk/api-reference.md-->

<!--@include: ../sdk/api-keys.md-->

