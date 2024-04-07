import { ReactNode } from "react";

const RootLayout = ({ children }: Readonly<{ children: ReactNode}>) => (
    <main>
        {children}
    </main>
)

export default RootLayout;