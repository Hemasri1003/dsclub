import Head from 'next/head';
import Navbar from '../components/Navbar';
import FullBackground from '../components/FullBackground';

export default function Home() {
  return (
    <>
      <Head>
        <title>Data Science Club - JNTUH</title>
      </Head>
      <Navbar/>

      <FullBackground>
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Data Science Club</h1>
          <p className="mb-8 text-lg">Where Innovation Meets Knowledge</p>
          <a href="/register" className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300">Register / Sign Up</a>
        </div>
      </FullBackground>
    </>
  );
}
