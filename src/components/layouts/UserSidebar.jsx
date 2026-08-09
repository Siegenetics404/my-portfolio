import React, { useState, useEffect, useRef } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import {
    Download,
    Menu,
    X,
    Sun,
    Moon,
    Monitor,
    Volume2,
    VolumeX,
    ChevronsUpDown,
    ArrowUpRight,
} from "lucide-react";
import logo from "../../assets/images/about/profile-logo.png";
import cfLogo from "../../assets/images/logo/CF-logo.png";
import cfLogoDark from "../../assets/images/logo/CF-logo-dark.png";
import resumeFile from "../../assets/files/Cj Franco - Resume.pdf";
import soundOn from "../../assets/sfx/sound-on.wav"
import hoverSound from "../../assets/sfx/hover.mp3";
import clickSound from "../../assets/sfx/click.mp3";
import errorSound from "../../assets/sfx/error.wav";


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

// Same decisive, high-polish curve used elsewhere (Projects.jsx,
// Home/Index.jsx) — kept identical so hover motion feels like one
// consistent system across the whole site.
const PREMIUM_EASE = "cubic-bezier(0.16,1,0.3,1)";

export default function UserSidebar() {
    const location = useLocation();

    // Derived from the URL instead of a manually-passed prop, so pages
    // never need to say `active="home"` — this stays correct automatically
    // as routes are added or renamed.
    const active = NAV_GROUPS
        .flatMap((group) => group.items)
        .find((item) => item.path === location.pathname)?.id;

    const [mobileOpen, setMobileOpen] = useState(false);
    const [mode, setMode] = useState(() => localStorage.getItem("theme-mode") || "system");
    const [socialsOpen, setSocialsOpen] = useState(false);
    const footerRef = React.useRef(null);
    const closeMobile = () => setMobileOpen(false);
    const [resumeModalOpen, setResumeModalOpen] = useState(false);

    // The "sound on" confirmation chime.
    const soundAudio = React.useRef(new Audio(soundOn));

    const [soundEnabled, setSoundEnabled] = useState(() => {
        return localStorage.getItem("sound-enabled") !== "false";
    });

    useEffect(() => {
        localStorage.setItem("sound-enabled", String(soundEnabled));
    }, [soundEnabled]);

    useEffect(() => {
        soundAudio.current.volume = 0.5;
        soundAudio.current.preload = "auto";
    }, []);

    // ── Hover / click sound engine ───────────────────────────────────────
    //
    // Kept deliberately simple: a couple of plain, pre-created <audio>
    // elements per sound, reused directly (no cloneNode, no re-fetching,
    // no AudioContext, no "unlock" listener). A .play() call made
    // directly inside a real onClick handler is always allowed by the
    // browser — no unlock trick is actually needed for it. An earlier
    // version of this added one anyway, and it backfired: it called
    // .pause() on the same pooled element a moment after a real click had
    // just started playing it, muting the very sound the click was
    // supposed to make. That's gone now.
    //
    // Hovering before any click on the page can still be silent the very
    // first time — that's normal browser behavior for non-click-triggered
    // audio, not a bug — but clicking plays immediately, every time.
    const POOL_SIZE = 2;

    const hoverPoolRef = useRef([]);
    const clickPoolRef = useRef([]);
    const errorPoolRef = useRef([]);
    const hoverIndexRef = useRef(0);
    const clickIndexRef = useRef(0);
    const errorIndexRef = useRef(0);

    useEffect(() => {
        hoverPoolRef.current = Array.from({ length: POOL_SIZE }, () => {
            const audio = new Audio(hoverSound);
            audio.volume = 0.25;
            audio.preload = "auto";
            return audio;
        });
        clickPoolRef.current = Array.from({ length: POOL_SIZE }, () => {
            const audio = new Audio(clickSound);
            audio.volume = 0.35;
            audio.preload = "auto";
            return audio;
        });
        errorPoolRef.current = Array.from({ length: POOL_SIZE }, () => {
            const audio = new Audio(errorSound);
            audio.volume = 0.35;
            audio.preload = "auto";
            return audio;
        });
    }, []);

    const playFromPool = (poolRef, indexRef, label) => {
        if (!soundEnabled) return;
        const pool = poolRef.current;
        if (!pool.length) return;

        const audio = pool[indexRef.current];
        indexRef.current = (indexRef.current + 1) % pool.length;

        audio.currentTime = 0;
        audio.play().catch((err) => {
            // If this still doesn't sound, open devtools and check what
            // prints here — that's the real reason, not a guess.
            console.error(`[sound] ${label} play failed:`, err.name, err.message);
        });
    };

    const playHover = () => playFromPool(hoverPoolRef, hoverIndexRef, "hover");
    const playClick = () => playFromPool(clickPoolRef, clickIndexRef, "click");
    const playError = () => playFromPool(errorPoolRef, errorIndexRef, "error");

    const playSound = () => {
        if (!soundEnabled) return;

        soundAudio.current.pause();
        soundAudio.current.currentTime = 0;
        soundAudio.current.play().catch((err) => {
            console.error("[sound] chime play failed:", err.name, err.message);
        });
    };

    const downloadResume = () => {
        const link = document.createElement("a");

        link.href = resumeFile;
        link.download = "CJ Franco - Resume.pdf";

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        setResumeModalOpen(false);
    };

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
                                    <li key={item.id}>
                                        <button
                                            type="button"
                                            onMouseEnter={playHover}
                                            onClick={() => {
                                                playClick();
                                                setResumeModalOpen(true)
                                            }}
                                            className={`block w-full rounded-md px-2 py-1.5 text-left text-sm transition-colors ${isActive
                                                ? "bg-neutral-950 text-white dark:bg-white dark:text-neutral-950"
                                                : "text-neutral-600 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white"
                                                }`}
                                        >
                                            {item.label}
                                        </button>
                                    </li>
                                );
                            }

                            return (
                                <li key={item.id}>
                                    <Link
                                        to={item.path}
                                        onClick={() => {
                                            playClick();
                                            closeMobile
                                        }}
                                        onMouseEnter={playHover}
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

            {/* Preferences */}
            <div>
                <p className="mb-1.5 px-2 text-[10px] font-medium uppercase tracking-wide text-neutral-400 dark:text-neutral-600">
                    Preferences
                </p>

                <div className="flex gap-2 px-2">
                    {/* Theme */}
                    <div className="flex flex-1 items-center gap-1 rounded-md border border-neutral-200 p-1 dark:border-neutral-800">
                        {MODES.map(({ id, label, icon: Icon }) => {
                            const isSelected = mode === id;

                            return (
                                <button
                                    key={id}
                                    type="button"
                                    onMouseEnter={playHover}
                                    onClick={(e) => {
                                        playClick();
                                        handleModeChange(id, e);
                                    }}
                                    aria-label={label}
                                    title={label}
                                    className={`flex flex-1 items-center justify-center rounded py-1.5 transition-colors ${isSelected
                                        ? "bg-neutral-950 text-white dark:bg-white dark:text-neutral-950"
                                        : "text-neutral-500 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white"
                                        }`}
                                >
                                    <Icon size={14} />
                                </button>
                            );
                        })}
                    </div>

                    {/* Sound */}
                    <div className="flex items-center rounded-md border border-neutral-200 p-1 dark:border-neutral-800">
                        <button
                            type="button"
                            onMouseEnter={playHover}
                            onClick={() => {
                                const next = !soundEnabled;

                                setSoundEnabled(next);

                                // Play confirmation only when turning sound on
                                if (next) {
                                    soundAudio.current.pause();
                                    soundAudio.current.currentTime = 0;
                                    soundAudio.current.play().catch(() => { });
                                }
                            }}
                            aria-label={soundEnabled ? "Disable sound" : "Enable sound"}
                            title={soundEnabled ? "Sound On" : "Sound Off"}
                            className={`flex items-center justify-center rounded px-3 py-1.5 transition-colors ${soundEnabled
                                ? "bg-neutral-950 text-white dark:bg-white dark:text-neutral-950"
                                : "text-neutral-500 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white"
                                }`}
                        >
                            {soundEnabled ? <Volume2 size={14} /> : <VolumeX size={14} />}
                        </button>
                    </div>
                </div>
            </div>
        </div >
    );

    // Footer — avatar + name/email, click to reveal a "Connect with me" popover.
    const Footer = () => (
        <div
            ref={footerRef}
            className="relative"
        >
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
                                onMouseEnter={playHover}
                                rel="noopener noreferrer"
                                onClick={() => {
                                    playClick();
                                    setSocialsOpen(false);
                                    closeMobile();
                                }}
                                className="group flex items-center justify-between gap-2 px-3 py-1.5 text-sm text-neutral-600 hover:text-neutral-950 hover:bg-neutral-50 dark:text-neutral-400 dark:hover:text-white dark:hover:bg-neutral-800/60 transition-colors"
                            >
                                <span className="flex items-center gap-2">
                                    <Icon size={15} />
                                    {label}
                                </span>

                                {/* Double-arrow hover — matches the flourish used on
                                    the social links in Home/Index.jsx. */}
                                <span className="relative inline-flex items-center justify-center w-3 h-3 overflow-hidden shrink-0">
                                    <ArrowUpRight
                                        size={12}
                                        className="absolute opacity-50 transition-all duration-500 group-hover:translate-x-3 group-hover:-translate-y-3 group-hover:opacity-0"
                                        style={{ transitionTimingFunction: PREMIUM_EASE }}
                                    />
                                    <ArrowUpRight
                                        size={12}
                                        aria-hidden="true"
                                        className="absolute -translate-x-3 translate-y-3 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
                                        style={{ transitionTimingFunction: PREMIUM_EASE }}
                                    />
                                </span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Trigger */}
            <button
                type="button"
                onMouseEnter={playHover}
                onClick={() => {
                    playClick();
                    setSocialsOpen(v => !v);
                }}
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
                    <Link
                        to="/"
                        onMouseEnter={playHover}
                        onClick={() => {
                            playClick();
                            closeMobile();
                        }}
                        className="flex items-center gap-2"
                    >
                        <img
                            src={cfLogo}
                            alt="CF logo"
                            className="w-7 h-7 rounded-md object-cover block dark:hidden"
                        />
                        <img
                            src={cfLogoDark}
                            alt="CF logo"
                            className="w-7 h-7 rounded-md object-cover hidden dark:block"
                        />
                        <span className="text-lg font-semibold tracking-tight">
                            {NAME}
                        </span>
                    </Link>
                    <button
                        onMouseEnter={playHover}
                        onClick={() => {
                            playClick();
                            setMobileOpen((v) => !v);
                        }}
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
            <aside className="hidden md:flex w-64 shrink-0 flex-col border-r border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950">

                {/* Header */}
                <div className="border-b border-neutral-200 dark:border-neutral-800 px-6 py-6">
                    <Link
                        to="/"
                        onMouseEnter={playHover}
                        onClick={playClick}
                        className="flex items-center gap-2 px-2 w-fit"
                    >
                        <img
                            src={cfLogo}
                            alt="CF logo"
                            className="w-7 h-7 rounded-md object-cover block dark:hidden"
                        />
                        <img
                            src={cfLogoDark}
                            alt="CF logo"
                            className="w-7 h-7 rounded-md object-cover hidden dark:block"
                        />
                        <span className="text-xl font-semibold tracking-tight">
                            {NAME}
                        </span>
                    </Link>
                </div>

                {/* Navigation */}
                <div className="flex-1 overflow-y-auto px-6 py-6">
                    <NavGroups />
                </div>

                {/* Footer */}
                <div className="border-t border-neutral-200 dark:border-neutral-800 px-6 py-4">
                    <Footer />
                </div>

            </aside>

            {/* Main content — this is the ONLY scrolling container now */}
            <div className="flex flex-1 flex-col overflow-y-auto">
                <Outlet context={{ playHover, playClick, playError, soundEnabled }} />
            </div>

            {resumeModalOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
                    onClick={() => setResumeModalOpen(false)}
                >
                    <div
                        className="w-full max-w-md rounded-xl border border-neutral-200 bg-white p-6 shadow-xl dark:border-neutral-800 dark:bg-neutral-900"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2 className="text-lg font-semibold">
                            Download Resume
                        </h2>

                        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                            You're about to download the latest PDF version of my resume.
                            Continue?
                        </p>

                        <div className="mt-6 flex justify-end gap-3">
                            <button
                                onClick={() => {
                                    playClick();
                                    setResumeModalOpen(false);
                                }}
                                className="rounded-md border border-neutral-200 px-4 py-2 text-sm hover:bg-neutral-50 dark:border-neutral-700 dark:hover:bg-neutral-800"
                            >
                                Cancel
                            </button>

                            <button
                                onClick={() => {
                                    playClick();
                                    downloadResume();
                                }}
                                className="rounded-md bg-neutral-950 px-4 py-2 text-sm text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-950"
                            >
                                Download Resume
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}