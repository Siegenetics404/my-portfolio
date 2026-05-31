import React, { useRef, useEffect, useState } from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub, FaChevronRight, FaChevronLeft } from 'react-icons/fa6';
import { SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiLaravel, SiMysql, SiPhp, SiGit, SiFigma, SiVscodium, SiPostman, SiDocker } from 'react-icons/si';
import profile from '../assets/images/about/profile.jpg';
import profileHover from '../assets/images/about/profile-hover.jpg';
import { HiOutlineArrowDown } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';

const allTools = [
    // Page 1
    { icon: <SiReact size={32} />, label: 'React', color: '#61DAFB' },
    { icon: <SiNextdotjs size={32} />, label: 'Next.js', color: '#ffffff' },
    { icon: <SiTailwindcss size={32} />, label: 'Tailwind', color: '#38BDF8' },
    { icon: <SiNodedotjs size={32} />, label: 'Node.js', color: '#6CC24A' },
    { icon: <SiLaravel size={32} />, label: 'Laravel', color: '#FF2D20' },
    { icon: <SiMysql size={32} />, label: 'MySQL', color: '#4479A1' },
    // Page 2
    { icon: <SiPhp size={32} />, label: 'PHP', color: '#777BB4' },
    { icon: <SiGit size={32} />, label: 'Git', color: '#F05032' },
    { icon: <SiFigma size={32} />, label: 'Figma', color: '#F24E1E' },
    { icon: <SiVscodium size={32} />, label: 'VS Code', color: '#007ACC' },
    { icon: <SiPostman size={32} />, label: 'Postman', color: '#FF6C37' },
    { icon: <SiDocker size={32} />, label: 'Docker', color: '#2496ED' },
]

const TOOLS_PER_PAGE = 6

export default function AboutMe() {
    const containerRef = useRef(null);
    const maskRef = useRef(null);
    const mouse = useRef({ x: 0, y: 0 });
    const trail = useRef(Array.from({ length: 10 }, () => ({ x: 0, y: 0 })));

    const [page, setPage] = useState(0)
    const [direction, setDirection] = useState(1)
    const totalPages = Math.ceil(allTools.length / TOOLS_PER_PAGE)
    const currentTools = allTools.slice(page * TOOLS_PER_PAGE, (page + 1) * TOOLS_PER_PAGE)

    const goNext = () => { setDirection(1); setPage(p => (p + 1) % totalPages) }
    const goPrev = () => { setDirection(-1); setPage(p => (p - 1 + totalPages) % totalPages) }

    useEffect(() => {
        const move = (e) => {
            const rect = containerRef.current?.getBoundingClientRect();
            if (!rect) return;
            mouse.current.x = e.clientX - rect.left;
            mouse.current.y = e.clientY - rect.top;
        };
        window.addEventListener('mousemove', move);
        const animate = () => {
            const speed = 0.15;
            trail.current.forEach((point, i) => {
                const target = i === 0 ? mouse.current : trail.current[i - 1];
                point.x += (target.x - point.x) * speed;
                point.y += (target.y - point.y) * speed;
            });
            if (maskRef.current) {
                const gradients = trail.current.map((p, i) => {
                    const size = 180 - i * 15;
                    const opacity = 1 - i * 0.1;
                    return `radial-gradient(circle ${size}px at ${p.x}px ${p.y}px, rgba(255,255,255,${opacity}) 20%, rgba(255,255,255,${opacity * 0.6}) 40%, transparent 70%)`;
                }).join(',');
                maskRef.current.style.maskImage = gradients;
                maskRef.current.style.webkitMaskImage = gradients;
            }
            requestAnimationFrame(animate);
        };
        animate();
        return () => window.removeEventListener('mousemove', move);
    }, []);

    const borderGradient = `bg-[linear-gradient(to_right,#77530a,#ffd277,#77530a,#77530a,#ffd277,#77530a)] bg-[length:250%] bg-left hover:bg-right transition-all duration-1000`;

    const socialLinks = [
        { href: "https://github.com/Siegenetics404", icon: <FaGithub size={16} /> },
        { href: "https://www.facebook.com/cjfranco4", icon: <FaFacebookF size={16} /> },
        { href: "https://www.instagram.com/si_jiiii/", icon: <FaInstagram size={16} /> },
        { href: "https://www.linkedin.com/in/cj-franco-758683237/", icon: <FaLinkedinIn size={16} /> },
    ];


    return (
        <section className="font-body bg-gradient-to-b from-[#0f0f0f] via-[#14110f] to-[#1a1208] min-h-screen flex flex-col justify-center px-6 md:px-16 py-16 overflow-x-hidden">

            {/* Page title */}
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-10 flex items-center gap-x-4 flex-wrap gap-y-3">
                About Me
                <span className={`relative p-[2px] ${borderGradient}`}>
                    <div className="bg-black/90 px-4 py-1 text-sm sm:text-base font-semibold text-white flex items-center gap-x-1">
                        Magic down there
                        <span className="inline-block" style={{ animation: "bounceInline 1.2s ease-in-out infinite" }}>
                            <HiOutlineArrowDown className="w-3 h-3" />
                        </span>
                    </div>
                </span>

                {/* Spacer pushes nav to the far end */}
                <span className="flex-1" />

                {/* Page indicator + prev/next */}
                <div className="flex items-center gap-3">
                    <span className="text-white font-body text-sm font-normal tracking-widest">
                        {page + 1} / {totalPages}
                    </span>
                    <button
                        onClick={goPrev}
                        className={`p-[2px] ${borderGradient}`}
                        aria-label="Previous tools"
                    >
                        <div className="bg-black/90 w-9 h-9 flex items-center justify-center text-white hover:text-[#ffd277] transition-colors duration-300">
                            <FaChevronLeft size={13} />
                        </div>
                    </button>
                    <button
                        onClick={goNext}
                        className={`p-[2px] ${borderGradient}`}
                        aria-label="Next tools"
                    >
                        <div className="bg-black/90 w-9 h-9 flex items-center justify-center text-white hover:text-[#ffd277] transition-colors duration-300">
                            <FaChevronRight size={13} />
                        </div>
                    </button>
                </div>
            </h1>

            <style>{`
                @keyframes bounceInline {
                    0%, 100% { transform: translateY(0); }
                    50%       { transform: translateY(4px); }
                }
            `}</style>

            {/* Bento grid */}
            <div
                className="grid gap-3 w-full overflow-hidden"
                style={{
                    gridTemplateColumns: '2fr 1fr 1fr 1fr',
                    gridTemplateRows: 'repeat(2, 1fr)',
                    height: '75vh',
                }}
            >
                {/* Image cell — spans both rows */}
                <div
                    className={`relative p-[4px] ${borderGradient}`}
                    style={{ gridColumn: '1', gridRow: '1 / span 2' }}
                    ref={containerRef}
                >
                    <div className={`absolute inset-0 m-[6px] ${borderGradient} pointer-events-none z-0`} />
                    <div className="relative w-full h-full overflow-hidden">
                        <img src={profile} alt="Profile" className="w-full h-full object-cover object-center z-10 relative" />
                        <div ref={maskRef} className="absolute top-0 left-0 w-full h-full z-20 pointer-events-none">
                            <img src={profileHover} alt="Profile Hover" className="w-full h-full object-cover object-center"
                                style={{ maskRepeat: 'no-repeat', WebkitMaskRepeat: 'no-repeat' }} />
                            <div className="absolute top-6 left-6 flex flex-col text-left bg-black/20 p-4 max-w-[90%]">
                                <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-2 relative inline-block drop-shadow-lg">
                                    Who I Am?
                                    <span className={`absolute left-0 bottom-0 w-16 h-1 ${borderGradient}`} />
                                </h2>
                                <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-[400px] mb-4 drop-shadow-md">
                                    Hi, I’m CJ Franco. You’re about to see the story behind my work, carefully built one step at a time.
                                </p>

                                <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-[400px] mb-4 drop-shadow-md">
                                    I love blending creativity with clean, scalable code to bring digital experiences to life. My projects are designed to engage and delight on the front end, while a clean backend logic ensures everything runs smoothly behind the scenes.
                                </p>

                                <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-[400px] drop-shadow-md">
                                    And here’s the reveal. You’re not just reading words, you’re getting a sense of how I craft every interaction with care and precision. Let’s build something unforgettable together.
                                </p>
                            </div>
                        </div>
                        {/* Socials */}
                        <div className="absolute bottom-0 left-0 right-0 z-30 flex items-center gap-3 px-4 py-3 bg-gradient-to-t from-black/80 to-transparent">
                            <div className="flex-1 h-[1px] bg-[linear-gradient(to_right,#77530a,#ffd277,#77530a)]" />
                            <div className="flex gap-2">
                                {socialLinks.map((social, idx) => (
                                    <div key={idx} className={`p-[2px] ${borderGradient}`}>
                                        <a href={social.href} target="_blank" rel="noreferrer"
                                            className="w-8 h-8 flex items-center justify-center bg-black/90 text-white hover:text-[#ffd277] transition-colors duration-300">
                                            {social.icon}
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tool cells — staggered per-card animation */}
                <AnimatePresence mode="popLayout">
                    {currentTools.map((tool, idx) => {
                        const enterX = direction > 0 ? 80 : -80
                        const exitX = direction > 0 ? -50 : 50
                        return (
                            <motion.div
                                key={`${page}-${idx}`}
                                initial={{ x: enterX, opacity: 0, scale: 0.88 }}
                                animate={{
                                    x: 0, opacity: 1, scale: 1,
                                    transition: {
                                        duration: 0.45,
                                        ease: [0.25, 0.8, 0.25, 1],
                                        delay: idx * 0.08,
                                    }
                                }}
                                exit={{
                                    x: exitX, opacity: 0, scale: 0.92,
                                    transition: {
                                        duration: 0.2,
                                        ease: [0.4, 0, 1, 1],
                                        delay: idx * 0.04,
                                    }
                                }}
                                className={`group p-[2px] ${borderGradient}`}
                            >
                                <div className="bg-black/90 w-full h-full flex flex-col items-center justify-center gap-3 py-6 px-3 transition-colors duration-300 group-hover:bg-[#1a1208]/90">
                                    <span className="transition-transform duration-300 group-hover:scale-110 drop-shadow-lg" style={{ color: tool.color }}>
                                        {tool.icon}
                                    </span>
                                    <div className="w-8 h-[1px] bg-[linear-gradient(to_right,#77530a,#ffd277,#77530a)]" />
                                    <span className="text-white/70 font-display font-semibold text-xs sm:text-sm tracking-widest uppercase group-hover:text-white transition-colors duration-300">
                                        {tool.label}
                                    </span>
                                </div>
                            </motion.div>
                        )
                    })}
                </AnimatePresence>
            </div>

        </section>
    );
}