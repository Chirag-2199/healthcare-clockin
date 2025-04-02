'use client';

import Link from 'next/link';
import { FaHospital, FaUserNurse, FaUserDoctor, FaIdCard, FaChartLine } from 'react-icons/fa6';

export default function StaffManagementPage() {
    // Sample staff data
    const staffMembers = [
        { id: 1, name: 'Sarah Johnson', role: 'Registered Nurse', department: 'ER', status: 'On Duty' },
        { id: 2, name: 'Michael Chen', role: 'Physician', department: 'Cardiology', status: 'Available' },
        { id: 3, name: 'Emma Wilson', role: 'Nurse Practitioner', department: 'Pediatrics', status: 'On Break' },
        { id: 4, name: 'David Miller', role: 'Surgical Nurse', department: 'OR', status: 'In Surgery' },
        { id: 5, name: 'Lisa Park', role: 'Charge Nurse', department: 'ICU', status: 'On Duty' },
        { id: 6, name: 'James Smith', role: 'Resident Physician', department: 'Internal Medicine', status: 'Rounds' },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex flex-col items-center justify-center p-4">
            <div className="max-w-6xl w-full text-center space-y-8 animate-fade-in">
                {/* Header Section */}
                <div className="flex items-center justify-center gap-3 mb-8">
                    <FaHospital className="text-4xl text-blue-600 animate-bounce" />
                    <h1 className="text-4xl md:text-5xl font-bold font-poppins bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                        Staff Management
                    </h1>
                </div>

                {/* Main Content */}
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 mx-4 transition-all hover:shadow-2xl border border-white/20">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4 md:mb-0">
                            Medical Team Overview
                        </h2>
                        <Link
                            href="/manager/add-staff"
                            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:scale-[1.02] transition-transform"
                        >
                            <FaUserNurse className="mr-2" />
                            Add New Staff
                        </Link>
                    </div>

                    {/* Staff Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {staffMembers.map((staff) => (
                            <div
                                key={staff.id}
                                className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-lg transition-all cursor-default border border-white/20"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0">
                                        {staff.role.includes('Nurse') ? (
                                            <FaUserNurse className="w-8 h-8 text-blue-600" />
                                        ) : (
                                            <FaUserDoctor className="w-8 h-8 text-blue-600" />
                                        )}
                                    </div>
                                    <div className="text-left">
                                        <h3 className="text-lg font-semibold text-gray-800">{staff.name}</h3>
                                        <p className="text-sm text-gray-600">{staff.role}</p>
                                        <div className="mt-2 flex items-center gap-2">
                                            <span className={`px-2 py-1 text-xs rounded-full ${staff.status === 'On Duty' ? 'bg-green-100 text-green-800' :
                                                staff.status === 'In Surgery' ? 'bg-red-100 text-red-800' :
                                                    'bg-yellow-100 text-yellow-800'
                                                }`}>
                                                {staff.status}
                                            </span>
                                            <span className="text-xs text-gray-500">{staff.department}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Stats Section */}
                    <div className="grid md:grid-cols-3 gap-6 mt-12">
                        <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100">
                            <div className="flex items-center gap-4">
                                <FaUserNurse className="w-8 h-8 text-blue-600" />
                                <div>
                                    <p className="text-2xl font-bold text-gray-800">24</p>
                                    <p className="text-sm text-gray-600">Active Nurses</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100">
                            <div className="flex items-center gap-4">
                                <FaUserDoctor className="w-8 h-8 text-blue-600" />
                                <div>
                                    <p className="text-2xl font-bold text-gray-800">12</p>
                                    <p className="text-sm text-gray-600">Physicians</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100">
                            <div className="flex items-center gap-4">
                                <FaChartLine className="w-8 h-8 text-blue-600" />
                                <div>
                                    <p className="text-2xl font-bold text-gray-800">96%</p>
                                    <p className="text-sm text-gray-600">Shift Coverage</p>
                                </div>
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