import type { LucideIcon } from 'lucide-react'

import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

import { cn } from '@/lib/utils'

interface SidebarItemProps {
  href: string
  icon: LucideIcon
  label: string
  isCollaped: boolean
}

export const SidebarItem: React.FC<SidebarItemProps> = (
  props: SidebarItemProps,
) => {
  const { href, icon: Icon, label, isCollaped } = props

  const pathname = usePathname()
  const isActive =
    pathname === href || (pathname === '/' && href === '/dashboard')

  return (
    <Link href={href}>
      <div
        className={cn(
          'flex items-center cursor-pointer hover:text-blue-500 hover:bg-blue-100 gap-3 transition-colors',
          isCollaped ? 'justify-center py-4' : 'justify-start px-8 py-4',
          isActive ? 'bg-blue-200 text-white' : '',
        )}
      >
        <Icon className='w-6 h-6 !text-gray-700' />
        <span
          className={cn(
            'font-medium text-gray-700',
            isCollaped ? 'hidden' : 'block',
          )}
        >
          {label}
        </span>
      </div>
    </Link>
  )
}
