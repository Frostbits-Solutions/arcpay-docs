## SDK Integration

To integrate Arcpay into your platform, use the Arcpay SDK. The SDK allows seamless listing management, transaction processing, and wallet integration.

### Installation

To install the Arcpay SDK, follow the detailed installation steps outlined in the documentation.

## SDK Documentation

For detailed integration steps and methods available in the SDK, refer to the official documentation:

- [Arcpay SDK npm package](https://www.npmjs.com/package/arcpay-sdk)

You can also access examples and guides for integrating various features, such as listing management, transaction processing, and wallet connections.

## API Keys

Arcpay requires API keys for advanced integration and interaction with the Arcpay backend. Each API key must be associated with a specified origin to prevent unauthorized access.

### Generate New API Key

To generate a new API key:

1. Navigate to **Settings** > **Integrations** > **Generate New API Key**.
2. Enter your **Key Name** and **Allowed Origin**. The origin is the domain from which requests will be sent.

Example:

- **Key Name:** SDK Test  
  **Allowed Origin:** `http://localhost:5173`
    
- **Key Name:** SDK Prod  
  **Allowed Origin:** `https://frostbits.solutions`

3. After setting up the key, use it to authenticate requests and ensure secure access to Arcpay APIs.
