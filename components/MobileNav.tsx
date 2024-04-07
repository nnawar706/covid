"use client"

import Image from 'next/image';
import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { links } from '@/constants';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const MobileNav = () => {
    const pathname = usePathname();
    const [visible, setVisible] = useState<boolean>(true);

    return (
        <section className="w-full max-w-[264px] flex align-items-center">
            <Sidebar visible={visible} onHide={() => setVisible(false)} className="surface-100">
                <div className="border-none px-6">
                    <Link href="/" className="flex items-center gap-1">
                        <Image
                            src="/icons/logo.svg"
                            width={120}
                            height={120}
                            alt="covid logo"
                        />
                    </Link>
                    <div className="flex h-[calc(100vh-72px)] flex-column justify-content-between 
                    overflow-y-auto">
                        <div className="flex h-full flex-column gap-1 pt-2">
                            {links.map((item) => {
                                const isActive = pathname === item.route

                                return (
                                    <Link
                                        href={item.route}
                                        key={item.label}
                                        className={`flex gap-3 align-items-center py-3 rounded-lg justify-content-start 
                                        no-underline ${isActive ? 'text-primary' : 'text-color'}`}
                                    >
                                        <i className={item.icon}></i>
                                        <p className="font-semibold">
                                            {item.label}
                                        </p>
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </Sidebar>
            <Button
            className="md:hidden" 
            icon="pi pi-align-justify" 
            rounded text
            onClick={() => setVisible(true)} />
        </section>
    )
}

export default MobileNav
