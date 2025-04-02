"use client";

import React from 'react';
import { useAuth } from '@/components/AuthContext';


export default function UserInfo() {
    const authContext = useAuth();
    const user = authContext?.user;
    return <div>{user ? `Hello, ${user.name}` : 'Please log in'}</div>;
}
