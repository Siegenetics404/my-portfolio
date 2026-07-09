import { ArrowRight } from "lucide-react";
import projectPulse from "../../assets/images/projects/project-pulse.png";
import daverDaver from "../../assets/images/projects/daver.png";
import choros from "../../assets/images/projects/choros.png";

const PROJECTS = [
  {
    name: "Choros.io",
    logo: choros,
    description:
      "A platform built to streamline workflows with clean, data-driven interfaces.",
    href: "https://choros.io",
    status: "active",
  },
  {
    name: "Daver & Daver",
    logo: daverDaver,
    description:
      "A business site focused on clear presentation and a fast, reliable user experience.",
    href: "https://legal-app.choros.io/",
    status: "pending",
  },
  {
    name: "Project Pulse",
    logo: projectPulse,
    description:
      "A tool for tracking progress and surfacing insights in real time.",
    href: "https://projectpulse.laravel.cloud/",
    status: "pending",
  },
];

const STATUS_STYLES = {
  active: {
    label: "Active",
    className: "bg-emerald-50 text-emerald-700 border-emerald-200",
    dot: "bg-emerald-500",
  },
  pending: {
    label: "Pending",
    className: "bg-amber-50 text-amber-700 border-amber-200",
    dot: "bg-amber-500",
  },
};

export default function Projects() {
  return (
    <section className="mt-16 max-w-3xl">
      {/* Section title */}
      <div className="flex items-center justify-between border-b border-neutral-200 pb-4">
        <h2 className="text-sm font-medium tracking-tight text-neutral-950">
          <span className="font-mono text-neutral-400 mr-2">01 —</span>
          Projects
        </h2>

        <a
          href="/projects"
          className="flex items-center gap-1 text-sm text-neutral-500 hover:text-neutral-950 transition-colors"
        >
          All Projects
          <ArrowRight size={10} />
        </a>
      </div>

      {/* Featured project cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        {PROJECTS.map((project) => {
          const status = STATUS_STYLES[project.status];
          return (
            <a
              key={project.name}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col justify-between border border-neutral-200 rounded-lg p-5 hover:border-neutral-950 transition-colors"
            >
              {/* Floating tooltip — only for pending projects, doesn't affect layout */}
              {project.status === "pending" && (
                <span className="absolute top-1 right-5 whitespace-nowrap bg-neutral-950 text-white text-[10px] font-normal px-2 py-1 rounded-md opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all pointer-events-none z-10">
                  Server on hold
                </span>
              )}

              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img
                      src={project.logo}
                      alt={`${project.name} logo`}
                      className="w-6 h-6 rounded-md object-cover border border-neutral-200"
                    />
                    <h3 className="text-sm font-medium text-neutral-950">
                      {project.name}
                    </h3>
                  </div>

                  <span
                    className={`flex items-center gap-1 text-[10px] font-medium border rounded-full px-2 py-0.5 whitespace-nowrap ${status.className}`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${status.dot}`} />
                    {status.label}
                  </span>
                </div>
                <p className="text-xs text-neutral-500 leading-relaxed mt-2">
                  {project.description}
                </p>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}