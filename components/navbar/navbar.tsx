"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { FiShoppingCart, FiMenu, FiX, FiHeart, FiUser } from 'react-icons/fi';
import MobileMenu from './MobileMenu';
import { ModeToggle } from '../modeToggle/ModeToggle';
export const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false);

    const toggleNav = () => {
        setNavOpen(!navOpen);
    };

    return (
        <header className="bg-gray-800 text-white">
        <nav className="container mx-auto p-4 flex justify-between items-center">
            {/* Logo */}
            <div className="text-2xl font-bold">
            <Link href="/">
                Ecommerce
            </Link>
            </div>

            {/* Desktop Links */}
            <ul className="hidden md:flex space-x-8">
            <li>
                <Link href="/shop">Shop</Link>
            </li>
            <li>
                <Link href="/about">About</Link>
            </li>
            <li>
                <Link href="/contact">Contact</Link>
            </li>
            </ul>

            {/* Search Bar */}
            <div className="hidden md:block">
            <input
                type="text"
                placeholder="Search products..."
                className="p-2 rounded-md text-black"
            />
            </div>

            {/* Icons (Favorites, User, Cart) */}
            <div className="flex items-center space-x-4">
            {/* Favorite Icon */}
            <Link href="/favorites">
                <FiHeart size={24} />
            </Link>

            {/* User Icon */}
            <Link href="/profile">
                <FiUser size={24} />
            </Link>

            {/* Cart Icon */}
            <Link href="/cart">
                <FiShoppingCart size={24} />
            </Link>

            {/* Mobile Menu Button */}
            <button onClick={toggleNav} className="ml-4 md:hidden">
                {navOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
            </div>
            <ModeToggle/>
            {/* Mobile Menu */}
            {navOpen && <MobileMenu toggleNav={toggleNav} />}
        </nav>
        </header>
    );
};


