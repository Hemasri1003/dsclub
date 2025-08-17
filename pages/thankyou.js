import Head from 'next/head';
import Navbar from '../components/Navbar';
import FullBackground from '../components/FullBackground';
import confetti from 'canvas-confetti';
import { useEffect } from 'react';

export default function ThankYou() {
  useEffect(() => {
    confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 }});
  }, []);

  return (
    <>
      <Head><title>Thank You</title></Head>
      <Navbar />
      <FullBackground>
        <div className="bg-white bg-opacity-80 p-8 rounded-xl text-center">
          <h1 className="text-3xl font-bold mb-4 text-gray-800">Thank You!</h1>
          <p className="mb-6 text-gray-700">Your application has been received. We will get back to you soon about your selection.</p>
        </div>
      </FullBackground>
    </>
  );
}
