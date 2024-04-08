import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MobileNav from './MobileNav'
import { SignedIn, UserButton } from '@clerk/nextjs'

const Navbar = () => {
    return (
        <nav className="flex justify-content-between sticky z-50 w-full
        px-6 surface-100 max-h-5rem">
            <Link href="/">
                <Image 
                    src="/icons/logo.svg" 
                    width={100}
                    height={100}
                    alt="covid logo"
                />
            </Link>
            <div className="flex justify-content-between gap-1">
                <SignedIn>
                    <UserButton afterSignOutUrl="/sign-in"/>
                </SignedIn>
                
                <MobileNav/>
            </div>
        </nav>
    )
}

export default Navbar
