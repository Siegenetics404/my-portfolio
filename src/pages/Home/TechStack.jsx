import { ArrowRight } from "lucide-react";

const TECH_STACK = [
    "React",
    "React Native",
    "Expo",
    "TypeScript",
    "Inertia.js",
    "Tailwind CSS",
    "NativeWind",
    "Express.js",
    "HTML",
    "CSS",
    "Laravel",
    "PHP",
    "Java",
    "Python",
    "C++",
    "MySQL",
    "PostgreSQL",
];

export default function TechStack() {
    return (
        <section className="mt-16 max-w-3xl">
            {/* Section title */}
            <div className="flex items-center justify-between border-b border-neutral-200 pb-4">
                <h2 className="text-sm font-medium tracking-tight text-neutral-950">
                    <span className="font-mono text-neutral-400 mr-2">03 —</span>
                    Tech Stack
                </h2>

                <a
                    href="/tech-stack"
                    className="flex items-center gap-1 text-sm text-neutral-600 hover:text-neutral-950 transition-colors"
                >
                    View All
                    <ArrowRight size={10} />
                </a>
            </div>

            {/* Pills — flat list, no categories */}
            <div className="flex flex-wrap gap-2 mt-8">
                {TECH_STACK.map((item) => (
                    <span
                        key={item}
                        className="text-xs text-neutral-600 border border-neutral-200 rounded-full px-3 py-1 hover:border-neutral-950 hover:text-neutral-950 transition-colors"
                    >
                        {item}
                    </span>
                ))}
            </div>
        </section>
    );
}