import React, { useState } from 'react';
import axios from 'axios';

const RegisterForm = () => {
  const [registrationData, setRegistrationData] = useState({
    username: '',
    password: '',
  });
  
  const [isLoading, setIsLoading] = useState(false); // Added loading state
  const [registrationError, setRegistrationError] = useState(null); // Added error state

  const handleRegistrationSubmit = async (e) => {
    e.preventDefault();
    
    // Clear any previous error messages
    setRegistrationError(null);
    
    setIsLoading(true); // Set loading to true while the request is made

    try {
      const response = await axios.post('http://localhost:4000/user/register', registrationData);
      
      // Handle registration success
      console.log('Registration successful', response.data);
      
      // Clear the form after successful registration
      setRegistrationData({
        username: '',
        password: '',
      });
    } catch (error) {
      // Handle registration failure
      console.error('Registration failed', error);
      setRegistrationError('Registration failed. Please try again.'); // Set an error message
    } finally {
      setIsLoading(false); // Set loading to false after the request is complete
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRegistrationData({
      ...registrationData,
      [name]: value,
    });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        className="w-1/2 bg-white p-8 rounded shadow-md"
        onSubmit={handleRegistrationSubmit}
      >
        <h2 className="text-2xl font-bold mb-4">Register</h2> {/* Updated heading */}
        
        {/* Error message */}
        {registrationError && (
          <p className="text-red-500 mb-4">{registrationError}</p>
        )}

        <label htmlFor="username" className="block text-gray-700 font-bold">
          Username:
        </label>
        <input
          type="text"
          id="username"
          name="username"
          value={registrationData.username}
          onChange={handleInputChange}
          required
          className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:border-blue-500"
        />

        <label htmlFor="password" className="block mt-4 text-gray-700 font-bold">
          Password:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={registrationData.password}
          onChange={handleInputChange}
          required
          className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:border-blue-500"
        />

        <button
          type="submit"
          className="custom-button w-full mt-6 py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
          disabled={isLoading} // Disable the button during loading
        >
          {isLoading ? 'Registering...' : 'Register'} {/* Change button text during loading */}
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
