# Settings

Manage all organization settings within the **Settings** tab. From general management of team members to generating API keys, this section gives you control over your organization’s configuration.

## Invite New Team Members

You can easily expand your team by inviting new members via email. When sending an invitation, you'll also have the option to define each team member's role and set their access levels within your organization.

#### Team Member Roles

There are two primary roles within the organization:

##### Admin
- Has full control over the organization.
- Can manage team members, including adding and removing them.
- Can modify settings, addresses, and listings.

##### Member
- Limited permissions compared to Admin.
- **Cannot** add or remove other team members.
- **Cannot** add new addresses for transaction purposes.
- **Cannot** modify organization-wide settings.
- **Can** create and remove listings.

::: tip
By defining roles clearly, you ensure that each team member has the appropriate level of access based on their responsibilities within the organization.
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

You can generate and manage API keys used for advanced integration. To generate a new API key:

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
