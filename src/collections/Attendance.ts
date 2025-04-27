import type { CollectionConfig } from 'payload'

export const Attendance: CollectionConfig = {
  slug: 'attendance',
  admin: { useAsTitle: 'date', defaultColumns: ['date', 'student', 'status'] },
  access: {},
  fields: [
    {
      name: 'student',
      label: 'Student',
      type: 'relationship',
      relationTo: 'students',
      required: true,
    },
    {
      name: 'date',
      label: 'Date',
      type: 'date',
      required: true,
    },
    {
      name: 'status',
      label: 'Status',
      type: 'select',
      options: ['Present', 'Absent', 'Late'],
      required: true,
    },
  ],
}
