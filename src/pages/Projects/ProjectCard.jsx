import { useState, useRef } from "react";
import { useOutletContext } from "react-router-dom";
import { Share2, ImageOff, Link2, Lock, ArrowRight } from "lucide-react";

// Import screenshots as you get them — leave the `image` field out
// (or set it to null) for projects that don't have one yet.
import projectPulse from "../../assets/images/projects/project-pulse.png";
import daverDaver from "../../assets/images/projects/daver.png";
import choros from "../../assets/images/projects/choros.png";
import hocu from "../../assets/images/projects/hocu.png";
import wirralKitchens from "../../assets/images/projects/wirral-kitchens.png";
import nucleus from "../../assets/images/projects/nucleus.png";
import morphic from "../../assets/images/projects/morphic.png";
import ycom from "../../assets/images/projects/ycom.png";
import shepton from "../../assets/images/projects/shepton.png";

import LprojectPulse from "../../assets/images/projects/landing/pulse.webp";
import LdaverDaver from "../../assets/images/projects/landing/daver.webp";
import Lchoros from "../../assets/images/projects/landing/choros.webp";
import Lhocu from "../../assets/images/projects/landing/hocu.webp";
import LwirralKitchens from "../../assets/images/projects/landing/wirral.webp";
import Lnucleus from "../../assets/images/projects/landing/nucleus.webp";
import Lmorphic from "../../assets/images/projects/landing/morphic.webp";
import Lycom from "../../assets/images/projects/landing/ycom.webp";
import Lshepton from "../../assets/images/projects/landing/shepton.webp";

const PROJECTS = [
    {
        name: "Choros.io",
        logo: choros,
        image: Lchoros,
        description:
            "An AI-powered website builder platform for small trade businesses, collaboratively built — contributed front-end pages and features.",
        href: "https://choros.io",
        status: "active",
    },
    {
        name: "Daver & Daver",
        logo: daverDaver,
        image: LdaverDaver,
        description:
            "An AI-powered legal document application for drafting, reviewing, and managing legal paperwork.",
        href: "https://legal-app.choros.io/",
        status: "pending",
    },
    {
        name: "Project Pulse",
        logo: projectPulse,
        image: LprojectPulse,
        description:
            "A project management platform for development and marketing teams to plan, track, and stay in sync.",
        href: "https://projectpulse.laravel.cloud/",
        status: "pending",
    },
    {
        name: "HOCU",
        logo: hocu,
        image: Lhocu,
        description:
            "A plumbing company site built for fast service booking and clear customer contact.",
        href: "https://hocu.co.uk/",
        status: "active",
    },
    {
        name: "Wirral Kitchens & Interiors",
        logo: wirralKitchens,
        image: LwirralKitchens,
        description:
            "A luxury kitchen and interior design showcase highlighting premium craftsmanship and finishes.",
        href: "https://wirralkitcheninteriors.co.uk/",
        status: "active",
    },
    {
        name: "Nucleus",
        logo: nucleus,
        image: Lnucleus,
        description:
            "A self-learning AI tool that adapts and personalizes based on how users interact with it.",
        href: "https://nucleus.ai",
        status: "ongoing",
    },
    {
        name: "Morphic",
        logo: morphic,
        image: Lmorphic,
        description:
            "An AI-powered image referencing tool for gathering and organizing visual inspiration.",
        href: "https://morphic.app",
        status: "ongoing",
    },
    {
        name: "YCOM",
        logo: ycom,
        image: Lycom,
        description:
            "A finance platform focused on forex insights, market data, and trading resources.",
        href: "https://ycom.laravel.cloud",
        status: "pending",
    },
    {
        name: "Shepton Judo Club",
        logo: shepton,
        image: Lshepton,
        description:
            "A site for a UK judo club, built to showcase classes, schedules, and membership info for local members.",
        href: "https://sheptonjudo.choros.io/",
        status: "active",
    },
];

const STATUS_STYLES = {
    active: {
        label: "Active",
        className: "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-900",
        dot: "bg-emerald-500",
    },
    pending: {
        label: "Pending",
        className: "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/40 dark:text-amber-400 dark:border-amber-900",
        dot: "bg-amber-500",
    },
    ongoing: {
        label: "Ongoing",
        className: "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/40 dark:text-blue-400 dark:border-blue-900",
        dot: "bg-blue-500",
    },
};

// Locked statuses (anything that isn't live) share one message set, same
// as the homepage Featured Projects cards.
const TOAST_MESSAGES = {
    pending: "Server on hold",
    ongoing: "Under development",
};

// Same decisive curve used everywhere else on the site (Projects.jsx,
// Testimonial.jsx, Home/Index.jsx) — kept identical so this page's
// motion feels like the same system, not a separate design.
const PREMIUM_EASE = "cubic-bezier(0.16,1,0.3,1)";

export default function ProjectCard() {
    const { playHover, playClick, playError } = useOutletContext();

    const [toastMessage, setToastMessage] = useState(null);
    const [errorCard, setErrorCard] = useState(null);
    const toastTimer = useRef(null);
    const errorTimer = useRef(null);

    const showToast = (message) => {
        setToastMessage(message);
        clearTimeout(toastTimer.current);
        toastTimer.current = setTimeout(() => setToastMessage(null), 2000);
    };

    const triggerError = (projectName) => {
        setErrorCard(projectName);
        clearTimeout(errorTimer.current);
        errorTimer.current = setTimeout(() => setErrorCard(null), 450);
    };

    // Centralized so every locked/dead-end interaction — the Share button
    // on a non-live project, and the locked status button — plays the
    // same error cue instead of a normal click, same reasoning as the
    // homepage Featured Projects cards.
    const lockedAction = (project) => {
        playError();
        showToast(TOAST_MESSAGES[project.status]);
        triggerError(project.name);
    };

    const handleShare = async (project) => {
        if (project.status !== "active") {
            lockedAction(project);
            return;
        }

        playClick();

        if (navigator.share) {
            try {
                await navigator.share({ title: project.name, url: project.href });
            } catch {
                // user cancelled the share sheet — no-op
            }
            return;
        }
        try {
            await navigator.clipboard.writeText(project.href);
            showToast("Link copied");
        } catch {
            // clipboard blocked — silently ignore
        }
    };

    return (
        <section className="mt-16">
            {/* Local keyframes for the "locked" shake — identical to the
                homepage Featured Projects cards, kept in sync on purpose. */}
            <style>{`
                @keyframes project-card-shake {
                    10%, 90% { transform: translate3d(-1px, 0, 0); }
                    20%, 80% { transform: translate3d(2px, 0, 0); }
                    30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
                    40%, 60% { transform: translate3d(4px, 0, 0); }
                }
                .animate-project-shake {
                    animation: project-card-shake 0.45s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
                }
            `}</style>

            {/* Section title */}
            <h2 className="text-sm font-medium tracking-tight text-neutral-950 dark:text-white border-b border-neutral-200 dark:border-neutral-800 pb-4">
                Featured Projects
            </h2>

            {/* Project cards — 2 per row, image-forward like the homepage grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
                {PROJECTS.map((project) => {
                    const status = STATUS_STYLES[project.status];
                    const isLive = project.status === "active";
                    const isErroring = errorCard === project.name;

                    return (
                        <div
                            key={project.name}
                            style={{ transitionTimingFunction: PREMIUM_EASE }}
                            className={`group relative flex flex-col rounded-lg border overflow-hidden
                                transition-[transform,box-shadow,border-color] duration-500 will-change-transform
                                hover:-translate-y-1 hover:shadow-xl hover:shadow-neutral-950/10 dark:hover:shadow-black/50
                                ${isErroring
                                    ? "animate-project-shake border-red-400/80 dark:border-red-800/80"
                                    : "border-neutral-200 dark:border-neutral-800 hover:border-neutral-950 dark:hover:border-neutral-600"
                                }`}
                        >
                            {/* Landing page preview / fallback */}
                            <div className="relative aspect-[16/10] overflow-hidden bg-neutral-50 dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800">
                                {project.image ? (
                                    <>
                                        <div className="absolute top-0 inset-x-0 h-5 flex items-center gap-1.5 px-2.5 bg-neutral-50/80 dark:bg-neutral-950/80 backdrop-blur-sm z-10">
                                            <span className="w-1.5 h-1.5 rounded-full bg-red-400/60" />
                                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400/60" />
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/60" />
                                        </div>

                                        <img
                                            src={project.image}
                                            alt={`${project.name} landing page`}
                                            loading="lazy"
                                            style={{ transitionTimingFunction: PREMIUM_EASE }}
                                            className={`w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.06] ${isLive ? "" : "grayscale-[30%] opacity-90"
                                                }`}
                                        />

                                        {/* Sheen sweep on hover — same signature touch as the homepage cards */}
                                        <div
                                            aria-hidden="true"
                                            style={{ transitionTimingFunction: PREMIUM_EASE }}
                                            className="pointer-events-none absolute inset-0 -translate-x-[120%] group-hover:translate-x-[120%] bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-[-20deg] transition-transform duration-700 dark:via-white/10"
                                        />

                                        {/* Red flash on a locked click */}
                                        <div
                                            aria-hidden="true"
                                            className={`pointer-events-none absolute inset-0 bg-red-500/20 transition-opacity duration-300 ${isErroring ? "opacity-100" : "opacity-0"
                                                }`}
                                        />
                                    </>
                                ) : (
                                    <div className="w-full h-full flex flex-col items-center justify-center gap-2 text-neutral-300 dark:text-neutral-700">
                                        <ImageOff size={22} />
                                        <span className="text-[10px] uppercase tracking-wide">
                                            No preview
                                        </span>
                                    </div>
                                )}
                            </div>

                            {/* Content */}
                            <div className="flex-1 p-5 flex flex-col justify-between gap-4">
                                <div>
                                    <div className="flex items-center justify-between gap-2">
                                        <div className="flex items-center gap-2 min-w-0">
                                            <img
                                                src={project.logo}
                                                alt={`${project.name} logo`}
                                                className="w-6 h-6 rounded-md object-cover border border-neutral-200 dark:border-neutral-800 shrink-0"
                                            />
                                            <h3 className="text-sm font-medium text-neutral-950 dark:text-white truncate">
                                                {project.name}
                                            </h3>
                                        </div>

                                        <span
                                            className={`flex items-center gap-1 text-[10px] font-medium border rounded-full px-2 py-0.5 whitespace-nowrap shrink-0 transition-colors duration-300 ${isErroring
                                                ? "bg-red-50 text-red-700 border-red-200 dark:bg-red-950/40 dark:text-red-400 dark:border-red-900"
                                                : status.className
                                                }`}
                                        >
                                            <span className={`w-1.5 h-1.5 rounded-full ${isErroring ? "bg-red-500" : status.dot}`} />
                                            {isErroring ? "Unavailable" : status.label}
                                        </span>
                                    </div>
                                    <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed mt-2">
                                        {project.description}
                                    </p>
                                </div>

                                <div className="flex items-center gap-2.5 pt-3 border-t border-neutral-100 dark:border-neutral-900">
                                    {/* Secondary action — playClick when it actually
                                        shares/copies (isLive), playError when locked;
                                        both are handled inside handleShare itself. */}
                                    <button
                                        type="button"
                                        onMouseEnter={playHover}
                                        onClick={() => handleShare(project)}
                                        className="inline-flex items-center gap-1.5 px-3 py-2 rounded-md border border-neutral-200 dark:border-neutral-800 text-xs font-medium text-neutral-600 dark:text-neutral-400 transition-colors duration-300 hover:border-neutral-950 dark:hover:border-neutral-600 hover:text-neutral-950 dark:hover:text-white"
                                    >
                                        {isLive ? <Share2 size={13} /> : <Link2 size={13} />}
                                        Share
                                    </button>

                                    {/* Primary action */}
                                    {isLive ? (
                                        <a
                                            href={project.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onMouseEnter={playHover}
                                            onClick={playClick}
                                            style={{ transitionTimingFunction: PREMIUM_EASE }}
                                            className="group/btn inline-flex flex-1 items-center justify-center gap-1.5 px-3 py-2 rounded-md bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 text-xs font-medium transition-[opacity,transform] duration-300 hover:opacity-90 active:scale-[0.98]"
                                        >
                                            Visit site
                                            <ArrowRight
                                                size={13}
                                                style={{ transitionTimingFunction: PREMIUM_EASE }}
                                                className="transition-transform duration-500 group-hover/btn:translate-x-1"
                                            />
                                        </a>
                                    ) : (
                                        <button
                                            type="button"
                                            onMouseEnter={playHover}
                                            onClick={() => lockedAction(project)}
                                            className="inline-flex flex-1 items-center justify-center gap-1.5 px-3 py-2 rounded-md border border-dashed border-neutral-300 dark:border-neutral-700 text-xs font-medium text-neutral-400 dark:text-neutral-600 transition-colors duration-300 hover:border-neutral-950 dark:hover:border-neutral-500 hover:text-neutral-600 dark:hover:text-neutral-300"
                                        >
                                            <Lock size={12} />
                                            {status.label}
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Toast — link copied, or locked-status notice */}
            <div
                className={`fixed bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] sm:w-auto max-w-xs text-center bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 text-sm px-4 py-2.5 rounded-lg shadow-lg transition-all duration-300 z-50 ${toastMessage
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2 pointer-events-none"
                    }`}
            >
                {toastMessage}
            </div>
        </section>
    );
}