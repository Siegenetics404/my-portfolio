import ictdLogo from "../../assets/images/projects/province.png";
import chorosLogo from "../../assets/images/projects/choros.png";

const WORK_EXPERIENCE = [
    {
        company: "Information and Communications Technology Division",
        location: "Bacolod City",
        role: "Full Stack Web Developer Intern",
        period: "June 2025 – July 2025",
        logo: ictdLogo,
        highlights: [
            "Developed and maintained full-stack web applications using Laravel and PostgreSQL to support government service operations across multiple departments, improving processing efficiency for daily citizen requests.",
            "Built a Lawyer Appointment System and a One-Stop Shop platform, organizing appointment scheduling, request management, and citizen service requests into unified digital workflows.",
            "Deployed completed systems to the organization's environment and provided post-deployment support, maintenance, and feature enhancements.",
        ],
    },
    {
        company: "Choros.io",
        location: "Swansea, Wales, United Kingdom (Remote)",
        role: "Full Stack Web Developer",
        period: "September 2025 – July 2026",
        logo: chorosLogo,
        highlights: [
            "Developed full-stack web applications and custom websites using Laravel, Inertia.js, React, and TypeScript for 20+ clients across legal services, home interiors, plumbing, and other industries.",
            "Built an AI-powered legal application that generated legal documents, including loan agreements and NDAs, and integrated AI capabilities to support legal research and user workflows.",
            "Developed Project Pulse, a company project management platform that enabled teams to manage tasks, monitor project progress, track completion percentages, and improve collaboration through a centralized workspace.",
            "Developed a marketing prospecting platform automating lead discovery and data collection, supporting Meta Ads campaigns that converted 20+ leads into clients.",
            "Implemented SEO best practices, including technical optimization, metadata, semantic HTML, structured content, and performance enhancements to improve search engine visibility and Google rankings.",
            "Performed quality assurance (QA) testing across client projects by identifying bugs, validating functionality, and ensuring production-ready deployments.",
        ],
    },
];

export default function WorkExperience() {
    return (
        <section className="mt-16 max-w-3xl">
            {/* Section title */}
            <h2 className="text-sm font-medium tracking-tight text-neutral-950 dark:text-white border-b border-neutral-200 dark:border-neutral-800 pb-4">
                <span className="font-mono text-neutral-400 dark:text-neutral-600 mr-2">02 —</span>
                Work Experience
            </h2>

            {/* Job cards */}
            <div className="flex flex-col gap-4 mt-8">
                {WORK_EXPERIENCE.map((job) => (
                    <div
                        key={job.company + job.period}
                        className="border border-neutral-200 dark:border-neutral-800 rounded-lg p-5 sm:p-6"
                    >
                        <div className="flex items-start justify-between gap-4 flex-wrap">
                            <div className="flex items-center gap-3">
                                <img
                                    src={job.logo}
                                    alt={`${job.company} logo`}
                                    className="w-11 h-11 rounded-md object-contain shrink-0"
                                />
                                <div>
                                    <h3 className="text-sm font-medium text-neutral-950 dark:text-white">
                                        {job.role}
                                    </h3>
                                    <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-0.5">
                                        {job.company} &middot; {job.location}
                                    </p>
                                </div>
                            </div>
                            <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400 whitespace-nowrap">
                                {job.period}
                            </span>
                        </div>

                        <ul className="mt-4 pt-4 border-t border-neutral-100 dark:border-neutral-900 flex flex-col gap-2.5">
                            {job.highlights.map((point, i) => (
                                <li
                                    key={i}
                                    className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed flex gap-2.5"
                                >
                                    <span className="w-1 h-1 rounded-full bg-neutral-400 dark:bg-neutral-600 mt-2 shrink-0" />
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}