
import React from 'react';
import { FaUserShield, FaLightbulb, FaHeart, FaBullseye, FaRocket, FaShieldAlt } from 'react-icons/fa';
import { IoSparkles } from 'react-icons/io5';

const About = () => {
    return (
        <>
            {/* Enhanced Background */}
            <div className="fixed inset-0 -z-10 h-full w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 animate-gradient"></div>
            
            {/* Animated background elements */}
            <div className="fixed inset-0 -z-10 overflow-hidden">
                <div className="absolute -top-40 -right-32 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
                <div className="absolute top-40 left-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
            </div>

            <div className='min-h-screen text-white pb-20 relative'>
                {/* Page Header Section */}
                <header className='relative py-24 sm:py-32 text-center overflow-hidden'>
                    <div className='relative z-10 max-w-4xl mx-auto px-8'>
                        <div className="flex justify-center mb-6">
                            <div className="flex items-center gap-3 bg-slate-800/50 backdrop-blur-sm rounded-2xl px-6 py-3 border border-slate-700/50">
                                <IoSparkles className="text-cyan-400 text-xl" />
                                <span className="text-cyan-200 font-semibold">Our Story</span>
                            </div>
                        </div>
                        <h1 className='text-6xl md:text-7xl font-bold mb-6 cursor-pointer'>
                            <span className='bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg'>
                                About PassOP
                            </span>
                        </h1>
                        <p className='text-xl md:text-2xl text-cyan-200/80 mt-6'>
                            The story behind our commitment to your digital security.
                        </p>
                    </div>
                </header>

                {/* Our Mission Section */}
                <section className='py-20'>
                    <div className='max-w-6xl mx-auto px-8 grid md:grid-cols-2 gap-12 items-center'>
                        <div className='space-y-6'>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl shadow-lg">
                                    <FaBullseye className='text-white text-3xl' />
                                </div>
                                <h2 className='text-4xl md:text-5xl font-bold text-white'>Our Mission</h2>
                            </div>
                            <p className='text-lg text-slate-300 leading-relaxed'>
                                In a world where digital threats are ever-present, our mission is to provide a password management solution that is not only impenetrably secure but also incredibly intuitive. We believe that everyone deserves peace of mind online, and PassOP is our way of making that a reality.
                            </p>
                            <p className='text-lg text-slate-300 leading-relaxed'>
                                We're dedicated to simplifying digital security for everyone, from tech experts to casual internet users. Your security shouldn't be complicated—it should be seamless.
                            </p>
                            <div className="flex items-center gap-4 mt-8">
                                <div className="flex items-center gap-2 text-cyan-400">
                                    <FaShieldAlt className="text-lg" />
                                    <span className="font-semibold">Zero-Knowledge Architecture</span>
                                </div>
                                <div className="w-1 h-1 bg-slate-600 rounded-full"></div>
                                <div className="flex items-center gap-2 text-purple-400">
                                    <FaRocket className="text-lg" />
                                    <span className="font-semibold">Lightning Fast</span>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center items-center'>
                            <div className="relative group">
                                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-3xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                                <div className='relative w-80 h-80 bg-slate-800/50 backdrop-blur-sm rounded-3xl flex items-center justify-center border border-slate-700/50 shadow-2xl group-hover:shadow-cyan-500/25 transition-all duration-500'>
                                    <FaUserShield className='text-8xl text-cyan-400 opacity-80 group-hover:scale-110 transition-transform duration-500' />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our Values Section */}
                <section className='py-20'>
                    <div className='max-w-6xl mx-auto px-8 text-center'>
                        <h2 className='text-5xl font-bold text-white mb-16 relative'>
                            <span className='bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent'>
                                Our Core Values
                            </span>
                            <span className='absolute left-1/2 -translate-x-1/2 bottom-[-10px] w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full'></span>
                        </h2>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                            {/* Value Card 1 */}
                            <div className='group relative h-full'>
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                                <div className='relative h-full bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-slate-700/50 hover:border-transparent transition-all duration-500 transform hover:-translate-y-2'>
                                    <FaUserShield className='text-cyan-400 text-5xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300' />
                                    <h3 className='text-2xl font-bold mb-4 text-white'>Security First</h3>
                                    <p className='text-slate-400 text-lg leading-relaxed'>
                                        Your security is non-negotiable. We employ state-of-the-art encryption and best practices to protect your data.
                                    </p>
                                </div>
                            </div>
                            
                            {/* Value Card 2 */}
                            <div className='group relative h-full'>
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-600 rounded-3xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                                <div className='relative h-full bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-slate-700/50 hover:border-transparent transition-all duration-500 transform hover:-translate-y-2'>
                                    <FaLightbulb className='text-purple-400 text-5xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300' />
                                    <h3 className='text-2xl font-bold mb-4 text-white'>Radical Simplicity</h3>
                                    <p className='text-slate-400 text-lg leading-relaxed'>
                                        Powerful tools should be easy to use. We design our interfaces to be clean, intuitive, and accessible to all.
                                    </p>
                                </div>
                            </div>
                            
                            {/* Value Card 3 */}
                            <div className='group relative h-full'>
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                                <div className='relative h-full bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-slate-700/50 hover:border-transparent transition-all duration-500 transform hover:-translate-y-2'>
                                    <FaHeart className='text-green-400 text-5xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300' />
                                    <h3 className='text-2xl font-bold mb-4 text-white'>User-Centric</h3>
                                    <p className='text-slate-400 text-lg leading-relaxed'>
                                        We listen to our users. Your feedback drives our innovation and helps us build a better, safer product for everyone.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className='py-20'>
                    <div className='max-w-4xl mx-auto px-8 text-center'>
                        <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
                            {[
                                { number: '50K+', label: 'Active Users' },
                                { number: '99.9%', label: 'Uptime' },
                                { number: '256-bit', label: 'Encryption' },
                                { number: '24/7', label: 'Support' }
                            ].map((stat, index) => (
                                <div key={index} className='text-center group'>
                                    <div className='text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300'>
                                        {stat.number}
                                    </div>
                                    <div className='text-slate-400 font-medium'>{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>

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
};

export default About;