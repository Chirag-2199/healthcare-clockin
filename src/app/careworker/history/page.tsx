'use client';

import React, { useEffect, useState } from 'react';
import { FaHospitalSymbol, FaClock, FaHistory } from 'react-icons/fa';
import Link from 'next/link';

interface ClockRecord {
    userId: string;
    action: string;
    timestamp: string;
}

const HistoryPage: React.FC = () => {
    const [records, setRecords] = useState<ClockRecord[]>([]);

    useEffect(() => {
        async function fetchRecords() {
            const res = await fetch('/api/clock-in');
            const data = await res.json();
            setRecords(data);
        }
        fetchRecords();
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex flex-col items-center justify-center p-4">
            <div className="max-w-4xl w-full text-center space-y-8 animate-fade-in">
                {/* Header Section */}
                <div className="flex items-center justify-center gap-3 mb-8">
                    <FaHospitalSymbol className="text-4xl text-blue-600" />
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 font-poppins">
                        Med<span className="text-blue-600">Clock</span>In
                    </h1>
                </div>

                {/* Main Content Card */}
                <div className="bg-white rounded-2xl shadow-lg p-8 mx-4 transition-all hover:shadow-xl">
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
                        Shift History
                    </h2>

                    <div className="flex flex-col items-center space-y-6">
                        <FaHistory className="text-6xl text-blue-600 mb-4" />

                        {/* History Table */}
                        <div className="w-full overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-blue-50">
                                    <tr>
                                        <th className="p-3 text-left">User ID</th>
                                        <th className="p-3 text-left">Action</th>
                                        <th className="p-3 text-left">Timestamp</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {records.length > 0 ? (
                                        records.map((record, index) => (
                                            <tr
                                                key={index}
                                                className="hover:bg-blue-50 transition-colors border-b border-gray-100"
                                            >
                                                <td className="p-3">{record.userId}</td>
                                                <td className="p-3">
                                                    <span className={`px-2 py-1 rounded-full text-sm ${record.action.toLowerCase().includes('in')
                                                        ? 'bg-green-100 text-green-800'
                                                        : 'bg-blue-100 text-blue-800'
                                                        }`}>
                                                        {record.action}
                                                    </span>
                                                </td>
                                                <td className="p-3">
                                                    {new Date(record.timestamp).toLocaleString()}
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan={3} className="text-center p-6 text-gray-500">
                                                No records found
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Additional Options */}
                <div className="grid md:grid-cols-2 gap-6 mt-12 px-4">
                    <Link
                        href="/"
                        className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-4"
                    >
                        <FaClock className="text-3xl text-blue-600" />
                        <div className="text-left">
                            <h3 className="text-xl font-semibold">Return to Login</h3>
                            <p className="text-gray-600">Try Loging in with different account</p>
                        </div>
                    </Link>

                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all cursor-default">
                        <div className="flex items-center gap-4">
                            <FaHospitalSymbol className="text-3xl text-blue-600" />
                            <div className="text-left">
                                <h3 className="text-xl font-semibold">Total Hours</h3>
                                <p className="text-gray-600">Check your logged hours</p>
                            </div>
                        </div>
                    </div>
                </div>

                <p className="text-gray-500 text-sm mt-12">
                    Secure healthcare staff platform | HIPAA Compliant
                </p>
            </div>
        </div>
    );
};

export default HistoryPage;