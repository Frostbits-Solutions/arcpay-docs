---
title: Getting Started with Arcpay SDK
---

# Getting Started with Arcpay SDK

Arcpay simplifies Web3 payment processing and asset management through organizations. This guide will walk you through the essential steps, from registering your account to setting up the SDK for seamless integration into your platform.

## 1. Register an Account

- Visit the [Arcpay app](https://app.arcpay.dev).
- Enter your email address to receive a **magic link** for login.
- Open the magic link sent to your email and click on it to be logged into the Arcpay dashboard.

## 2. Create an Organization

Once logged in, the next step is to create an organization, which will manage your assets and transactions.

- Click the **Create new organization** button located at the top-left corner of the dashboard.
- A form will appear where you can provide your organization details.
- Confirm the details and submit the form.
::: info
The organization name is private and only visible to your team members.
:::

## 3. Link an Address

After creating the organization, you must link an AVM address for managing transactions.

- Navigate to **Settings** by clicking the gear icon in the left sidebar.
- Scroll to the **Link Address** section.
- Enter your AVM address and assign a label for easy identification.
- Click **Link address** to confirm the association.

## 4. Generate an API Key

To integrate the Arcpay SDK into your platform, you will need an API key.

- Go to the **Settings** page by clicking on the gear icon in the sidebar.
- Under **Integrations**, click **Generate new key**.
- Enter a name for the API key and the allowed origin (e.g., your website URL).
- Save the key and keep it secure. You will need it for SDK integration.

## 5. Install the SDK

Now that your organization and API key are set up, install the Arcpay SDK by following the [SDK integration guide](/integrations).
