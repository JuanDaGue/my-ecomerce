"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { FiShoppingCart, FiMenu, FiX, FiHeart, FiUser } from 'react-icons/fi';
import MobileMenu from './MobileMenu';
import { ModeToggle } from '../modeToggle/ModeToggle';
import { useCart } from '@/hooks/use-cart';
import { BaggageClaim } from 'lucide-react';
import { useFavorites } from '@/hooks/use-favorite';
import { useRouter } from 'next/navigation';

export const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState(''); // Add search term state
    const { items } = useFavorites();
    const cart = useCart();
    const router = useRouter(); // Use Next.js router for navigation

    const toggleNav = () => {
        setNavOpen(!navOpen);
    };

    // Handle search input change
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    // Handle form submission (trigger search)
    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (searchTerm.trim() !== '') {
        // Redirect to search results page with query
        router.push(`/shop`);
        }
    };

    return (
        <header className="bg-[rgba(109,154,185,0.8)] text-white dark:bg-gray-800 dark:text-gray-300">
        <nav className="container mx-auto p-4 flex justify-between items-center">
            {/* Logo */}
            <div className="text-2xl font-bold max-w-32">
            <Link href="/">
                {/* Only show "JULIDAYE" on small screens (mobile) */}
                <span className="block md:hidden">JULIDAYE</span>
                
                {/* Show "JULIDAYE ARTESANÍAS" on medium and larger screens */}
                <span className="hidden md:block">JULIDAYE ARTESANÍAS</span>
            </Link>
            </div>

            {/* Enlaces Desktop */}
            <ul className="hidden md:flex space-x-8">
            <li><Link href="/shop">Tienda</Link></li>
            <li><Link href="/about">Sobre Nosotros</Link></li>
            <li><Link href="/contact">Contáctenos</Link></li>
            </ul>

            {/* Barra de Búsqueda */}
            <div className="hidden md:block">
            <form onSubmit={handleSearch}>
                <input
                type="text"
                placeholder="Buscar productos..."
                value={searchTerm}
                onChange={handleInputChange}
                className="p-2 rounded-md text-black"
                />
                <button type="submit" className="hidden"></button>
            </form>
            </div>

            {/* Iconos (Favoritos, Usuario, Carrito) */}
            <div className="flex items-center space-x-4">
            {/* Ícono de Favoritos */}
            <Link href="/favorites">
                <FiHeart size={24} className={`${items.length > 0 ? 'fill-black dark:fill-white' : ''}`} />
            </Link>

            {/* Ícono de Usuario */}
            <Link href="/profile">
                <FiUser size={24} />
            </Link>

            {/* Ícono del Carrito */}
            <Link href="/cart">
                {cart.items.length === 0 ? (
                <FiShoppingCart size={24} />
                ) : (
                <div className="flex gap-1">
                    <BaggageClaim strokeWidth={1} className="cursor-pointer" />
                    <span>{cart.items.length}</span>
                </div>
                )}
            </Link>

            {/* Botón del Menú Móvil */}
            <button onClick={toggleNav} className="ml-4 md:hidden">
                {navOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
            </div>

            <ModeToggle />

            {/* Menú Móvil */}
            {navOpen && <MobileMenu toggleNav={toggleNav} />}
        </nav>
        </header>
    );
};
