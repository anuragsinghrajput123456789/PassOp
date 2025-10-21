import React, { useState, useEffect } from 'react';
import {
    FaShieldAlt,
    FaLock,
    FaSyncAlt,
    FaRocket,
    FaStar,
    FaKey,
    FaCheck,
    FaUsers,
    FaCrown,
    FaUserShield,
    FaSearch,
    FaCopy,
    FaEye,
    FaMobileAlt,
    FaCloud,
    FaInfinity
} from 'react-icons/fa';
import { IoSparkles } from 'react-icons/io5';
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
            title: "Military-Grade Security",
            description: "Your passwords are encrypted with AES-256 encryption. No cloud storage, no third-party access.",
            gradient: "from-cyan-500 to-blue-600",
            bgGradient: "from-cyan-500/10 to-blue-600/10",
            highlights: ["Local Storage", "AES-256 Encryption", "Zero Knowledge"],
            delay: "100"
        },
        {
            icon: FaLock,
            title: "One-Click Password Generation",
            description: "Create ultra-strong, unique passwords with our advanced generator. Never reuse passwords again.",
            gradient: "from-green-500 to-emerald-600",
            bgGradient: "from-green-500/10 to-emerald-600/10",
            highlights: ["12+ Characters", "Multiple Character Sets", "Instant Generation"],
            delay: "200"
        },
        {
            icon: FaUserShield,
            title: "Secure Auto-Fill",
            description: "Quickly copy usernames and passwords with our secure clipboard system. No risky browser extensions.",
            gradient: "from-purple-500 to-pink-600",
            bgGradient: "from-purple-500/10 to-pink-600/10",
            highlights: ["Secure Copy", "Auto-Clear Clipboard", "One-Click Access"],
            delay: "300"
        },
        {
            icon: FaSyncAlt,
            title: "Cross-Platform Sync",
            description: "Seamlessly access your passwords across all devices with encrypted synchronization.",
            gradient: "from-blue-500 to-cyan-600",
            bgGradient: "from-blue-500/10 to-cyan-600/10",
            highlights: ["Real-time Sync", "Multiple Devices", "Encrypted Transfer"],
            delay: "400"
        },
        {
            icon: FaSearch,
            title: "Smart Search & Organize",
            description: "Find your credentials instantly with powerful search. Organize by site, username, or tags.",
            gradient: "from-orange-500 to-red-600",
            bgGradient: "from-orange-500/10 to-red-600/10",
            highlights: ["Instant Search", "Smart Filtering", "Quick Navigation"],
            delay: "500"
        },
        {
            icon: FaMobileAlt,
            title: "Responsive Design",
            description: "Access your passwords securely from any device. Beautifully designed for all screens.",
            gradient: "from-indigo-500 to-purple-600",
            bgGradient: "from-indigo-500/10 to-purple-600/10",
            highlights: ["Mobile Optimized", "Touch Friendly", "Cross-Device"],
            delay: "600"
        }
    ];

    const testimonials = [
        {
            name: "Sarah Chen",
            role: "Security Analyst",
            text: "The zero-knowledge architecture gives me complete peace of mind. The interface is beautiful and incredibly intuitive.",
            rating: 5,
            avatar: "SC"
        },
        {
            name: "Marcus Rodriguez",
            role: "Tech Entrepreneur",
            text: "Switching to our platform streamlined our company's security. The team sharing features are game-changing.",
            rating: 5,
            avatar: "MR"
        },
        {
            name: "Emily Thompson",
            role: "Digital Nomad",
            text: "As someone who travels constantly, the cross-platform sync has been a lifesaver. My passwords are always with me.",
            rating: 5,
            avatar: "ET"
        }
    ];

    const stats = [
        { number: "256-bit", label: "Encryption" },
        { number: "Zero", label: "Cloud Storage" },
        { number: "∞", label: "Passwords" },
        { number: "100%", label: "Local & Secure" }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
            {/* Animated Background Elements */}
            <div className="fixed inset-0 -z-10 overflow-hidden">
                <div className="absolute -top-40 -right-32 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
                <div className="absolute top-40 left-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>

                {/* Grid Pattern Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
            </div>

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                <div className={`relative z-10 p-8 max-w-6xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

                    {/* Trust Badge */}
                    <div className="flex justify-center mb-8">
                        <div className="inline-flex items-center gap-3 bg-slate-800/50 backdrop-blur-sm rounded-2xl px-6 py-3 border border-slate-700/50 animate-fade-in">
                            <IoSparkles className="text-cyan-400 text-xl" />
                            <span className="text-cyan-200 font-semibold">Trusted by 50,000+ users worldwide</span>
                        </div>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 cursor-pointer">
                        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg animate-gradient">
                            Secure Your
                        </span>
                        <br />
                        <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-lg">
                            Digital Life
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-xl md:text-2xl text-cyan-200/80 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-300">
                        The most secure and intuitive password manager. Generate, store, and manage your passwords with
                        <span className="text-cyan-400 font-semibold"> military-grade encryption</span> and
                        <span className="text-blue-400 font-semibold"> seamless synchronization</span>.
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12 animate-fade-in-up animation-delay-400">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="group relative bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-500 hover:scale-105"
                            >
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
                                <div className="relative">
                                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
                                        {stat.number}
                                    </div>
                                    <div className="text-slate-300 font-medium">{stat.label}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up animation-delay-500">
                        <button
                            onClick={goToManage}
                            className="group relative px-8 py-4 font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105"
                        >
                            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                            <span className="relative z-10 flex items-center gap-3">
                                Get Started Free
                                <FaRocket className="group-hover:translate-x-1 transition-transform duration-300" />
                            </span>
                        </button>

                        <button className="group px-8 py-4 border border-slate-600 rounded-2xl text-slate-300 hover:text-white hover:border-slate-400 transition-all duration-300 backdrop-blur-sm">
                            <span className="flex items-center gap-3">
                                <FaStar className="text-yellow-400 group-hover:rotate-180 transition-transform duration-500" />
                                Watch Demo
                            </span>
                        </button>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="relative py-24 overflow-hidden">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl md:text-6xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                            Why Choose Our Platform?
                        </h2>
                        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                            Built with cutting-edge technology and user experience in mind
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={feature.title}
                                className="group relative h-full animate-fade-in-up"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                {/* Gradient Border Effect */}
                                <div className={`absolute -inset-0.5 bg-gradient-to-r ${feature.gradient} rounded-3xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200`}></div>

                                {/* Feature Card */}
                                <div className="relative h-full bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50 hover:border-slate-600/70 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10">
                                    {/* Icon */}
                                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.gradient} text-white shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                        <feature.icon className="text-white text-2xl" />
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-2xl font-bold text-white mb-4">
                                        {feature.title}
                                    </h3>

                                    <p className="text-slate-300 leading-relaxed mb-6">
                                        {feature.description}
                                    </p>

                                    {/* Highlights */}
                                    <div className="space-y-2">
                                        {feature.highlights.map((highlight, idx) => (
                                            <div key={idx} className="flex items-center text-slate-400 group-hover:text-slate-300 transition-colors">
                                                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${feature.gradient} mr-3`}></div>
                                                <span className="text-sm font-medium">{highlight}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Hover Effect Background */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="relative py-24 bg-gradient-to-br from-slate-800/50 to-slate-900/50">
                <div className="max-w-6xl mx-auto px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl md:text-6xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-cyan-400">
                            Trusted by Thousands
                        </h2>
                        <p className="text-xl text-slate-400">Join our community of security-conscious users</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={testimonial.name}
                                className="group relative bg-slate-800/30 backdrop-blur-sm p-8 rounded-3xl border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up"
                                style={{ animationDelay: `${index * 200}ms` }}
                            >
                                {/* Rating Stars */}
                                <div className="flex mb-6">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <FaStar key={i} className="text-yellow-400 text-lg" />
                                    ))}
                                </div>

                                {/* Testimonial Text */}
                                <p className="text-slate-300 text-lg italic mb-6 leading-relaxed">
                                    "{testimonial.text}"
                                </p>

                                {/* User Info */}
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center text-white font-bold">
                                        {testimonial.avatar}
                                    </div>
                                    <div>
                                        <p className="font-bold text-white">{testimonial.name}</p>
                                        <p className="text-cyan-400 text-sm">{testimonial.role}</p>
                                    </div>
                                </div>

                                {/* Hover Gradient Effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="relative py-24 overflow-hidden">
                <div className="max-w-4xl mx-auto px-8 text-center">
                    <div className="relative">
                        {/* Animated background for CTA */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-30 animate-pulse"></div>

                        <div className="relative bg-slate-800/80 backdrop-blur-sm rounded-2xl p-12 border border-slate-700/50">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                                    Ready to Secure Your Digital Life?
                                </span>
                            </h2>

                            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                                Join thousands of users who trust our platform with their digital security.
                                Start your journey to password peace today.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <button
                                    onClick={goToManage}
                                    className="group relative px-8 py-4 font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105"
                                >
                                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                                    <span className="relative z-10 flex items-center gap-3">
                                        Start Free Trial
                                        <FaRocket className="group-hover:translate-x-2 transition-transform duration-300" />
                                    </span>
                                </button>
                            </div>

                            {/* Guarantee Badge */}
                            <div className="mt-8 inline-flex items-center gap-2 text-slate-400">
                                <FaShieldAlt className="text-cyan-400" />
                                <span>30-day money-back guarantee • No credit card required</span>
                            </div>
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
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                .animate-float {
                    animation: float 10s ease-in-out infinite;
                }
                .animate-gradient {
                    background-size: 200% 200%;
                    animation: gradient 6s ease infinite;
                }
                .animate-fade-in-up {
                    animation: fadeInUp 0.8s ease-out forwards;
                }
                .animate-fade-in {
                    animation: fadeIn 0.8s ease-out forwards;
                }
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
                .animation-delay-300 {
                    animation-delay: 0.3s;
                }
                .animation-delay-400 {
                    animation-delay: 0.4s;
                }
                .animation-delay-500 {
                    animation-delay: 0.5s;
                }
            `}</style>
        </div>
    );
};

export default HomePage;