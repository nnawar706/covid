import { SignIn } from '@clerk/nextjs';

export default function SiginInPage() {
    return (
        <main className="flex h-screen w-full align-items-center justify-content-center">
            <SignIn />
        </main>
    );
}