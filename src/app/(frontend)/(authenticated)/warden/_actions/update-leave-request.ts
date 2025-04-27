'use server'

import { getPayload } from 'payload'
import config from '@payload-config'
import { getUser, TypeUser } from '../../_actions/getUser'

export interface updateLeaveRequestResponse {
  success: boolean
  error?: string
}

export type TypeStatus = 'Pending' | 'Approved' | 'Rejected'

export default async function updateLeaveRequestAction(
  status: TypeStatus,
  id: string,
): Promise<updateLeaveRequestResponse> {
  const user: TypeUser = await getUser()

  const payload = await getPayload({ config })

  try {
    const response = await payload.update({
      collection: 'leave_requests',
      overrideAccess: false,
      id,
      user,
      data: {
        status,
      },
    })

    if (response) {
      return {
        success: true,
      }
    } else {
      console.log('[-] Failed to update leave request')
      return {
        success: false,
        error: 'Failed to update leave request',
      }
    }
  } catch (error) {
    console.log(`[-] Update Leave Request Error: ${error}`)
    return {
      success: false,
      error: 'Failed to update leave request',
    }
  }
}
