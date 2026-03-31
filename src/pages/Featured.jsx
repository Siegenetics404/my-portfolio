import React, { useState, useRef } from 'react'
import placeholder1 from '../assets/images/features/Placeholder1.jpg'
import placeholder2 from '../assets/images/features/Placeholder2.png'
import placeholder3 from '../assets/images/features/Placeholder3.png'
import placeholder4 from '../assets/images/features/Placeholder4.png'
import placeholder5 from '../assets/images/features/Placeholder5.png'
import { FaArrowRight } from 'react-icons/fa6'
import { motion } from 'framer-motion'

export default function Featured() {

    const [hovered, setHovered] = useState(null)
    const timeoutRef = useRef(null)

    const handleEnter = (idx) => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current)
        setHovered(idx)
    }

    const handleLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setHovered(null)
        }, 120)
    }

    const fadeUp = {
        hidden: { opacity: 0, y: 40, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: 'easeOut' } }
    }

    const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }

    const borderGradient = `
        bg-[linear-gradient(to_right,#77530a,#ffd277,#77530a,#77530a,#ffd277,#77530a)] 
        bg-[length:250%] bg-left hover:bg-right transition-all duration-1000
    `

    const cards = [
        { img: placeholder1 },
        { img: placeholder2 },
        { img: placeholder3 },
        { img: placeholder4 },
        { img: placeholder5 },
    ]

    return (
        <section className="font-body bg-gradient-to-b from-[#1a1208] via-[#14110f] to-[#0f0f0f] flex flex-col min-h-screen">
            <div className="w-full px-6 md:px-16 py-24 flex flex-col">

                <motion.div
                    className="flex flex-col md:flex-row gap-6 h-auto md:h-[420px]"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={stagger}
                >
                    {cards.map((card, idx) => {
                        const isActive = hovered === idx
                        const isDefaultFeatured = idx === 0 && hovered === null
                        const isBig = isActive || isDefaultFeatured

                        return (
                            <motion.div
                                key={idx}
                                onMouseEnter={() => handleEnter(idx)}
                                onMouseLeave={handleLeave}
                                variants={fadeUp}

                                animate={{
                                    flex: isBig ? (window.innerWidth >= 768 ? 2 : 1) : 1,
                                    scale: isBig ? (window.innerWidth >= 768 ? 1.03 : 1) : 1
                                }}
                                transition={{
                                    flex: { duration: 0.5, ease: [0.25, 0.8, 0.25, 1] },
                                    scale: { duration: 0.4, ease: 'easeInOut' }
                                }}
                                className={`relative group overflow-hidden p-[2px] ${borderGradient} transform-gpu will-change-transform h-60 md:h-full`}
                            >
                                <div className="w-full h-full overflow-hidden">
                                    <img src={card.img} alt="" className="w-full h-full object-cover" />
                                </div>

                                {idx === 0 && (
                                    <div className="absolute inset-0 flex flex-col justify-between p-6 bg-black/30">
                                        <div className="mb-8">
                                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white mb-2 relative inline-block">
                                                Featured Projects
                                                <span className={`absolute left-0 bottom-0 w-16 h-1 ${borderGradient}`}></span>
                                            </h2>
                                            <p className="text-sm sm:text-base md:text-lg text-white/80">
                                                Where performance meets personality. These projects showcase a deep commitment to clean, scalable code without sacrificing visual impact.
                                            </p>
                                        </div>

                                        <a href="/works" className={`relative group p-[2px] ${borderGradient}`}>
                                            <div className="bg-black/90 backdrop-blur-sm px-5 h-10 flex items-center justify-center">
                                                <span className="flex items-center gap-2 text-white group-hover:text-[#ffd277] transition-colors duration-500">
                                                    See All Projects
                                                    <FaArrowRight className="transition-transform duration-500 group-hover:translate-x-2" />
                                                </span>
                                            </div>
                                        </a>
                                    </div>
                                )}

                                {idx !== 0 && (
                                    <a
                                        href={`/project/${idx}`}
                                        className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 w-max"
                                    >
                                        <div className={`relative p-[2px] ${borderGradient}`}>
                                            <div className="bg-black/90 backdrop-blur-sm px-5 h-10 flex items-center justify-center">
                                                <span className="flex items-center gap-2 text-white group-hover:text-[#ffd277] transition-colors duration-500 font-bold">
                                                    View Project
                                                    <FaArrowRight className="transition-transform duration-500 group-hover:-rotate-45" />
                                                </span>
                                            </div>
                                        </div>
                                    </a>
                                )}
                            </motion.div>
                        )
                    })}
                </motion.div>
            </div>
        </section>
    )
}