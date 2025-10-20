import React, { useState } from 'react';
import { FaGithub, FaBars, FaTimes, FaShieldAlt, FaStar } from "react-icons/fa";
import { FaKey } from "react-icons/fa6";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <nav className='bg-gray-900/95 backdrop-blur-xl text-white h-20 flex justify-between items-center px-6 lg:px-12 shadow-2xl border-b border-gray-800/50 relative z-50'>
                {/* Logo Section */}
                <a href="/" className='logo-container group flex items-center gap-3'>
                    <div className='p-2 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg shadow-lg group-hover:shadow-green-400/30 transition-all duration-500 transform group-hover:scale-110'>
                        <FaKey className='text-white text-sm' />
                    </div>
                    <div className='logo font-bold text-2xl lg:text-3xl cursor-pointer'>
                        <span className='text-gray-400'>&lt;</span>
                        Pass
                        <span className='bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent'>OP</span>
                        <span className='text-gray-400'>/&gt;</span>
                    </div>
                    
                    {/* Premium Badge */}
                    <div className='hidden md:flex items-center gap-1 ml-3 px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full text-xs font-bold text-gray-900'>
                        <FaStar className='text-xs' />
                        <span>PRO</span>
                    </div>
                </a>

                {/* Desktop Navigation Links & CTA Button */}
                <div className='hidden lg:flex items-center gap-10'>
                    {/* Navigation Links */}
                    <ul className='flex items-center gap-8'>
                        {[
                            { href: "/", label: "Home" },
                            { href: "/about", label: "About" },
                            { href: "/contact", label: "Contact" },
                            { href: "/features", label: "Features" },
                        ].map((link) => (
                            <li key={link.href}>
                                <a 
                                    className='text-lg text-slate-300 hover:text-white transition-all duration-300 relative group py-2'
                                    href={link.href}
                                >
                                    <span className='relative z-10'>{link.label}</span>
                                    <span className='absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-green-400 to-blue-400 group-hover:w-full transition-all duration-500 rounded-full'></span>
                                    <span className='absolute inset-0 bg-gradient-to-r from-green-400/10 to-blue-400/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300'></span>
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Security Indicator */}
                    <div className='flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-lg border border-gray-700/50'>
                        <FaShieldAlt className='text-green-400 text-lg' />
                        <span className='text-sm text-gray-300'>Secure</span>
                    </div>

                    {/* CTA Button */}
                    <button className='flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-green-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-green-400/25 group'>
                        <FaGithub size="1.2em" className='group-hover:rotate-12 transition-transform duration-300' />
                        <a href="https://github.com/anuragsinghrajput123456789/PassOp" target='_blank'><span>GitHub</span></a>
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button 
                    className='lg:hidden p-3 rounded-lg bg-gray-800/50 border border-gray-700/50 hover:bg-gray-700/50 transition-all duration-300'
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <FaTimes size="1.2em" /> : <FaBars size="1.2em" />}
                </button>
            </nav>

            {/* Mobile Menu */}
            <div className={`lg:hidden fixed inset-x-0 top-20 bg-gray-900/95 backdrop-blur-xl border-b border-gray-800/50 z-40 transform transition-all duration-500 ${
                isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'
            }`}>
                <div className='px-6 py-8 space-y-6'>
                    {/* Mobile Navigation Links */}
                    <ul className='space-y-4'>
                        {[
                            { href: "/", label: "Home", icon: "🏠" },
                            { href: "/features", label: "Features", icon: "⭐" },
                            { href: "/pricing", label: "Pricing", icon: "💎" },
                            { href: "/about", label: "About", icon: "👥" },
                            { href: "/contact", label: "Contact", icon: "📞" }
                        ].map((link) => (
                            <li key={link.href}>
                                <a 
                                    className='flex items-center gap-4 text-xl text-slate-300 hover:text-white p-4 rounded-xl bg-gray-800/30 hover:bg-gray-700/50 transition-all duration-300 group'
                                    href={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <span className='text-2xl'>{link.icon}</span>
                                    <span className='flex-1'>{link.label}</span>
                                    <span className='w-2 h-2 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300'></span>
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile CTA Section */}
                    <div className='pt-6 border-t border-gray-700/50 space-y-4'>
                        <div className='flex items-center justify-center gap-2 p-3 bg-gray-800/50 rounded-lg'>
                            <FaShieldAlt className='text-green-400' />
                            <span className='text-gray-300'>End-to-End Encrypted</span>
                        </div>
                        
                        <button className='w-full flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-4 rounded-xl font-semibold hover:from-green-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg'>
                            <FaGithub size="1.3em" />
                            <span>Star on GitHub</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Background Overlay for Mobile */}
            <div 
                className={`lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-30 transition-opacity duration-500 ${
                    isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
                onClick={() => setIsMenuOpen(false)}
            />
        </>
    );
}

export default Navbar;