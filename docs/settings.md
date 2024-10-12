# Settings

Manage all organization settings within the **Settings** tab. From general management of team members to generating API keys, this section gives you control over your organization’s configuration.

## General Settings

Here’s a breakdown of the settings you can configure under the **General** section:

### Invite New Team Members

Add team members to your organization by sending an email invitation. You can define their roles and set their access levels within the organization.

### Generate New API Key

Create an API key that can be used with your SDK. Make sure to specify the **allowed origin** for secure integration.

### Link Address to Organization

Link one or more AVM addresses to your organization for primary market or secondary market fees. This is crucial for transaction management and listing creation.

### Subscription

Upgrade your subscription plan to access premium features, such as modular fees and custom requests.

### Organization Name

You can set or modify the name of your organization. This name is visible only to your team members and will not be shared publicly.

### Website

Add a link to your organization's website or social media profile, which will be displayed publicly in the purchase modal for listings.

### Delete Organization

If you wish to remove your organization, you can do so by using the **Delete Organization** option. **Note:** Deleting an organization is permanent and will result in the loss of all associated data.

## API Key Management

You can generate and manage API keys used for advanced integration. To generate a new API key:

1. Go to **Settings** > **Integrations** > **Generate New API Key**.
2. Enter a **Key Name** and set the **Allowed Origin** (the domain from which requests will originate).

For example:

- **Key Name:** SDK Test  
  **Allowed Origin:** [http://localhost:5173](http://localhost:5173)
    
- **Key Name:** SDK Prod  
  **Allowed Origin:** [https://frostbits.solutions](https://frostbits.solutions)

### API Key Security

Make sure to specify the correct **Origin** for each key. Requests from any origin that doesn’t match the specified one will be blocked.

