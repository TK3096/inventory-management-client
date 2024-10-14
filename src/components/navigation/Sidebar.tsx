'use client'

import React from 'react'
import {
  Archive,
  CircleDollarSign,
  Clipboard,
  Layout,
  Menu,
  SlidersHorizontal,
  User,
} from 'lucide-react'

import { useAppDispatch, useAppSelector } from '@/providers/StoreProvider'
import { toggleSidebar } from '@/store'

import { SidebarItem } from '@/components/navigation/SidebarItem'

import { cn } from '@/lib/utils'

const MENU = [
  {
    href: '/dashboard',
    icon: Layout,
    label: 'Dashboard',
  },
  {
    href: '/inventory',
    icon: Archive,
    label: 'Inventory',
  },
  {
    href: '/products',
    icon: Clipboard,
    label: 'Products',
  },
  {
    href: '/users',
    icon: User,
    label: 'Users',
  },
  {
    href: '/settings',
    icon: SlidersHorizontal,
    label: 'Settings',
  },
  {
    href: '/expenses',
    icon: CircleDollarSign,
    label: 'Expenses',
  },
]

export const Sidebar: React.FC = () => {
  const dispatch = useAppDispatch()
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed,
  )

  const handleToggleSidebar = () => {
    dispatch(toggleSidebar(!isSidebarCollapsed))
  }

  return (
    <div
      className={cn(
        'fixed flex flex-col bg-white transition-all duration-300 overflow-hidden h-full shadow-md z-40',
        isSidebarCollapsed ? 'w-0 md:w-16' : 'w-72 md:w-64',
      )}
    >
      <div
        className={cn(
          'flex gap-3 justify-between md:justify-normal items-center pt-8',
          isSidebarCollapsed ? 'px-5' : 'px-8',
        )}
      >
        <div>LOGO</div>
        <h1
          className={cn(
            'font-extrabold text-2xl',
            isSidebarCollapsed ? 'hidden' : 'block',
          )}
        >
          TK
        </h1>

        <button
          className='md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100'
          onClick={handleToggleSidebar}
        >
          <Menu className='w-4 h-4' />
        </button>
      </div>

      <div className='flex-grow mt-8'>
        {MENU.map((item) => (
          <SidebarItem
            key={item.label}
            href={item.href}
            icon={item.icon}
            label={item.label}
            isCollaped={isSidebarCollapsed}
          />
        ))}
      </div>

      <div className={cn('mb-10', isSidebarCollapsed ? 'hidden' : 'block')}>
        <p className='text-center text-gray-500 text-xs'>&copy; 2024 TonG+</p>
      </div>
    </div>
  )
}
