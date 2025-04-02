'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FaHospitalSymbol, FaClock, FaUserCheck } from 'react-icons/fa';

const ClockInPage: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [lastClockIn, setLastClockIn] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        // Load last clock-in time from local storage
        const storedTime = localStorage.getItem('lastClockIn');
        if (storedTime) {
            setLastClockIn(storedTime);
        }
    }, []);

    const handleClockIn = async () => {
        setLoading(true);
        setMessage('');

        try {
            const userId = '123'; // Replace with actual user ID
            const timestamp = new Date().toLocaleString(); // Get current time

            // Save clock-in timestamp in local storage
            localStorage.setItem('lastClockIn', timestamp);
            setLastClockIn(timestamp);

            const response = await fetch('/api/clock-in', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userId, timestamp }),
            });

            const data = await response.json();
            if (response.ok) {
                setMessage(data.message);
                setTimeout(() => {
                    router.push('/careworker/clock-out'); // Redirect to Clock-Out page
                }, 0);
            } else {
                setMessage(`Error: ${data.error}`);
            }
        } catch (error) {
            setMessage('Error: Unable to clock in');
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex flex-col items-center justify-center p-4">
            <div className="max-w-4xl w-full text-center space-y-8 animate-fade-in">
                <div className="flex items-center justify-center gap-3 mb-8">
                    <FaHospitalSymbol className="text-4xl text-blue-600" />
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 font-poppins">
                        Med<span className="text-blue-600">Clock</span>In
                    </h1>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-8 mx-4 transition-all hover:shadow-xl">
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
                        Careworker Clock-In
                    </h2>

                    <div className="flex flex-col items-center space-y-6">
                        <FaClock className="text-6xl text-blue-600 animate-pulse" />

                        <button
                            onClick={handleClockIn}
                            disabled={loading}
                            className={`px-8 py-4 rounded-xl text-xl font-semibold 
                                transition-all transform shadow-md flex items-center gap-3
                                ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 text-white hover:scale-105'}`}
                        >
                            <FaUserCheck className="text-2xl" />
                            {loading ? 'Clocking In...' : 'Clock In Now'}
                        </button>

                        {message && (
                            <p className={`mt-4 text-lg font-semibold ${message.includes('Error') ? 'text-red-600' : 'text-green-600'}`}>
                                {message}
                            </p>
                        )}

                        <p className="text-gray-600 mt-4">
                            {lastClockIn ? `Last clock-in: ${lastClockIn}` : 'No recent clock-in'}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClockInPage;
