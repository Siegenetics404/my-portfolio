import { useState, useRef } from "react";
import { ArrowRight } from "lucide-react";
import projectPulse from "../../assets/images/projects/project-pulse.png";
import daverDaver from "../../assets/images/projects/daver.png";
import choros from "../../assets/images/projects/choros.png";
import hocu from "../../assets/images/projects/hocu.png";
import wirralKitchens from "../../assets/images/projects/wirral-kitchens.png";
import nucleus from "../../assets/images/projects/nucleus.png";
import morphic from "../../assets/images/projects/morphic.png";
import ycom from "../../assets/images/projects/ycom.png";
import shepton from "../../assets/images/projects/shepton.png";

const FILTERS = ["All", "Collaboration", "Solo", "Personal", "Industry", "AI-Integrated"];

const PROJECTS = [
  {
    name: "Choros.io",
    logo: choros,
    description:
      "An AI-powered website builder platform for small trade businesses, collaboratively built — contributed front-end pages and features.",
    href: "https://choros.io",
    status: "active",
    categories: ["AI-Integrated", "Collaboration"],
  },
  {
    name: "Daver & Daver",
    logo: daverDaver,
    description:
      "An AI-powered legal document application for drafting, reviewing, and managing legal paperwork.",
    href: "https://legal-app.choros.io/",
    status: "pending",
    categories: ["AI-Integrated", "Collaboration"],
  },
  {
    name: "Project Pulse",
    logo: projectPulse,
    description:
      "A project management platform for development and marketing teams to plan, track, and stay in sync.",
    href: "https://projectpulse.laravel.cloud/",
    status: "pending",
    categories: ["Collaboration", "Industry"],
  },
  {
    name: "HOCU",
    logo: hocu,
    description:
      "A plumbing company site built for fast service booking and clear customer contact.",
    href: "https://hocu-main.choros.biz/",
    status: "pending",
    categories: ["Solo", "Industry"],
  },
  {
    name: "Wirral Kitchens & Interiors",
    logo: wirralKitchens,
    description:
      "A luxury kitchen and interior design showcase highlighting premium craftsmanship and finishes.",
    href: "https://wirralkitcheninteriors.co.uk/",
    status: "active",
    categories: ["Solo", "Industry"],
  },
  {
    name: "Nucleus",
    logo: nucleus,
    description:
      "A self-learning AI tool that adapts and personalizes based on how users interact with it.",
    href: "https://nucleus.ai",
    status: "ongoing",
    categories: ["Personal", "AI-Integrated"],
  },
  {
    name: "Morphic",
    logo: morphic,
    description:
      "An AI-powered image referencing tool for gathering and organizing visual inspiration.",
    href: "https://morphic.app",
    status: "ongoing",
    categories: ["Personal", "AI-Integrated"],
  },
  {
    name: "YCOM",
    logo: ycom,
    description:
      "A finance platform focused on forex insights, market data, and trading resources.",
    href: "https://ycom.laravel.cloud",
    status: "pending",
    categories: ["Solo", "Industry"],
  },
  {
    name: "Shepton Judo Club",
    logo: shepton,
    description:
      "A site for a UK judo club, built to showcase classes, schedules, and membership info for local members.",
    href: "https://sheptonjudo.choros.io/",
    status: "active",
    categories: ["Solo", "Industry"],
  },
];

const STATUS_STYLES = {
  active: {
    label: "Active",
    className: "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-900",
    dot: "bg-emerald-500",
  },
  pending: {
    label: "Pending",
    className: "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/40 dark:text-amber-400 dark:border-amber-900",
    dot: "bg-amber-500",
  },
  ongoing: {
    label: "Ongoing",
    className: "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/40 dark:text-blue-400 dark:border-blue-900",
    dot: "bg-blue-500",
  },
};

export default function Projects() {
  const [toastVisible, setToastVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const toastTimer = useRef(null);

  const showToast = () => {
    setToastVisible(true);
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToastVisible(false), 2500);
  };

  const filteredProjects =
    activeFilter === "All"
      ? PROJECTS
      : PROJECTS.filter((project) => project.categories.includes(activeFilter));

  return (
    <section className="mt-12 sm:mt-16 max-w-3xl relative">
      {/* Section title */}
      <div className="flex items-center justify-between flex-wrap gap-2 border-b border-neutral-200 dark:border-neutral-800 pb-4">
        <h2 className="text-sm font-medium tracking-tight text-neutral-950 dark:text-white">
          <span className="font-mono text-neutral-400 dark:text-neutral-600 mr-2">01 —</span>
          Featured Projects
        </h2>


        <a href="/projects"
          className="flex items-center gap-1 text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors"
        >
          Showcase Projects
          <ArrowRight size={10} />
        </a>
      </div>

      {/* Category filters */}
      <div className="flex flex-wrap gap-2 mt-6">
        {FILTERS.map((filter) => {
          const isActive = filter === activeFilter;
          return (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`text-xs rounded-full px-3 py-1 border transition-colors ${isActive
                ? "bg-neutral-950 text-white border-neutral-950 dark:bg-white dark:text-neutral-950 dark:border-white"
                : "text-neutral-600 border-neutral-400 hover:border-neutral-950 hover:text-neutral-950 dark:text-neutral-400 dark:border-neutral-700 dark:hover:border-white dark:hover:text-white"
                }`}
            >
              {filter}
            </button>
          );
        })}
      </div>

      {/* Featured project cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {filteredProjects.map((project) => {
          const status = STATUS_STYLES[project.status];
          const isOngoing = project.status === "ongoing";
          const CardTag = isOngoing ? "button" : "a";
          const cardProps = isOngoing
            ? { type: "button", onClick: showToast }
            : { href: project.href, target: "_blank", rel: "noopener noreferrer" };

          return (
            <CardTag
              key={project.name}
              {...cardProps}
              className="group relative flex flex-col justify-between border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 sm:p-5 text-left hover:border-neutral-950 dark:hover:border-neutral-600 transition-colors"
            >
              {/* Floating tooltip — only for pending projects, doesn't affect layout */}
              {project.status === "pending" && (
                <span className="absolute top-4 right-5 whitespace-nowrap bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 text-[10px] font-normal px-2 py-1 rounded-md opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all pointer-events-none z-10">
                  Server on hold
                </span>
              )}

              <div>
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <img
                      src={project.logo}
                      alt={`${project.name} logo`}
                      className="w-6 h-6 rounded-md object-cover border border-neutral-200 dark:border-neutral-800 shrink-0"
                    />
                    <h3 className="text-sm font-medium text-neutral-950 dark:text-white truncate">
                      {project.name}
                    </h3>
                  </div>

                  <span
                    className={`flex items-center gap-1 text-[10px] font-medium border rounded-full px-2 py-0.5 whitespace-nowrap shrink-0 ${status.className}`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${status.dot}`} />
                    {status.label}
                  </span>
                </div>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed mt-2">
                  {project.description}
                </p>
              </div>
            </CardTag>
          );
        })}
      </div>

      {/* Toast — shown when an ongoing project card is clicked */}
      <div
        className={`fixed bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] sm:w-auto max-w-xs text-center bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 text-sm px-4 py-2.5 rounded-lg shadow-lg transition-all duration-300 z-50 ${toastVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-2 pointer-events-none"
          }`}
      >
        Under development
      </div>
    </section>
  );
}