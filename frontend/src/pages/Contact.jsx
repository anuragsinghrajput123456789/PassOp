import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className='bg-gray-950 text-white pb-20'>
            {/* Page Header Section */}
            <header className='relative bg-gray-900 py-24 sm:py-32 text-center overflow-hidden'>
                {/* Background Glowing Effect */}
                <div className='absolute inset-0 z-0 opacity-10'>
                    <div className='absolute top-1/4 right-1/4 w-80 h-80 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl animate-blob'></div>
                    <div className='absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-2000'></div>
                </div>
                <div className='relative z-10 max-w-4xl mx-auto px-8'>
                    <h1 className='text-5xl md:text-6xl font-extrabold animate-fade-in-up'>
                        Get In <span className='text-green-400'>Touch</span>
                    </h1>
                    <p className='text-xl text-gray-300 mt-6 animate-fade-in-up animation-delay-500'>
                        We’d love to hear from you. Whether you have a question, feedback, or just want to say hi, feel free to reach out.
                    </p>
                </div>
            </header>

            {/* Contact Form and Info Section */}
            <section className='py-20'>
                <div className='max-w-6xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-start'>
                    {/* Contact Form */}
                    <div className='bg-gray-900 p-8 sm:p-10 rounded-xl shadow-2xl border border-gray-700 animate-fade-in-up'>
                        <h2 className='text-4xl font-bold text-white mb-8'>Send Us a Message</h2>
                        <form action="#" method="POST" className='space-y-6'>
                            <div>
                                <label htmlFor="name" className='block text-lg font-medium text-gray-300'>Full Name</label>
                                <input type="text" id="name" name="name" className='mt-2 block w-full bg-gray-800 border-gray-600 rounded-md p-3 text-lg text-white focus:ring-green-500 focus:border-green-500 transition' />
                            </div>
                            <div>
                                <label htmlFor="email" className='block text-lg font-medium text-gray-300'>Email Address</label>
                                <input type="email" id="email" name="email" className='mt-2 block w-full bg-gray-800 border-gray-600 rounded-md p-3 text-lg text-white focus:ring-green-500 focus:border-green-500 transition' />
                            </div>
                            <div>
                                <label htmlFor="message" className='block text-lg font-medium text-gray-300'>Message</label>
                                <textarea id="message" name="message" rows="5" className='mt-2 block w-full bg-gray-800 border-gray-600 rounded-md p-3 text-lg text-white focus:ring-green-500 focus:border-green-500 transition'></textarea>
                            </div>
                            <div>
                                <button type="submit" className='w-full flex justify-center items-center gap-3 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg text-lg shadow-lg hover:shadow-green-glow transition-all duration-300'>
                                    Send Message <FaPaperPlane />
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className='space-y-8 animate-fade-in-up animation-delay-500'>
                        <h2 className='text-4xl font-bold text-white mb-8'>Contact Information</h2>
                        <div className='bg-gray-800 p-8 rounded-xl shadow-xl flex items-start gap-6 hover:border-green-500 border border-transparent transition-colors duration-300'>
                            <FaEnvelope className='text-green-400 text-4xl mt-1' />
                            <div>
                                <h3 className='text-2xl font-bold'>Email Us</h3>
                                <p className='text-gray-400 mt-1'>Our support team is here to help.</p>
                                <a href="mailto:support@pass-px.com" className='text-green-400 text-lg hover:underline'>support@pass-px.com</a>
                            </div>
                        </div>
                        <div className='bg-gray-800 p-8 rounded-xl shadow-xl flex items-start gap-6 hover:border-blue-500 border border-transparent transition-colors duration-300'>
                            <FaMapMarkerAlt className='text-blue-400 text-4xl mt-1' />
                            <div>
                                <h3 className='text-2xl font-bold'>Our Office</h3>
                                <p className='text-gray-400 mt-1'>Connaught Place, New Delhi, 110001, India</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;