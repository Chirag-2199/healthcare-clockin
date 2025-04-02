'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FaHospitalSymbol, FaClock, FaUserTimes } from 'react-icons/fa';

const ClockOutPage: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [lastClockOut, setLastClockOut] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        const storedClockOut = localStorage.getItem('lastClockOut');
        if (storedClockOut) setLastClockOut(storedClockOut);
    }, []);

    const handleClockOut = async () => {
        setLoading(true);
        setMessage('');

        try {
            const userId = '123';
            const response = await fetch('/api/clock-out', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userId }),
            });

            const data = await response.json();
            if (response.ok) {
                const timestamp = new Date().toLocaleString();
                localStorage.setItem('lastClockOut', timestamp);
                setLastClockOut(timestamp);

                setMessage(data.message);
                setTimeout(() => {
                    router.push('/careworker/clock-in');
                }, 0);
            } else {
                setMessage(`Error: ${data.error}`);
            }
        } catch (error) {
            setMessage('Error: Unable to clock out');
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
                        Med<span className="text-blue-600">Clock</span>Out
                    </h1>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-8 mx-4 transition-all hover:shadow-xl">
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
                        Careworker Clock-Out
                    </h2>

                    <div className="flex flex-col items-center space-y-6">
                        <FaClock className="text-6xl text-red-600 animate-pulse" />

                        <button
                            onClick={handleClockOut}
                            disabled={loading}
                            className={`px-8 py-4 rounded-xl text-xl font-semibold 
                                transition-all transform shadow-md flex items-center gap-3
                                ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-red-600 hover:bg-red-700 text-white hover:scale-105'}`}
                        >
                            <FaUserTimes className="text-2xl" />
                            {loading ? 'Clocking Out...' : 'Clock Out Now'}
                        </button>

                        {message && (
                            <p className={`mt-4 text-lg font-semibold ${message.includes('Error') ? 'text-red-600' : 'text-green-600'}`}>
                                {message}
                            </p>
                        )}

                        <p className="text-gray-600 mt-4">
                            {lastClockOut ? `Last clock-out: ${lastClockOut}` : 'No clock-out recorded'}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClockOutPage;
