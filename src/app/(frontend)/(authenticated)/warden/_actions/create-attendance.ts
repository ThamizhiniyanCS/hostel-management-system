'use server'

import { getPayload } from 'payload'
import config from '@payload-config'
import { getUser, TypeUser } from '../../_actions/getUser'
import { AttendanceStatusType } from '../attendance/page'

export interface createAttendanceResponse {
  success: boolean
  error?: string
}

export default async function CreateAttendanceAction(
  status: AttendanceStatusType,
  student_id: string,
  date: Date,
): Promise<createAttendanceResponse> {
  const user: TypeUser = await getUser()

  const payload = await getPayload({ config })

  try {
    const response = await payload.create({
      collection: 'attendance',
      overrideAccess: false,
      user,
      data: {
        student: student_id,
        status,
        date: date.toISOString(),
      },
    })

    if (response) {
      return {
        success: true,
      }
    } else {
      console.log('[-] Failed to create attendance')
      return {
        success: false,
        error: 'Failed to create attendance',
      }
    }
  } catch (error) {
    console.log(`[-] Create Attendance Error: ${error}`)
    return {
      success: false,
      error: 'Failed to create attendance',
    }
  }
}
