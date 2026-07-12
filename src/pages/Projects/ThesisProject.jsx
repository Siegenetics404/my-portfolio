import { useState, useRef } from "react";
import { ImageOff, Share2, Globe } from "lucide-react";
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

export default function ThesisProject() {
    const [toastVisible, setToastVisible] = useState(false);
    const toastTimer = useRef(null);

    const showToast = () => {
        setToastVisible(true);
        clearTimeout(toastTimer.current);
        toastTimer.current = setTimeout(() => setToastVisible(false), 2000);
    };

    const handleShare = async () => {
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
            <div className="mt-8 flex flex-col overflow-hidden rounded-lg border border-neutral-900 bg-neutral-950 sm:flex-row dark:border-neutral-200 dark:bg-white">
                {/* Image */}
                <div className="h-48 w-full shrink-0 border-b border-neutral-800 bg-neutral-900 sm:h-auto sm:w-72 sm:border-b-0 sm:border-r dark:border-neutral-200 dark:bg-neutral-100">
                    {THESIS.image ? (
                        <img
                            src={THESIS.image}
                            alt={THESIS.title}
                            className="h-full w-full object-cover"
                        />
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

                    <div className="mt-1 flex items-center gap-4">
                        <button
                            type="button"
                            onClick={handleShare}
                            className="flex items-center gap-1.5 text-xs text-neutral-300 transition-colors hover:text-white dark:text-neutral-600 dark:hover:text-neutral-950"
                        >
                            <Share2 size={13} />
                            Share
                        </button>

                        <a
                            href={THESIS.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-xs text-neutral-300 transition-colors hover:text-white dark:text-neutral-600 dark:hover:text-neutral-950"
                        >
                            <Globe size={13} />
                            Website
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