import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { Play, X } from "lucide-react";
import ethanAvatar from "../../assets/images/reference/Ethan.webp";
import tomAvatar from "../../assets/images/reference/Tom.webp";
import ethanVideo from "../../assets/videos/Ethan-Testimonial.webm";
import tomVideo from "../../assets/videos/Tom-Testimonial.webm";

const RECOMMENDATIONS = [
    {
        name: "Tomas Tovey",
        title: "Founder of Choros.io & Entrepreneur",
        avatar: tomAvatar,
        video: tomVideo,
        summary:
            "CJ is a fantastic communicator and an exceptionally skilled developer. Throughout his time at Choros.io, he consistently delivered high-quality work, completing projects on or ahead of schedule. His ability to collaborate with the team was phenomenal, making him a reliable and valued contributor. CJ designed custom, high-performing websites for our marketing clients, with a strong focus on SEO and delivering measurable results. His professionalism, technical expertise, and dedication made a significant impact on our projects.",
    },
    {
        name: "Ethan Boland-White",
        title: "Co-founder of Choros.io & Shepton Judo Club Owner",
        avatar: ethanAvatar,
        video: ethanVideo,
        summary:
            "CJ Franco was fantastic to work with over nearly a year of collaboration. He contributed to websites, SEO, landing pages, and complex web applications, consistently delivering high-quality work on time. He was reliable, professional, and always met deadlines. I would gladly work with him again and highly recommend him to any tech startup or company looking for a skilled and dependable developer.",
    },
];

// Same decisive curve used across the rest of the site (Projects.jsx,
// ProjectCard.jsx, Testimonial.jsx, ThesisProject.jsx).
const PREMIUM_EASE = "cubic-bezier(0.16,1,0.3,1)";

export default function Recommendations() {
    const { playHover, playClick } = useOutletContext();

    const [activeVideo, setActiveVideo] = useState(null);

    return (
        <section className="mt-8">
            {/* Section title */}
            <h2 className="text-sm font-medium tracking-tight text-neutral-950 dark:text-white border-b border-neutral-200 dark:border-neutral-800 pb-4">
                <span className="font-mono text-neutral-400 dark:text-neutral-600 mr-2">01 —</span>
                Recommendations
            </h2>

            {/* Quote-first cards — the card itself isn't a click target here
                (unlike the homepage Testimonial.jsx teaser, which is a whole
                <button>), so it keeps a static border and no sfx. Only
                "Watch video" is interactive, so that's the one thing that
                gets hover motion and sound. */}
            <div className="flex flex-col gap-4 mt-8">
                {RECOMMENDATIONS.map((r) => (
                    <div
                        key={r.name}
                        className="relative border border-neutral-200 dark:border-neutral-800 rounded-lg p-5 sm:p-6 overflow-hidden"
                    >
                        <svg
                            width="72"
                            height="72"
                            viewBox="0 0 24 24"
                            className="absolute -top-3 -right-2 text-orange-200/50 dark:text-orange-900/40"
                            fill="currentColor"
                        >
                            <path d="M9.5 8C7 8 5 10 5 12.5c0 2.2 1.6 4 3.7 4.4-.3 1.4-1.4 2.5-2.7 3.1v1.5c2.8-.5 5.5-2.6 5.5-6.5V13c0-2.8-1-5-2-5Zm9 0c-2.5 0-4.5 2-4.5 4.5 0 2.2 1.6 4 3.7 4.4-.3 1.4-1.4 2.5-2.7 3.1v1.5c2.8-.5 5.5-2.6 5.5-6.5V13c0-2.8-1-5-2-5Z" />
                        </svg>

                        <p className="relative text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                            {r.summary}
                        </p>

                        <div className="relative flex items-center justify-between flex-wrap gap-3 mt-5 pt-4 border-t border-neutral-100 dark:border-neutral-900">
                            <div className="flex items-center gap-3">
                                <img
                                    src={r.avatar}
                                    alt={r.name}
                                    className="w-10 h-10 rounded-full object-cover border border-neutral-200 dark:border-neutral-800 shrink-0"
                                />
                                <div>
                                    <p className="text-sm font-medium text-neutral-950 dark:text-white">{r.name}</p>
                                    <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-0.5">{r.title}</p>
                                </div>
                            </div>

                            {r.video && (
                                <button
                                    type="button"
                                    onMouseEnter={playHover}
                                    onClick={() => {
                                        playClick();
                                        setActiveVideo(r);
                                    }}
                                    style={{ transitionTimingFunction: PREMIUM_EASE }}
                                    className="group/play inline-flex items-center gap-2 rounded-full border border-neutral-300 dark:border-neutral-700 pl-1.5 pr-4 py-1.5 text-xs font-medium text-neutral-600 dark:text-neutral-400 transition-colors duration-300 hover:border-neutral-950 hover:text-neutral-950 dark:hover:border-white dark:hover:text-white"
                                >
                                    <span
                                        style={{ transitionTimingFunction: PREMIUM_EASE }}
                                        className="flex items-center justify-center w-6 h-6 rounded-full bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 transition-transform duration-500 group-hover/play:scale-110"
                                    >
                                        <Play size={10} fill="currentColor" className="ml-0.5" />
                                    </span>
                                    Watch video
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Video modal */}
            {activeVideo && (
                <div
                    className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-6"
                    onClick={() => setActiveVideo(null)}
                >
                    <div
                        className="relative inline-block"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onMouseEnter={playHover}
                            onClick={() => {
                                playClick();
                                setActiveVideo(null);
                            }}
                            aria-label="Close video"
                            style={{ transitionTimingFunction: PREMIUM_EASE }}
                            className="group/close absolute -top-10 right-0 text-white/70 hover:text-white transition-colors duration-300"
                        >
                            <X
                                size={22}
                                style={{ transitionTimingFunction: PREMIUM_EASE }}
                                className="transition-transform duration-500 group-hover/close:rotate-90"
                            />
                        </button>

                        <video
                            key={activeVideo.video}
                            src={activeVideo.video}
                            controls
                            autoPlay
                            className="block max-w-[90vw] max-h-[80vh] w-auto h-auto rounded-lg bg-black"
                        />

                        <p className="text-white/70 text-xs mt-3">{activeVideo.name}</p>
                    </div>
                </div>
            )}
        </section>
    );
}