import React from 'react';
import { FaUserShield, FaLightbulb, FaHeart, FaBullseye } from 'react-icons/fa';

const About = () => {
    return (
        <div className='bg-gray-950 text-white pb-20'>
            {/* Page Header Section */}
            <header className='relative bg-gray-900 py-24 sm:py-32 text-center overflow-hidden'>
                {/* Background Glowing Effect */}
                <div className='absolute inset-0 z-0 opacity-10'>
                    <div className='absolute top-1/4 left-1/4 w-80 h-80 bg-green-500 rounded-full mix-blend-screen filter blur-3xl animate-blob'></div>
                    <div className='absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-2000'></div>
                </div>
                <div className='relative z-10 max-w-4xl mx-auto px-8'>
                    <h1 className='text-5xl md:text-6xl font-extrabold animate-fade-in-up'>
                        About <span className='text-green-400'>Pass-PX</span>
                    </h1>
                    <p className='text-xl text-gray-300 mt-6 animate-fade-in-up animation-delay-500'>
                        The story behind our commitment to your digital security.
                    </p>
                </div>
            </header>

            {/* Our Mission Section */}
            <section className='py-20'>
                <div className='max-w-5xl mx-auto px-8 grid md:grid-cols-2 gap-12 items-center'>
                    <div className='animate-fade-in-up'>
                        <FaBullseye className='text-green-400 text-7xl mb-6' />
                        <h2 className='text-4xl font-extrabold text-white mb-6'>Our Mission</h2>
                        <p className='text-lg text-gray-300 leading-relaxed'>
                            In a world where digital threats are ever-present, our mission is to provide a password management solution that is not only impenetrably secure but also incredibly intuitive. We believe that everyone deserves peace of mind online, and Pass-PX is our way of making that a reality. We're dedicated to simplifying digital security for everyone, from tech experts to casual internet users.
                        </p>
                    </div>
                    <div className='flex justify-center items-center animate-scale-in'>
                        {/* Placeholder for an image or an abstract graphic */}
                        <div className='w-80 h-80 bg-gray-800 rounded-full flex items-center justify-center border-4 border-green-500 shadow-lg shadow-green-500/30'>
                           <FaUserShield className='text-9xl text-green-400 opacity-80' />
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Values Section */}
            <section className='py-20 bg-gray-900'>
                <div className='max-w-6xl mx-auto px-8 text-center'>
                    <h2 className='text-5xl font-extrabold text-white mb-16 relative'>
                        Our Core Values
                        <span className='absolute left-1/2 -translate-x-1/2 bottom-[-10px] w-24 h-1 bg-green-500 rounded-full'></span>
                    </h2>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
                        {/* Value Card 1 */}
                        <div className='bg-gray-800 p-8 rounded-xl shadow-xl hover:shadow-green-500/50 hover:-translate-y-2 border border-transparent hover:border-green-500 transition-all duration-300 group'>
                            <FaUserShield className='text-green-400 text-5xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300' />
                            <h3 className='text-3xl font-bold mb-4'>Security First</h3>
                            <p className='text-gray-400 text-lg'>
                                Your security is non-negotiable. We employ state-of-the-art encryption and best practices to protect your data.
                            </p>
                        </div>
                        {/* Value Card 2 */}
                        <div className='bg-gray-800 p-8 rounded-xl shadow-xl hover:shadow-blue-500/50 hover:-translate-y-2 border border-transparent hover:border-blue-500 transition-all duration-300 group'>
                            <FaLightbulb className='text-blue-400 text-5xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300' />
                            <h3 className='text-3xl font-bold mb-4'>Radical Simplicity</h3>
                            <p className='text-gray-400 text-lg'>
                                Powerful tools should be easy to use. We design our interfaces to be clean, intuitive, and accessible to all.
                            </p>
                        </div>
                        {/* Value Card 3 */}
                        <div className='bg-gray-800 p-8 rounded-xl shadow-xl hover:shadow-purple-500/50 hover:-translate-y-2 border border-transparent hover:border-purple-500 transition-all duration-300 group'>
                            <FaHeart className='text-purple-400 text-5xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300' />
                            <h3 className='text-3xl font-bold mb-4'>User-Centric</h3>
                            <p className='text-gray-400 text-lg'>
                                We listen to our users. Your feedback drives our innovation and helps us build a better, safer product for everyone.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;