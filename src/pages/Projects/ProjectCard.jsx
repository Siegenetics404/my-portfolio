import { useState, useRef } from "react";
import { Share2, Globe, ImageOff } from "lucide-react";

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
        href: "https://hocu-main.choros.biz/",
        status: "pending",
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

export default function ProjectCard() {
    const [toastMessage, setToastMessage] = useState(null);
    const toastTimer = useRef(null);

    const showToast = (message) => {
        setToastMessage(message);
        clearTimeout(toastTimer.current);
        toastTimer.current = setTimeout(() => setToastMessage(null), 2000);
    };

    const handleShare = async (project) => {
        if (project.status === "ongoing") {
            showToast("Under development");
            return;
        }
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
            {/* Section title */}
            <h2 className="text-sm font-medium tracking-tight text-neutral-950 dark:text-white border-b border-neutral-200 dark:border-neutral-800 pb-4">
                Featured Projects
            </h2>

            {/* Project cards — one per row */}
            <div className="flex flex-col gap-4 mt-8">
                {PROJECTS.map((project) => {
                    const status = STATUS_STYLES[project.status];
                    const isOngoing = project.status === "ongoing";
                    const isPending = project.status === "pending";

                    return (
                        <div
                            key={project.name}
                            className="group relative flex flex-col sm:flex-row border border-neutral-200 dark:border-neutral-800 rounded-lg overflow-hidden hover:border-neutral-950 dark:hover:border-neutral-600 transition-colors"
                        >
                            {/* Landing page image / fallback */}
                            <div className="w-full sm:w-56 h-40 sm:h-auto shrink-0 bg-neutral-50 dark:bg-neutral-900 border-b sm:border-b-0 sm:border-r border-neutral-200 dark:border-neutral-800">
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={`${project.name} landing page`}
                                        className="w-full h-full object-cover"
                                    />
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
                                            className={`relative flex items-center gap-1 text-[10px] font-medium border rounded-full px-2 py-0.5 whitespace-nowrap shrink-0 ${status.className}`}
                                        >
                                            <span className={`w-1.5 h-1.5 rounded-full ${status.dot}`} />
                                            {status.label}

                                            {isPending && (
                                                <span className="absolute -top-5 right-0 whitespace-nowrap bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 text-[10px] font-normal px-2 py-1 rounded-md opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all pointer-events-none z-10">
                                                    Server on hold
                                                </span>
                                            )}
                                        </span>
                                    </div>
                                    <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed mt-2">
                                        {project.description}
                                    </p>
                                </div>

                                <div className="flex items-center gap-4">
                                    <button
                                        type="button"
                                        onClick={() => handleShare(project)}
                                        className="flex items-center gap-1.5 text-xs text-neutral-500 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors"
                                    >
                                        <Share2 size={13} />
                                        Share
                                    </button>

                                    {isOngoing ? (
                                        <button
                                            type="button"
                                            onClick={() => showToast("Under development")}
                                            className="flex items-center gap-1.5 text-xs text-neutral-500 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors"
                                        >
                                            <Globe size={13} />
                                            Website
                                        </button>
                                    ) : (

                                        <a href={project.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1.5 text-xs text-neutral-500 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors"
                                        >
                                            <Globe size={13} />
                                            Website
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Toast — link copied, or under-development notice for ongoing projects */}
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