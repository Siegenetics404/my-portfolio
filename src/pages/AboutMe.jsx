import React from 'react';

export default function AboutMe() {
    return (
        <section className="font-body bg-gradient-to-b from-[#0f0f0f] via-[#14110f] to-[#1a1208] min-h-screen flex flex-col md:flex-row">

            {/* Left Side: Staircase */}
            <div className="flex-1 flex flex-col justify-center px-6 md:px-16">

                <h1 className="text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] font-display font-extrabold text-white tracking-tight leading-[0.9] text-center md:text-left">

                    {/* Step 1 */}
                    <span className="inline md:block md:ml-0">About</span>{' '}
                    <span className="inline md:block md:ml-24 lg:ml-40">Me,</span>{' '}

                    {/* Step 2 */}
                    <span className="inline md:block md:ml-12 lg:ml-20">My</span>{' '}
                    <span className="inline md:block md:ml-36 lg:ml-56">Experiences.</span>

                </h1>

            </div>

            {/* Right Side */}
            <div className="flex-1 flex items-center justify-center px-6 md:px-16">
                {/* Right side content goes here later */}
            </div>

        </section>
    )
}