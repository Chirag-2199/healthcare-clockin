// app/careworker/page.tsx
'use client';
import Link from 'next/link';
import { FaUserMd, FaClock, FaFileMedical, FaComments, FaHospitalSymbol } from 'react-icons/fa';

export default function CareworkerPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex flex-col items-center justify-center p-4">
            <div className="max-w-4xl w-full text-center space-y-8 animate-fade-in">
                {/* Header */}
                <div className="flex items-center justify-center gap-3 mb-8">
                    <FaHospitalSymbol className="text-4xl text-blue-600" />
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 font-poppins">
                        Med<span className="text-blue-600">Clock</span>In
                    </h1>
                </div>

                {/* Main Dashboard */}
                <div className="bg-white rounded-2xl shadow-lg p-8 mx-4 transition-all hover:shadow-xl">
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
                        Careworker Dashboard
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6 mt-8">
                        <Link href="/careworker/clock-in" className="bg-blue-50 p-6 rounded-xl hover:bg-blue-100 transition-colors">
                            <div className="flex flex-col items-center">
                                <FaClock className="text-3xl text-blue-600 mb-4" />
                                <h3 className="text-xl font-semibold">Clock In/Out</h3>
                                <p className="text-gray-600 mt-2">Record your shift times</p>
                            </div>
                        </Link>
                    </div>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-3 gap-6 mt-12 px-4">
                    <Link href="/careworker/history" className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer">
                        <div className="flex flex-col items-center">
                            <FaClock className="w-8 h-8 text-blue-600 mb-4" />
                            <h3 className="text-xl font-semibold">Shift History</h3>
                            <p className="text-gray-600 mt-2 text-center">Review your past shifts and hours</p>
                        </div>
                    </Link>

                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all cursor-default">
                        <FaFileMedical className="w-8 h-8 text-blue-600 mx-auto" />
                        <h3 className="text-xl font-semibold mt-4 text-center">Patient Reports</h3>
                        <p className="text-gray-600 mt-2 text-center">Access care documentation</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all cursor-default">
                        <FaComments className="w-8 h-8 text-blue-600 mx-auto" />
                        <h3 className="text-xl font-semibold mt-4 text-center">Team Communication</h3>
                        <p className="text-gray-600 mt-2 text-center">Message your care team</p>
                    </div>
                </div>

                <p className="text-gray-500 text-sm mt-12">
                    Secure healthcare staff platform | HIPAA Compliant
                </p>
            </div>

            <style jsx global>{`
                .font-poppins { font-family: 'Poppins', sans-serif; }
                @keyframes fade-in {
                  from { opacity: 0; transform: translateY(20px); }
                  to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in { animation: fade-in 0.8s ease-out; }
            `}</style>
        </div>
    );
}
