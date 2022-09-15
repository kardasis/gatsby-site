import React from 'react'
import './Layout.scss'
import Navbar from './Navbar'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Navbar></Navbar>
      <main className="min-h-screen">{children}</main>
    </div>
  )
}
