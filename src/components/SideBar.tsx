"use client"

import { Image, Link, Sidebar } from 'lucide-react'
import React from 'react'
import { ITEMS, sidebarLinks } from '../../constants'
import { cn } from '../../lib/utils'
import { usePathname } from 'next/navigation'

const SideBar = ({ user}: SiderbarProps) => {
  const pathname = usePathname();
  return (
    <section className='SideBar'>
     <nav className='flex flex-col gap-4'>
        <Link href='/' className='mb-12 cursor-pointer items-center gap-2'>
          <Image
            src ="src/images/logo.svg"
            width={34}
            height={34}
            alt="Master in"
            className="size-[24px] max-xl:size-14"
          />
          <h1 className="sidebar-logo">DataMaze</h1>
        </Link>
        {sidebarLinks.map((item) => {
         const isActive = pathname === item.route || pathname.startsWith('${item.route}/')

            return (
              <Link href={item.route} key={item.label} className={cn('Sidebar-link',{'bg-bank-gradient':isActive})}>
              <div className="relative size-6">
                <Image
                  src={item.imgURL}
                  alt={item.label}
                  fill
                />
              <div>
              <p className={cn("sidebar-label", isActive && "text-white")}>{item.label}</p>
              </div>

                </div>
              </Link>
          )
        })}
        USER
     </nav>  

     FOOTER
    </section>
  )
}

export default SideBar