import { ArrowRight } from "lucide-react";

const EXPERIENCE = [
  {
    period: "2025",
    role: "Software Developer Intern",
    company: "Provincial Government (ICTD)",
  },
  {
    period: "2025 — 2026",
    role: "Full Stack Web Developer",
    company: "Choros.io",
  },
  {
    period: "2022 — 2026",
    role: "System Developer",
    company: "Freelance",
  },
];

export default function Experience() {
  return (
    <section className="mt-12 sm:mt-16 max-w-3xl">
      {/* Section title */}
      <div className="flex items-center justify-between flex-wrap gap-2 border-b border-neutral-200 pb-4">
        <h2 className="text-sm font-medium tracking-tight text-neutral-950">
          <span className="font-mono text-neutral-400 mr-2">02 —</span>
          Experience
        </h2>

        <a
          href="/experience"
          className="flex items-center gap-1 text-sm text-neutral-600 hover:text-neutral-950 transition-colors"
        >
          Full Story
          <ArrowRight size={10} />
        </a>
      </div>

      {/* Timeline list */}
      <ul className="mt-6 sm:mt-8">
        {EXPERIENCE.map((item, i) => (
          <li
            key={item.role + item.period}
            className={`flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-0 py-4 sm:py-5 ${i !== EXPERIENCE.length - 1 ? "border-b border-neutral-100" : ""
              }`}
          >
            <div>
              <p className="text-sm font-medium text-neutral-950">{item.role}</p>
              <p className="text-xs text-neutral-500 mt-0.5">{item.company}</p>
            </div>
            <span className="text-xs font-mono text-neutral-500 whitespace-nowrap">
              {item.period}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}