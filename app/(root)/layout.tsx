import StreamVideoProvider from "@/providers/StreamClientProvider";
import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
    title: 'COVID',
    description: 'Enjoy the collaborative video performance with COVID!',
    icons: {
      icon: '/icons/logo.svg'
    }
}
  
const RootLayout = ({ children }: Readonly<{ children: ReactNode}>) => (
    <StreamVideoProvider>
        {children}
    </StreamVideoProvider>
)

export default RootLayout;