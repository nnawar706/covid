"use client"

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { links } from '@/constants';

const Sidebar = () => {
    const pathname = usePathname();

    return (
        <section className="sticky left-0 top-0 h-screen w-fit flex-column 
        justify-content-between p-6 pt-1 hidden md:flex lg:w-[264px] text-color-700 
        surface-100">
            <div className="flex flex-1 flex-column gap-1">
                {links.map((item) => {
                    const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);

                    return (
                        <Link
                            href={item.route}
                            key={item.label}
                            className={`flex gap-3 align-items-center py-3 rounded-lg justify-content-start 
                            no-underline ${isActive ? 'text-primary' : 'text-color'}`}
                        >
                            <i className={item.icon}></i>
                            <p className="font-semibold hidden lg:block">
                                {item.label}
                            </p>
                        </Link>
                    )
                })}
            </div>
        </section>
    )
}

export default Sidebar
