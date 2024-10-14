'use client'

import { useEffect } from 'react'
import { Navbar } from '@/components/navigation/Navbar'
import { Sidebar } from '@/components/navigation/Sidebar'

import { useAppSelector } from '@/providers/StoreProvider'

import { cn } from '@/lib/utils'

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed,
  )
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode)

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
      document.documentElement.classList.remove('light')
    } else {
      document.documentElement.classList.add('light')
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])

  return (
    <div
      className={cn(
        'flex bg-gray-50 text-gray-900 w-full min-h-screen',
        isDarkMode ? 'dark' : 'light',
      )}
    >
      <Sidebar />
      <main
        className={cn(
          'flex flex-col w-full h-full py-7 px-9 bg-gray-50',
          isSidebarCollapsed ? 'md:pl-24' : 'md:pl-72',
        )}
      >
        <Navbar />
        {children}
      </main>
    </div>
  )
}

export default MainLayout
