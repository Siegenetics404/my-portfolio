import React from 'react'
import { Quote } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa6';

export default function Hero() {

    return (
        <section className="font-body min-h-screen pt-24 bg-gradient-to-b from-[#0f0f0f] via-[#14110f] to-[#1a1208] flex">
            {/* Left Content */}
            <div className="flex flex-col justify-center px-16 flex-1">

                {/* Quote Icon */}
                <Quote
                    className="w-14 h-14 mb-6"
                    style={{
                        stroke: "url(#goldGradient)",
                        strokeWidth: 2
                    }}
                />

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

                {/* Hero Text as one h1 with gradient on key words */}
                <h1 className="text-[8rem] font-display md:text-[10rem] leading-[1.1] font-extrabold text-white tracking-tight">

                    {/* Top line */}
                    <span className="block">
                        Show what's{" "}
                        <span className="bg-[linear-gradient(120deg,#77530a,#ffd277,#fff3c4,#ffd277,#77530a)] 
                       bg-[length:250%] bg-left bg-clip-text text-transparent animate-[shine_8s_linear_infinite]">
                            different
                        </span>
                    </span>

                    {/* Bottom line */}
                    <span className="block">
                        with{" "}
                        <span className="inline-block bg-[linear-gradient(120deg,#77530a,#ffd277,#fff3c4,#ffd277,#77530a)]
                         bg-[length:250%] bg-left bg-clip-text text-transparent animate-[shine_8s_linear_infinite]
                          pr-[0.1em]">
                            human touch.
                        </span>
                    </span>

                </h1>
                <div className="flex items-center mt-8 space-x-4">

                    {/* Gradient Horizontal Line */}
                    <div className="flex-1 h-[2px] p-[1px] bg-[linear-gradient(to_right,#77530a,#ffd277,#77530a,#ffd277,#77530a)] 
                    bg-[length:250%] bg-left hover:bg-right transition-all duration-1000">
                        <div className="h-full bg-black/90"></div>
                    </div>

                    {/* Signature / Title */}
                    <span className="text-white font-display2 text-xl md:text-2xl font-semibold">
                        CJ FRANCO -{" "}
                        <span className="relative inline-block">
                            WEB DEVELOPER
                            {/* Mini Gradient Underline Aligned Right */}
                            <span className="absolute right-0 bottom-0 w-1/2 h-[2px] 
                            bg-[linear-gradient(to_right,#77530a,#ffd277,#77530a,#ffd277,#77530a)] 
                            bg-[length:250%] bg-left hover:bg-right transition-all duration-1000"></span>
                        </span>
                    </span>

                </div>
            </div>

            {/* Right Side */}
            <div className="w-24 flex flex-col items-center justify-end pb-12">

                <div className="flex flex-col items-center h-full justify-end">

                    {/* Vertical Line with Gold Effect */}
                    <div className="p-[1px] bg-[linear-gradient(to_bottom,#77530a,#ffd277,#77530a,#77530a,#ffd277,#77530a)] bg-[length:250%] bg-top hover:bg-bottom transition-all duration-1000 h-2/3">
                        <div className="w-px h-full bg-black/90"></div>
                    </div>

                    {/* Social Icons */}
                    <div className="flex flex-col items-center mt-6 space-y-4">

                        {/* Icon 1 */}
                        <div className="p-[2px] bg-[linear-gradient(to_right,#77530a,#ffd277,#77530a,#77530a,#ffd277,#77530a)] bg-[length:250%] bg-left hover:bg-right transition-all duration-1000">
                            <a href="https://www.facebook.com/cjfranco4" className="w-10 h-10 flex items-center justify-center bg-black/90 text-white">
                                <FaFacebookF size={14} />
                            </a>
                        </div>

                        {/* Icon 2 */}
                        <div className="p-[2px] bg-[linear-gradient(to_right,#77530a,#ffd277,#77530a,#77530a,#ffd277,#77530a)] bg-[length:250%] bg-left hover:bg-right transition-all duration-1000">
                            <a href="https://www.instagram.com/si_jiiii/" className="w-10 h-10 flex items-center justify-center bg-black/90 text-white">
                                <FaInstagram size={14} />
                            </a>
                        </div>

                        {/* Icon 3 */}
                        <div className="p-[2px] bg-[linear-gradient(to_right,#77530a,#ffd277,#77530a,#77530a,#ffd277,#77530a)] bg-[length:250%] bg-left hover:bg-right transition-all duration-1000">
                            <a href="https://www.linkedin.com/in/cj-franco-758683237/" className="w-10 h-10 flex items-center justify-center bg-black/90 text-white">
                                <FaLinkedinIn size={14} />
                            </a>
                        </div>

                    </div>
                </div>

            </div>

        </section>
    )
}