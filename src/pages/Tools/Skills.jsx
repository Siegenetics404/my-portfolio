const SKILL_GROUPS = [
    {
        title: "Language",
        items: ["PHP", "JavaScript", "TypeScript", "Python", "Java", "SQL"],
    },
    {
        title: "Frontend",
        items: ["React", "React Native", "Expo", "Inertia.js", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
    },
    {
        title: "Backend",
        items: ["Laravel", "Node.js", "Express.js"],
    },
    {
        title: "Databases",
        items: ["MySQL", "PostgreSQL", "Supabase", "Firebase"],
    },
    {
        title: "AI & Machine Learning",
        items: ["OpenAI", "Anthropic", "Gemini", "Qwen", "TensorFlow"],
    },
    {
        title: "Tools & Platforms",
        items: ["Git", "GitHub", "Docker", "Postman", "VS Code", "WebStorm", "Expo Go", "Figma", "n8n"],
    },
    {
        title: "Cloud & Deployment",
        items: ["Vercel", "Netlify", "Hostinger", "DigitalOcean", "cPanel"],
    },
    {
        title: "Collaboration",
        items: ["Zoom", "Google Meet", "Miro", "Trello"],
    },
    {
        title: "Other",
        items: [
            "SEO Optimization",
            "Responsive Web Design",
            "Agile Development",
            "QA Testing",
            "Debugging",
            "Cross-Browser Testing",
        ],
    },
];

export default function Skills() {
    return (
        <div className="flex flex-col gap-10 mt-8">
            {SKILL_GROUPS.map((group, i) => (
                <section key={group.title}>
                    {/* Section title */}
                    <h2 className="text-sm font-medium tracking-tight text-neutral-950 dark:text-white border-b border-neutral-200 dark:border-neutral-800 pb-4">
                        <span className="font-mono text-neutral-400 dark:text-neutral-600 mr-2">
                            {String(i + 1).padStart(2, "0")} —
                        </span>
                        {group.title}
                    </h2>

                    {/* Pills */}
                    <div className="flex flex-wrap gap-2 mt-6">
                        {group.items.map((item) => (
                            <span
                                key={item}
                                className="text-xs text-neutral-600 dark:text-neutral-400 border border-neutral-400 dark:border-neutral-700 rounded-full px-3 py-1 hover:border-neutral-950 hover:text-neutral-950 dark:hover:border-white dark:hover:text-white transition-colors"
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </section>
            ))}
        </div>
    );
}