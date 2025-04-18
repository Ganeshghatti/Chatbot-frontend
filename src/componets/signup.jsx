"use client";

import { useState } from 'react';

const SignUp = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [showOtp, setShowOtp] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handlePhoneSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phoneNumber }),
      });

      const data = await response.json();
      if (response.ok) {
        setShowOtp(true);
        setError('');
      } else {
        setError(data.message || 'Something went wrong');
        setShowOtp(true); // Show OTP field even if there's an error
      }
    } catch (err) {
      setError('Failed to connect to server');
      setShowOtp(true); // Show OTP field even if there's an error
    } finally {
      setIsLoading(false);
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch('/api/verify-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phoneNumber, otp }),
      });

      const data = await response.json();
      if (response.ok) {
        // Redirect to dashboard or home page after successful verification
        window.location.href = '/dashboard';
      } else {
        setError(data.message || 'Invalid OTP');
      }
    } catch (err) {
      setError('Failed to verify OTP');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-900 text-white">
      <div className="bg-neutral-800 p-8 rounded-lg shadow-lg w-96 border border-neutral-700">
        <h2 className="text-3xl font-bold text-center mb-8">
          <span className="text-accent">Sign</span> Up
        </h2>
        
        <form onSubmit={handlePhoneSubmit}>
          <div className="mb-6">
            <label className="block text-gray-300 text-sm font-bold mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Enter your phone number"
              pattern="[0-9]{10}"
              required
              className="w-full px-4 py-2 bg-neutral-700 border border-neutral-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-white placeholder-gray-400"
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-accent hover:bg-[#e05a00] text-white font-bold py-2 px-4 rounded-lg transition duration-300 disabled:opacity-50"
          >
            {isLoading ? 'Sending...' : 'Get OTP'}
          </button>
        </form>

        {showOtp && (
          <form onSubmit={handleOtpSubmit} className="mt-6">
            <div className="mb-6">
              <label className="block text-gray-300 text-sm font-bold mb-2">
                Enter OTP
              </label>
              <div className="flex gap-2">
                {[...Array(4)].map((_, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength="1"
                    value={otp[index] || ''}
                    onChange={(e) => {
                      const newOtp = otp.split('');
                      newOtp[index] = e.target.value;
                      setOtp(newOtp.join(''));
                      if (e.target.value && e.target.nextSibling) {
                        e.target.nextSibling.focus();
                      }
                    }}
                    className="w-12 h-12 text-center bg-neutral-700 border border-neutral-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-white"
                  />
                ))}
              </div>
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-accent hover:bg-[#e05a00] text-white font-bold py-2 px-4 rounded-lg transition duration-300 disabled:opacity-50"
            >
              {isLoading ? 'Verifying...' : 'Verify OTP'}
            </button>
          </form>
        )}

        {error && (
          <p className="mt-4 text-red-400 text-center">{error}</p>
        )}
      </div>
    </div>
  );
};

export default SignUp; 