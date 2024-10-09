import React from 'react';
import Link from 'next/link';

type NavLinkProps = {
    href: string;
    children: React.ReactNode;
    onClick?: () => void;
};

const NavLink = ({ href, children, onClick }: NavLinkProps) => {
    return (
        <li>
        <Link href={href} onClick={onClick} className="text-white hover:text-gray-400">
            {children}
        </Link>
        </li>
    );
};

export default NavLink;
