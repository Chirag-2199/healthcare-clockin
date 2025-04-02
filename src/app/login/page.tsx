'use client';
import { signIn, useSession } from "next-auth/react";
import { useState } from "react";

export default function Login() {
    const { data: session } = useSession();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const result = await signIn('credentials', {
            redirect: false,
            username,
            password,
        });

        if (result?.error) {
            alert(result.error);
        }
    };

    if (session) {
        return <h1>Welcome {session.user?.name}</h1>;
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Sign In</button>
        </form>
    );
}
