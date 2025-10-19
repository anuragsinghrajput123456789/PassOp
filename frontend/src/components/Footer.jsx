import React from 'react';
import { FaGithub, FaLinkedin, FaHeart, FaShieldAlt } from "react-icons/fa";
import { FaXTwitter, FaKey } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className='bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-slate-300  overflow-hidden bottom-0 relative w-full'>
            {/* Background decorative elements */}
            <div className='absolute inset-0 opacity-5'>
                <div className='absolute top-10 left-10 w-20 h-20 bg-green-400 rounded-full blur-xl'></div>
                <div className='absolute bottom-10 right-10 w-16 h-16 bg-blue-400 rounded-full blur-xl'></div>
                <div className='absolute top-1/2 left-1/3 w-12 h-12 bg-purple-400 rounded-full blur-lg'></div>
            </div>
            
            <div className='max-w-7xl mx-auto px-8 py-16 relative z-10'>
                {/* Top Section: Logo, Links, and Socials */}
                <div className='flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-8'>
                    {/* Branding Section */}
                    <div className='w-full lg:w-2/5'>
                        <a href="/" className='logo-container inline-block group'>
                            <div className='flex items-center gap-3 mb-4'>
                                <div className='p-3 bg-gradient-to-r from-green-400 to-blue-500 rounded-xl shadow-lg group-hover:shadow-green-400/25 transition-all duration-500'>
                                    <FaKey className='text-white text-lg' />
                                </div>
                                <div className='logo font-bold text-3xl bg-gradient-to-r from-gray-200 to-green-200 bg-clip-text text-transparent'>
                                    <span className='text-gray-400'>&lt;</span>
                                    Pass
                                    <span className='text-green-400'>PX</span>
                                    <span className='text-gray-400'>/&gt;</span>
                                </div>
                            </div>
                        </a>
                        <p className='text-gray-400 mt-4 text-lg leading-relaxed'>
                            Your <span className='text-green-400 font-semibold'>secure</span> and{' '}
                            <span className='text-blue-400 font-semibold'>simple</span> password manager. 
                            Built with <FaHeart className='inline text-red-400 animate-pulse' /> for your digital safety.
                        </p>
                        
                        {/* Security Badge */}
                        <div className='flex items-center gap-3 mt-6 p-4 bg-gray-800/50 rounded-lg border border-gray-700 backdrop-blur-sm'>
                            <FaShieldAlt className='text-green-400 text-xl' />
                            <span className='text-sm text-gray-300'>End-to-End Encrypted • Zero-Knowledge Architecture</span>
                        </div>
                    </div>

                    {/* Links and Socials Container */}
                    <div className='w-full lg:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-8'>
                        {/* Quick Links Section */}
                        <div className='space-y-6'>
                            <h3 className='font-bold text-xl text-white bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent'>
                                Quick Links
                            </h3>
                            <ul className='space-y-4'>
                                {[
                                    { href: "/", label: "Home", icon: "🏠" },
                                    { href: "/features", label: "Features", icon: "⭐" },
                                    { href: "/pricing", label: "Pricing", icon: "💎" },
                                    { href: "/about", label: "About", icon: "👥" },
                                    { href: "/privacy", label: "Privacy Policy", icon: "🔒" },
                                    { href: "/support", label: "Support", icon: "💬" }
                                ].map((link) => (
                                    <li key={link.href}>
                                        <a 
                                            href={link.href} 
                                            className='group flex items-center gap-3 text-gray-400 hover:text-green-400 transition-all duration-300 hover:translate-x-2'
                                        >
                                            <span className='text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                                                {link.icon}
                                            </span>
                                            <span className='border-b border-transparent group-hover:border-green-400 transition-all duration-300'>
                                                {link.label}
                                            </span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Social Media & Contact Section */}
                        <div className='space-y-6'>
                            <h3 className='font-bold text-xl text-white bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent'>
                                Connect With Us
                            </h3>
                            
                            {/* Social Icons */}
                            <div className='flex items-center gap-4 mb-6'>
                                {[
                                    { icon: FaGithub, href: "#", label: "GitHub", color: "hover:text-purple-400" },
                                    { icon: FaXTwitter, href: "#", label: "X/Twitter", color: "hover:text-blue-400" },
                                    { icon: FaLinkedin, href: "#", label: "LinkedIn", color: "hover:text-indigo-400" }
                                ].map((social) => (
                                    <a 
                                        key={social.label}
                                        href={social.href} 
                                        aria-label={social.label}
                                        className={`p-4 bg-gray-800/50 rounded-xl border border-gray-700 text-gray-400 ${social.color} transform hover:scale-110 hover:shadow-lg backdrop-blur-sm transition-all duration-300 group`}
                                    >
                                        <social.icon size="1.5em" className='group-hover:animate-pulse' />
                                    </a>
                                ))}
                            </div>

                            {/* Newsletter Subscription */}
                            <div className='space-y-4'>
                                <h4 className='font-semibold text-gray-300'>Stay Updated</h4>
                                <div className='flex gap-2'>
                                    <input 
                                        type="email" 
                                        placeholder="Enter your email"
                                        className='flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent backdrop-blur-sm text-white placeholder-gray-500 transition-all duration-300'
                                    />
                                    <button className='px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-xl font-semibold hover:from-green-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-green-400/25'>
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section: Copyright */}
                <div className='border-t border-gray-700/50 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4'>
                    <p className='text-gray-500 text-sm flex items-center gap-2'>
                        &copy; {new Date().getFullYear()} Pass-PX. All Rights Reserved.
                        <span className='hidden md:inline'>•</span>
                        <span className='text-green-400 flex items-center gap-1'>
                            <FaHeart className='text-red-400 animate-pulse' /> Securing your digital life
                        </span>
                    </p>
                    
                    <div className='flex items-center gap-6 text-xs text-gray-500'>
                        <a href="/terms" className='hover:text-green-400 transition-colors duration-300'>Terms of Service</a>
                        <a href="/privacy" className='hover:text-green-400 transition-colors duration-300'>Privacy Policy</a>
                        <a href="/cookies" className='hover:text-green-400 transition-colors duration-300'>Cookie Policy</a>
                    </div>
                </div>
            </div>

            {/* Floating animation elements */}
            <div className='absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 opacity-30'></div>
        </footer>
    );
}

export default Footer;