# API Keys

---

Arcpay requires API keys for SDK integration and interaction with the Arcpay backend. Each API key must be associated with a specified origin to limit unwanted use. Primary listings can only be made with both the API Key and registered addresses. This key is fully publishable and allows for the creation of secondary listings.

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