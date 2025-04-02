'use client';

import { use } from 'react';
import Link from 'next/link';
import { FaHospital, FaUserNurse, FaUserDoctor, FaClock, FaPhone, FaEnvelope, FaIdBadge } from 'react-icons/fa6';

export default function StaffDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params); // ✅ Unwrap params using React.use()

    // Sample staff data - replace with actual data fetching
    const staff = {
        id,
        name: 'Sarah Johnson',
        role: 'Registered Nurse',
        department: 'Emergency Room',
        status: 'On Duty',
        email: 's.johnson@medclockin.com',
        phone: '(555) 123-4567',
        employeeId: 'NUR-2354',
        recentShifts: [
            { date: '2024-03-15', start: '07:00', end: '19:00', duration: '12h' },
            { date: '2024-03-14', start: '19:00', end: '07:00', duration: '12h' },
            { date: '2024-03-12', start: '07:00', end: '19:00', duration: '12h' },
        ]
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex flex-col items-center justify-center p-4">
            <div className="max-w-4xl w-full text-center space-y-8 animate-fade-in">
                {/* Header Section */}
                <div className="flex items-center justify-center gap-3 mb-8">
                    <FaHospital className="text-4xl text-blue-600 animate-bounce" />
                    <h1 className="text-4xl md:text-5xl font-bold font-poppins bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                        Staff Profile
                    </h1>
                </div>

                {/* Main Content Card */}
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 mx-4 transition-all hover:shadow-2xl border border-white/20">
                    {/* Back Navigation */}
                    <div className="mb-8 text-left">
                        <Link href="/manager/staff" className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors">
                            ← Back to Staff List
                        </Link>
                    </div>

                    {/* Profile Header */}
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
                        <div className="flex-shrink-0">
                            {staff.role.includes('Nurse') ? (
                                <FaUserNurse className="w-20 h-20 text-blue-600" />
                            ) : (
                                <FaUserDoctor className="w-20 h-20 text-blue-600" />
                            )}
                        </div>
                        <div className="text-left">
                            <h2 className="text-3xl font-semibold text-gray-800">{staff.name}</h2>
                            <p className="text-lg text-gray-600">{staff.role}</p>
                            <div className="mt-2 flex items-center gap-2">
                                <span className={`px-3 py-1 rounded-full text-sm ${staff.status === 'On Duty' ? 'bg-green-100 text-green-800' :
                                    staff.status === 'Off Duty' ? 'bg-gray-100 text-gray-800' :
                                        'bg-yellow-100 text-yellow-800'
                                    }`}>
                                    {staff.status}
                                </span>
                                <span className="text-sm text-gray-500">{staff.department}</span>
                            </div>
                        </div>
                    </div>

                    {/* Details Grid */}
                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Contact Information */}
                        <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Contact Information</h3>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <FaIdBadge className="w-5 h-5 text-blue-600" />
                                    <span className="text-gray-600">{staff.employeeId}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <FaEnvelope className="w-5 h-5 text-blue-600" />
                                    <span className="text-gray-600">{staff.email}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <FaPhone className="w-5 h-5 text-blue-600" />
                                    <span className="text-gray-600">{staff.phone}</span>
                                </div>
                            </div>
                        </div>

                        {/* Recent Shifts */}
                        <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Recent Shifts</h3>
                            <div className="space-y-3">
                                {staff.recentShifts.map((shift, index) => (
                                    <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg">
                                        <div className="flex items-center gap-2">
                                            <FaClock className="w-4 h-4 text-blue-600" />
                                            <span className="text-gray-600">{shift.date}</span>
                                        </div>
                                        <div className="text-gray-600">
                                            {shift.start} - {shift.end} ({shift.duration})
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Employment Details */}
                    <div className="mt-8 bg-blue-50/50 p-6 rounded-xl border border-blue-100">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Employment Details</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div>
                                <p className="text-sm text-gray-500">Start Date</p>
                                <p className="text-gray-800">2020-05-15</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Shift Pattern</p>
                                <p className="text-gray-800">12h Rotating</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Certifications</p>
                                <p className="text-gray-800">ACLS, BLS, RN</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Total Hours</p>
                                <p className="text-gray-800">1,856h (YTD)</p>
                            </div>
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
