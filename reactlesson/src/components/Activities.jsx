import React from 'react';
import { Link } from 'react-router-dom';

const Activities = ({ onLoginClick }) => {
  // Function to handle the "Logheaza-te" link click
  const handleLoginClick = () => {
    onLoginClick();
  };

  return (
    <div className="max-w-[1140px] m-auto w-full md:flex mt-[-75px]">

      <div className="relative p-4 ">
        <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50] translate-y-[-50%] text-white text-2xl font-bold">
          Cursuri
        </h3>
        <img
          className="w-full h-full object-cover relative border-4 border-white shadow-lg"
          src="https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="/"
        />
      </div>

      {/* Make the "Logheaza-te" section clickable */}
      <Link to="/register" onClick={handleLoginClick}>
        <div className="relative p-4 shadow-2xl shadow-black">
          <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50] translate-y-[-50%] text-white text-2xl font-bold">
            Logheaza-te
          </h3>
          <img
            className="w-full h-full object-cover relative border-4 border-white shadow-lg"
            src="https://images.unsplash.com/photo-1509822929063-6b6cfc9b42f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="/"
          />
        </div>
      </Link>

      <div className="relative p-4">
        <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50] translate-y-[-50%] text-white text-2xl font-bold">
          Cursuri
        </h3>
        <img
          className="w-full h-full object-cover relative border-4 border-white shadow-lg"
          src="https://plus.unsplash.com/premium_photo-1677444546739-21b8aad351d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="/"
        />
      </div>

    </div>
  );
};

export default Activities;
