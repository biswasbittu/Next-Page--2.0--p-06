import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">© 2024 My Website</div>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-300">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-gray-300">
            Terms of Service
          </a>
          <a href="#" className="hover:text-gray-300">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
