// Footer.js
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-10">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
            {/* About Section */}
            <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-3">About Us</h3>
            <p className="text-gray-400">
                We offer the best selection of products with top-notch customer service. Thank you for shopping with us!
            </p>
            </div>

            {/* Quick Links Section */}
            <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="text-gray-400 space-y-2">
                <li><a href="/shop" className="hover:text-white">Shop</a></li>
                <li><a href="/about" className="hover:text-white">About</a></li>
                <li><a href="/contact" className="hover:text-white">Contact Us</a></li>
                <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
            </ul>
            </div>

            {/* Social Media Section */}
            <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
            <div className="flex space-x-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-2xl">
                <FaFacebook />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-2xl">
                <FaTwitter />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-2xl">
                <FaInstagram />
                </a>
            </div>
            </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-10 text-gray-500">
            &copy; 2024 YourShop | All Rights Reserved
        </div>
        </footer>
    );
};

