import { ArrowRight, Quote } from "lucide-react";
import ethanAvatar from "../../assets/images/reference/Ethan.webp";
import tomAvatar from "../../assets/images/reference/Tom.webp";

const TESTIMONIALS = [
    {
        quote:
            "CJ Franco was fantastic to work with over nearly a year of collaboration. He contributed to websites, SEO, landing pages, and complex web applications, consistently delivering high-quality work on time. He was reliable, professional, and always met deadlines. I would gladly work with him again and highly recommend him to any tech startup or company looking for a skilled and dependable developer.",
        name: "Ethan Boland-White",
        title: "Co-founder of Choros.io & Shepton Judo Club Owner",
        avatar: ethanAvatar,
    },
    {
        quote:
            "CJ is a fantastic communicator and an exceptionally skilled developer. Throughout his time at Choros.io, he consistently delivered high-quality work, completing projects on or ahead of schedule. His ability to collaborate with the team was phenomenal, making him a reliable and valued contributor. CJ designed custom, high-performing websites for our marketing clients, with a strong focus on SEO and delivering measurable results. His professionalism, technical expertise, and dedication made a significant impact on our projects.",
        name: "Tomas Tovey",
        title: "Founder of Choros.io & Entrepreneur",
        avatar: tomAvatar,
    },
];

export default function Testimonial() {
    return (
        <section className="mt-16 max-w-3xl">
            {/* Section title */}
            <div className="flex items-center justify-between border-b border-neutral-200 pb-4">
                <h2 className="text-sm font-medium tracking-tight text-neutral-950">
                    <span className="font-mono text-neutral-400 mr-2">04 —</span>
                    Recommendations
                </h2>

                <a
                    href="/testimonials"
                    className="flex items-center gap-1 text-sm text-neutral-500 hover:text-neutral-950 transition-colors"
                >
                    Full Testimonial
                    <ArrowRight size={10} />
                </a>
            </div>

            {/* Testimonial cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                {TESTIMONIALS.map((t) => (
                    <div
                        key={t.name}
                        className="relative flex flex-col justify-between border border-neutral-200 rounded-lg p-5 overflow-hidden"
                    >
                        <Quote
                            size={64}
                            className="absolute -top-3 -right-2 text-orange-200/50"
                            fill="currentColor"
                            strokeWidth={0}
                        />

                        <p className="relative text-xs text-neutral-500 leading-relaxed">
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
                                <p className="text-xs text-neutral-400 mt-0.5">{t.title}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}