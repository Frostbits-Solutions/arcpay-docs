# Listings

Listings are assets or items available for purchase through your organization. They can either be listed directly by your organization (**Primary Listings**) or by users of your SDK (**Secondary Listings**).

## Primary Listings

Primary listings are assets or items that your organization lists for sale. These listings are created and managed directly by your organization.

### Create a New Listing

To create a new listing:

1. From the **Dashboard**, click on **New Listing**.
2. Choose the **asset** you wish to list and the **listing type** (Sale, Auction, or Reverse Auction).
3. Set the **Asking Price** and confirm the **currency**.
4. Complete the setup by signing the necessary transactions in your wallet.

## Secondary Listings

Secondary listings are assets listed by third-party users of your SDK. These listings may include fees that your organization collects as part of secondary market sales.

### Manage Secondary Listings

To manage secondary listings:

- Set the **Third party listings fees** in **Settings** > **Listings**.
- Review secondary listings by users of your SDK in the **Listings** section.

## Types of Listings

Arcpay supports three types of listings:

### 1\. Sale (Fixed Price)

- A **Fixed Price Sale** allows you to list a tokenized or non-tokenized asset at a set price.
  
### 2\. Auction (English Auction)

- The **Auction** format allows you to set a starting bid for a tokenized asset.
- The price will increase after each bid, and the auction ends when the specified duration expires.

### 3\. Reverse (Dutch Auction)

- The **Reverse** format starts with a high price that decreases over time.
- The price drops every block until the minimum price is reached or the auction duration expires.

## Listing Management

Once your listing is created, manage it through the **Listings** page, where you can view:

- **Status:** Active, Pending, Canceled, Closed.
- **Listing ID:** A unique identifier for each listing.
- **Type:** The listing type. Sale, Auction, Reverse.
- **Asset:** Name and ID of on-chain asset.
- **Seller:** On-chain address of the seller.
- **Share:** Copy a direct link to the purchase modal.
- **Cancel:** Cancel the listing.
