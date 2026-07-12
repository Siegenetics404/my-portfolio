import { useState } from "react";
import { ArrowRight, X } from "lucide-react";
import ethanAvatar from "../../assets/images/reference/Ethan.webp";
import tomAvatar from "../../assets/images/reference/Tom.webp";
import ethanVideo from "../../assets/videos/Ethan-Testimonial.webm";
import tomVideo from "../../assets/videos/Tom-Testimonial.webm";

const TESTIMONIALS = [
    {
        quote:
            "CJ is a fantastic communicator and an exceptionally skilled developer. Throughout his time at Choros.io, he consistently delivered high-quality work, completing projects on or ahead of schedule. His ability to collaborate with the team was phenomenal, making him a reliable and valued contributor. CJ designed custom, high-performing websites for our marketing clients, with a strong focus on SEO and delivering measurable results. His professionalism, technical expertise, and dedication made a significant impact on our projects.",
        name: "Tomas Tovey",
        title: "Founder of Choros.io & Entrepreneur",
        avatar: tomAvatar,
        video: tomVideo,
    },
    {
        quote:
            "CJ Franco was fantastic to work with over nearly a year of collaboration. He contributed to websites, SEO, landing pages, and complex web applications, consistently delivering high-quality work on time. He was reliable, professional, and always met deadlines. I would gladly work with him again and highly recommend him to any tech startup or company looking for a skilled and dependable developer.",
        name: "Ethan Boland-White",
        title: "Co-founder of Choros.io & Shepton Judo Club Owner",
        avatar: ethanAvatar,
        video: ethanVideo,
    },

];

export default function Testimonial() {
    const [activeVideo, setActiveVideo] = useState(null);

    return (
        <section className="mt-16 max-w-3xl">
            {/* Section title */}
            <div className="flex items-center justify-between border-b border-neutral-200 pb-4">
                <h2 className="text-sm font-medium tracking-tight text-neutral-950">
                    <span className="font-mono text-neutral-400 mr-2">04 —</span>
                    Recommendations
                </h2>


                <a href="/testimonials"
                    className="flex items-center gap-1 text-sm text-neutral-600 hover:text-neutral-950 transition-colors"
                >
                    Full Testimonial
                    <ArrowRight size={10} />
                </a>
            </div>

            {/* Testimonial cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                {TESTIMONIALS.map((t) => (
                    <button
                        key={t.name}
                        type="button"
                        onClick={() => setActiveVideo(t)}
                        className="relative flex flex-col justify-between border border-neutral-200 rounded-lg p-5 overflow-hidden text-left hover:border-neutral-950 transition-colors"
                    >
                        <svg
                            width="64"
                            height="64"
                            viewBox="0 0 24 24"
                            className="absolute -top-3 -right-2 text-orange-200/50"
                            fill="currentColor"
                        >
                            <path d="M9.5 8C7 8 5 10 5 12.5c0 2.2 1.6 4 3.7 4.4-.3 1.4-1.4 2.5-2.7 3.1v1.5c2.8-.5 5.5-2.6 5.5-6.5V13c0-2.8-1-5-2-5Zm9 0c-2.5 0-4.5 2-4.5 4.5 0 2.2 1.6 4 3.7 4.4-.3 1.4-1.4 2.5-2.7 3.1v1.5c2.8-.5 5.5-2.6 5.5-6.5V13c0-2.8-1-5-2-5Z" />
                        </svg>

                        <p className="relative text-xs text-neutral-600 leading-relaxed">
                            {t.quote}
                        </p>

                        <div className="relative flex items-center gap-3 mt-5 pt-4 border-t border-neutral-100">
                            <img
                                src={t.avatar}
                                alt={t.name}
                                className="w-9 h-9 rounded-full object-cover border border-neutral-200 shrink-0"
                            />
                            <div>
                                <p className="text-sm font-medium text-neutral-950">{t.name}</p>
                                <p className="text-xs text-neutral-600 mt-0.5">{t.title}</p>
                            </div>
                        </div>
                    </button>
                ))}
            </div>

            {/* Video modal */}
            {
                activeVideo && (
                    <div
                        className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-6"
                        onClick={() => setActiveVideo(null)}
                    >
                        <div
                            className="relative inline-block"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setActiveVideo(null)}
                                aria-label="Close video"
                                className="absolute -top-10 right-0 text-white/70 hover:text-white transition-colors"
                            >
                                <X size={22} />
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
                )
            }
        </section >
    );
}