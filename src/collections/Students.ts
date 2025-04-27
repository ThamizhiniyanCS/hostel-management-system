import type { CollectionConfig } from 'payload'

export const Students: CollectionConfig = {
  slug: 'students',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'email', 'general_details'],
  },
  auth: true,
  fields: [
    {
      name: 'photo',
      label: 'Student Photo',
      type: 'relationship',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'name',
      label: 'Student Name',
      type: 'text',
      required: true,
    },
    {
      name: 'general_details',
      label: 'General Details',
      type: 'group',
      fields: [
        {
          name: 'register_number',
          label: 'Registration Number',
          type: 'text',
          required: true,
        },
        {
          name: 'program',
          label: 'Program Name',
          type: 'text',
          required: true,
        },
        {
          name: 'batch',
          label: 'Batch',
          type: 'number',
          required: true,
        },
        {
          name: 'semester',
          label: 'Semester',
          type: 'number',
          required: true,
        },
      ],
    },
    {
      name: 'personal_details',
      label: 'Personal Details',
      type: 'group',
      fields: [
        {
          name: 'dob',
          label: 'Date of Birth',
          type: 'date',
          required: true,
        },
        {
          name: 'gender',
          label: 'Gender',
          type: 'select',
          options: ['Male', 'Female', 'Prefer not to say'],
          required: true,
        },
        {
          name: 'blood_group',
          label: 'Blood Group',
          type: 'select',
          options: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'],
          required: true,
        },
      ],
    },
    {
      name: 'parent_details',
      label: 'Parent Details',
      type: 'relationship',
      relationTo: 'parents',
    },
    {
      name: 'contact_details',
      label: 'Contact Details',
      type: 'group',
      fields: [
        {
          name: 'address',
          label: 'Address',
          type: 'text',
          required: true,
        },
        {
          name: 'pincode',
          label: 'Pincode',
          type: 'number',
          required: true,
        },
        {
          name: 'mobile_number',
          label: 'Student Mobile Number',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'hostel_details',
      label: 'Hostel Details',
      type: 'group',
      fields: [
        {
          name: 'hostel',
          label: 'Hostel Name',
          type: 'relationship',
          relationTo: 'hostels',
          required: true,
        },
        {
          name: 'warden',
          label: 'Warden Name',
          type: 'relationship',
          relationTo: 'wardens',
          required: true,
        },
        {
          name: 'room_number',
          label: 'Room Number',
          type: 'number',
          required: true,
        },
      ],
    },
  ],
}
