'use client';
import { useEffect, useState } from 'react';
import { FaHospital, FaClock, FaUserCheck } from 'react-icons/fa6';

interface ClockRecord {
    userId: string;
    action: string;
    timestamp: string;
}

export default function ManagerDashboard() {
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
            <div className="max-w-6xl w-full text-center space-y-8 animate-fade-in">
                {/* Header Section */}
                <div className="flex items-center justify-center gap-3 mb-8">
                    <FaHospital className="text-4xl text-blue-600 animate-bounce" />
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 font-poppins bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                        Manager Dashboard
                    </h1>
                </div>

                {/* Main Content Card */}
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 mx-4 transition-all hover:shadow-2xl border border-white/20">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-6">
                        <FaClock className="inline-block mr-3 text-blue-600" />
                        Clock-in/Clock-out Records
                    </h2>

                    <div className="overflow-x-auto">
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
                                            <FaUserCheck className="inline-block mr-2" />
                                            No records found
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Footer Note */}
                <div className="mt-12">
                    <p className="text-gray-500 text-sm inline-flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full border border-white/20">
                        🏥 Trusted by major healthcare providers across North America
                    </p>
                </div>
            </div>
        </div>
    );
}