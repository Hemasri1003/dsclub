import Head from 'next/head';
import Navbar from '../components/Navbar';
import FullBackground from '../components/FullBackground';
import { useRouter } from 'next/router';

export default function Welcome() {
  const router = useRouter();
  const name = router.query.name;

  return (
    <>
      <Head><title>Welcome</title></Head>
      <Navbar />
      <FullBackground>
        <div className="bg-white bg-opacity-80 p-8 rounded-xl text-center">
          <h1 className="text-3xl font-bold mb-2 text-gray-800">Welcome {name}!</h1>
          <p className="text-gray-700 mb-6">Thank you for registering.</p>
          <a href="/join" className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700">PRESS ME TO JOIN DS CLUB</a>
        </div>
      </FullBackground>
    </>
  );
}
