import { ImageOff } from "lucide-react";

// No live links for these yet — just concepts/practice builds.
// Add an `image` (imported screenshot) once one exists; falls back to a
// placeholder otherwise.
const SIDE_PROJECTS = [
    {
        title: "Booking Management System",
        image: null,
        description:
            "A reservation and scheduling tool for service-based businesses to manage bookings, availability, and customer details in one place.",
    },
    {
        title: "School Management System",
        image: null,
        description:
            "A system for handling student records, attendance, and grades — built to simplify day-to-day admin work for small schools.",
    },
    {
        title: "Inventory Management System",
        image: null,
        description:
            "A stock-tracking tool for small businesses to monitor inventory levels, log stock movement, and avoid running out of supply.",
    },
    {
        title: "Restaurant Ordering System",
        image: null,
        description:
            "A POS and online ordering setup for restaurants, covering menu management, order tracking, and simple daily sales reporting.",
    },
    {
        title: "E-commerce — Single Product",
        image: null,
        description:
            "A focused storefront built around one product, with variant selection, checkout flow, and a landing page designed to convert.",
    },
    {
        title: "E-commerce — Multiple Products",
        image: null,
        description:
            "A full storefront with product catalog, filtering, cart, and checkout — built to handle a growing range of products.",
    },
];

export default function SideProjects() {
    return (
        <section className="mt-16">
            {/* Section title */}
            <h2 className="text-sm font-medium tracking-tight text-neutral-950 border-b border-neutral-200 pb-4">
                Side Projects
            </h2>

            {/* 2x2 grid — image on top, description below, no logo/status/actions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                {SIDE_PROJECTS.map((project) => (
                    <div
                        key={project.title}
                        className="border border-neutral-200 rounded-lg overflow-hidden"
                    >
                        {/* Image / fallback */}
                        <div className="w-full h-40 bg-neutral-50 border-b border-neutral-200">
                            {project.image ? (
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <div className="w-full h-full flex flex-col items-center justify-center gap-2 text-neutral-300">
                                    <ImageOff size={20} />
                                    <span className="text-[10px] uppercase tracking-wide">
                                        No preview
                                    </span>
                                </div>
                            )}
                        </div>

                        {/* Description */}
                        <div className="p-4">
                            <p className="text-sm font-medium text-neutral-950">
                                {project.title}
                            </p>
                            <p className="text-xs text-neutral-500 leading-relaxed mt-1.5">
                                {project.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}