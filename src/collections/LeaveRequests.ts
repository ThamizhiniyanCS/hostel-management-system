import type { CollectionConfig } from 'payload'
import isUserOrIsParent from '@/access/isUserOrIsParent'
import isUserOrIsParentOrIsWarden from '@/access/isUserOrIsParentOrIsWarden'

export const LeaveRequests: CollectionConfig = {
  slug: 'leave_requests',
  access: {
    create: isUserOrIsParent,
    update: isUserOrIsParentOrIsWarden,
    delete: isUserOrIsParent,
  },
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
      required: true,
    },
    {
      name: 'number_of_days',
      label: 'Number of Days',
      type: 'number',
      required: true,
    },
    {
      name: 'date',
      label: 'Date of Leave',
      type: 'date',
    },
    {
      name: 'from_date',
      label: 'From Date',
      type: 'date',
    },
    {
      name: 'to_date',
      label: 'To Date',
      type: 'date',
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
