import Head from 'next/head';
import Navbar from '../components/Navbar';

export default function Login() {
  return (
    <>
      <Head>
        <title>Login - Data Science Club</title>
      </Head>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
        <h2 className="text-3xl font-bold">Login Page Coming Soon...</h2>
      </div>
    </>
  );
}
