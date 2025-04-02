// components/AuthProvider.tsx
import { useUser } from '@auth0/nextjs-auth0';
import Link from 'next/link';

export default function AuthProvider() {
    const { user } = useUser();

    return (
        <div>
            {user ? (
                <div>
                    <p>Welcome, {user.name}</p>
                    <Link href="/api/auth/logout">Logout</Link>
                </div>
            ) : (
                <Link href="/api/auth/login">Login</Link>
            )}
        </div>
    );
}
