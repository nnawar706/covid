import { Metadata } from "next";
import { ReactNode } from "react";

import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
    title: 'COVID',
    description: 'Enjoy the collaborative video performance with COVID!',
    icons: {
      icon: '/icons/logo.svg'
    }
}

const RootLayout = ({ children }: Readonly<{children: ReactNode}>) => (
    <main className="relative">
        <Navbar/>

        <div className="flex">
            <Sidebar/>

            <section className="flex min-h-screen flex-1 flex-column p-6">
                <div className="w-full">
                    {children}
                </div>
            </section>
        </div>
    </main>
)

export default RootLayout