import StreamVideoProvider from "@/providers/StreamClientProvider";
import { ReactNode } from "react";

const RootLayout = ({ children }: Readonly<{ children: ReactNode}>) => (
    <StreamVideoProvider>
        {children}
    </StreamVideoProvider>
)

export default RootLayout;