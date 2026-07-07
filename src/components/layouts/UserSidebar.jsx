import React from "react";

const NAV_ITEMS = [
    { id: "home", label: "Home" },
    { id: "work", label: "Work" },
    { id: "resume", label: "Resume" },
    { id: "contact", label: "Contact" },
];

// Static info — no backend, edit these directly.
const NAME = "Cj Franco";
const ROLE = "Web Developer — Philippines";

export default function UserSidebar({ active, children }) {
    return (
        <div className="min-h-screen w-full bg-white text-neutral-950 flex">
            {/* Sidebar */}
            <aside className="w-64 shrink-0 border-r border-neutral-200 px-8 py-10 flex flex-col justify-between">
                <div>
                    <span className="text-xl font-semibold tracking-tight">{NAME}</span>

                    <nav className="mt-12">
                        <ul className="space-y-1">
                            {NAV_ITEMS.map((item) => {
                                const isActive = item.id === active;
                                return (
                                    <li key={item.id}>
                                        <a
                                            href={`#${item.id}`}
                                            className={`block px-3 py-2 text-sm transition-colors ${isActive
                                                    ? "bg-neutral-950 text-white"
                                                    : "text-neutral-500 hover:text-neutral-950"
                                                }`}
                                        >
                                            {item.label}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                </div>

                {/* Static footer */}
                <div className="border-t border-neutral-200 pt-4">
                    <p className="text-sm font-medium">{NAME}</p>
                    <p className="text-xs text-neutral-400">{ROLE}</p>
                </div>
            </aside>

            {/* Main content */}
            <div className="flex flex-1 flex-col overflow-y-auto">{children}</div>
        </div>
    );
}