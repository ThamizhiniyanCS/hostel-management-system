import type { CollectionConfig } from 'payload'

export const Parents: CollectionConfig = {
  slug: 'parents',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'student', 'relationship', 'mobile_number'],
  },
  auth: true,
  fields: [
    {
      name: 'photo',
      label: 'Parent Photo',
      type: 'relationship',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'name',
      label: 'Parent Name',
      type: 'text',
      required: true,
    },
    {
      name: 'relationship',
      label: 'Relationship',
      type: 'select',
      options: ['Father', 'Mother', 'Guardian'],
      required: true,
    },
    {
      name: 'mobile_number',
      label: 'Parent Mobile Number',
      type: 'text',
      required: true,
    },
    {
      name: 'student',
      label: 'Parent of',
      type: 'relationship',
      relationTo: 'students',
    },
  ],
}
