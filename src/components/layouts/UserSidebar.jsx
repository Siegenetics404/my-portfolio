import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Download, Mail, Menu, X } from "lucide-react";
import logo from "../../assets/images/about/profile-logo.png";
import resumeFile from "../../assets/files/Cj Franco - Resume.pdf";

const NAV_GROUPS = [
    {
        title: "Menu",
        items: [
            { id: "home", label: "Home", path: "/" },
            { id: "projects", label: "Projects", path: "/projects" },
            { id: "experience", label: "Experience", path: "/experience" },
            { id: "tools", label: "Tools", path: "/tools" },
            { id: "recommendation", label: "Recommendation", path: "/recommendation" },
        ],
    },
    {
        title: "Personal",
        items: [
            { id: "shop", label: "Shop", path: "/shop" },
            { id: "resume", label: "Resume", path: "/resume" },
            { id: "resources", label: "Resources", path: "/resources" },
            { id: "certification", label: "Certification", path: "/certification" },
        ],
    },
];

// Static info — no backend, edit these directly.
const NAME = "Cj Franco";
const ROLE = "Web Developer — Philippines";

export default function UserSidebar({ active, children }) {
    const [mobileOpen, setMobileOpen] = useState(false);
    const closeMobile = () => setMobileOpen(false);

    // Shared between the desktop sidebar and the mobile dropdown.
    const NavGroups = () => (
        <div className="flex flex-col gap-5">
            {NAV_GROUPS.map((group) => (
                <nav key={group.title}>
                    <p className="text-[10px] font-medium text-neutral-400 uppercase tracking-wide mb-1.5 px-2">
                        {group.title}
                    </p>
                    <ul className="space-y-0.5">
                        {group.items.map((item) => {
                            const isActive = item.id === active;
                            const isResume = item.id === "resume";
                            return (
                                <li key={item.id} className={isResume ? "group relative" : ""}>
                                    <Link
                                        to={item.path}
                                        onClick={closeMobile}
                                        className={`block px-2 py-1.5 text-sm rounded-md transition-colors ${isResume ? "pr-8" : ""} ${isActive
                                            ? "bg-neutral-950 text-white"
                                            : "text-neutral-500 hover:text-neutral-950"
                                            }`}
                                    >
                                        {item.label}
                                    </Link>

                                    {isResume && (
                                        <a
                                            href={resumeFile}
                                            download="Cj Franco - Resume.pdf"
                                            aria-label="Download resume"
                                            className={`absolute right-1.5 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity ${isActive
                                                ? "text-white/70 hover:text-white"
                                                : "text-neutral-400 hover:text-neutral-950"
                                                }`}
                                        >
                                            <Download size={14} />
                                        </a>
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            ))}
        </div>
    );

    const Footer = () => (
        <div className="border-t border-neutral-200 pt-3 px-2">
            <p className="text-sm font-medium">{NAME}</p>
            <p className="text-xs text-neutral-400">{ROLE}</p>

            <p className="text-xs text-neutral-400 mt-4 leading-relaxed">
                Open to full-time roles and freelance work — let's talk.
            </p>
            <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=franco.cj03@gmail.com&su=Let's%20Work%20Together&body=Hi%20CJ,%20I%20would%20like%20to%20discuss%20a%20project..."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-neutral-500 hover:text-neutral-950 transition-colors mt-1"
            >
                <Mail size={12} />
                franco.cj03@gmail.com
            </a>
        </div>
    );

    return (
        <div className="h-screen w-full bg-white text-neutral-950 flex flex-col md:flex-row overflow-hidden">
            {/* Mobile top bar + dropdown */}
            <div className="md:hidden relative shrink-0 z-40">
                <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-200 bg-white relative z-10">
                    <Link to="/" onClick={closeMobile} className="flex items-center gap-2">
                        <img src={logo} alt="Logo" className="w-7 h-7 rounded-md object-cover" />
                        <span className="text-lg font-semibold tracking-tight">{NAME}</span>
                    </Link>
                    <button
                        onClick={() => setMobileOpen((v) => !v)}
                        aria-label={mobileOpen ? "Close menu" : "Open menu"}
                        className="p-1 text-neutral-600 hover:text-neutral-950 transition-colors"
                    >
                        {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>

                {/* Dropdown panel — expands downward below the top bar */}
                <div
                    className={`absolute left-0 right-0 top-full bg-white border-b border-neutral-200 shadow-sm overflow-hidden transition-all duration-300 ease-out ${mobileOpen ? "max-h-[75vh]" : "max-h-0"
                        }`}
                >
                    <div className="px-6 py-6 overflow-y-auto max-h-[75vh] flex flex-col gap-6">
                        <NavGroups />
                        <Footer />
                    </div>
                </div>
            </div>

            {/* Backdrop — closes dropdown on click outside, mobile only */}
            {mobileOpen && (
                <div
                    className="fixed inset-0 bg-black/20 z-30 md:hidden"
                    onClick={closeMobile}
                />
            )}

            {/* Desktop sidebar */}
            <aside className="hidden md:flex w-64 shrink-0 bg-white border-r border-neutral-200 px-6 py-8 flex-col justify-between overflow-y-auto">
                <div>
                    <Link to="/" className="flex items-center gap-2 px-2 w-fit mb-8">
                        <img src={logo} alt="Logo" className="w-7 h-7 rounded-md object-cover" />
                        <span className="text-xl font-semibold tracking-tight">{NAME}</span>
                    </Link>
                    <NavGroups />
                </div>
                <Footer />
            </aside>

            {/* Main content — this is the ONLY scrolling container now */}
            <div className="flex flex-1 flex-col overflow-y-auto">{children}</div>
        </div>
    );
}