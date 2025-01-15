import React from 'react';
import Link from 'next/link';

const Header = () => {
    return (
        <header className="bg-white shadow-md fixed w-full top-0 z-50">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                <Link href="/" className="text-xl font-bold text-purple-600">
                    Jonatas Adams
                </Link>
                <nav>
                    <ul className="flex space-x-6">
                        <li>
                            <Link href="/" className="text-gray-700 hover:text-purple-600">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog" className="hover:text-purple-600">
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link href="/portfolio" className="text-gray-700 hover:text-purple-600">
                                Portfólio
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header; 