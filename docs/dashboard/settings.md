# Settings

Manage all organization settings within the **Settings** tab. From general management of team members to generating API keys, this section gives you control over your organization’s configuration.

## Invite New Team Members

Expanding your team is simple. Invite new members via email, assigning each their respective role and access level within your organization.

### Team Member Roles

There are two primary roles:

| Role | <center>Manage Team Members</center> | <center>Modify Settings</center> | <center>Manage Addresses</center> | <center>Create/Remove Listings</center> |
|-----------------------|--------------------------------------|----------------------------------|-----------------------------------|-----------------------------------------|
| **Admin**             | <center>✓</center>                   | <center>✓</center>               | <center>✓</center>                | <center>✓</center>                     |
| **Member**            | <center>X</center>                   | <center>X</center>               | <center>X</center>                | <center>✓</center>                     |


#### **Admin**
- **Full control**: Can manage the organization entirely, including team members, settings, addresses, and listings.

#### **Member**
- **Restricted access**: Cannot modify team members, settings, or addresses but **can** create and remove listings.

::: tip
Members play an important role in moderating listings and maintaining smooth operations, without having full control over the organization’s critical settings and team management.
:::

## Subscription

Upgrade your subscription plan to access premium features, such as modular fees and custom requests.

## Organization Name

You can set or modify the name of your organization. This name is visible only to your team members and will not be shared publicly.

## Website

Add a link to your organization's website or social media profile, which will be displayed publicly in the purchase modal for listings.

## Link Address to Organization

Link one or more AVM addresses to your organization for primary market or secondary market fees. This is crucial for transaction management and listing creation.

## Delete Organization

If you wish to remove your organization, you can do so by using the **Delete Organization** option. 
::: danger
Deleting an organization is permanent and will result in the loss of all associated data.
:::

## API Key Management

You can generate and manage API keys used for your SDK integration. To generate a new API key:

1. Go to **Settings** > **Integrations** > **Generate New API Key**.
2. Enter a **Key Name** and set the **Allowed Origin** (the domain from which requests will originate).

For example:

- **Key Name:** SDK Test  
  **Allowed Origin:** `http://localhost:5173`
    
- **Key Name:** SDK Prod  
  **Allowed Origin:** `https://frostbits.solutions`

::: warning
Make sure to specify the correct **Origin** for each key. Requests from any origin that doesn’t match the specified one will be blocked.
:::
