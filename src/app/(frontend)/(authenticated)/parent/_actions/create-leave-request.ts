'use server'

import { getPayload } from 'payload'
import config from '@payload-config'
import { z } from 'zod'
import { createLeaveRequestFormSchema } from '../_lib/zod'
import { getUser, TypeUser } from '../../_actions/getUser'
import { Parent, Student, Warden } from '@/payload-types'

export interface createLeaveRequestResponse {
  success: boolean
  error?: string
}

export default async function createLeaveRequestAction(
  formData: z.infer<typeof createLeaveRequestFormSchema>,
): Promise<createLeaveRequestResponse> {
  const user: TypeUser = await getUser()

  const parent = user?.collection === 'parents' ? (user as Parent) : undefined
  const student = parent?.student ? (parent.student as Student) : undefined
  const warden = student?.hostel_details.warden
    ? (student.hostel_details.warden as Warden)
    : undefined

  if (!parent || !student || !warden) {
    return { success: false, error: '' }
  }

  const payload = await getPayload({ config })

  try {
    const response = await payload.create({
      collection: 'leave_requests',
      overrideAccess: false,
      user,
      data: {
        student: student?.id,
        warden: warden?.id,
        parent: parent?.id,
        number_of_days: formData.number_of_days,
        date: formData.date ? formData.date.toISOString() : undefined,
        from_date: formData.from_date ? formData.from_date.toISOString() : undefined,
        to_date: formData.to_date ? formData.to_date.toISOString() : undefined,
        subject: formData.subject,
        message: formData.message,
        status: 'Pending',
      },
    })

    if (response) {
      return {
        success: true,
      }
    } else {
      console.log('[-] Failed to create leave request')
      return {
        success: false,
        error: 'Failed to create leave request',
      }
    }
  } catch (error) {
    console.log(`[-] Create Leave Request Error: ${error}`)
    return {
      success: false,
      error: 'Failed to create leave request',
    }
  }
}
