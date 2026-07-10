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
  {
    name: "HOCU",
    logo: hocu,
    description:
      "A plumbing company site built for fast service booking and clear customer contact.",
    href: "https://hocu-main.choros.biz/",
    status: "active",
  },
  {
    name: "Wirral Kitchens & Interiors",
    logo: wirralKitchens,
    description:
      "A luxury kitchen and interior design showcase highlighting premium craftsmanship and finishes.",
    href: "https://wirralkitcheninteriors.co.uk/",
    status: "active",
  },
  {
    name: "Nucleus",
    logo: nucleus,
    description:
      "A self-learning AI tool that adapts and personalizes based on how users interact with it.",
    href: "https://nucleus.ai",
    status: "ongoing",
  },
  {
    name: "Morphic",
    logo: morphic,
    description:
      "An AI-powered image referencing tool for gathering and organizing visual inspiration.",
    href: "https://morphic.app",
    status: "ongoing",
  },
  {
    name: "YCOM",
    logo: ycom,
    description:
      "A finance platform focused on forex insights, market data, and trading resources.",
    href: "https://ycom.laravel.cloud",
    status: "pending",
  },
  {
    name: "Shepton Judo Club",
    logo: shepton,
    description:
      "A club site for Shepton Judo Club, currently in development.",
    href: "https://sheptonjudo.choros.io/",
    status: "active",
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
  ongoing: {
    label: "Ongoing",
    className: "bg-blue-50 text-blue-700 border-blue-200",
    dot: "bg-blue-500",
  },
};

export default function Projects() {
  const [toastVisible, setToastVisible] = useState(false);
  const toastTimer = useRef(null);

  const showToast = () => {
    setToastVisible(true);
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToastVisible(false), 2500);
  };

  return (
    <section className="mt-16 max-w-3xl relative">
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
          const isOngoing = project.status === "ongoing";
          const CardTag = isOngoing ? "button" : "a";
          const cardProps = isOngoing
            ? { type: "button", onClick: showToast }
            : { href: project.href, target: "_blank", rel: "noopener noreferrer" };

          return (
            <CardTag
              key={project.name}
              {...cardProps}
              className="group relative flex flex-col justify-between border border-neutral-200 rounded-lg p-5 text-left hover:border-neutral-950 transition-colors"
            >
              {/* Floating tooltip — only for pending projects, doesn't affect layout */}
              {project.status === "pending" && (
                <span className="absolute top-4 right-5 whitespace-nowrap bg-neutral-950 text-white text-[10px] font-normal px-2 py-1 rounded-md opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all pointer-events-none z-10">
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
            </CardTag>
          );
        })}
      </div>

      {/* Toast — shown when an ongoing project card is clicked */}
      <div
        className={`fixed bottom-6 left-1/2 -translate-x-1/2 bg-neutral-950 text-white text-sm px-4 py-2.5 rounded-lg shadow-lg transition-all duration-300 z-50 ${toastVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-2 pointer-events-none"
          }`}
      >
        Under development
      </div>
    </section>
  );
}