import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaPhone, FaClock } from 'react-icons/fa';
import { IoSparkles } from 'react-icons/io5';

const Contact = () => {
    return (
        <>
            {/* Enhanced Background */}
            <div className="fixed inset-0 -z-10 h-full w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 animate-gradient"></div>

            {/* Animated background elements */}
            <div className="fixed inset-0 -z-10 overflow-hidden">
                <div className="absolute -top-40 -right-32 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            </div>

            <div className='min-h-screen text-white pb-20 relative'>
                {/* Page Header Section */}
                <header className='relative py-24 sm:py-32 text-center overflow-hidden'>
                    <div className='relative z-10 max-w-4xl mx-auto px-8'>
                        <div className="flex justify-center mb-6">
                            <div className="flex items-center gap-3 bg-slate-800/50 backdrop-blur-sm rounded-2xl px-6 py-3 border border-slate-700/50">
                                <IoSparkles className="text-cyan-400 text-xl" />
                                <span className="text-cyan-200 font-semibold">Get In Touch</span>
                            </div>
                        </div>
                        <h1 className='text-6xl md:text-7xl font-bold mb-6 cursor-pointer'>
                            <span className='bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg'>
                                Contact Us
                            </span>
                        </h1>
                        <p className='text-xl md:text-2xl text-cyan-200/80 mt-6'>
                            We'd love to hear from you. Whether you have a question, feedback, or just want to say hi, feel free to reach out.
                        </p>
                    </div>
                </header>

                {/* Contact Form and Info Section */}
                <section className='py-20'>
                    <div className='max-w-6xl mx-auto px-8 grid lg:grid-cols-2 gap-12 items-start'>
                        {/* Contact Form */}
                        <div className='group relative'>
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-3xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                            <div className='relative bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-slate-700/50'>
                                <h2 className='text-3xl font-bold text-white mb-8'>Send Us a Message</h2>
                                <form className='space-y-6'>
                                    <div className='grid md:grid-cols-2 gap-6'>
                                        <div>
                                            <label htmlFor="name" className='block text-lg font-medium text-slate-300 mb-2'>Full Name</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                className='w-full bg-slate-700/50 border border-slate-600/50 rounded-xl p-4 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent backdrop-blur-sm transition-all duration-300'
                                                placeholder="Enter your name"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className='block text-lg font-medium text-slate-300 mb-2'>Email Address</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                className='w-full bg-slate-700/50 border border-slate-600/50 rounded-xl p-4 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent backdrop-blur-sm transition-all duration-300'
                                                placeholder="Enter your email"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="subject" className='block text-lg font-medium text-slate-300 mb-2'>Subject</label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            className='w-full bg-slate-700/50 border border-slate-600/50 rounded-xl p-4 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent backdrop-blur-sm transition-all duration-300'
                                            placeholder="What's this about?"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="message" className='block text-lg font-medium text-slate-300 mb-2'>Message</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows="5"
                                            className='w-full bg-slate-700/50 border border-slate-600/50 rounded-xl p-4 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent backdrop-blur-sm transition-all duration-300 resize-none'
                                            placeholder="Tell us more..."
                                        ></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        className='group relative w-full px-8 py-4 font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3'
                                    >
                                        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                                        <span className="relative z-10 flex items-center gap-2">
                                            Send Message
                                            <FaPaperPlane className="text-lg" />
                                        </span>
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* Contact Information */}
                        <div className='space-y-8'>
                            <h2 className='text-3xl font-bold text-white mb-8'>Contact Information</h2>

                            {/* Contact Cards */}
                            {[
                                {
                                    icon: FaEnvelope,
                                    title: "Email Us",
                                    description: "Our support team is here to help",
                                    contact: "support@passop.com",
                                    gradient: "from-cyan-500 to-blue-600",
                                    delay: "100"
                                },
                                {
                                    icon: FaPhone,
                                    title: "Call Us",
                                    description: "Mon-Fri from 9am to 6pm",
                                    contact: "+1 (555) 123-4567",
                                    gradient: "from-purple-500 to-pink-600",
                                    delay: "200"
                                },
                                {
                                    icon: FaMapMarkerAlt,
                                    title: "Our Office",
                                    description: "Visit our headquarters",
                                    contact: "Connaught Place, New Delhi, 110001",
                                    gradient: "from-green-500 to-emerald-600",
                                    delay: "300"
                                },
                                {
                                    icon: FaClock,
                                    title: "Response Time",
                                    description: "We typically reply within",
                                    contact: "2-4 hours during business days",
                                    gradient: "from-yellow-500 to-orange-600",
                                    delay: "400"
                                }
                            ].map((item, index) => (
                                <div key={index} className='group relative'>
                                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${item.gradient} rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200`}></div>
                                    <div className='relative bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-transparent transition-all duration-500 transform hover:-translate-y-1 flex items-start gap-6'>
                                        <div className={`p-4 bg-gradient-to-r ${item.gradient} rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                            <item.icon className='text-white text-2xl' />
                                        </div>
                                        <div className='flex-1'>
                                            <h3 className='text-xl font-bold text-white mb-2'>{item.title}</h3>
                                            <p className='text-slate-400 mb-2'>{item.description}</p>
                                            <p className='text-cyan-400 font-semibold'>{item.contact}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Map/CTA Section */}
                <section className='py-20'>
                    <div className='max-w-4xl mx-auto px-8 text-center'>
                        <div className="relative">
                            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-30 animate-pulse"></div>
                            <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-12 border border-slate-700/50">
                                <h2 className='text-4xl font-bold text-white mb-6'>
                                    <span className='bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent'>
                                        Let's Build Something Secure Together
                                    </span>
                                </h2>
                                <p className='text-xl text-slate-300 mb-8'>
                                    Ready to take your digital security to the next level? We're here to help you every step of the way.
                                </p>
                                <button className='group relative px-8 py-4 font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105'>
                                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                                    <span className="relative z-10">Start Your Security Journey</span>
                                </button>
                            </div>
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

export default Contact;