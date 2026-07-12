import joeyAvatar from "../../assets/images/reference/joey.jpg";
import kristinAvatar from "../../assets/images/reference/kristin.jpg";

const TESTIMONIALS = [
    {
        name: "Cesar Joey Santillian",
        title: "Software Engineer, ICTD",
        avatar: joeyAvatar,
        summary:
            "Teaching CJ was never difficult, he already understood most of what I was showing him. I trusted him enough to hand over deployment responsibilities, which says a lot about how quickly he picked things up.",
    },
    {
        name: "Kristin Belle Marfin",
        title: "Admin, ICTD",
        avatar: kristinAvatar,
        summary:
            "What stood out to me about CJ is how versatile he is. He's not just good in development, he's just as capable with reporting, presentations, paperwork, and other technical tasks that come up.",
    },
];

export default function Testimonial() {
    return (
        <section className="mt-16">
            {/* Section title */}
            <h2 className="text-sm font-medium tracking-tight text-neutral-950 dark:text-white border-b border-neutral-200 dark:border-neutral-800 pb-4">
                <span className="font-mono text-neutral-400 dark:text-neutral-600 mr-2">02 —</span>
                Testimonials
            </h2>

            {/* Quote cards — 2x2 grid, no video */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                {TESTIMONIALS.map((t) => (
                    <div
                        key={t.name}
                        className="relative flex flex-col justify-between border border-neutral-200 dark:border-neutral-800 rounded-lg p-5 sm:p-6 overflow-hidden"
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
                            {t.summary}
                        </p>

                        <div className="relative flex items-center gap-3 mt-5 pt-4 border-t border-neutral-100 dark:border-neutral-900">
                            <img
                                src={t.avatar}
                                alt={t.name}
                                className="w-10 h-10 rounded-full object-cover border border-neutral-200 dark:border-neutral-800 shrink-0"
                            />
                            <div>
                                <p className="text-sm font-medium text-neutral-950 dark:text-white">{t.name}</p>
                                <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-0.5">{t.title}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}