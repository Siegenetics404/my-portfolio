import { ArrowRight } from "lucide-react";

export default function Github() {
    return (
        <section className="mt-12 sm:mt-16 max-w-3xl">
            {/* Section title */}
            <div className="flex items-center justify-between flex-wrap gap-2 border-b border-neutral-200 pb-4">
                <h2 className="text-sm font-medium tracking-tight text-neutral-950">
                    <span className="font-mono text-neutral-400 mr-2">05 —</span>
                    GitHub
                </h2>

                <a
                    href="https://github.com/Siegenetics404"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-neutral-600 hover:text-neutral-950 transition-colors"
                >
                    @Siegenetics404
                    <ArrowRight size={10} />
                </a>
            </div>

            {/* Contribution board — scrolls horizontally on narrow screens since the graph has a min-width */}
            <div className="mt-6 sm:mt-8 border border-neutral-200 rounded-lg p-3 sm:p-5 overflow-x-auto">
                <img
                    src="https://ghchart.rshah.org/000000/Siegenetics404"
                    alt="Siegenetics404's GitHub contribution graph"
                    className="w-full min-w-[600px]"
                />
            </div>
        </section>
    );
}