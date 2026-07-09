import dotPattern from "../../assets/images/stats/black and white dot pattern.webp";

const STATS = [
    { value: "4+", label: "Years Experience" },
    { value: "20+", label: "Technologies Used" },
    { value: "100%", label: "Client Satisfaction" },
    { value: "30+", label: "Projects Completed" },
];

export default function Stats() {
    return (
        <div
            className="flex items-center gap-8 mt-10 max-w-2xl bg-cover bg-center"
            style={{ backgroundImage: `url(${dotPattern})` }}
        >
            {STATS.map((stat, i) => (
                <div
                    key={stat.label}
                    className={`flex flex-col gap-1 ${i !== 0 ? "border-l border-neutral-200 pl-8" : ""}`}
                >
                    <span className="text-xl font-semibold tracking-tight text-neutral-950">
                        {stat.value}
                    </span>
                    <span className="text-[11px] text-neutral-500 uppercase tracking-wide">
                        {stat.label}
                    </span>
                </div>
            ))}
        </div>
    );
}