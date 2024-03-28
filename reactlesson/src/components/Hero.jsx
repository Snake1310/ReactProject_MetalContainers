import React from 'react';

const Hero = () => {
  return (
    <div className="w-full h-[90vh] relative">
      <img
        src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
        alt="/"
        className="w-full h-full object-cover"
      />
      <div className="max-w-[1140px] m-auto">
      <div className="absolute top-[25%] sm:top-[30%] md:top-[30%] w-full max-w-[600px] w-[100%] flex flex-col text-white p-4 z-10 bg-black bg-opacity-50 rounded-lg">
          <h2 className="text-4xl py-4 italic">DetaliiX2</h2>
          <p className="text-xl py-4 italic">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum."
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
