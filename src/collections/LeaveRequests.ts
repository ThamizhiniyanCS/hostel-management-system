import type { CollectionConfig } from 'payload'

export const LeaveRequests: CollectionConfig = {
  slug: 'leave_requests',
  labels: {
    singular: 'Leave Request',
    plural: 'Leave Requests',
  },
  admin: {
    defaultColumns: ['student', 'subject', 'status'],
  },
  fields: [
    {
      name: 'student',
      label: 'Student',
      type: 'relationship',
      relationTo: 'students',
      required: true,
    },
    {
      name: 'parent',
      label: 'Parent',
      type: 'relationship',
      relationTo: 'parents',
      required: true,
    },
    {
      name: 'warden',
      label: 'Warden',
      type: 'relationship',
      relationTo: 'wardens',
      required: true,
    },
    {
      name: 'status',
      label: 'Status',
      type: 'select',
      options: ['Pending', 'Approved', 'Rejected'],
    },
    {
      name: 'subject',
      label: 'Subject',
      type: 'text',
      required: true,
    },
    {
      name: 'message',
      label: 'Message',
      type: 'textarea',
      required: true,
    },
  ],
}
