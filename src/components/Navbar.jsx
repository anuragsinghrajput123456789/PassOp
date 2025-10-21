import React, { useState, useEffect } from 'react';
import { FaGithub, FaBars, FaTimes, FaShieldAlt, FaStar, FaRocket } from "react-icons/fa";
import { FaKey } from "react-icons/fa6";
import { IoSparkles } from "react-icons/io5";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                isScrolled 
                    ? 'bg-slate-900/95 backdrop-blur-xl shadow-2xl border-b border-slate-700/50' 
                    : 'bg-transparent'
            }`}>
                <div className='h-20 flex justify-between items-center px-6 lg:px-12 relative'>
                    {/* Animated Background Elements */}
                    <div className="absolute inset-0 -z-10 overflow-hidden">
                        <div className={`absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-900/20 transition-opacity duration-500 ${
                            isScrolled ? 'opacity-100' : 'opacity-0'
                        }`}></div>
                        <div className="absolute -top-20 -left-20 w-40 h-40 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
                    </div>

                    {/* Logo Section */}
                    <a href="/" className='logo-container group flex items-center gap-3 relative'>
                        <div className='relative'>
                            <div className='absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200'></div>
                            <div className='p-2 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg shadow-lg group-hover:shadow-cyan-400/30 transition-all duration-500 transform group-hover:scale-110 relative z-10'>
                                <FaKey className='text-white text-sm' />
                            </div>
                        </div>
                        <div className='logo font-bold text-2xl text-white lg:text-3xl cursor-pointer'>
                            <span className='text-slate-400 '>&lt;</span>
                            React                         <span className='bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent'>Key</span>
                            <span className='text-slate-400'>/&gt;</span>
                        </div>
                    </a>

                    {/* Desktop Navigation Links & CTA Button */}
                    <div className='hidden lg:flex items-center gap-8'>
                        {/* Navigation Links */}
                        <ul className='flex items-center gap-8'>
                            {[
                                { href: "/", label: "Home" },
                                { href: "/about", label: "About" },
                                {href: "/manager", label: "PassOp" },    
                                { href: "/features", label: "Features" },
                                
                            ].map((link) => (
                                <li key={link.href}>
                                    <a 
                                        className='text-lg text-slate-300 hover:text-white transition-all duration-300 relative group py-2'
                                        href={link.href}
                                    >
                                        <span className='relative z-10'>{link.label}</span>
                                        <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-500 rounded-full'></span>
                                        <span className='absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-purple-400/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300'></span>
                                    </a>
                                </li>
                            ))}
                        </ul>

                        {/* Security Indicator */}
                        <div className='flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-lg border border-slate-700/50 backdrop-blur-sm'>
                            <FaShieldAlt className='text-cyan-400 text-lg' />
                            <span className='text-sm text-slate-300'>Secure</span>
                        </div>

                        {/* CTA Button */}
                        <button className='group relative px-6 py-3 font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105 flex items-center gap-3'>
                            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                            <span className="relative z-10 flex items-center gap-2">
                                <FaGithub className="text-lg" />
                                <a href="https://github.com/anuragsinghrajput123456789/PassOp" target='_blank' rel="noopener noreferrer">
                                    GitHub
                                </a>
                            </span>
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button 
                        className='lg:hidden p-3 rounded-lg bg-slate-800/50 border border-slate-700/50 hover:bg-slate-700/50 transition-all duration-300 backdrop-blur-sm'
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <FaTimes size="1.2em" /> : <FaBars size="1.2em" />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div className={`lg:hidden fixed inset-x-0 top-20 bg-slate-900/95 backdrop-blur-xl border-b border-slate-700/50 z-40 transform transition-all duration-500 ${
                isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'
            }`}>
                <div className='px-6 py-8 space-y-6'>
                    {/* Mobile Navigation Links */}
                    <ul className='space-y-4'>
                        {[
                            { href: "/", label: "Home", icon: "🏠", gradient: "from-cyan-400 to-blue-500" },
                            { href: "/features", label: "Features", icon: "⭐", gradient: "from-purple-400 to-pink-500" },
                            { href: "/pricing", label: "Pricing", icon: "💎", gradient: "from-yellow-400 to-orange-500" },
                            { href: "/about", label: "About", icon: "👥", gradient: "from-green-400 to-emerald-500" },
                            { href: "/contact", label: "Contact", icon: "📞", gradient: "from-red-400 to-pink-500" }
                        ].map((link) => (
                            <li key={link.href}>
                                <a 
                                    className='group relative flex items-center gap-4 text-xl text-slate-300 hover:text-white p-4 rounded-xl bg-slate-800/30 hover:bg-slate-700/50 transition-all duration-300'
                                    href={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <div className={`p-2 bg-gradient-to-r ${link.gradient} rounded-lg shadow-lg`}>
                                        <span className='text-white text-lg'>{link.icon}</span>
                                    </div>
                                    <span className='flex-1'>{link.label}</span>
                                    <div className='w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                                    
                                    {/* Hover gradient effect */}
                                    <div className={`absolute inset-0 bg-gradient-to-r ${link.gradient} rounded-xl opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile CTA Section */}
                    <div className='pt-6 border-t border-slate-700/50 space-y-4'>
                        <div className='flex items-center justify-center gap-2 p-3 bg-slate-800/50 rounded-lg backdrop-blur-sm'>
                            <FaShieldAlt className='text-cyan-400' />
                            <span className='text-slate-300'>End-to-End Encrypted</span>
                        </div>
                        
                        <button className='group relative w-full px-6 py-4 font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center gap-3'>
                            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                            <span className="relative z-10 flex items-center gap-2">
                                <FaGithub className="text-lg" />
                                Star on GitHub
                            </span>
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