import { ArrowUpRight } from "lucide-react";
import projectPulse from "../../assets/images/projects/project-pulse.png";
import daverDaver from "../../assets/images/projects/daver.png";
import choros from "../../assets/images/projects/choros.png";

const RECENT_PROJECTS = [
    {
        name: "Choros.io",
        logo: choros,
        note: "Platform redesign",
        href: "https://choros.io",
    },
    {
        name: "Daver & Daver",
        logo: daverDaver,
        note: "Legal site build",
        href: "https://legal-app.choros.io/",
    },
    {
        name: "Project Pulse",
        logo: projectPulse,
        note: "Tracking dashboard",
        href: "https://projectpulse.laravel.cloud/",
    },
];

export default function RecentProjects() {
    return (
        <aside className="lg:sticky lg:top-14 lg:self-start">
            <h2 className="text-xs font-medium uppercase tracking-widest text-neutral-400 mb-6">
                Recent Projects
            </h2>
            <ul className="flex flex-col gap-5">
                {RECENT_PROJECTS.map((project, i) => (
                    <li
                        key={project.name}
                        className={`pb-5 ${i !== RECENT_PROJECTS.length - 1 ? "border-b border-neutral-100" : ""}`}
                    >
                        <a
                            href={project.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-3"
                        >
                            <img
                                src={project.logo}
                                alt={`${project.name} logo`}
                                className="w-8 h-8 rounded-md object-cover border border-neutral-200 shrink-0"
                            />
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-neutral-950 truncate">
                                    {project.name}
                                </p>
                                <p className="text-xs text-neutral-400 mt-0.5">{project.note}</p>
                            </div>
                            <ArrowUpRight
                                size={14}
                                className="text-neutral-300 group-hover:text-neutral-950 transition-colors shrink-0"
                            />
                        </a>
                    </li>
                ))}
            </ul>
        </aside>
    );
}