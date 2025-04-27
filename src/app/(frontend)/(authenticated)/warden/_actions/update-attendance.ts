'use server'

import { getPayload } from 'payload'
import config from '@payload-config'
import { getUser, TypeUser } from '../../_actions/getUser'
import { AttendanceStatusType } from '../attendance/page'

export interface updateAttendanceResponse {
  success: boolean
  error?: string
}

export default async function UpdateAttendanceAction(
  status: AttendanceStatusType,
  id: string,
): Promise<updateAttendanceResponse> {
  const user: TypeUser = await getUser()

  const payload = await getPayload({ config })

  try {
    const response = await payload.update({
      collection: 'attendance',
      overrideAccess: false,
      user,
      id,
      data: {
        status,
      },
    })

    if (response) {
      return {
        success: true,
      }
    } else {
      console.log('[-] Failed to update attendance')
      return {
        success: false,
        error: 'Failed to update attendance',
      }
    }
  } catch (error) {
    console.log(`[-] Update Attendance Error: ${error}`)
    return {
      success: false,
      error: 'Failed to update attendance',
    }
  }
}
