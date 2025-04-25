'use server'

import { cookies } from 'next/headers'

export interface LogoutResponse {
  success: boolean
  error?: string
}

export async function logout(): Promise<LogoutResponse> {
  try {
    const cookieStore = await cookies()
    cookieStore.delete('payload-token')

    return { success: true }
  } catch (error) {
    console.log(`[-] Logout Error: ${error}`)

    return {
      success: false,
      error: 'An error occurred during logout!',
    }
  }
}
