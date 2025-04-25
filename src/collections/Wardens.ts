import type { CollectionConfig } from 'payload'

export const Wardens: CollectionConfig = {
  slug: 'wardens',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'hostel', 'mobile_number'],
  },
  auth: true,
  fields: [
    {
      name: 'photo',
      label: 'Warden Photo',
      type: 'relationship',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      required: true,
    },
    {
      name: 'hostel',
      label: 'Hostel',
      type: 'relationship',
      relationTo: 'hostels',
    },
    {
      name: 'mobile_number',
      label: 'Mobile Number',
      type: 'text',
      required: true,
    },
  ],
}
