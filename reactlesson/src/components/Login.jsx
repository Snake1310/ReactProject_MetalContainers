import React from 'react';

const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <form className="w-1/2 bg-white p-8 rounded shadow-md">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Fa-ti cont</h2>
        </div>
        <div className="mt-4">
          <p className="text-gray-600 text-sm mb-4">
            Nu ai cont? Click <a href="#">aici</a> sa-ti creezi unul.
          </p>

          <label htmlFor="username" className="block text-gray-700 font-bold">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            required
            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />

          <label htmlFor="password" className="block mt-4 text-gray-700 font-bold">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />

          <button
            type="submit"
            className=" custom-button w-full mt-6 py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
