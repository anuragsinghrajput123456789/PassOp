import React from 'react';
import { FaGithub, FaLinkedin, FaHeart, FaShieldAlt, FaRocket, FaCode } from "react-icons/fa";
import { FaXTwitter, FaKey } from "react-icons/fa6";
import { IoSparkles } from "react-icons/io5";

const Footer = () => {
    return (
        <>
            {/* Enhanced Background */}
            <div className="fixed inset-0 -z-10 h-full w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 animate-gradient"></div>

            {/* Animated background elements */}
            <div className="fixed inset-0 -z-10 overflow-hidden">
                <div className="absolute -top-40 -right-32 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            </div>

            <footer className='relative bg-slate-900/70 backdrop-blur-lg text-slate-300 overflow-hidden border-t border-slate-700/50'>
                {/* Background decorative elements */}
                <div className='absolute inset-0 opacity-10'>
                    <div className='absolute top-10 left-10 w-20 h-20 bg-cyan-400 rounded-full blur-xl'></div>
                    <div className='absolute bottom-10 right-10 w-16 h-16 bg-purple-400 rounded-full blur-xl'></div>
                    <div className='absolute top-1/2 left-1/3 w-12 h-12 bg-blue-400 rounded-full blur-lg'></div>
                </div>

                <div className='max-w-7xl mx-auto px-8 py-16 relative z-10'>
                    {/* Top Section: Logo, Links, and Socials */}
                    <div className='flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-8'>
                        {/* Branding Section */}
                        <div className='w-full lg:w-2/5'>
                            <a href="/" className='logo-container inline-block group mb-6'>
                                <div className='flex items-center gap-3'>
                                    <div className='relative'>
                                        <div className='absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200'></div>
                                        <div className='p-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl shadow-lg group-hover:shadow-cyan-400/25 transition-all duration-500 relative z-10'>
                                            <FaKey className='text-white text-lg' />
                                        </div>
                                    </div>
                                    <div className='logo font-bold text-3xl bg-gradient-to-r from-slate-200 to-cyan-200 bg-clip-text text-transparent'>
                                        <span className='text-slate-400'>&lt;</span>
                                        React
                                        <span className='text-cyan-400'>Key</span>
                                        <span className='text-slate-400'>/&gt;</span>
                                    </div>
                                </div>
                            </a>
                            <p className='text-slate-400 mt-4 text-lg leading-relaxed'>
                                Your <span className='text-cyan-400 font-semibold'>secure</span> and{' '}
                                <span className='text-purple-400 font-semibold'>simple</span> password manager.
                                Built with <FaHeart className='inline text-red-400 animate-pulse' /> for your digital safety.
                            </p>

                            {/* Security Badge */}
                            <div className='flex items-center gap-3 mt-6 p-4 bg-slate-800/50 rounded-lg border border-slate-700 backdrop-blur-sm max-w-md'>
                                <FaShieldAlt className='text-cyan-400 text-xl' />
                                <span className='text-sm text-slate-300'>End-to-End Encrypted • Zero-Knowledge Architecture</span>
                            </div>
                        </div>

                        {/* Links and Socials Container */}
                        <div className='w-full lg:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-8'>
                            {/* Quick Links Section */}
                            <div className='space-y-6'>
                                <h3 className='font-bold text-xl text-white bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent'>
                                    Quick Links
                                </h3>
                                <ul className='space-y-4'>
                                    {[
                                        { href: "/", label: "Home", icon: "🏠", gradient: "from-cyan-400 to-blue-500" },
                                        { href: "/features", label: "Features", icon: "⭐", gradient: "from-purple-400 to-pink-500" },
                                        { href: "/pricing", label: "Pricing", icon: "💎", gradient: "from-yellow-400 to-orange-500" },
                                        { href: "/about", label: "About", icon: "👥", gradient: "from-green-400 to-emerald-500" },
                                        { href: "/privacy", label: "Privacy Policy", icon: "🔒", gradient: "from-cyan-400 to-blue-500" },
                                        { href: "/support", label: "Support", icon: "💬", gradient: "from-purple-400 to-pink-500" }
                                    ].map((link) => (
                                        <li key={link.href}>
                                            <a
                                                href={link.href}
                                                className='group flex items-center gap-3 text-slate-400 hover:text-white transition-all duration-300 hover:translate-x-2 p-2 rounded-lg hover:bg-slate-800/30'
                                            >
                                                <div className={`p-2 bg-gradient-to-r ${link.gradient} rounded-lg shadow-md group-hover:scale-110 transition-transform duration-300`}>
                                                    <span className='text-white text-sm'>{link.icon}</span>
                                                </div>
                                                <span className='border-b border-transparent group-hover:border-cyan-400 transition-all duration-300 font-medium'>
                                                    {link.label}
                                                </span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Social Media & Contact Section */}
                            <div className='space-y-6'>
                                <h3 className='font-bold text-xl bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent'>
                                    Connect With Us
                                </h3>

                                {/* Social Icons */}
                                <div className='flex items-center gap-4 mb-6'>
                                    {[
                                        { icon: FaGithub, href: "/https://github.com/anuragsinghrajput123456789", label: "GitHub", color: "hover:text-cyan-400", gradient: "from-slate-600 to-cyan-600" },
                                        { icon: FaXTwitter, href: "/https://x.com/Anurags44798025", label: "X/Twitter", color: "hover:text-blue-400", gradient: "from-slate-600 to-blue-600" },
                                        { icon: FaLinkedin, href: "/https://www.linkedin.com/in/anurag-singh-09629b22a/", label: "LinkedIn", color: "hover:text-indigo-400", gradient: "from-slate-600 to-indigo-600" }
                                    ].map((social) => (
                                        <a
                                            key={social.label}
                                            href={social.href}
                                            aria-label={social.label}
                                            className={`group relative p-4 bg-slate-800/50 rounded-xl border border-slate-700 text-slate-400 ${social.color} transform hover:scale-110 hover:shadow-lg backdrop-blur-sm transition-all duration-300`}
                                        >
                                            <div className={`absolute inset-0 bg-gradient-to-r ${social.gradient} rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                                            <social.icon size="1.5em" className='relative z-10 group-hover:animate-pulse' />
                                        </a>
                                    ))}
                                </div>

                                {/* Newsletter Subscription */}
                                <div className='space-y-4'>
                                    <h4 className='font-semibold text-slate-300'>Stay Updated</h4>
                                    <div className='flex gap-2'>
                                        <input
                                            type="email"
                                            placeholder="Enter your email"
                                            className='flex-1 px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent backdrop-blur-sm text-white placeholder-slate-500 transition-all duration-300'
                                        />
                                        <button className='group relative px-6 py-3 font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105 flex items-center gap-2'>
                                            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                                            <span className="relative z-10 flex items-center gap-2">
                                                <IoSparkles className="text-lg" />
                                                Subscribe
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Section: Copyright */}
                    <div className='border-t border-slate-700/50 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4'>
                        <p className='text-slate-500 text-sm flex items-center gap-2 flex-wrap'>
                            &copy; {new Date().getFullYear()} React-Key. All Rights Reserved.
                            <span className='hidden md:inline'>•</span>
                            <span className='text-cyan-400 flex items-center gap-1'>
                                <FaHeart className='text-red-400 animate-pulse' /> Securing your digital life
                            </span>
                        </p>

                        <div className='flex items-center gap-6 text-xs text-slate-500'>
                            <a href="/terms" className='hover:text-cyan-400 transition-colors duration-300'>Terms of Service</a>
                            <a href="/privacy" className='hover:text-cyan-400 transition-colors duration-300'>Privacy Policy</a>
                            <a href="/cookies" className='hover:text-cyan-400 transition-colors duration-300'>Cookie Policy</a>
                        </div>
                    </div>
                </div>

                {/* Floating animation elements */}
                <div className='absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 opacity-30'></div>
            </footer>

            <style jsx>{`
                @keyframes gradient {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                .animate-gradient {
                    background-size: 400% 400%;
                    animation: gradient 15s ease infinite;
                }
            `}</style>
        </>
    );
}

export default Footer;