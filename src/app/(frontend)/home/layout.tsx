import React from 'react'
import { TooltipProvider } from '@/components/ui/tooltip'
import Navbar from '@/components/Navbar/nav'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <TooltipProvider delayDuration={0}>
      {children}
      <Navbar />
    </TooltipProvider>
  )
}
