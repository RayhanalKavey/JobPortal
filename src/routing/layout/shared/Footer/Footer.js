import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-700 py-8 ">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white">My Company</h1>
          <p className="text-gray-400 mt-2">123 Main St, Anytown USA</p>
        </div>
        <div>
          <nav className="flex justify-end">
            <Link href="/" className="text-gray-400 hover:text-white px-3">
              Home
            </Link>
            <a href="/" className="text-gray-400 hover:text-white px-3">
              About
            </a>
            <a href="/" className="text-gray-400 hover:text-white px-3">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
