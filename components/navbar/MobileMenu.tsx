import React from 'react';
import NavLink from './NavLink';

type MobileMenuProps = {
    toggleNav: () => void;
};

const MobileMenu = ({ toggleNav }: MobileMenuProps) => {
    return (
        <div className="absolute top-16 left-0 w-full bg-gray-800 text-white md:hidden">
        <ul className="flex flex-col items-center space-y-4 p-4">
            <NavLink href="/shop" onClick={toggleNav}>
            Shop
            </NavLink>
            <NavLink href="/about" onClick={toggleNav}>
            About
            </NavLink>
            <NavLink href="/contact" onClick={toggleNav}>
            Contact
            </NavLink>
        </ul>
        </div>
    );
};

export default MobileMenu;
