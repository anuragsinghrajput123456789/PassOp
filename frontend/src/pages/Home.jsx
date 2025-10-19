import React, { useState, useEffect } from 'react';
import { FaLock, FaSyncAlt, FaShieldAlt, FaRocket, FaStar, FaKey, FaCheck, FaUsers, FaCrown } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const goToManage = () => {
        navigate("/manager");
    };

    const features = [
        {
            icon: FaShieldAlt,
            title: "Military-Grade Encryption",
            description: "AES-256 encryption keeps your data secure with zero-knowledge architecture",
            color: "from-green-400 to-emerald-500",
            bgColor: "hover:shadow-green-500/30",
            delay: "100"
        },
        {
            icon: FaSyncAlt,
            title: "Cross-Platform Sync",
            description: "Seamlessly access your passwords across all devices in real-time",
            color: "from-blue-400 to-cyan-500",
            bgColor: "hover:shadow-blue-500/30",
            delay: "200"
        },
        {
            icon: FaKey,
            title: "Smart Password Generator",
            description: "Create strong, unique passwords with customizable criteria",
            color: "from-purple-400 to-indigo-500",
            bgColor: "hover:shadow-purple-500/30",
            delay: "300"
        },
        {
            icon: FaLock,
            title: "Secure Auto-Fill",
            description: "One-click login with encrypted auto-fill for all your apps and sites",
            color: "from-orange-400 to-red-500",
            bgColor: "hover:shadow-orange-500/30",
            delay: "400"
        },
        {
            icon: FaUsers,
            title: "Family Sharing",
            description: "Securely share passwords with family members while maintaining control",
            color: "from-pink-400 to-rose-500",
            bgColor: "hover:shadow-pink-500/30",
            delay: "500"
        },
        {
            icon: FaCrown,
            title: "Priority Support",
            description: "24/7 premium support and regular security audits",
            color: "from-yellow-400 to-amber-500",
            bgColor: "hover:shadow-yellow-500/30",
            delay: "600"
        }
    ];

    const testimonials = [
        {
            name: "Sarah Chen",
            role: "Security Analyst",
            text: "Pass-OP's zero-knowledge architecture gives me complete peace of mind. The interface is beautiful and incredibly intuitive.",
            rating: 5
        },
        {
            name: "Marcus Rodriguez",
            role: "Tech Entrepreneur",
            text: "Switching to Pass-OP streamlined our company's security. The team sharing features are game-changing.",
            rating: 5
        },
        {
            name: "Emily Thompson",
            role: "Digital Nomad",
            text: "As someone who travels constantly, the cross-platform sync has been a lifesaver. My passwords are always with me.",
            rating: 5
        }
    ];

    return (
        <div className='bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white min-h-screen overflow-hidden'>
            {/* Hero Section */}
            <section className='relative min-h-screen flex items-center justify-center overflow-hidden'>
                {/* Animated Background */}
                <div className='absolute inset-0 z-0'>
                    <div className='absolute top-20 left-10 w-72 h-72 bg-green-500/20 rounded-full blur-3xl animate-float'></div>
                    <div className='absolute top-40 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float animation-delay-2000'></div>
                    <div className='absolute bottom-20 left-1/3 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-float animation-delay-4000'></div>
                    
                    {/* Grid Pattern */}
                    <div className='absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]'></div>
                </div>

                <div className={`relative z-10 p-8 max-w-6xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    {/* Trust Badge */}
                    <div className='inline-flex items-center gap-2 px-6 py-3 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700/50 mb-8 animate-fade-in'>
                        <FaShieldAlt className='text-green-400 text-lg' />
                        <span className='text-gray-300 font-medium'>Trusted by 50,000+ users worldwide</span>
                    </div>

                    <h1 className='text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-8 animate-fade-in-up'>
                        <span className='bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 animate-gradient'>
                            Secure Your
                        </span>
                        <br />
                        <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400'>
                            Digital Life
                        </span>
                    </h1>
                    
                    <p className='text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-300'>
                        The most secure and intuitive password manager. Generate, store, and manage your passwords with 
                        <span className='text-green-400 font-semibold'> military-grade encryption</span> and 
                        <span className='text-blue-400 font-semibold'> seamless synchronization</span>.
                    </p>

                    <div className='flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up animation-delay-500'>
                        <button 
                            onClick={goToManage}
                            className='group relative bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold py-4 px-12 rounded-2xl text-lg shadow-2xl hover:shadow-green-400/25 transition-all duration-500 transform hover:scale-105 hover:from-green-600 hover:to-blue-600'
                        >
                            <span className='relative z-10 flex items-center gap-3'>
                                Get Started Free
                                <FaRocket className='group-hover:translate-x-1 transition-transform duration-300' />
                            </span>
                            <div className='absolute inset-0 rounded-2xl bg-gradient-to-r from-green-400 to-blue-400 opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500 -z-10'></div>
                        </button>
                        
                        <button className='group px-8 py-4 border border-gray-600 rounded-2xl text-gray-300 hover:text-white hover:border-gray-400 transition-all duration-300 backdrop-blur-sm'>
                            <span className='flex items-center gap-3'>
                                <FaStar className='text-yellow-400 group-hover:rotate-180 transition-transform duration-500' />
                                Watch Demo
                            </span>
                        </button>
                    </div>

                    {/* Feature Highlights */}
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto animate-fade-in-up animation-delay-700'>
                        {['Zero-Knowledge', 'AES-256', 'Multi-Device', '24/7 Support'].map((feature) => (
                            <div key={feature} className='text-center group'>
                                <div className='w-3 h-3 bg-green-400 rounded-full mx-auto mb-2 group-hover:scale-150 transition-transform duration-300'></div>
                                <p className='text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300'>{feature}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className='relative py-24 overflow-hidden'>
                <div className='max-w-7xl mx-auto px-8'>
                    <div className='text-center mb-20'>
                        <h2 className='text-5xl md:text-6xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400'>
                            Why Choose Pass-OP?
                        </h2>
                        <p className='text-xl text-gray-400 max-w-2xl mx-auto'>
                            Built with cutting-edge technology and user experience in mind
                        </p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {features.map((feature) => (
                            <div 
                                key={feature.title}
                                className={`group relative bg-gray-800/30 backdrop-blur-sm p-8 rounded-3xl border border-gray-700/50 hover:border-transparent transition-all duration-500 transform hover:-translate-y-2 ${feature.bgColor} animate-fade-in-up animation-delay-${feature.delay}`}
                            >
                                {/* Gradient Border Effect */}
                                <div className='absolute inset-0 rounded-3xl bg-gradient-to-r from-green-400/10 via-blue-400/10 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10'></div>
                                
                                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <feature.icon className='text-white text-2xl' />
                                </div>
                                
                                <h3 className='text-2xl font-bold mb-4 text-white'>{feature.title}</h3>
                                <p className='text-gray-400 text-lg leading-relaxed'>{feature.description}</p>
                                
                                <div className='absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                                    <FaCheck className='text-green-400 text-xl' />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className='relative py-24 bg-gradient-to-br from-gray-900/50 to-gray-800/50'>
                <div className='max-w-6xl mx-auto px-8'>
                    <div className='text-center mb-16'>
                        <h2 className='text-5xl md:text-6xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-400'>
                            Trusted by Thousands
                        </h2>
                        <p className='text-xl text-gray-400'>Join our community of security-conscious users</p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                        {testimonials.map((testimonial, index) => (
                            <div 
                                key={testimonial.name}
                                className='group bg-gray-800/30 backdrop-blur-sm p-8 rounded-3xl border border-gray-700/50 hover:border-blue-400/50 transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up'
                                style={{ animationDelay: `${index * 200}ms` }}
                            >
                                <div className='flex mb-6'>
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <FaStar key={i} className='text-yellow-400 text-lg' />
                                    ))}
                                </div>
                                
                                <p className='text-gray-300 text-lg italic mb-6 leading-relaxed'>
                                    "{testimonial.text}"
                                </p>
                                
                                <div className='flex items-center gap-4'>
                                    <div className='w-12 h-12 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center text-white font-bold'>
                                        {testimonial.name.charAt(0)}
                                    </div>
                                    <div>
                                        <p className='font-bold text-white'>{testimonial.name}</p>
                                        <p className='text-green-400 text-sm'>{testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className='relative py-24 overflow-hidden'>
                <div className='max-w-4xl mx-auto px-8 text-center'>
                    <div className='relative z-10'>
                        <h2 className='text-5xl md:text-6xl font-black mb-8 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-400'>
                            Ready to Secure Your Digital Life?
                        </h2>
                        
                        <p className='text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed'>
                            Join thousands of users who trust Pass-OP with their digital security. 
                            Start your journey to password peace today.
                        </p>

                        <div className='flex flex-col sm:flex-row gap-6 justify-center items-center'>
                            <button 
                                onClick={goToManage}
                                className='group relative bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold py-5 px-16 rounded-2xl text-xl shadow-2xl hover:shadow-green-400/25 transition-all duration-500 transform hover:scale-105'
                            >
                                <span className='relative z-10 flex items-center gap-3'>
                                    Start Free Trial
                                    <FaRocket className='group-hover:translate-x-2 transition-transform duration-300' />
                                </span>
                                <div className='absolute inset-0 rounded-2xl bg-gradient-to-r from-green-400 to-blue-400 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10'></div>
                            </button>
                        </div>

                        {/* Guarantee Badge */}
                        <div className='mt-8 inline-flex items-center gap-2 text-gray-400'>
                            <FaShieldAlt className='text-green-400' />
                            <span>30-day money-back guarantee • No credit card required</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Custom Animations */}
            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(180deg); }
                }
                @keyframes gradient {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                .animate-float {
                    animation: float 10s ease-in-out infinite;
                }
                .animate-gradient {
                    background-size: 200% 200%;
                    animation: gradient 6s ease infinite;
                }
            `}</style>
        </div>
    );
};

export default HomePage;