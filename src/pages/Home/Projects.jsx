import { useState, useRef } from "react";
import { Link, useOutletContext } from "react-router-dom";
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

import LprojectPulse from "../../assets/images/projects/landing/pulse.webp";
import LdaverDaver from "../../assets/images/projects/landing/daver.webp";
import Lchoros from "../../assets/images/projects/landing/choros.webp";
import Lhocu from "../../assets/images/projects/landing/hocu.webp";
import LwirralKitchens from "../../assets/images/projects/landing/wirral.webp";
import Lnucleus from "../../assets/images/projects/landing/nucleus.webp";
import Lmorphic from "../../assets/images/projects/landing/morphic.webp";
import Lycom from "../../assets/images/projects/landing/ycom.webp";
import Lshepton from "../../assets/images/projects/landing/shepton.webp";

const FILTERS = ["All", "Collaboration", "Solo", "Personal", "Industry", "AI-Integrated"];

const PROJECTS = [
  {
    name: "Choros.io",
    logo: choros,
    landing: Lchoros,
    description:
      "An AI-powered website builder for small trade businesses. Contributed to front-end pages and features.",
    href: "https://choros.io",
    status: "active",
    categories: ["AI-Integrated", "Collaboration"],
  },
  {
    name: "Daver & Daver",
    logo: daverDaver,
    landing: LdaverDaver,
    description:
      "An AI-powered legal document application for drafting, reviewing, and managing legal paperwork.",
    href: "https://legal-app.choros.io/",
    status: "pending",
    categories: ["AI-Integrated", "Collaboration"],
  },
  {
    name: "Project Pulse",
    logo: projectPulse,
    landing: LprojectPulse,
    description:
      "A project management platform for development and marketing teams to plan, track, and stay in sync.",
    href: "https://projectpulse.laravel.cloud/",
    status: "pending",
    categories: ["Collaboration", "Industry"],
  },
  {
    name: "HOCU",
    logo: hocu,
    landing: Lhocu,
    description:
      "A plumbing company site built for fast service booking and clear customer contact.",
    href: "https://hocu.co.uk/",
    status: "active",
    categories: ["Solo", "Industry"],
  },
  {
    name: "Wirral Kitchens & Interiors",
    logo: wirralKitchens,
    landing: LwirralKitchens,
    description:
      "A luxury kitchen and interior design showcase highlighting premium craftsmanship and finishes.",
    href: "https://wirralkitcheninteriors.co.uk/",
    status: "active",
    categories: ["Solo", "Industry"],
  },
  {
    name: "Nucleus",
    logo: nucleus,
    landing: Lnucleus,
    description:
      "A self-learning AI tool that adapts and personalizes based on how users interact with it.",
    href: "https://nucleus.ai",
    status: "ongoing",
    categories: ["Personal", "AI-Integrated"],
  },
  {
    name: "Morphic",
    logo: morphic,
    landing: Lmorphic,
    description:
      "An AI-powered image referencing tool for gathering and organizing visual inspiration.",
    href: "https://morphic.app",
    status: "ongoing",
    categories: ["Personal", "AI-Integrated"],
  },
  {
    name: "YCOM",
    logo: ycom,
    landing: Lycom,
    description:
      "A finance platform focused on forex insights, market data, and trading resources.",
    href: "https://ycom.laravel.cloud",
    status: "pending",
    categories: ["Solo", "Industry"],
  },
  {
    name: "Shepton Judo Club",
    logo: shepton,
    landing: Lshepton,
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

const TOAST_MESSAGES = {
  pending: "Server on hold",
  ongoing: "Under development",
};

const PREMIUM_EASE = "cubic-bezier(0.16,1,0.3,1)";

export default function Projects() {
  const { playHover, playClick, playError } = useOutletContext();

  const [toastMessage, setToastMessage] = useState("");
  const [toastVisible, setToastVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [errorCard, setErrorCard] = useState(null);
  const toastTimer = useRef(null);
  const errorTimer = useRef(null);

  const showToast = (message) => {
    setToastMessage(message);
    setToastVisible(true);
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToastVisible(false), 2500);
  };

  const triggerError = (projectName) => {
    setErrorCard(projectName);
    clearTimeout(errorTimer.current);
    errorTimer.current = setTimeout(() => setErrorCard(null), 450);
  };

  const filteredProjects =
    activeFilter === "All"
      ? PROJECTS
      : PROJECTS.filter((project) => project.categories.includes(activeFilter));

  return (
    <section className="mt-12 sm:mt-16 max-w-3xl relative">
      {/* Local keyframes for the "locked" error shake — scoped by class name,
          not worth a full Tailwind config entry for two uses. */}
      <style>{`
        @keyframes project-card-shake {
          10%, 90% { transform: translate3d(-1px, 0, 0); }
          20%, 80% { transform: translate3d(2px, 0, 0); }
          30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
          40%, 60% { transform: translate3d(4px, 0, 0); }
        }
        .animate-project-shake {
          animation: project-card-shake 0.45s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
        }
      `}</style>

      {/* Section title */}
      <div className="flex items-center justify-between flex-wrap gap-2 border-b border-neutral-200 dark:border-neutral-800 pb-4">
        <h2 className="text-sm font-medium tracking-tight text-neutral-950 dark:text-white">
          <span className="font-mono text-neutral-400 dark:text-neutral-600 mr-2">01 —</span>
          Featured Projects
        </h2>

        <Link
          to="/projects"
          onMouseEnter={playHover}
          onClick={playClick}
          className="group inline-flex items-center gap-1 text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors duration-300"
        >
          Showcase Projects
          <ArrowRight
            size={10}
            className="transition-transform duration-500 group-hover:translate-x-1"
            style={{ transitionTimingFunction: PREMIUM_EASE }}
          />
        </Link>
      </div>

      {/* Category filters */}
      <div className="flex flex-wrap gap-2 mt-6">
        {FILTERS.map((filter) => {
          const isActive = filter === activeFilter;
          return (
            <button
              key={filter}
              type="button"
              onMouseEnter={playHover}
              onClick={() => {
                playClick();
                setActiveFilter(filter);
              }}
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mt-6">
        {filteredProjects.map((project) => {
          const status = STATUS_STYLES[project.status];
          const isLive = project.status === "active";
          const isErroring = errorCard === project.name;
          const CardTag = isLive ? "a" : "button";
          const cardProps = isLive
            ? {
              href: project.href,
              target: "_blank",
              rel: "noopener noreferrer",
              onMouseEnter: playHover,
              onClick: playClick,
            }
            : {
              type: "button",
              onMouseEnter: playHover,
              onClick: () => {
                playError();
                showToast(TOAST_MESSAGES[project.status]);
                triggerError(project.name);
              },
            };

          return (
            <CardTag
              key={project.name}
              {...cardProps}
              style={{ transitionTimingFunction: PREMIUM_EASE }}
              className={`group relative flex flex-col overflow-hidden rounded-lg border text-left
                transition-[transform,box-shadow,border-color] duration-500 will-change-transform
                hover:-translate-y-1 hover:shadow-xl hover:shadow-neutral-950/10 dark:hover:shadow-black/50
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 dark:focus-visible:ring-white focus-visible:ring-offset-2 dark:focus-visible:ring-offset-neutral-950
                ${isErroring
                  ? "animate-project-shake border-red-400/80 dark:border-red-800/80"
                  : "border-neutral-200 dark:border-neutral-800 hover:border-neutral-950 dark:hover:border-neutral-600"
                }`}
            >
              {/* Landing page preview */}
              <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100 dark:bg-neutral-900">
                <div className="absolute top-0 inset-x-0 h-5 flex items-center gap-1.5 px-2.5 bg-neutral-50/80 dark:bg-neutral-950/80 backdrop-blur-sm z-10">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400/60" />
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400/60" />
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/60" />
                </div>

                <img
                  src={project.landing}
                  alt={`${project.name} landing page`}
                  loading="lazy"
                  style={{ transitionTimingFunction: PREMIUM_EASE }}
                  className={`w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.06] ${isLive ? "" : "grayscale-[35%] opacity-90"
                    }`}
                />

          
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 -translate-x-[120%] group-hover:translate-x-[120%] bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-[-20deg] transition-transform duration-700 dark:via-white/10"
                  style={{ transitionTimingFunction: PREMIUM_EASE }}
                />

                {/* Red flash over the preview on an invalid click */}
                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute inset-0 bg-red-500/20 transition-opacity duration-300 ${isErroring ? "opacity-100" : "opacity-0"
                    }`}
                />
              </div>

              <div className="flex flex-col justify-between flex-1 p-4 sm:p-5">
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
                    className={`flex items-center gap-1 text-[10px] font-medium border rounded-full px-2 py-0.5 whitespace-nowrap shrink-0 transition-colors duration-300 ${isErroring
                      ? "bg-red-50 text-red-700 border-red-200 dark:bg-red-950/40 dark:text-red-400 dark:border-red-900"
                      : status.className
                      }`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${isErroring ? "bg-red-500" : status.dot}`} />
                    {isErroring ? "Unavailable" : status.label}
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

      {/* Toast — shown when a pending/ongoing project card is clicked */}
      <div
        className={`fixed bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] sm:w-auto max-w-xs text-center bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 text-sm px-4 py-2.5 rounded-lg shadow-lg transition-all duration-300 z-50 ${toastVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-2 pointer-events-none"
          }`}
      >
        {toastMessage}
      </div>
    </section>
  );
}