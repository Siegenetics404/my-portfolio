import React from 'react'

export default function Header() {
    return (
        <header className="font-body w-full fixed top-5 z-50 bg-transparent">
            <div className="max-w-6xl mx-auto flex items-center justify-center space-x-4">

                {/* Brand */}
                <a href="/" className="relative p-[2px] 
                       bg-[linear-gradient(to_right,#77530a,#ffd277,#77530a,#77530a,#ffd277,#77530a)] 
                       bg-[length:250%] bg-left hover:bg-right transition-all duration-1000">
                    <div className="bg-black/90 backdrop-blur-sm px-5 h-10 flex items-center">
                        <span className="text-white font-bold">Francode</span>
                    </div>
                </a>

                {/* Nav */}
                <div className="relative p-[2px] bg-[linear-gradient(to_right,#77530a,#ffd277,#77530a,#77530a,#ffd277,#77530a)] 
                                 bg-[length:250%] bg-left hover:bg-right transition-all duration-1000">
                    <nav className="bg-black/90 backdrop-blur-sm px-5 h-10 flex items-center">
                        <ul className="flex space-x-8">
                            <li><a href="#" className="text-white hover:text-[#ffd277] transition">About</a></li>
                            <li><a href="#" className="text-white hover:text-[#ffd277] transition">Service</a></li>
                            <li><a href="#" className="text-white hover:text-[#ffd277] transition">Works</a></li>
                            <li><a href="#" className="text-white hover:text-[#ffd277] transition">Contact</a></li>
                        </ul>
                    </nav>
                </div>

            </div>
        </header>
    )
}