// context/AuthContext.tsx
"use client";
import { createContext, useContext, useState } from "react";

interface AuthContextType {
    user: any;
    setUser: React.Dispatch<React.SetStateAction<any>>;
}

export const AuthContext = createContext<AuthContextType | null>(null);

import { ReactNode } from "react";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState(null);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
