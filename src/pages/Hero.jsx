import React from 'react'
import { Quote } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa6';
import { motion } from 'framer-motion';

export default function Hero() {

    const socialLinks = [
        { href: "https://github.com/Siegenetics404", icon: <FaGithub size={14} /> },
        { href: "https://www.facebook.com/cjfranco4", icon: <FaFacebookF size={14} /> },
        { href: "https://www.instagram.com/si_jiiii/", icon: <FaInstagram size={14} /> },
        { href: "https://www.linkedin.com/in/cj-franco-758683237/", icon: <FaLinkedinIn size={14} /> },
    ];

    // Single fade-up animation
    const fadeUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    };

    // Stagger container for multiple children
    const stagger = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.15 } }
    };

    return (
        <section className="font-body min-h-screen pt-24 bg-gradient-to-b from-[#0f0f0f] via-[#14110f] to-[#1a1208] flex flex-col md:flex-row">

            {/* Left Content + Mobile Icons */}
            <motion.div
                className="flex flex-col justify-center px-6 md:px-16 flex-1"
                initial="hidden"
                animate="visible"
                variants={stagger}
            >

                {/* Quote Icon */}
                <motion.div variants={fadeUp}>
                    <Quote className="w-14 h-14 mb-6" style={{ stroke: "url(#goldGradient)", strokeWidth: 2 }} />
                </motion.div>

                {/* Gradient Definition */}
                <svg width="0" height="0">
                    <defs>
                        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#77530a" />
                            <stop offset="50%" stopColor="#ffd277" />
                            <stop offset="100%" stopColor="#77530a" />
                        </linearGradient>
                    </defs>
                </svg>

                {/* Hero Text */}
                <motion.div variants={stagger}>
                    <motion.h1 className="text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] font-display leading-[1.1] font-extrabold text-white tracking-tight">
                        <motion.span className="block" variants={fadeUp}>Show what's <span className="gradient-premium">different</span></motion.span>
                        <motion.span className="block" variants={fadeUp}>with <span className="gradient-premium inline-block pr-[0.1em]">human touch.</span></motion.span>
                    </motion.h1>
                </motion.div>

                {/* Horizontal Line + Signature */}
                <motion.div
                    className="flex flex-col sm:flex-row items-center mt-8 space-y-4 sm:space-y-0 sm:space-x-4"
                    initial="hidden"
                    animate="visible"
                >
                    {/* Horizontal line */}
                    <motion.div
                        className="h-[2px] p-[1px] bg-[linear-gradient(to_right,#77530a,#ffd277,#77530a,#ffd277,#77530a)] bg-[length:250%] bg-left hover:bg-right transition-all duration-1000 w-32 sm:flex-1"
                        initial={{ opacity: 0, scaleX: 0 }}
                        animate={{ opacity: 1, scaleX: 1 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        style={{ transformOrigin: "left" }}
                    >
                        <div className="h-full bg-black/90"></div>
                    </motion.div>

                    {/* Signature */}
                    <motion.span
                        className="text-white text-xl md:text-2xl font-semibold whitespace-nowrap"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 2, y: 0 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                    >
                        CJ FRANCO -{" "}
                        <span className="relative inline-block">
                            WEB DEVELOPER
                            <motion.span
                                className="absolute right-0 bottom-0 w-1/2 h-[2px]
                                bg-[linear-gradient(to_right,#77530a,#ffd277,#77530a,#ffd277,#77530a)]
                                bg-[length:250%] bg-left hover:bg-right transition-all duration-1000"
                                initial={{ width: 0 }}
                                animate={{ width: '50%' }}
                                transition={{ duration: 0.8, ease: "easeInOut" }}
                            />
                        </span>
                    </motion.span>
                </motion.div>

                {/* Mobile Social Icons */}
                <motion.div className="md:hidden flex flex-col items-center mt-8 space-y-6" variants={stagger}>
                    {/* Divider Line */}
                    <motion.div variants={fadeUp} className="flex justify-center mb-6">
                        <div className="w-60 h-[2px] p-[1px] bg-[linear-gradient(to_right,#77530a,#ffd277,#77530a,#ffd277,#77530a)] bg-[length:250%] bg-left animate-gradientSlide">
                            <div className="h-full bg-black/90"></div>
                        </div>
                    </motion.div>

                    {/* Icons */}
                    <motion.div variants={stagger} className="flex justify-center space-x-4">
                        {socialLinks.map((social, idx) => (
                            <motion.div key={idx} variants={fadeUp} className="p-[2px] bg-[linear-gradient(to_right,#77530a,#ffd277,#77530a,#ffd277,#77530a)] bg-[length:250%] bg-left hover:bg-right transition-all duration-1000">
                                <a href={social.href} className="w-10 h-10 flex items-center justify-center bg-black/90 text-white">
                                    {social.icon}
                                </a>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Right Side: Vertical line + Social Icons (desktop only) */}
            <motion.div className="hidden md:flex w-24 flex-col items-center justify-end pb-12 space-y-6" initial="hidden" animate="visible" variants={stagger}>
                {/* Vertical Line */}
                <motion.div variants={fadeUp} className="p-[1px] bg-[linear-gradient(to_bottom,#77530a,#ffd277,#77530a,#ffd277,#77530a)] bg-[length:250%] bg-top hover:bg-bottom transition-all duration-1000 h-2/3 w-px">
                    <div className="w-full h-full bg-black/90"></div>
                </motion.div>

                {/* Social Icons */}
                <motion.div variants={stagger} className="flex flex-col items-center space-y-4">
                    {socialLinks.map((social, idx) => (
                        <motion.div key={idx} variants={fadeUp} className="p-[2px] bg-[linear-gradient(to_right,#77530a,#ffd277,#77530a,#ffd277,#77530a)] bg-[length:250%] bg-left hover:bg-right transition-all duration-1000">
                            <a href={social.href} className="w-10 h-10 flex items-center justify-center bg-black/90 text-white">
                                {social.icon}
                            </a>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>

        </section>
    )
}