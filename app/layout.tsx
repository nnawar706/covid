import { ClerkProvider } from "@clerk/nextjs";
import { PrimeReactProvider } from 'primereact/api';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import '@stream-io/video-react-sdk/dist/css/styles.css'

import './globals.css'
import { Metadata } from "next";

interface RootLayoutProps {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: 'COVID',
  description: 'Enjoy the collaborative video performance with COVID!',
  icons: {
    icon: '/icons/logo.svg'
  }
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* <head>
        <title>COVID</title>
      </head> */}
        <PrimeReactProvider>
          <ClerkProvider
            appearance={{ 
              layout: {
                socialButtonsVariant: "iconButton",
                logoImageUrl: "/icons/logo.svg"
              },
              variables: {
                colorText: "#15151c",
                colorPrimary: "#0c93b1",
                colorBackground: "#fff",
                colorInputBackground: "#fff",
                colorInputText: "#15151c"
              }
            }}
          >
            <body>
              {children}
            </body>
          </ClerkProvider>
        </PrimeReactProvider>
    </html>
  )
}