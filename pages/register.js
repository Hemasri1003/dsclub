import Head from 'next/head';
import Navbar from '../components/Navbar';
import FullBackground from '../components/FullBackground';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Register() {
  const router = useRouter();
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", college: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/welcome?name=${encodeURIComponent(formData.name)}`);
  };

  return (
    <>
      <Head><title>Register</title></Head>
      <Navbar />
      <FullBackground>
        <form onSubmit={handleSubmit} className="bg-white bg-opacity-80 w-full max-w-md p-6 rounded-xl space-y-4">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">Registration</h2>
          <input name="name" required onChange={handleChange}
 className="w-full border border-gray-800 text-black bg-gray-100 p-2 rounded-lg" placeholder="Full Name"/>

<input name="email" required type="email" onChange={handleChange}
 className="w-full border border-gray-800 text-black bg-gray-100 p-2 rounded-lg" placeholder="Email"/>

<input name="phone" required onChange={handleChange}
 className="w-full border border-gray-800 text-black bg-gray-100 p-2 rounded-lg" placeholder="Phone Number"/>

<input name="college" required onChange={handleChange}
 className="w-full border border-gray-800 text-black bg-gray-100 p-2 rounded-lg" placeholder="College Name"/>

          <button type="submit" className="w-full bg-yellow-400 text-gray-900 p-3 rounded-lg font-semibold hover:bg-yellow-300">
            Continue
          </button>
        </form>
      </FullBackground>
    </>
  );
}
