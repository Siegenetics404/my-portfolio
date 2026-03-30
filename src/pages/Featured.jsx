import React from 'react'
import placeholder from '../assets/images/features/Placeholder.png'
import me from '../assets/images/features/feature-me.jpg'
import { FaArrowRight } from 'react-icons/fa6'
import { motion } from 'framer-motion'

export default function Featured() {

    // Single fade-up with slight scale
    const fadeUp = {
        hidden: { opacity: 0, y: 40, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: 'easeOut' } }
    }

    // Stagger container
    const stagger = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.15 } }
    }

    return (
        <section className="font-body min-h-screen bg-gradient-to-b from-[#1a1208] via-[#14110f] to-[#0f0f0f] flex flex-col">
            <div className="w-full px-6 md:px-16 py-24 flex flex-col">

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={stagger}
                >

                    {/* Featured Big Card */}
                    <motion.div
                        variants={fadeUp}
                        className="relative p-[2px] bg-[linear-gradient(to_right,#77530a,#ffd277,#77530a,#77530a,#ffd277,#77530a)] 
                                   bg-[length:250%] bg-left hover:bg-right transition-all duration-1000 lg:col-span-2 overflow-hidden"
                    >
                        <img src={me} alt="Me" className="w-full h-full object-cover" />

                        <div className="absolute inset-0 flex flex-col justify-between p-6 bg-black/30">
                            <div className="mb-8">
                                <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-2 relative inline-block">
                                    Featured Projects
                                    <span className="absolute left-0 bottom-0 w-16 h-1
                                                bg-[linear-gradient(to_right,#77530a,#ffd277,#77530a,#ffd277,#77530a)]
                                                bg-[length:250%] bg-left hover:bg-right transition-all duration-1000"></span>
                                </h2>
                                <p className="text-sm md:text-lg text-white/80">
                                    Where performance meets personality. These projects showcase a deep commitment to clean, scalable code without sacrificing visual impact.
                                </p>
                            </div>

                            <a
                                href="/works"
                                className="relative group p-[2px] bg-[linear-gradient(to_right,#77530a,#ffd277,#77530a,#77530a,#ffd277,#77530a)] 
                                           bg-[length:250%] bg-left hover:bg-right transition-all duration-1000"
                            >
                                <div className="bg-black/90 backdrop-blur-sm px-5 h-10 flex items-center justify-center">
                                    <span className="flex items-center gap-2 text-white group-hover:text-[#ffd277] transition-colors duration-500">
                                        See All Projects <FaArrowRight className="transition-transform duration-500 group-hover:translate-x-2" />
                                    </span>
                                </div>
                            </a>
                        </div>
                    </motion.div>

                    {/* Other Cards */}
                    {[placeholder, placeholder, placeholder, placeholder].map((img, idx) => (
                        <motion.div
                            key={idx}
                            variants={fadeUp}
                            className="relative group p-[2px] bg-[linear-gradient(to_right,#77530a,#ffd277,#77530a,#77530a,#ffd277,#77530a)] 
                                       bg-[length:250%] bg-left hover:bg-right transition-all duration-1000 overflow-hidden h-[420px]"
                        >
                            <img src={img} alt={`project-${idx}`} className="w-full h-full object-cover" />

                            {/* Hover Button */}
                            <a
                                href={`/project/${idx}`}
                                className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 w-max"
                            >
                                <div className="relative group p-[2px] 
                                            bg-[linear-gradient(to_right,#77530a,#ffd277,#77530a,#77530a,#ffd277,#77530a)] 
                                            bg-[length:250%] bg-left hover:bg-right transition-all duration-1000">
                                    <div className="bg-black/90 backdrop-blur-sm px-5 h-10 flex items-center justify-center">
                                        <span className="flex items-center gap-2 text-white group-hover:text-[#ffd277] transition-colors duration-500 font-bold">
                                            View Project <FaArrowRight className="transition-transform duration-500 group-hover:-rotate-45" />
                                        </span>
                                    </div>
                                </div>
                            </a>
                        </motion.div>
                    ))}

                </motion.div>

            </div>
        </section>
    )
}