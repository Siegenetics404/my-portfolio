import React, { useRef, useEffect } from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa6';
import profile from '../assets/images/about/profile.jpg';
import profileHover from '../assets/images/about/profile-hover.jpg';
import { HiOutlineArrowDown } from 'react-icons/hi';

export default function AboutMe() {
    const containerRef = useRef(null);
    const maskRef = useRef(null);

    const mouse = useRef({ x: 0, y: 0 });
    const trail = useRef(Array.from({ length: 10 }, () => ({ x: 0, y: 0 })));

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
                const gradients = trail.current
                    .map((p, i) => {
                        const size = 180 - i * 15;
                        const opacity = 1 - i * 0.1;
                        return `radial-gradient(circle ${size}px at ${p.x}px ${p.y}px,
                            rgba(255,255,255,${opacity}) 20%,
                            rgba(255,255,255,${opacity * 0.6}) 40%,
                            transparent 70%)`;
                    })
                    .join(',');

                maskRef.current.style.maskImage = gradients;
                maskRef.current.style.webkitMaskImage = gradients;
            }

            requestAnimationFrame(animate);
        };

        animate();

        return () => window.removeEventListener('mousemove', move);
    }, []);

    const borderGradient = `
        bg-[linear-gradient(to_right,#77530a,#ffd277,#77530a,#77530a,#ffd277,#77530a)]
        bg-[length:250%] bg-left hover:bg-right transition-all duration-1000
    `;

    const socialLinks = [
        { href: "https://github.com/Siegenetics404", icon: <FaGithub size={16} /> },
        { href: "https://www.facebook.com/cjfranco4", icon: <FaFacebookF size={16} /> },
        { href: "https://www.instagram.com/si_jiiii/", icon: <FaInstagram size={16} /> },
        { href: "https://www.linkedin.com/in/cj-franco-758683237/", icon: <FaLinkedinIn size={16} /> },
    ];

    return (
        <section className="font-body bg-gradient-to-b from-[#0f0f0f] via-[#14110f] to-[#1a1208] flex flex-col md:flex-row min-h-screen">

            {/* Left Side */}
            <div className="flex-1 flex flex-col justify-start px-6 md:px-16 py-12">
                <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 flex items-center gap-x-4">
                    About Me
                    <span
                        className="relative p-[2px] bg-[linear-gradient(to_right,#77530a,#ffd277,#77530a,#77530a,#ffd277,#77530a)] bg-[length:250%] bg-left hover:bg-right transition-all duration-1000 flex items-center gap-x-2"
                    >
                        <div className="bg-black/90 px-4 py-1 text-sm sm:text-base font-semibold text-white flex items-center gap-x-1">
                            Magic down there
                            <span
                                className="inline-block"
                                style={{
                                    display: "inline-block",
                                    animation: "bounceInline 1.2s ease-in-out infinite",
                                }}
                            >
                                <HiOutlineArrowDown className="w-3 h-3" />
                            </span>
                        </div>
                    </span>

                    <style>
                        {`
                        @keyframes bounceInline {
                            0%, 100% { transform: translateY(0); }
                            50% { transform: translateY(4px); }
                        }
                        `}
                    </style>
                </h1>

                <div className="flex flex-col w-full max-w-md md:max-w-lg">
                    <div
                        ref={containerRef}
                        className={`relative p-[4px] ${borderGradient} mb-6`}
                    >
                        {/* Outer gold border */}
                        <div className={`absolute inset-0 m-[6px] ${borderGradient} rounded-lg`}></div>

                        <div className="relative overflow-hidden">
                            {/* Base Image */}
                            <img
                                src={profile}
                                alt="Profile"
                                className="w-full h-96 md:h-[420px] object-cover relative z-10"
                            />

                            {/* Reveal Overlay */}
                            <div
                                ref={maskRef}
                                className="absolute top-0 left-0 w-full h-full z-20 pointer-events-none"
                            >
                                <img
                                    src={profileHover}
                                    alt="Profile Hover"
                                    className="w-full h-full object-cover"
                                    style={{
                                        maskImage: maskRef.current?.style.maskImage,
                                        WebkitMaskImage: maskRef.current?.style.webkitMaskImage,
                                        maskRepeat: "no-repeat",
                                        WebkitMaskRepeat: "no-repeat",
                                    }}
                                />

                                <div className="absolute top-6 left-6 flex flex-col text-left bg-black/20 p-4">
                                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white mb-2 relative inline-block drop-shadow-lg">
                                        Who I Am?
                                        <span className={`absolute left-0 bottom-0 w-16 h-1 ${borderGradient}`}></span>
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
                        </div>
                    </div>

                    <div className="flex items-center space-x-4">
                        <div className="flex-1 h-[2px] p-[1px] bg-[linear-gradient(to_right,#77530a,#ffd277,#77530a,#ffd277,#77530a)] bg-[length:250%] bg-left hover:bg-right transition-all duration-1000">
                            <div className="h-full bg-black/90"></div>
                        </div>

                        <div className="flex space-x-2 z-10">
                            {socialLinks.map((social, idx) => (
                                <div key={idx} className={`p-[2px] ${borderGradient}`}>
                                    <a href={social.href} className="w-10 h-10 flex items-center justify-center bg-black/90 text-white">
                                        {social.icon}
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side */}
            <div className="flex-1 flex items-center justify-center px-6 md:px-16">
                {/* Right side content */}
            </div>

        </section>
    );
}