import React from 'react';

const Navbar2 = () => {
  return (
    <div className="bg-orange-600 h-16 flex flex-row justify-between items-center px-10 shadow-lg">
      <p className="font-bold text-black text-xl">DiabetesDetect</p>
      <div className="flex gap-10 ml-5">
        <a href="/" className="font-bold text-black hover:text-orange-200 transition duration-300 mt-2">
          Home
        </a>
        <a
          href="/detect"
          className="bg-orange-700 hover:bg-orange-500 py-2 px-5 rounded-full font-bold text-black transition duration-300"
        >
          Diabetes Detect
        </a>
      </div>
    </div>
  );
};

export default Navbar2;
