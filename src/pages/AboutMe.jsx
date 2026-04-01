import React, { useRef, useEffect } from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa6';
import profile from '../assets/images/about/profile.jpg';
import profileHover from '../assets/images/about/profile-hover.jpg';

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
                <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6">
                    About Me
                </h1>

                <div className="flex flex-col w-full max-w-md md:max-w-lg">
                    {/* Profile Image + Hover + Gold Border */}
                    <div
                        ref={containerRef}
                        className={`relative p-[4px] ${borderGradient} mb-6`}
                    >
                        {/* Outer gold border behind image */}
                        <div className={`absolute inset-0 m-[6px] ${borderGradient} rounded-lg`}></div>

                        <div className="relative overflow-hidden">
                            {/* Base Image */}
                            <img
                                src={profile}
                                alt="Profile"
                                className="w-full h-96 md:h-[420px] object-cover relative z-10"
                            />
                            {/* Reveal Overlay */}
                            <img
                                ref={maskRef}
                                src={profileHover}
                                alt="Profile Hover"
                                className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none z-20"
                            />
                        </div>
                    </div>

                    {/* Line + Horizontal Social Icons */}
                    <div className="flex items-center space-x-4">
                        {/* Horizontal Line */}
                        <div className="flex-1 h-[2px] p-[1px] bg-[linear-gradient(to_right,#77530a,#ffd277,#77530a,#ffd277,#77530a)] bg-[length:250%] bg-left hover:bg-right transition-all duration-1000">
                            <div className="h-full bg-black/90"></div>
                        </div>

                        {/* Social Icons */}
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
                {/* Right side content goes here later */}
            </div>

        </section>
    );
}