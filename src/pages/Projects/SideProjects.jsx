import { ImageOff } from "lucide-react";

import booking from "../../assets/images/projects/landing/booking.png";
import inventory from "../../assets/images/projects/landing/inventory.png";
import school from "../../assets/images/projects/landing/school.png";
import restaurant from "../../assets/images/projects/landing/restaurant.png";
import single from "../../assets/images/projects/landing/e-single.png";
import multi from "../../assets/images/projects/landing/e-multi.png";

const SIDE_PROJECTS = [
    {
        title: "Booking Management System",
        image: booking,
        description:
            "A reservation and scheduling tool for service-based businesses to manage bookings, availability, and customer details in one place.",
    },
    {
        title: "School Management System",
        image: school,
        description:
            "A system for handling student records, attendance, and grades. Built to simplify day-to-day admin work for small schools.",
    },
    {
        title: "Inventory Management System",
        image: inventory,
        description:
            "A stock-tracking tool for small businesses to monitor inventory levels, log stock movement, and avoid running out of supply.",
    },
    {
        title: "Restaurant Ordering System",
        image: restaurant,
        description:
            "A POS and online ordering setup for restaurants, covering menu management, order tracking, and simple daily sales reporting.",
    },
    {
        title: "E-commerce, Single Product",
        image: single,
        description:
            "A focused storefront built around one product, with variant selection, checkout flow, and a landing page designed to convert.",
    },
    {
        title: "E-commerce, Multiple Products",
        image: multi,
        description:
            "A full storefront with product catalog, filtering, cart, and checkout. Built to handle a growing range of products.",
    },
];

// Same decisive curve used across the rest of the site (Projects.jsx,
// ProjectCard.jsx, Testimonial.jsx, ThesisProject.jsx).
const PREMIUM_EASE = "cubic-bezier(0.16,1,0.3,1)";

export default function SideProjects() {
    return (
        <section className="mt-16">
            {/* Section title */}
            <h2 className="text-sm font-medium tracking-tight text-neutral-950 dark:text-white border-b border-neutral-200 dark:border-neutral-800 pb-4">
                Other Projects
            </h2>

            {/* 2x2 grid — image on top, description below, no logo/status/actions.
                No href or action here, so the hover stays a quiet visual
                "acknowledgement" (image breathes a little) rather than a
                strong lift/shadow that would wrongly imply these are clickable. */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                {SIDE_PROJECTS.map((project) => (
                    <div
                        key={project.title}
                        style={{ transitionTimingFunction: PREMIUM_EASE }}
                        className="group border border-neutral-200 dark:border-neutral-800 rounded-lg overflow-hidden transition-colors duration-500 hover:border-neutral-400 dark:hover:border-neutral-700"
                    >
                        {/* Image / fallback */}
                        <div className="relative w-full h-40 overflow-hidden bg-neutral-50 dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800">
                            {project.image ? (
                                <>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        loading="lazy"
                                        style={{ transitionTimingFunction: PREMIUM_EASE }}
                                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.05]"
                                    />
                                    <div
                                        aria-hidden="true"
                                        style={{ transitionTimingFunction: PREMIUM_EASE }}
                                        className="pointer-events-none absolute inset-0 -translate-x-[120%] group-hover:translate-x-[120%] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg] transition-transform duration-700 dark:via-white/10"
                                    />
                                </>
                            ) : (
                                <div className="w-full h-full flex flex-col items-center justify-center gap-2 text-neutral-300 dark:text-neutral-700">
                                    <ImageOff size={20} />
                                    <span className="text-[10px] uppercase tracking-wide">
                                        No preview
                                    </span>
                                </div>
                            )}
                        </div>

                        {/* Description */}
                        <div className="p-4">
                            <p className="text-sm font-medium text-neutral-950 dark:text-white">
                                {project.title}
                            </p>
                            <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed mt-1.5">
                                {project.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}