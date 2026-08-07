import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Download, Menu, X, Sun, Moon, Monitor, ChevronsUpDown, ArrowUpRight } from "lucide-react";
import logo from "../../assets/images/about/profile-logo.png";
import resumeFile from "../../assets/files/Cj Franco - Resume.pdf";

// Inline icons — brand marks like GitHub/Instagram aren't in lucide-react's
// core set, so they're defined here instead of imported.
function GithubIcon({ size = 16 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 .5C5.73.5.98 5.24.98 11.5c0 4.86 3.15 8.98 7.52 10.44.55.1.75-.24.75-.53 0-.26-.01-1.13-.02-2.05-3.06.67-3.71-1.3-3.71-1.3-.5-1.27-1.22-1.6-1.22-1.6-1-.68.08-.67.08-.67 1.1.08 1.68 1.13 1.68 1.13.98 1.68 2.58 1.2 3.21.91.1-.71.38-1.2.69-1.47-2.44-.28-5-1.22-5-5.43 0-1.2.43-2.18 1.13-2.95-.11-.28-.49-1.4.11-2.92 0 0 .92-.3 3.02 1.12a10.4 10.4 0 0 1 5.5 0c2.1-1.42 3.02-1.12 3.02-1.12.6 1.52.22 2.64.11 2.92.7.77 1.13 1.75 1.13 2.95 0 4.22-2.57 5.15-5.02 5.42.39.34.74 1.01.74 2.04 0 1.47-.01 2.66-.01 3.02 0 .29.2.64.76.53A10.52 10.52 0 0 0 23.02 11.5C23.02 5.24 18.27.5 12 .5Z" />
        </svg>
    );
}

function LinkedinIcon({ size = 16 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
        </svg>
    );
}

function InstagramIcon({ size = 16 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
        </svg>
    );
}

function FacebookIcon({ size = 16 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06C2 17.08 5.66 21.23 10.44 22v-7.02H7.9v-2.92h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.92h-2.34V22C18.34 21.23 22 17.08 22 12.06Z" />
        </svg>
    );
}

function MailIcon({ size = 16 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m3 7 9 6 9-6" />
        </svg>
    );
}

const SOCIALS = [
    { icon: GithubIcon, label: "GitHub", href: "https://github.com/Siegenetics404" },
    { icon: LinkedinIcon, label: "LinkedIn", href: "https://www.linkedin.com/in/cj-franco-758683237/" },
    { icon: InstagramIcon, label: "Instagram", href: "https://www.instagram.com/si_jiiii/" },
    { icon: FacebookIcon, label: "Facebook", href: "https://www.facebook.com/cjfranco4" },
    {
        icon: MailIcon,
        label: "Email",
        href: "https://mail.google.com/mail/?view=cm&fs=1&to=franco.cj03@gmail.com&su=Let's%20Work%20Together&body=Hi%20CJ,%20I%20would%20like%20to%20discuss%20a%20project...",
    },
];

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

const MODES = [
    { id: "light", label: "Light", icon: Sun },
    { id: "dark", label: "Dark", icon: Moon },
    { id: "system", label: "System", icon: Monitor },
];

// Static info — no backend, edit these directly.
const NAME = "CJ Franco";
const EMAIL = "franco.cj03@gmail.com";

export default function UserSidebar({ active, children }) {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [mode, setMode] = useState(() => localStorage.getItem("theme-mode") || "system");
    const [socialsOpen, setSocialsOpen] = useState(false);
    const footerRef = React.useRef(null);
    const closeMobile = () => setMobileOpen(false);

    // Close the socials popover on outside click.
    useEffect(() => {
        if (!socialsOpen) return;
        const handleClick = (e) => {
            if (footerRef.current && !footerRef.current.contains(e.target)) {
                setSocialsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, [socialsOpen]);

    // Apply the resolved theme to <html> and persist the user's choice
    useEffect(() => {
        const root = document.documentElement;
        const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const isDark = mode === "dark" || (mode === "system" && systemDark);

        root.classList.toggle("dark", isDark);
        localStorage.setItem("theme-mode", mode);

        if (mode === "system") {
            const mq = window.matchMedia("(prefers-color-scheme: dark)");
            const handler = (e) => root.classList.toggle("dark", e.matches);
            mq.addEventListener("change", handler);
            return () => mq.removeEventListener("change", handler);
        }
    }, [mode]);

    // Wave-reveal transition when switching modes — falls back to an
    // instant switch on browsers without the View Transitions API.
    const handleModeChange = (id, event) => {
        const x = event.clientX;
        const y = event.clientY;

        if (!document.startViewTransition) {
            setMode(id);
            return;
        }

        document.documentElement.style.setProperty("--wave-x", `${x}px`);
        document.documentElement.style.setProperty("--wave-y", `${y}px`);
        document.documentElement.classList.add("wave-transition");

        const transition = document.startViewTransition(() => {
            setMode(id);
        });

        transition.finished.finally(() => {
            document.documentElement.classList.remove("wave-transition");
        });
    };

    // Shared between the desktop sidebar and the mobile dropdown.
    const NavGroups = () => (
        <div className="flex flex-col gap-5">
            {NAV_GROUPS.map((group) => (
                <nav key={group.title}>
                    <p className="text-[10px] font-medium text-neutral-400 dark:text-neutral-600 uppercase tracking-wide mb-1.5 px-2">
                        {group.title}
                    </p>
                    <ul className="space-y-0.5">
                        {group.items.map((item) => {
                            const isActive = item.id === active;
                            const isResume = item.id === "resume";

                            if (isResume) {
                                return (
                                    <li key={item.id} className="group relative">
                                        <a href={resumeFile}
                                            download="Cj Franco - Resume.pdf"
                                            onClick={closeMobile}
                                            className={`flex items-center justify-between px-2 py-1.5 text-sm rounded-md transition-colors ${isActive
                                                ? "bg-neutral-950 text-white dark:bg-white dark:text-neutral-950"
                                                : "text-neutral-600 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white"
                                                }`}
                                        >
                                            {item.label}
                                            <Download
                                                size={14}
                                                className={`opacity-0 group-hover:opacity-100 transition-opacity ${isActive
                                                    ? "text-white/70 dark:text-neutral-950/70"
                                                    : "text-neutral-400 group-hover:text-neutral-950 dark:text-neutral-400 dark:group-hover:text-white"
                                                    }`}
                                            />
                                        </a>

                                        {/* Tooltip — lets users know clicking downloads the file */}
                                        <span className="absolute left-1/2 -translate-x-1/4 bottom-full mb-2 whitespace-nowrap bg-neutral-950 text-white  text-[10px] font-normal px-2 py-1 rounded-md opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all pointer-events-none z-10">
                                            Click to download resume
                                        </span>
                                    </li>
                                );
                            }

                            return (
                                <li key={item.id}>
                                    <Link
                                        to={item.path}
                                        onClick={closeMobile}
                                        className={`block px-2 py-1.5 text-sm rounded-md transition-colors ${isActive
                                            ? "bg-neutral-950 text-white dark:bg-white dark:text-neutral-950"
                                            : "text-neutral-600 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white"
                                            }`}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            ))
            }

            {/* Mode toggle */}
            <div>
                <p className="text-[10px] font-medium text-neutral-400 dark:text-neutral-600 uppercase tracking-wide mb-1.5 px-2">
                    Mode
                </p>
                <div className="flex items-center gap-1 border border-neutral-200 dark:border-neutral-800 rounded-md p-1 mx-2">
                    {MODES.map(({ id, label, icon: Icon }) => {
                        const isSelected = mode === id;
                        return (
                            <button
                                key={id}
                                type="button"
                                onClick={(e) => handleModeChange(id, e)}
                                aria-label={label}
                                aria-pressed={isSelected}
                                className={`flex-1 flex items-center justify-center py-1.5 rounded transition-colors ${isSelected
                                    ? "bg-neutral-950 text-white dark:bg-white dark:text-neutral-950"
                                    : "text-neutral-500 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white"
                                    }`}
                            >
                                <Icon size={14} />
                            </button>
                        );
                    })}
                </div>
            </div>
        </div >
    );

    // Footer — avatar + name/email, click to reveal a "Connect with me" popover.
    const Footer = () => (
        <div ref={footerRef} className="relative border-t border-neutral-200 dark:border-neutral-800 pt-3 px-2">
            {/* Popover — opens upward above the footer button */}
            <div
                className={`absolute left-0 right-0 bottom-full mb-2 origin-bottom bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg shadow-lg overflow-hidden transition-all duration-150 ${socialsOpen
                    ? "opacity-100 scale-100 pointer-events-auto"
                    : "opacity-0 scale-95 pointer-events-none"
                    }`}
            >
                <p className="text-[10px] font-medium text-neutral-400 dark:text-neutral-600 uppercase tracking-wide px-3 pt-2.5 pb-1.5">
                    Connect with me
                </p>
                <ul className="pb-1.5">
                    {SOCIALS.map(({ icon: Icon, label, href }) => (
                        <li key={label}>
                            <a
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => {
                                    setSocialsOpen(false);
                                    closeMobile();
                                }}
                                className="flex items-center justify-between gap-2 px-3 py-1.5 text-sm text-neutral-600 hover:text-neutral-950 hover:bg-neutral-50 dark:text-neutral-400 dark:hover:text-white dark:hover:bg-neutral-800/60 transition-colors"
                            >
                                <span className="flex items-center gap-2">
                                    <Icon size={15} />
                                    {label}
                                </span>
                                <ArrowUpRight size={12} className="opacity-50" />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Trigger */}
            <button
                type="button"
                onClick={() => setSocialsOpen((v) => !v)}
                aria-expanded={socialsOpen}
                aria-label="Connect with me"
                className="w-full flex items-center min-h-[2.25rem] gap-2.5 rounded-md px-2 py-1.5 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors"
            >
                <img
                    src={logo}
                    alt={NAME}
                    className="w-9 h-9 rounded-full object-cover shrink-0 ring-1 ring-neutral-200 dark:ring-neutral-800"
                />
                <div className="min-w-0 flex-1 flex flex-col justify-center text-left">
                    <p className="text-sm font-medium text-neutral-950 dark:text-white truncate leading-snug">
                        {NAME}
                    </p>
                    <p className="text-xs text-neutral-700 dark:text-neutral-300 truncate leading-snug">
                        {EMAIL}
                    </p>
                </div>
                <ChevronsUpDown size={14} className="shrink-0 text-neutral-400 dark:text-neutral-600" />
            </button>
        </div>
    );

    return (
        <div className="h-screen w-full bg-white text-neutral-950 dark:bg-neutral-950 dark:text-white flex flex-col md:flex-row overflow-hidden">
            {/* Mobile top bar + dropdown */}
            <div className="md:hidden relative shrink-0 z-40">
                <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 relative z-10">
                    <Link to="/" onClick={closeMobile} className="flex items-center gap-2">
                        <img src={logo} alt="Logo" className="w-7 h-7 rounded-md object-cover" />
                        <span className="text-lg font-semibold tracking-tight">{NAME}</span>
                    </Link>
                    <button
                        onClick={() => setMobileOpen((v) => !v)}
                        aria-label={mobileOpen ? "Close menu" : "Open menu"}
                        className="p-1 text-neutral-600 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white transition-colors"
                    >
                        {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>

                {/* Dropdown panel — expands downward below the top bar */}
                <div
                    className={`absolute left-0 right-0 top-full bg-white dark:bg-neutral-950 border-b border-neutral-200 dark:border-neutral-800 shadow-sm overflow-hidden transition-all duration-300 ease-out ${mobileOpen ? "max-h-[75vh]" : "max-h-0"
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
            <aside className="hidden md:flex w-64 shrink-0 bg-white dark:bg-neutral-950 border-r border-neutral-200 dark:border-neutral-800 px-6 py-8 flex-col justify-between overflow-y-auto">
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