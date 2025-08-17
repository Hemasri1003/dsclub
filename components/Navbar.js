// components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-md py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4">
        <div className="flex items-center space-x-4">
          <img src="/download.jpg" alt="JNTUH" className="h-20" />
          
          <h1 className="text-xl md:text-2xl font-extrabold text-gray-800 text-center leading-tight">
            Jawaharlal Nehru Technological University,          <br />Hyderabad            
          </h1>

          <img src="/7.jpg" alt="Club" className="h-20" />
        </div>

        <div className="space-x-4">
          <a
            href="/register"
            className="text-sm font-semibold px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
          >
            Register
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
