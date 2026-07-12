import dotPattern from "../../assets/images/stats/black and white dot pattern.webp";

const STATS = [
    { value: "3+", label: "Years Experience" },
    { value: "20+", label: "Technologies Used" },
    { value: "100%", label: "Client Satisfaction" },
    { value: "30+", label: "Projects Completed" },
];

export default function Stats() {
    return (
        <div
            className="grid grid-cols-2 sm:flex sm:items-center gap-x-6 gap-y-6 sm:gap-8 mt-8 sm:mt-10 max-w-2xl bg-cover bg-center"
            style={{ backgroundImage: `url(${dotPattern})` }}
        >
            {STATS.map((stat, i) => (
                <div
                    key={stat.label}
                    className={`flex flex-col gap-1 ${i !== 0 ? "sm:border-l sm:border-neutral-200 sm:pl-8" : ""}`}
                >
                    <span className="text-xl font-semibold tracking-tight text-neutral-950">
                        {stat.value}
                    </span>
                    <span className="text-[11px] text-neutral-600 uppercase tracking-wide">
                        {stat.label}
                    </span>
                </div>
            ))}
        </div>
    );
}