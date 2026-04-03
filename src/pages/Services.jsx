import React, { useState } from 'react'
import { motion } from 'framer-motion'
import webImg from '../assets/images/services/service-placeholder.png'
import systemImg from '../assets/images/services/service-placeholder.png'
import uiuxImg from '../assets/images/services/service-placeholder.png'
import seoImg from '../assets/images/services/service-placeholder.png'

export default function Services() {
    const [active, setActive] = useState(3)

    const services = [
        {
            title: "Web Development",
            number: "01",
            img: webImg,
            body: "Building modern, responsive websites that deliver seamless user experiences. Examples include e-commerce platforms, corporate websites, and portfolio sites. We ensure cross-browser compatibility and performance optimization."
        },
        {
            title: "System Development",
            number: "02",
            img: systemImg,
            body: "Creating robust and scalable systems tailored to your business needs. Examples include inventory management systems, CRM platforms, and custom ERP solutions designed for efficiency and reliability."
        },
        {
            title: "UI/UX Strategy",
            number: "03",
            img: uiuxImg,
            body: "Designing intuitive interfaces and workflows that enhance usability. Examples include mobile apps, SaaS dashboards, and web applications where user engagement and retention are key."
        },
        {
            title: "SEO Optimization",
            number: "04",
            img: seoImg,
            body: "Optimizing your website for search engines to increase visibility and traffic. Examples include keyword research, on-page SEO, link building, and improving site speed and mobile usability."
        },
    ]

    const STACK_OFFSET = 80
    const borderGradient = `
        bg-[linear-gradient(to_right,#77530a,#ffd277,#77530a,#ffd277,#77530a)]
        bg-[length:250%] bg-left hover:bg-right transition-all duration-1000 p-[3px]
    `

    // Variants
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2, // each card comes after the previous
            }
        }
    }

    const cardVariants = {
        hidden: { opacity: 0, y: 60 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    }

    return (
        <section className="font-body bg-gradient-to-b from-[#1a1208] via-[#14110f] to-[#0f0f0f] flex flex-col min-h-screen">
            <div className="w-full px-6 md:px-16 py-24">

                {/* TITLE WITH LINES */}
                <motion.div
                    className="flex items-center mb-12"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.div
                        className="flex-1 h-[2px] bg-[linear-gradient(to_right,#77530a,#ffd277,#77530a)]"
                        variants={{
                            hidden: { scaleX: 0 },
                            visible: { scaleX: 1, transition: { duration: 0.7, ease: "easeOut" } }
                        }}
                        style={{ transformOrigin: 'left' }}
                    />
                    <motion.h1
                        className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white px-4 sm:px-6"
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
                        }}
                    >
                        What I Do
                    </motion.h1>
                    <motion.div
                        className="flex-1 h-[2px] bg-[linear-gradient(to_right,#77530a,#ffd277,#77530a)]"
                        variants={{
                            hidden: { scaleX: 0 },
                            visible: { scaleX: 1, transition: { duration: 0.7, ease: "easeOut" } }
                        }}
                        style={{ transformOrigin: 'right' }}
                    />
                </motion.div>

                {/* STACKED CARDS WITH CASCADE */}
                <motion.div
                    className="relative h-[600px] sm:h-[550px] md:h-[500px] lg:h-[500px]"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                >
                    {services.map((service, idx) => {
                        const isActive = active === idx
                        const nonActiveHeight = 80   // compressed card spacing
                        const activeHeight = 200     // expanded card spacing

                        // Compute top for every card
                        let top = 0
                        for (let i = 0; i < idx; i++) {
                            top += i === active ? activeHeight : nonActiveHeight
                        }

                        return (
                            <motion.div
                                key={idx}
                                onMouseEnter={() => setActive(idx)}
                                onMouseLeave={() => setActive(3)}
                                className={`absolute left-0 w-full ${borderGradient}`}
                                style={{
                                    top: top,
                                    zIndex: isActive ? 50 : idx,
                                }}
                                variants={cardVariants}
                            >
                                <motion.div
                                    className="flex flex-col md:flex-row w-full bg-black/90 overflow-hidden cursor-pointer"
                                    layout
                                    transition={{ type: "spring", stiffness: 200, damping: 30 }}
                                >
                                    <div className="w-full md:w-1/4 h-48 sm:h-56 md:h-64 relative">
                                        <div className="absolute top-0 right-0 h-full w-[3px] bg-[linear-gradient(to_bottom,#77530a,#ffd277,#77530a,#ffd277,#77530a)]" />
                                        <motion.img src={service.img} alt={service.title} className="w-full h-full object-cover" layout />
                                    </div>
                                    <div className="w-full md:w-3/4 p-4 sm:p-6 flex flex-col justify-between">
                                        <div className="flex font-display justify-between items-center mb-3 sm:mb-4">
                                            <motion.h3 className="text-white font-semibold text-xl sm:text-2xl relative" layout>
                                                {service.title}
                                                <span className="absolute left-0 bottom-0 w-12 sm:w-16 h-0.5 bg-[linear-gradient(to_right,#77530a,#ffd277,#77530a)] rounded"></span>
                                            </motion.h3>
                                            <motion.span className="text-white gradient-premium text-2xl sm:text-3xl font-bold">{service.number}</motion.span>
                                        </div>
                                        <motion.div
                                            className="text-white/70 text-base sm:text-lg overflow-hidden"
                                            style={{ maxHeight: isActive ? '200px' : '0px' }}
                                            animate={{ maxHeight: isActive ? 200 : 0 }}
                                            transition={{ duration: 0.5, ease: "easeInOut" }}
                                        >
                                            {service.body}
                                        </motion.div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        )
                    })}
                </motion.div>

            </div>
        </section>
    )
}