import React from "react";
import { Link } from "react-router-dom";
import { Download } from "lucide-react";
import resumeFile from "../../assets/files/Cj Franco - Resume.pdf";

const NAV_GROUPS = [
    {
        title: "Menu",
        items: [
            { id: "home", label: "Home", path: "/" },
            { id: "projects", label: "Projects", path: "/projects" },
            { id: "experience", label: "Experience", path: "/experience" },
            { id: "tools", label: "Tools", path: "/tools" },
            { id: "recommendation", label: "Recommendation", path: "/recommendation" },
        ],
    },
    {
        title: "Personal",
        items: [
            { id: "shop", label: "Shop", path: "/shop" },
            { id: "resume", label: "Resume", path: "/resume" },
            { id: "resources", label: "Resources", path: "/resources" },
            { id: "certification", label: "Certification", path: "/certification" },
        ],
    },
];

// Static info — no backend, edit these directly.
const NAME = "Cj Franco";
const ROLE = "Web Developer — Philippines";

export default function UserSidebar({ active, children }) {
    return (
        <div className="h-screen w-full bg-white text-neutral-950 flex overflow-hidden">
            {/* Sidebar */}
            <aside className="w-64 shrink-0 border-r border-neutral-200 px-6 py-8 flex flex-col justify-between overflow-y-auto">
                <div>
                    <span className="text-xl font-semibold tracking-tight px-2">{NAME}</span>

                    <div className="mt-8 flex flex-col gap-5">
                        {NAV_GROUPS.map((group) => (
                            <nav key={group.title}>
                                <p className="text-[10px] font-medium text-neutral-400 uppercase tracking-wide mb-1.5 px-2">
                                    {group.title}
                                </p>
                                <ul className="space-y-0.5">
                                    {group.items.map((item) => {
                                        const isActive = item.id === active;
                                        const isResume = item.id === "resume";
                                        return (
                                            <li
                                                key={item.id}
                                                className={isResume ? "group relative" : ""}
                                            >
                                                <Link
                                                    to={item.path}
                                                    className={`block px-2 py-1.5 text-sm rounded-md transition-colors ${isResume ? "pr-8" : ""} ${isActive
                                                        ? "bg-neutral-950 text-white"
                                                        : "text-neutral-500 hover:text-neutral-950"
                                                        }`}
                                                >
                                                    {item.label}
                                                </Link>

                                                {isResume && (
                                                    <a
                                                        href={resumeFile}
                                                        download="Cj Franco - Resume.pdf"
                                                        aria-label="Download resume"
                                                        className={`absolute right-1.5 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity ${isActive
                                                            ? "text-white/70 hover:text-white"
                                                            : "text-neutral-400 hover:text-neutral-950"
                                                            }`}
                                                    >
                                                        <Download size={14} />
                                                    </a>
                                                )}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </nav>
                        ))}
                    </div>
                </div>

                {/* Static footer */}
                <div className="border-t border-neutral-200 pt-3 px-2">
                    <p className="text-sm font-medium">{NAME}</p>
                    <p className="text-xs text-neutral-400">{ROLE}</p>
                </div>
            </aside>

            {/* Main content — this is the ONLY scrolling container now */}
            <div className="flex flex-1 flex-col overflow-y-auto">{children}</div>
        </div>
    );
}