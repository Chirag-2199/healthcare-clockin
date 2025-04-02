'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { FaUser, FaClock, FaHospital, FaShieldHalved, FaHeadset } from 'react-icons/fa6';

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (email === 'clockin@coworker.com') {
      router.push('/careworker');
    } else if (email === 'chirag@manager.com') {
      router.push('/manager');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl w-full text-center space-y-8 animate-fade-in">
        {/* Header Section */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <FaHospital className="text-4xl text-blue-600 animate-bounce" />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 font-poppins bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text">
            MedClockIn
          </h1>
        </div>

        {/* Login Form */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 mx-4 transition-all hover:shadow-2xl border border-white/20">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">Staff Login</h2>

          <form onSubmit={handleLogin} className="space-y-6">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            {error && <p className="text-red-500">{error}</p>}

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 rounded-xl text-lg font-semibold transition-all transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
            >
              Login
            </button>
          </form>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 px-4">
          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-lg transition-all cursor-default border border-white/20">
            <FaClock className="w-10 h-10 text-blue-600 mx-auto mb-4 animate-pulse" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Real-time Tracking</h3>
            <p className="text-gray-600">Accurate shift logging with GPS verification</p>
          </div>

          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-lg transition-all cursor-default border border-white/20">
            <FaShieldHalved className="w-10 h-10 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">HIPAA Compliant</h3>
            <p className="text-gray-600">Secure patient data protection</p>
          </div>

          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-lg transition-all cursor-default border border-white/20">
            <FaHeadset className="w-10 h-10 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">24/7 Support</h3>
            <p className="text-gray-600">Dedicated medical staff assistance</p>
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
