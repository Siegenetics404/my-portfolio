import UserSidebar from "../../components/layouts/UserSidebar";

import { ArrowUpRight } from "lucide-react";
import Stats from "./Stats";
import Projects from "./Projects";
import Experience from "./Experience";
import TechStack from "./TechStack";
import Github from "./Github";
import Testimonial from "./Testimonial";
import ProfileImage from "./ProfileImage";

// Inline icons — brand marks like GitHub/Instagram were dropped from
// lucide-react's core set, so they're defined here instead of imported.
function GithubIcon({ size = 18 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 .5C5.73.5.98 5.24.98 11.5c0 4.86 3.15 8.98 7.52 10.44.55.1.75-.24.75-.53 0-.26-.01-1.13-.02-2.05-3.06.67-3.71-1.3-3.71-1.3-.5-1.27-1.22-1.6-1.22-1.6-1-.68.08-.67.08-.67 1.1.08 1.68 1.13 1.68 1.13.98 1.68 2.58 1.2 3.21.91.1-.71.38-1.2.69-1.47-2.44-.28-5-1.22-5-5.43 0-1.2.43-2.18 1.13-2.95-.11-.28-.49-1.4.11-2.92 0 0 .92-.3 3.02 1.12a10.4 10.4 0 0 1 5.5 0c2.1-1.42 3.02-1.12 3.02-1.12.6 1.52.22 2.64.11 2.92.7.77 1.13 1.75 1.13 2.95 0 4.22-2.57 5.15-5.02 5.42.39.34.74 1.01.74 2.04 0 1.47-.01 2.66-.01 3.02 0 .29.2.64.76.53A10.52 10.52 0 0 0 23.02 11.5C23.02 5.24 18.27.5 12 .5Z" />
        </svg>
    );
}

function LinkedinIcon({ size = 18 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
        </svg>
    );
}

function InstagramIcon({ size = 18 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
        </svg>
    );
}

function FacebookIcon({ size = 18 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06C2 17.08 5.66 21.23 10.44 22v-7.02H7.9v-2.92h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.92h-2.34V22C18.34 21.23 22 17.08 22 12.06Z" />
        </svg>
    );
}

function MailIcon({ size = 18 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m3 7 9 6 9-6" />
        </svg>
    );
}

const SOCIALS = [
    { icon: GithubIcon, label: "GitHub", href: "https://github.com/Siegenetics404" },
    { icon: LinkedinIcon, label: "LinkedIn", href: "https://www.linkedin.com/in/cj-franco-758683237/" },
    { icon: InstagramIcon, label: "Instagram", href: "https://www.instagram.com/si_jiiii/" },
    { icon: FacebookIcon, label: "Facebook", href: "https://www.facebook.com/cjfranco4" },
    {
        icon: MailIcon,
        label: "Email",
        href: "https://mail.google.com/mail/?view=cm&fs=1&to=franco.cj03@gmail.com&su=Let's%20Work%20Together&body=Hi%20CJ,%20I%20would%20like%20to%20discuss%20a%20project..."
    }
];

export default function Home() {
    return (
        <UserSidebar active="home">
            <main className="flex-1 overflow-y-auto bg-white dark:bg-neutral-950 px-5 py-8 sm:px-10 sm:py-10 md:px-16 md:py-14">
                <div className="max-w-3xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-stretch gap-6 md:gap-8 w-full">
                        {/* Profile image — mouse-trail hover reveal effect */}
                        <ProfileImage />

                        <div className="flex flex-col gap-3 min-w-0">
                            <div className="flex items-center gap-3 flex-wrap">
                                <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-950 dark:text-white">
                                    CJ Franco
                                </h1>
                                {["Frontend", "Backend", "Automation", "SEO"].map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-xs text-neutral-500 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-700 rounded-full px-3 py-1"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex flex-col gap-3">
                                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                    I'm a web developer based in the Philippines, focused on building
                                    clean, functional interfaces. I enjoy turning ideas into simple,
                                    well-crafted products from front to back.
                                </p>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                    Over the past few years I've gained experience through a
                                    government internship, a startup, and freelance projects. I've
                                    built everything from marketing sites and SEO-driven landing
                                    pages to full-stack web applications, and I care about clean
                                    code, thoughtful design, and shipping things that actually work.
                                </p>
                            </div>

                            {/* Socials */}
                            <div className="flex items-center justify-between flex-wrap gap-y-3 pt-1">
                                {SOCIALS.map(({ icon: Icon, label, href }) => (

                                    <a key={label}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 w-fit text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors"
                                    >
                                        <Icon size={16} />
                                        <span>{label}</span>
                                        <ArrowUpRight size={12} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Stats */}
                    <Stats />
                    <Projects />
                    <Experience />
                    <TechStack />
                    <Testimonial />
                    <Github />
                </div>
            </main>
        </UserSidebar>
    );
}