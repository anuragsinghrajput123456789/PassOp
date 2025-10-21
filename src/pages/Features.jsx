import React from 'react';
import {
    FaShieldAlt,
    FaLock,
    FaUserShield,
    FaSync,
    FaSearch,
    FaCopy,
    FaEye,
    FaMobileAlt,
    FaCloud,
    FaRocket,
    FaPalette,
    FaInfinity
} from 'react-icons/fa';
import { IoSparkles } from 'react-icons/io5';

const Features = () => {
    const features = [
        {
            icon: <FaShieldAlt className="text-3xl" />,
            title: "Military-Grade Security",
            description: "Your passwords are encrypted and stored locally with advanced AES-256 encryption. No cloud storage, no third-party access.",
            gradient: "from-cyan-500 to-blue-600",
            bgGradient: "from-cyan-500/10 to-blue-600/10",
            highlights: ["Local Storage", "AES-256 Encryption", "Zero Knowledge"]
        },
        {
            icon: <FaLock className="text-3xl" />,
            title: "One-Click Password Generation",
            description: "Create ultra-strong, unique passwords with our advanced generator. Never reuse passwords again.",
            gradient: "from-green-500 to-emerald-600",
            bgGradient: "from-green-500/10 to-emerald-600/10",
            highlights: ["12+ Characters", "Multiple Character Sets", "Instant Generation"]
        },
        {
            icon: <FaUserShield className="text-3xl" />,
            title: "Secure Auto-Fill",
            description: "Quickly copy usernames and passwords with our secure clipboard system. No risky browser extensions needed.",
            gradient: "from-purple-500 to-pink-600",
            bgGradient: "from-purple-500/10 to-pink-600/10",
            highlights: ["Secure Copy", "Auto-Clear Clipboard", "One-Click Access"]
        },
        {
            icon: <FaSearch className="text-3xl" />,
            title: "Smart Search & Organize",
            description: "Find your credentials instantly with our powerful search. Organize by site, username, or custom tags.",
            gradient: "from-orange-500 to-red-600",
            bgGradient: "from-orange-500/10 to-red-600/10",
            highlights: ["Instant Search", "Smart Filtering", "Quick Navigation"]
        },
        {
            icon: <FaSync className="text-3xl" />,
            title: "Easy Import/Export",
            description: "Securely backup and restore your password vault. Migrate from other managers with ease.",
            gradient: "from-yellow-500 to-amber-600",
            bgGradient: "from-yellow-500/10 to-amber-600/10",
            highlights: ["JSON Export", "Encrypted Backup", "Cross-Platform"]
        },
        {
            icon: <FaMobileAlt className="text-3xl" />,
            title: "Responsive Design",
            description: "Access your passwords securely from any device. Beautifully designed for desktop, tablet, and mobile.",
            gradient: "from-indigo-500 to-purple-600",
            bgGradient: "from-indigo-500/10 to-purple-600/10",
            highlights: ["Mobile Optimized", "Touch Friendly", "Cross-Device Sync"]
        }
    ];

    const stats = [
        { number: "256-bit", label: "Encryption" },
        { number: "Zero", label: "Cloud Storage" },
        { number: "∞", label: "Passwords" },
        { number: "100%", label: "Local & Secure" }
    ];

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

            <div className="min-h-screen text-white">
                {/* Hero Section */}
                <div className="relative overflow-hidden">
                    <div className="container mx-auto px-6 py-24 text-center">
                        <div className="flex justify-center mb-6">
                            <div className="flex items-center gap-3 bg-slate-800/50 backdrop-blur-sm rounded-2xl px-6 py-3 border border-slate-700/50">
                                <IoSparkles className="text-cyan-400 text-xl" />
                                <span className="text-cyan-200 font-semibold">Why Choose PassOP?</span>
                            </div>
                        </div>

                        <h1 className="text-6xl md:text-7xl font-bold mb-6 cursor-pointer">
                            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
                                Powerful Features
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl text-cyan-200/80 max-w-3xl mx-auto mb-12 leading-relaxed">
                            Everything you need to manage your digital life securely.
                            <span className="text-white font-semibold"> No compromises.</span>
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-20">
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
                    </div>
                </div>

                {/* Features Grid */}
                <div className="container mx-auto px-6 pb-24">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="group relative h-full"
                            >
                                {/* Gradient Border Effect */}
                                <div className={`absolute -inset-0.5 bg-gradient-to-r ${feature.gradient} rounded-3xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200`}></div>

                                {/* Feature Card */}
                                <div className="relative h-full bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50 hover:border-slate-600/70 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10">

                                    {/* Icon */}
                                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.gradient} text-white shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                        {feature.icon}
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

                {/* CTA Section */}
                <div className="relative overflow-hidden">
                    <div className="container mx-auto px-6 py-20 text-center">
                        <div className="max-w-4xl mx-auto">
                            <div className="relative">
                                {/* Animated background for CTA */}
                                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-30 animate-pulse"></div>

                                <div className="relative bg-slate-800/80 backdrop-blur-sm rounded-2xl p-12 border border-slate-700/50">
                                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                        <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                                            Ready to Secure Your Digital Life?
                                        </span>
                                    </h2>

                                    <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                                        Join thousands of users who trust PassOP to keep their passwords safe and accessible.
                                    </p>

                                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                        <button className="group relative px-8 py-4 font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105">
                                            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                                            <span className="relative z-10">Get Started Now</span>
                                        </button>

                                        <button className="group relative px-8 py-4 font-bold text-white bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105">
                                            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                                            <span className="relative z-10">View Demo</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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

export default Features;