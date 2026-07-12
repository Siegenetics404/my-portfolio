import schoolLogo from "../../assets/images/projects/tup.png";

const COURSEWORK = [
    "Data Structures and Algorithms",
    "Database Systems",
    "Operating Systems",
    "Computer Networks",
    "Software Engineering",
    "Computer Architecture",
    "Digital Electronics",
    "Microprocessor Systems",
    "Machine Learning",
    "Web and Mobile Application Development",
];

export default function Education() {
    return (
        <section className="mt-16 max-w-3xl">
            {/* Section title */}
            <h2 className="text-sm font-medium tracking-tight text-neutral-950 border-b border-neutral-200 pb-4">
                <span className="font-mono text-neutral-400 mr-2">01 —</span>
                Education
            </h2>

            {/* School card */}
            <div className="mt-8 border border-neutral-200 rounded-lg p-5 sm:p-6">
                {/* Logo + school name */}
                <div className="flex items-center gap-3">
                    <img
                        src={schoolLogo}
                        alt="Technological University of the Philippines logo"
                        className="w-11 h-11 rounded-md object-contain shrink-0"
                    />
                    <div>
                        <h3 className="text-sm font-medium text-neutral-950">
                            Technological University of the Philippines, Visayas
                        </h3>
                        <p className="text-xs text-neutral-600 mt-0.5">
                            Talisay City &middot; 2026
                        </p>
                    </div>
                </div>

                {/* Degree */}
                <p className="text-sm text-neutral-600 leading-relaxed mt-4">
                    Bachelor in Engineering Technology, Major in Computer Engineering
                    Technology.
                </p>

                {/* Thesis */}
                <div className="mt-4 pt-4 border-t border-neutral-100">
                    <p className="text-[11px] font-medium text-neutral-400 uppercase tracking-wide mb-1.5">
                        Thesis
                    </p>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                        Development of GIS-Based Cemetery Information System for
                        Interactive Mapping
                    </p>
                </div>

                {/* Relevant coursework */}
                <div className="mt-4 pt-4 border-t border-neutral-100">
                    <p className="text-[11px] font-medium text-neutral-400 uppercase tracking-wide mb-3">
                        Relevant Coursework
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {COURSEWORK.map((course) => (
                            <span
                                key={course}
                                className="text-xs text-neutral-600 border border-neutral-400 rounded-full px-3 py-1"
                            >
                                {course}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}