'use server'

import { headers as getHeaders } from 'next/headers'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import type { Payload } from 'payload'
import { Student, Parent, Warden, User } from '@/payload-types'

export type TypeUser =
  | (User & {
      collection: 'users'
    })
  | (Student & {
      collection: 'students'
    })
  | (Parent & {
      collection: 'parents'
    })
  | (Warden & {
      collection: 'wardens'
    })
  | null

export async function getUser(): Promise<TypeUser> {
  const headers = await getHeaders()
  const payload: Payload = await getPayload({ config: await configPromise })
  const { user } = await payload.auth({ headers })

  return user || null
}
