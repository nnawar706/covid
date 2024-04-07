import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MobileNav from './MobileNav'

const Navbar = () => {
    return (
        <nav className="flex justify-content-between sticky z-50 w-full 
        px-6 surface-100">
            <Link href="/">
                <Image 
                    src="/icons/logo.svg" 
                    width={100}
                    height={100}
                    alt="covid logo"
                />
            </Link>
            <div className="flex justify-content-between gap-1">
                <MobileNav/>
            </div>
        </nav>
    )
}

export default Navbar
