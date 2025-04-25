import type { CollectionConfig } from 'payload'

export const Hostels: CollectionConfig = {
  slug: 'hostels',
  admin: { useAsTitle: 'name' },
  fields: [
    {
      name: 'name',
      label: 'Hostel Name',
      type: 'text',
      required: true,
    },
    {
      name: 'warden',
      label: 'Warden Name',
      type: 'relationship',
      relationTo: 'wardens',
      required: true,
    },
  ],
}
