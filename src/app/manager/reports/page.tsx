'use client';

import Link from 'next/link';
import { FaHospital, FaChartBar, FaFilePdf, FaFileExcel, FaClock, FaUserCheck } from 'react-icons/fa6';

export default function ReportsPage() {
    // Sample report data
    const recentActivities = [
        { date: '2024-03-15', type: 'Clock-In', staff: 'Sarah Johnson', status: 'Approved' },
        { date: '2024-03-14', type: 'Overtime', staff: 'Michael Chen', status: 'Pending' },
        { date: '2024-03-14', type: 'Shift Change', staff: 'Emma Wilson', status: 'Approved' },
        { date: '2024-03-13', type: 'Time Off', staff: 'David Miller', status: 'Rejected' },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex flex-col items-center justify-center p-4">
            <div className="max-w-6xl w-full text-center space-y-8 animate-fade-in">
                {/* Header Section */}
                <div className="flex items-center justify-center gap-3 mb-8">
                    <FaHospital className="text-4xl text-blue-600 animate-bounce" />
                    <h1 className="text-4xl md:text-5xl font-bold font-poppins bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                        Management Reports
                    </h1>
                </div>

                {/* Main Content Card */}
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 mx-4 transition-all hover:shadow-2xl border border-white/20">
                    {/* Quick Stats */}
                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100">
                            <div className="flex items-center gap-4">
                                <FaClock className="w-8 h-8 text-blue-600" />
                                <div>
                                    <p className="text-2xl font-bold text-gray-800">1,856h</p>
                                    <p className="text-sm text-gray-600">Total Staff Hours</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100">
                            <div className="flex items-center gap-4">
                                <FaUserCheck className="w-8 h-8 text-blue-600" />
                                <div>
                                    <p className="text-2xl font-bold text-gray-800">89%</p>
                                    <p className="text-sm text-gray-600">Shift Coverage</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100">
                            <div className="flex items-center gap-4">
                                <FaChartBar className="w-8 h-8 text-blue-600" />
                                <div>
                                    <p className="text-2xl font-bold text-gray-800">100%</p>
                                    <p className="text-sm text-gray-600">Compliance Rate</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Chart Section */}
                    <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100 mb-8">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Weekly Hours Overview</h3>
                        <div className="h-64 flex items-end justify-between gap-2">
                            {[60, 85, 75, 90, 80, 95, 70].map((value, index) => (
                                <div
                                    key={index}
                                    className="w-12 bg-gradient-to-t from-blue-600 to-indigo-600 rounded-t-lg transition-all hover:opacity-90"
                                    style={{ height: `${value}%` }}
                                />
                            ))}
                        </div>
                        <div className="grid grid-cols-7 gap-2 mt-4">
                            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
                                <div key={index} className="text-center text-sm text-gray-600">{day}</div>
                            ))}
                        </div>
                    </div>

                    {/* Recent Activities */}
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl border border-white/20">
                        <div className="flex items-center justify-between p-6 border-b border-gray-100">
                            <h3 className="text-xl font-semibold text-gray-800">Recent Activities</h3>
                            <div className="flex gap-3">
                                <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:scale-[1.02] transition-transform">
                                    <FaFilePdf className="w-5 h-5" />
                                    Export PDF
                                </button>
                                <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg hover:scale-[1.02] transition-transform">
                                    <FaFileExcel className="w-5 h-5" />
                                    Export Excel
                                </button>
                            </div>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-blue-50">
                                    <tr>
                                        <th className="p-3 text-left">Date</th>
                                        <th className="p-3 text-left">Type</th>
                                        <th className="p-3 text-left">Staff</th>
                                        <th className="p-3 text-left">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {recentActivities.map((activity, index) => (
                                        <tr
                                            key={index}
                                            className="hover:bg-blue-50 transition-colors border-b border-gray-100"
                                        >
                                            <td className="p-3">{activity.date}</td>
                                            <td className="p-3">{activity.type}</td>
                                            <td className="p-3">{activity.staff}</td>
                                            <td className="p-3">
                                                <span className={`px-2 py-1 rounded-full text-sm ${activity.status === 'Approved' ? 'bg-green-100 text-green-800' :
                                                    activity.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                                                        'bg-red-100 text-red-800'
                                                    }`}>
                                                    {activity.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
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