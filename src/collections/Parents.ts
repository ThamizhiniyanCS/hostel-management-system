import type { CollectionConfig } from 'payload'

export const Parents: CollectionConfig = {
  slug: 'parents',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    // Email added by default
    // Add more fields as needed
  ],
}
