import { LeaveRequest } from '@/payload-types'
import { getUser } from '../../_actions/getUser'
import { getPayload } from 'payload'
import config from '@payload-config'

export interface getLeaveRequestsResponse {
  all: LeaveRequest[]
  pending: LeaveRequest[]
  approved: LeaveRequest[]
  rejected: LeaveRequest[]
}

export default async function getLeaveRequests(): Promise<getLeaveRequestsResponse> {
  const payload = await getPayload({ config })
  const user = await getUser()

  const all = await payload.find({
    collection: 'leave_requests',
    pagination: false,
    limit: 10000,
    where: {
      'warden.id': {
        equals: user?.id,
      },
    },
  })

  const pending = await payload.find({
    collection: 'leave_requests',
    pagination: false,
    limit: 10000,
    where: {
      and: [
        {
          'warden.id': {
            equals: user?.id,
          },
        },
        {
          status: {
            equals: 'Pending',
          },
        },
      ],
    },
  })

  const approved = await payload.find({
    collection: 'leave_requests',
    pagination: false,
    limit: 10000,
    where: {
      and: [
        {
          'warden.id': {
            equals: user?.id,
          },
        },
        {
          status: {
            equals: 'Approved',
          },
        },
      ],
    },
  })

  const rejected = await payload.find({
    collection: 'leave_requests',
    pagination: false,
    limit: 10000,
    where: {
      and: [
        {
          'warden.id': {
            equals: user?.id,
          },
        },
        {
          status: {
            equals: 'Rejected',
          },
        },
      ],
    },
  })

  return { all: all.docs, pending: pending.docs, approved: approved.docs, rejected: rejected.docs }
}
