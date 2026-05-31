import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import webImg from '../assets/images/services/service-placeholder.png'
import systemImg from '../assets/images/services/service-placeholder.png'
import uiuxImg from '../assets/images/services/service-placeholder.png'
import seoImg from '../assets/images/services/service-placeholder.png'

const EASE = [0.25, 0.8, 0.25, 1]
const DURATION = 0.5

export default function Services() {
    const [active, setActive] = useState(null)
    const timeoutRef = useRef(null)

    const handleEnter = (idx) => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current)
        setActive(idx)
    }

    const handleLeave = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current)
        timeoutRef.current = setTimeout(() => setActive(null), 80)
    }

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

    const borderGradient = `
        bg-[linear-gradient(to_right,#77530a,#ffd277,#77530a,#ffd277,#77530a)]
        bg-[length:250%] bg-left hover:bg-right transition-all duration-1000 p-[3px]
    `

    const containerVariants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.15 } }
    }

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
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

                {/* CARDS */}
                <motion.div
                    className="flex flex-col w-full"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                >
                    {services.map((service, idx) => {
                        const isActive = active === idx
                        return (
                            <ServiceCard
                                key={idx}
                                service={service}
                                isActive={isActive}
                                onEnter={() => handleEnter(idx)}
                                onLeave={handleLeave}
                                borderGradient={borderGradient}
                                cardVariants={cardVariants}
                            />
                        )
                    })}
                </motion.div>

            </div>
        </section>
    )
}

function ServiceCard({ service, isActive, onEnter, onLeave, borderGradient, cardVariants }) {
    const bodyRef = useRef(null)

    return (
        <motion.div
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
            className={`w-full ${borderGradient}`}
            variants={cardVariants}
        >
            <motion.div
                className="flex flex-col md:flex-row w-full bg-black/90 overflow-hidden cursor-pointer"
                animate={{ height: isActive ? 300 : 72 }}
                transition={{ duration: DURATION, ease: EASE }}
            >

                {/* Image panel — slides in/out horizontally */}
                <motion.div
                    className="relative overflow-hidden shrink-0"
                    animate={{
                        width: isActive ? '25%' : '0%',
                        opacity: isActive ? 1 : 0,
                    }}
                    transition={{ duration: DURATION, ease: EASE }}
                    style={{ minWidth: 0 }}
                >
                    {/* Only render contents when there's space to avoid layout flash */}
                    <div className="absolute inset-0">
                        <div className="absolute top-0 right-0 h-full w-[3px] bg-[linear-gradient(to_bottom,#77530a,#ffd277,#77530a,#ffd277,#77530a)] z-10" />
                        <img
                            src={service.img}
                            alt={service.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </motion.div>

                {/* Text content */}
                <div className="flex-1 p-4 sm:p-6 flex flex-col justify-between">

                    {/* Title row — always visible */}
                    <div className="flex font-display justify-between items-center">
                        <h3 className="text-white font-semibold text-xl sm:text-2xl relative">
                            {service.title}
                            <span className="absolute left-0 bottom-0 w-12 sm:w-16 h-0.5 bg-[linear-gradient(to_right,#77530a,#ffd277,#77530a)] rounded" />
                        </h3>
                        <span className="text-white gradient-premium text-2xl sm:text-3xl font-bold">
                            {service.number}
                        </span>
                    </div>

                    {/* Body — fades in as card height expands */}
                    <motion.div
                        animate={{
                            opacity: isActive ? 1 : 0,
                            marginTop: isActive ? 16 : 0,
                        }}
                        transition={{ duration: DURATION, ease: EASE }}
                    >
                        <div ref={bodyRef} className="text-white/70 text-base sm:text-lg">
                            {service.body}
                        </div>
                    </motion.div>

                </div>
            </motion.div>
        </motion.div>
    )
}