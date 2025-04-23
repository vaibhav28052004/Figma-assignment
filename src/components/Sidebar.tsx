import { useState } from 'react'
import Link from 'next/link'
import {
  HomeIcon,
  DocumentTextIcon,
  UserIcon,
  WindowIcon,
  ChartBarIcon,
  PhotoIcon,
  Cog6ToothIcon,
  BellIcon,
  CreditCardIcon,
} from '@heroicons/react/24/outline'
import { Headphones, Expand , UsersRound} from 'lucide-react'


const navigation = [
  { name: 'Dashboard', href: '/', icon: HomeIcon, icontype: 'iconsax' },
  { name: 'Content', href: '/content', icon: DocumentTextIcon, icotype: 'heroicons' },
  { name: 'User', href: '/user', icon: UserIcon, icotype: 'heroicons' },
  { name: 'Task', href: '/task', icon: UsersRound, icotype: 'heroicons' },
  { name: 'App/Web', href: '/app-web', icon: WindowIcon, icotype: 'heroicons' },
  { name: 'Analytics', href: '/analytics', icon: ChartBarIcon, icotype: 'heroicons' },
  { name: 'Media', href: '/media', icon: PhotoIcon, icotype: 'heroicons' },
  { name: 'Customize', href: '/customize', icon: Expand, icotype: 'heroicons' },
  { name: 'Notifications', href: '/notifications', icon: BellIcon, icotype: 'heroicons' },
  { name: 'Subscription', href: '/subscription', icon: CreditCardIcon, icotype: 'heroicons' },
  { name: 'Settings', href: '/settings', icon: Cog6ToothIcon, icotype: 'heroicons' },
  { name: 'Contact Support', href: '/support', icon: Headphones, icotype: 'heroicons' },
]

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState<boolean>(false)
  return (
    <div className={`flex h-screen flex-col bg-white shadow-sm transition-all duration-300 ${collapsed ? 'w-20' : 'w-64'}`}>
      <div className="flex h-16 items-center justify-between px-4">
        {!collapsed && <h1 className="text-lg font-bold text-[#1c1442]"></h1>}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="text-gray-600 hover:text-[#1c1442] cursor-pointer"
        >
          ☰
        </button>
      </div>
      <nav className="flex-1 space-y-1 px-3 py-4">
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="group flex items-center rounded-lg px-3 py-2 text-sm font-medium text-gray-600 hover:bg-[#1c1442] hover:text-white"
          >
            <item.icon className="h-5 w-5 flex-shrink-0" />
            {!collapsed && <span className="ml-3">{item.name}</span>}
          </Link>
        ))}
      </nav>
    </div>
  )
} 