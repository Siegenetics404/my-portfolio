import { useState, useRef } from "react";
import { ImageOff, Share2, Globe } from "lucide-react";
import murciaLogo from "../../assets/images/projects/murcia-logo.png";
import thesisImage from "../../assets/images/projects/landing/thesis.webp";

// Add a screenshot/map preview here once you have one.
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
                await navigator.share({ title: THESIS.title, url: THESIS.href });
            } catch {
                // user cancelled the share sheet — no-op
            }
            return;
        }
        try {
            await navigator.clipboard.writeText(THESIS.href);
            showToast();
        } catch {
            // clipboard blocked — silently ignore
        }
    };

    return (
        <section className="mt-16 relative">
            {/* Section title */}
            <h2 className="text-sm font-medium tracking-tight text-neutral-950 border-b border-neutral-200 pb-4">
                Thesis Project
            </h2>

            {/* Highlighted card — inverted colors to stand out from the rest */}
            <div className="mt-8 bg-neutral-950 rounded-lg overflow-hidden flex flex-col sm:flex-row">
                {/* Image / fallback */}
                <div className="w-full sm:w-72 h-48 sm:h-auto shrink-0 bg-neutral-900 border-b sm:border-b-0 sm:border-r border-neutral-800">
                    {THESIS.image ? (
                        <img
                            src={THESIS.image}
                            alt={THESIS.title}
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center gap-2 text-neutral-500">
                            <ImageOff size={22} />
                            <span className="text-[10px] uppercase tracking-wide">
                                No preview
                            </span>
                        </div>
                    )}
                </div>

                {/* Content */}
                <div className="flex-1 p-6 flex flex-col justify-center gap-3">
                    <div className="flex items-center gap-2">
                        <img
                            src={THESIS.logo}
                            alt="Logo"
                            className="w-6 h-6 rounded-md object-cover shrink-0"
                        />
                        <span className="w-fit text-[10px] font-medium uppercase tracking-wide text-neutral-950 bg-white rounded-full px-2.5 py-1">
                            {THESIS.role}
                        </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold tracking-tight text-white leading-snug">
                        {THESIS.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                        {THESIS.description}
                    </p>

                    <div className="flex items-center gap-4 mt-1">
                        <button
                            type="button"
                            onClick={handleShare}
                            className="flex items-center gap-1.5 text-xs text-neutral-300 hover:text-white transition-colors"
                        >
                            <Share2 size={13} />
                            Share
                        </button>
                        <a
                            href={THESIS.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-xs text-neutral-300 hover:text-white transition-colors"
                        >
                            <Globe size={13} />
                            Website
                        </a>
                    </div>
                </div>
            </div>

            {/* Toast — shown when the link is copied via the fallback share */}
            <div
                className={`fixed bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] sm:w-auto max-w-xs text-center bg-neutral-950 text-white text-sm px-4 py-2.5 rounded-lg shadow-lg transition-all duration-300 z-50 ${toastVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-2 pointer-events-none"
                    }`}
            >
                Link copied
            </div>
        </section>
    );
}