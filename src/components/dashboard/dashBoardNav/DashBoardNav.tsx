/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
"use client"

import { cn } from "@/lib/utils"
import { Home, LayoutDashboard, LogOut, Menu, Star, Users, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

import { poppins } from '@/app/fonts/font'
import { ScrollArea } from "@/components/ui/scroll-area"

import Logo from '@/components/shared/logo/Logo'
import { logout } from '@/redux/features/user/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'sonner'
const adminNavItems = [
    { name: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
    { name: 'Feedbacks', href: '/admin/dashboard/feedback', icon: Star },
    { name: 'Subscriber', href: '/admin/dashboard/subscriber', icon: Users },
    { name: 'Home', href: '/', icon: Home },
];

export default function DashboardNav() {

    const dispatch = useDispatch();
    const user = useSelector((state: any) => state.user.user);
    const [isOpen, setIsOpen] = useState(false)
    const [activeNav, setActiveNav] = useState('')
    const navRef = useRef<HTMLDivElement>(null)
    const pathname = usePathname()
    useEffect(() => {
        setActiveNav(pathname)
    }, [pathname])

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (navRef.current && !navRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [navRef])

    const handleLogout = () => {
        dispatch(logout());
        toast.success("Logout Successful")
    };
    return (
        <div ref={navRef} className="relative z-40 h-full">
            <button
                className="md:hidden fixed flex items-center justify-end top-0 py-7 -left-2 z-30 w-full "
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                <span className="sr-only">Toggle menu</span>
            </button>

            <div
                className={cn(
                    "fixed inset-y-0 left-0 z-40 w-64 md:w-56 lg:w-72 h-full shadow-2xl md:shadow-lg dark:bg-gray-800 transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 bg-blue-50",
                    isOpen ? "translate-x-0" : "-translate-x-full"
                )}
            >

                <div className="flex flex-col h-full lg:pt-6 md:pt-3 pt-4 backdrop-blur-lg">
                    <div className="flex items-center justify-center">
                        <Logo />
                    </div>
                    <ScrollArea className="flex-1 ">
                        <nav className="space-y-2 pl-4 p-2">
                            {adminNavItems?.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={cn(
                                        `flex group items-center space-x-3 px-3 py-2 rounded-lg ${poppins.className}`,
                                        pathname === item.href ? "bg-blue-700 text-white" : " group-hover:text-text_title"
                                    )}
                                    onClick={() => setActiveNav(item.href)}
                                >
                                    <item.icon className={`h-5 w-5 ${activeNav == item.href ? "" : "group-hover:text-text_title"}  `} />
                                    <span className={` ${activeNav == item.href ? "" : "group-hover:text-text_title"}  `}>{item.name}</span>
                                </Link>
                            ))}
                        </nav>
                    </ScrollArea>
                    {/* User section */}
                    <div className='p-4 '>
                        <div className='flex items-center space-x-4 p-2'>
                            <div className=''>
                                <img src="/placeholder-avatar.jpg" alt="User" />
                                <p className='bg-slate-200'>{user?.name?.slice(0, 2)}</p>
                            </div>
                            <div>
                                <p className='font-medium'>{user?.name}</p>
                                <p className='text-xs text-gray-500 my-1'>{user?.email}</p>
                                <div className='flex items-center space-x-1'>
                                    <span className='w-2 h-2 bg-green-500 rounded-full'></span>
                                    <p className='text-xs text-gray-500'>Active</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            {user && <button onClick={() => handleLogout()} className='w-full flex items-center border px-5 rounded-xl py-2 mt-4 bg-red-500 text-white'>
                                <LogOut className='w-4 h-4 mr-2' />
                                Logout
                            </button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}