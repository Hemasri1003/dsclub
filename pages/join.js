// pages/join.js
import Head from 'next/head';
import Navbar from '../components/Navbar';
import FullBackground from '../components/FullBackground';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Join() {
  const router = useRouter();
  const [data, setData] = useState({
    fullname: '',
    roll: '',
    branch: '',
    year: '',
    interests: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false); // for disabling button
  const [formVisible, setFormVisible] = useState(true); // for hiding form after submit

  // Replace this with your actual Google Script URL
  const joinScriptURL = "https://script.google.com/macros/s/AKfycbyQAefSNjlghl8EaMe23ySLdxi7ZB7a61Wsz6yuRdr_g3KcxzuUfDkR5CygYRVu1KQM/exec";

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // disable button immediately

    try {
      await fetch(joinScriptURL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      // Optionally clear form
      setData({
        fullname: '',
        roll: '',
        branch: '',
        year: '',
        interests: ''
      });

      setFormVisible(false); // hide form completely
      router.push('/thankyou'); // redirect after submission
    } catch (err) {
      console.error(err);
      alert('Error submitting form');
      setIsSubmitting(false); // re-enable if there was an error
    }
  };

  return (
    <>
      <Head>
        <title>Join DSC Club</title>
      </Head>
      <Navbar />
      <FullBackground>
        {formVisible && (
          <form
            onSubmit={handleSubmit}
            className="bg-white bg-opacity-80 w-full max-w-md p-6 space-y-4 rounded-xl"
          >
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
              Join Data Science Club
            </h2>

            <input
              name="fullname"
              value={data.fullname}
              onChange={handleChange}
              placeholder="Full Name"
              required
              className="w-full border border-gray-800 bg-gray-100 text-black p-2 rounded-lg"
            />

            <input
              name="roll"
              value={data.roll}
              onChange={handleChange}
              placeholder="Roll Number"
              required
              className="w-full border border-gray-800 bg-gray-100 text-black p-2 rounded-lg"
            />

            <input
              name="branch"
              value={data.branch}
              onChange={handleChange}
              placeholder="Branch"
              required
              className="w-full border border-gray-800 bg-gray-100 text-black p-2 rounded-lg"
            />

            <input
              name="year"
              value={data.year}
              onChange={handleChange}
              placeholder="Year of Study"
              required
              className="w-full border border-gray-800 bg-gray-100 text-black p-2 rounded-lg"
            />

            <textarea
              name="interests"
              value={data.interests}
              onChange={handleChange}
              placeholder="Why do you want to join? / Interests"
              required
              className="w-full border border-gray-800 bg-gray-100 text-black p-2 rounded-lg"
            ></textarea>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full p-3 rounded-lg font-semibold transition ${
                isSubmitting
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-green-500 hover:bg-green-600 text-white'
              }`}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </button>
          </form>
        )}
      </FullBackground>
    </>
  );
}
