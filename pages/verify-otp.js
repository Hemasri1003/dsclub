import Head from 'next/head';
import Navbar from '../components/Navbar';

export default function VerifyOTP() {
  return (
    <>
      <Head>
        <title>Verify OTP - Data Science Club</title>
      </Head>
      <Navbar />

      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-600 to-blue-500 p-6">
        <div className="w-full max-w-md bg-white rounded-xl shadow-2xl p-8">
          <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">Verify OTP</h2>
          <p className="text-center text-gray-600 mb-6">Enter the 6-digit OTP sent to your email</p>

          <form className="space-y-4">
            <input
              type="text"
              maxLength={6}
              placeholder="Enter OTP"
              className="w-full border rounded-lg p-2 text-center tracking-widest font-medium"
              required
            />

            <button
              type="submit"
              className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition font-semibold"
            >
              Verify
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
