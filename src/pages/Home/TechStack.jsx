import { Link, useOutletContext } from "react-router-dom";
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

const PREMIUM_EASE = "cubic-bezier(0.16,1,0.3,1)";

export default function TechStack() {
    const { playHover, playClick } = useOutletContext();

    return (
        <section className="mt-16 max-w-3xl">
            {/* Section title */}
            <div className="flex items-center justify-between border-b border-neutral-200 dark:border-neutral-800 pb-4">
                <h2 className="text-sm font-medium tracking-tight text-neutral-950 dark:text-white">
                    <span className="font-mono text-neutral-400 dark:text-neutral-600 mr-2">03 —</span>
                    Tech Stack
                </h2>

                <Link
                    to="/tools"
                    onMouseEnter={playHover}
                    onClick={playClick}
                    className="group inline-flex items-center gap-1 text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors duration-300"
                >
                    View All
                    <ArrowRight
                        size={10}
                        className="transition-transform duration-500 group-hover:translate-x-1"
                        style={{ transitionTimingFunction: PREMIUM_EASE }}
                    />
                </Link>
            </div>

            <div className="flex flex-wrap gap-2 mt-8">
                {TECH_STACK.map((item) => (
                    <span
                        key={item}
                        className="text-xs text-neutral-500 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-700 rounded-full px-3 py-1"
                    >
                        {item}
                    </span>
                ))}
            </div>
        </section>
    );
}