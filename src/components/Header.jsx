import React, { useState } from 'react';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
    const [open, setOpen] = useState(false);

    const navLinks = ["About", "Service", "Works", "Contact"];

    // Smooth fade + ease
    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } }
    };

    const staggerFade = {
        visible: { transition: { staggerChildren: 0.1 } }
    };

    // Hover scale for brand/nav/menu items
    const hoverScale = {
        whileHover: { scale: 1.05 },
        whileTap: { scale: 0.95 }
    };

    return (
        <header className="font-body w-full fixed top-5 z-50 bg-transparent">
            <div className="max-w-6xl mx-auto flex items-center justify-center space-x-4">

                {/* Brand */}
                <motion.a
                    href="/"
                    className="relative p-[2px] bg-[linear-gradient(to_right,#77530a,#ffd277,#77530a,#77530a,#ffd277,#77530a)] bg-[length:250%] bg-left hover:bg-right transition-all duration-1000"
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    {...hoverScale}
                >
                    <div className="bg-black/90 backdrop-blur-sm px-5 h-10 flex items-center">
                        <span className="text-white font-bold">Francode</span>
                    </div>
                </motion.a>

                {/* Desktop Nav */}
                <motion.div
                    className="hidden md:block relative p-[2px] bg-[linear-gradient(to_right,#77530a,#ffd277,#77530a,#77530a,#ffd277,#77530a)] bg-[length:250%] bg-left hover:bg-right transition-all duration-1000"
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                >
                    <nav className="bg-black/90 backdrop-blur-sm px-5 h-10 flex items-center">
                        <motion.ul className="flex space-x-8" initial="hidden" animate="visible" variants={staggerFade}>
                            {navLinks.map((link, idx) => (
                                <motion.li
                                    key={idx}
                                    variants={fadeIn}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <a href="#" className="text-white hover:text-[#ffd277] transition">{link}</a>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </nav>
                </motion.div>

                {/* Mobile Hamburger */}
                <motion.div
                    className="md:hidden relative p-[2px] bg-[linear-gradient(to_right,#77530a,#ffd277,#77530a,#77530a,#ffd277,#77530a)] bg-[length:250%] bg-left hover:bg-right transition-all duration-1000"
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                >
                    <motion.div
                        className="bg-black/90 backdrop-blur-sm px-3 h-10 flex items-center cursor-pointer"
                        onClick={() => setOpen(!open)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {open ? <HiOutlineX className="text-white w-6 h-6" /> : <HiOutlineMenu className="text-white w-6 h-6" />}
                    </motion.div>

                    {/* Mobile Menu */}
                    <AnimatePresence>
                        {open && (
                            <motion.div
                                className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-black/90 backdrop-blur-sm shadow-lg z-50"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1, transition: { duration: 0.4, ease: "easeInOut" } }}
                                exit={{ opacity: 0, transition: { duration: 0.3, ease: "easeInOut" } }}
                            >
                                <motion.ul className="flex flex-col p-4 space-y-3 text-center" initial="hidden" animate="visible" variants={staggerFade}>
                                    {navLinks.map((link, idx) => (
                                        <motion.li
                                            key={idx}
                                            variants={fadeIn}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <a href="#" className="text-white hover:text-[#ffd277] transition">{link}</a>
                                        </motion.li>
                                    ))}
                                </motion.ul>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

            </div>
        </header>
    );
}