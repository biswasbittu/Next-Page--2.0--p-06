import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-900">404</h1>
          <p className="text-xl text-gray-700">Oops! Page not found.</p>
          <Link
            to="/"
            className="mt-4 inline-block px-6 py-3 bg-amber-500 text-white rounded-lg shadow-lg transition duration-300 hover:bg-blue-600"
          >
            Go Home
          </Link>
        </div>
      </div>
    );
};

export default Error;