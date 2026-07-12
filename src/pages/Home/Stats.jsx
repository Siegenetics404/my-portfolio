const STATS = [
    { value: "3+", label: "Years Experience" },
    { value: "20+", label: "Technologies Used" },
    { value: "100%", label: "Client Satisfaction" },
    { value: "30+", label: "Projects Completed" },
];

export default function Stats() {
    return (
        <div
            className="grid grid-cols-2 sm:flex sm:items-center sm:justify-between gap-x-6 gap-y-6 mt-8 sm:mt-10 bg-cover bg-center bg-[url('../../assets/images/stats/black_and_white_dot_pattern.webp')] dark:bg-none"
        >
            {STATS.map((stat, i) => (
                <div
                    key={stat.label}
                    className={`flex flex-col gap-1 ${i !== 0 ? "sm:border-l sm:border-neutral-200 dark:sm:border-neutral-800 sm:pl-8" : ""}`}
                >
                    <span className="text-xl font-semibold tracking-tight text-neutral-950 dark:text-white">
                        {stat.value}
                    </span>
                    <span className="text-[11px] text-neutral-600 dark:text-neutral-400 uppercase tracking-wide">
                        {stat.label}
                    </span>
                </div>
            ))}
        </div>
    );
}