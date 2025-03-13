import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    dateOfBirth: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle registration logic here
    console.log('Registration attempt:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-[calc(100vh-400px)] flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full space-y-8 bg-gray-900 p-8 rounded-xl">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold">
            Create your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="sr-only">
                  First Name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-[#9EF01A] focus:border-[#9EF01A] focus:z-10 sm:text-sm"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="lastName" className="sr-only">
                  Last Name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-[#9EF01A] focus:border-[#9EF01A] focus:z-10 sm:text-sm"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-[#9EF01A] focus:border-[#9EF01A] focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="dateOfBirth" className="sr-only">
                Date of Birth
              </label>
              <input
                id="dateOfBirth"
                name="dateOfBirth"
                type="date"
                required
                className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-[#9EF01A] focus:border-[#9EF01A] focus:z-10 sm:text-sm"
                value={formData.dateOfBirth}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-[#9EF01A] focus:border-[#9EF01A] focus:z-10 sm:text-sm"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="sr-only">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-[#9EF01A] focus:border-[#9EF01A] focus:z-10 sm:text-sm"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-black bg-[#9EF01A] hover:bg-[#8ED017] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#9EF01A]"
            >
              Create Account
            </button>
          </div>

          <div className="text-center text-sm">
            <span className="text-gray-400">Already have an account?</span>{' '}
            <Link to="/login" className="font-medium text-[#9EF01A] hover:text-[#8ED017]">
              Sign in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}