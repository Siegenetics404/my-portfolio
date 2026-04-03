import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa6'
import { SiGmail } from 'react-icons/si'
import { motion } from 'framer-motion'

export default function Footer() {

    const socialLinks = [
        { href: "https://github.com/Siegenetics404", icon: <FaGithub size={14} /> },
        { href: "https://www.facebook.com/cjfranco4", icon: <FaFacebookF size={14} /> },
        { href: "https://www.instagram.com/si_jiiii/", icon: <FaInstagram size={14} /> },
        { href: "https://www.linkedin.com/in/cj-franco-758683237/", icon: <FaLinkedinIn size={14} /> },
    ];

    const borderGradient = `
        bg-[linear-gradient(to_right,#77530a,#ffd277,#77530a,#77530a,#ffd277,#77530a)] 
        bg-[length:250%] bg-left hover:bg-right transition-all duration-1000
    `

    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
    }

    const stagger = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.15 } }
    }

    return (
        <footer className="font-body bg-gradient-to-b from-[#0f0f0f] via-[#14110f] to-[#0f0f0f]">
            <motion.div
                className="px-6 md:px-16 py-20 flex flex-col items-center text-center space-y-10"
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >

                {/* Title */}
                <motion.div variants={fadeUp}>
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-3">
                        Let’s Build Something <span className="gradient-premium">Great</span>
                    </h2>
                    <p className="text-white/70 max-w-xl">
                        Have a project in mind or just want to connect? I’m always open to discussing new ideas and opportunities.
                    </p>
                </motion.div>

                {/* CTA */}
                <motion.a
                    variants={fadeUp}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=franco.cj03@gmail.com&su=Let's%20Work%20Together&body=Hi%20CJ,%20I%20would%20like%20to%20discuss%20a%20project..."
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative p-[2px] ${borderGradient}`}
                >
                    <div className="bg-black/90 backdrop-blur-sm px-6 h-12 flex items-center justify-center gap-3">

                        <SiGmail className="text-white text-sm transition group-hover:text-[#ffd277]" />

                        <div className="w-px h-5 bg-[#ffd277] opacity-70 group-hover:opacity-100 transition"></div>

                        <span className="text-white font-semibold transition group-hover:text-[#ffd277]">
                            Send Email
                        </span>

                    </div>
                </motion.a>

                {/* Divider */}
                <motion.div
                    variants={fadeUp}
                    className="w-full max-w-4xl"
                >
                    <motion.div
                        className={`h-[2px] p-[1px] ${borderGradient}`}
                        initial={{ scaleX: 0, opacity: 0 }}
                        whileInView={{ scaleX: 1, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        viewport={{ once: true }}
                        style={{ transformOrigin: "left" }}
                    >
                        <div className="h-full bg-black/90"></div>
                    </motion.div>
                </motion.div>

                {/* Social Icons */}
                <motion.div variants={stagger} className="flex items-center gap-4">
                    {socialLinks.map((social, idx) => (
                        <motion.div
                            key={idx}
                            variants={fadeUp}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className={`p-[2px] ${borderGradient}`}
                        >
                            <a
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 flex items-center justify-center bg-black/90 text-white hover:text-[#ffd277] transition"
                            >
                                {social.icon}
                            </a>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom Text */}
                <motion.p variants={fadeUp} className="text-white/50 text-sm">
                    © {new Date().getFullYear()} CJ Franco. All rights reserved.
                </motion.p>

            </motion.div>
        </footer>
    )
}