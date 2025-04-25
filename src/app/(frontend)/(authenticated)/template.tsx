import { redirect } from 'next/navigation'
import React, { FC, ReactNode } from 'react'
import { getUser } from './_actions/getUser'

interface TemplateProps {
  children: ReactNode
}

const Template: FC<TemplateProps> = async ({ children }) => {
  const user = await getUser()

  if (!user) {
    redirect('/login')

    return null
  }

  return <>{children}</>
}

export default Template
