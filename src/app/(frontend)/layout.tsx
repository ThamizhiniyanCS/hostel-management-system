import React from 'react'
import './styles.css'
import { Toaster } from '@/components/ui/sonner'

export const metadata = {
  description: "St Peter's College of Engineering Hostel Management App",
  title: "HMS | St Peter's",
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body className="antialiased min-h-screen grid grid-rows-[auto_1fr_auto] scroll-smooth">
        {children}
        <Toaster />
      </body>
    </html>
  )
}
