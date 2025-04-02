// components/AuthButtons.tsx
import Link from 'next/link';

export default function AuthButtons() {
    return (
        <div>
            <Link href="/api/auth/login">
                <button className="px-4 py-2 bg-blue-500 text-white rounded">Login</button>
            </Link>
            <Link href="/api/auth/logout">
                <button className="px-4 py-2 bg-red-500 text-white rounded ml-4">Logout</button>
            </Link>
        </div>
    );
}
