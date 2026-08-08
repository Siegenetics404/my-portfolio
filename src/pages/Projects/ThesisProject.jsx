import { useState, useRef } from "react";
import { useOutletContext } from "react-router-dom";
import { ImageOff, Share2, ArrowRight } from "lucide-react";
import murciaLogo from "../../assets/images/projects/murcia-logo.png";
import thesisImage from "../../assets/images/projects/landing/thesis.webp";

const THESIS = {
    title: "Development of GIS-Based Cemetery Information System for Interactive Mapping",
    role: "Lead Developer",
    logo: murciaLogo,
    image: thesisImage,
    href: "https://www.murcianewpubliccemetery.com",
    description:
        "A Geographic Information System built to digitally map and manage cemetery records. It enables interactive, location-based search and visualization of burial plots in place of manual, paper-based records.",
};

// Same decisive curve used across the rest of the site (Projects.jsx,
// ProjectCard.jsx, Testimonial.jsx) — kept identical so this card's
// motion matches everywhere else.
const PREMIUM_EASE = "cubic-bezier(0.16,1,0.3,1)";

export default function ThesisProject() {
    const { playHover, playClick } = useOutletContext();

    const [toastVisible, setToastVisible] = useState(false);
    const toastTimer = useRef(null);

    const showToast = () => {
        setToastVisible(true);
        clearTimeout(toastTimer.current);
        toastTimer.current = setTimeout(() => setToastVisible(false), 2000);
    };

    const handleShare = async () => {
        playClick();

        if (navigator.share) {
            try {
                await navigator.share({
                    title: THESIS.title,
                    url: THESIS.href,
                });
            } catch {
                // User cancelled
            }
            return;
        }

        try {
            await navigator.clipboard.writeText(THESIS.href);
            showToast();
        } catch {
            // Clipboard unavailable
        }
    };

    return (
        <section className="relative mt-16">
            {/* Section title */}
            <h2 className="border-b border-neutral-200 pb-4 text-sm font-medium tracking-tight text-neutral-950 dark:border-neutral-800 dark:text-white">
                Thesis Project
            </h2>

            {/* Featured card */}
            <div
                style={{ transitionTimingFunction: PREMIUM_EASE }}
                className="group mt-8 flex flex-col overflow-hidden rounded-lg border border-neutral-900 bg-neutral-950 sm:flex-row dark:border-neutral-200 dark:bg-white
                    transition-[transform,box-shadow] duration-500 will-change-transform
                    hover:-translate-y-1 hover:shadow-xl hover:shadow-neutral-950/20 dark:hover:shadow-black/10"
            >
                {/* Image */}
                <div className="relative h-48 w-full shrink-0 overflow-hidden border-b border-neutral-800 bg-neutral-900 sm:h-auto sm:w-72 sm:border-b-0 sm:border-r dark:border-neutral-200 dark:bg-neutral-100">
                    {THESIS.image ? (
                        <>
                            <div className="absolute top-0 inset-x-0 h-5 flex items-center gap-1.5 px-2.5 bg-neutral-950/70 dark:bg-white/70 backdrop-blur-sm z-10">
                                <span className="w-1.5 h-1.5 rounded-full bg-red-400/60" />
                                <span className="w-1.5 h-1.5 rounded-full bg-amber-400/60" />
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/60" />
                            </div>

                            <img
                                src={THESIS.image}
                                alt={THESIS.title}
                                loading="lazy"
                                style={{ transitionTimingFunction: PREMIUM_EASE }}
                                className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.06]"
                            />

                            {/* Sheen sweep — same signature touch as the other project cards */}
                            <div
                                aria-hidden="true"
                                style={{ transitionTimingFunction: PREMIUM_EASE }}
                                className="pointer-events-none absolute inset-0 -translate-x-[120%] group-hover:translate-x-[120%] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg] transition-transform duration-700"
                            />
                        </>
                    ) : (
                        <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-neutral-500">
                            <ImageOff size={22} />
                            <span className="text-[10px] uppercase tracking-wide">
                                No preview
                            </span>
                        </div>
                    )}
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col justify-center gap-3 p-6">
                    <div className="flex items-center gap-2">
                        <img
                            src={THESIS.logo}
                            alt="Logo"
                            className="h-6 w-6 shrink-0 rounded-md object-cover"
                        />

                        <span className="w-fit rounded-full bg-white px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-neutral-950 dark:bg-neutral-950 dark:text-white">
                            {THESIS.role}
                        </span>
                    </div>

                    <h3 className="text-base font-semibold leading-snug tracking-tight text-white dark:text-neutral-950 sm:text-lg">
                        {THESIS.title}
                    </h3>

                    <p className="text-xs leading-relaxed text-neutral-300 dark:text-neutral-600 sm:text-sm">
                        {THESIS.description}
                    </p>

                    <div className="mt-2 flex items-center gap-2.5">
                        {/* Secondary action — always live (share works
                            regardless of the project's own status), so it
                            always gets a normal click sound, no locked
                            state to account for here. */}
                        <button
                            type="button"
                            onMouseEnter={playHover}
                            onClick={handleShare}
                            className="inline-flex items-center gap-1.5 rounded-md border border-neutral-700 px-3 py-2 text-xs font-medium text-neutral-300 transition-colors duration-300 hover:border-neutral-400 hover:text-white dark:border-neutral-300 dark:text-neutral-600 dark:hover:border-neutral-500 dark:hover:text-neutral-950"
                        >
                            <Share2 size={13} />
                            Share
                        </button>

                        {/* Primary action — inverted against the card, same
                            logic as the ROLE pill: light chip on the dark
                            card, dark chip on the light (dark-mode) card. */}
                        <a
                            href={THESIS.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            onMouseEnter={playHover}
                            onClick={playClick}
                            style={{ transitionTimingFunction: PREMIUM_EASE }}
                            className="group/btn inline-flex items-center gap-1.5 rounded-md bg-white px-3 py-2 text-xs font-medium text-neutral-950 transition-[opacity,transform] duration-300 hover:opacity-90 active:scale-[0.98] dark:bg-neutral-950 dark:text-white"
                        >
                            Visit site
                            <ArrowRight
                                size={13}
                                style={{ transitionTimingFunction: PREMIUM_EASE }}
                                className="transition-transform duration-500 group-hover/btn:translate-x-1"
                            />
                        </a>
                    </div>
                </div>
            </div>

            {/* Toast */}
            <div
                className={`fixed bottom-6 left-1/2 z-50 w-[calc(100%-2rem)] max-w-xs -translate-x-1/2 rounded-lg bg-neutral-950 px-4 py-2.5 text-center text-sm text-white shadow-lg transition-all duration-300 dark:bg-white dark:text-neutral-950 sm:w-auto ${toastVisible
                    ? "translate-y-0 opacity-100"
                    : "pointer-events-none translate-y-2 opacity-0"
                    }`}
            >
                Link copied
            </div>
        </section>
    );
}