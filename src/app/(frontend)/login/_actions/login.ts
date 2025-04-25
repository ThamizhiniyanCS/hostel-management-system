'use server'

import { getPayload } from 'payload'
import config from '@payload-config'
import { cookies } from 'next/headers'
import { Student, Parent, Warden } from '@/payload-types'

interface LoginParams {
  collection: 'students' | 'parents' | 'wardens'
  email: string
  password: string
}

export interface LoginResponse {
  success: boolean
  error?: string
}

export type Result = {
  exp?: number
  token?: string
  user?: Student | Parent | Warden
}

export async function login({ collection, email, password }: LoginParams): Promise<LoginResponse> {
  const payload = await getPayload({ config })

  try {
    const result: Result = await payload.login({
      collection: collection,
      data: { email, password },
    })

    if (result.token) {
      const cookieStore = await cookies()

      cookieStore.set('payload-token', result.token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        path: '/',
      })

      return { success: true }
    } else {
      return { success: false, error: 'Invalid email or password' }
    }
  } catch (error) {
    console.log(`[-] Login Error: ${error}`)
    return { success: false, error: 'An error occurred!' }
  }
}
