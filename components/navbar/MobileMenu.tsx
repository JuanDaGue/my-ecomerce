import React from 'react';
import NavLink from './NavLink';

type MobileMenuProps = {
    toggleNav: () => void;
};

const MobileMenu = ({ toggleNav }: MobileMenuProps) => {
    return (
        <div className="absolute top-16 left-0 w-full bg-[rgba(109,154,185,0.8)] text-white md:hidden z-10  dark:bg-black/80">
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
