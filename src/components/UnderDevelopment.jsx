import { Construction } from "lucide-react";
import UserSidebar from "../components/layouts/UserSidebar";

export default function UnderDevelopment({ active, title = "This page" }) {
    return (
        <UserSidebar active={active}>
            <main className="flex-1 flex items-center justify-center bg-white dark:bg-neutral-950 px-16 py-14">
                <div className="flex flex-col items-center text-center max-w-sm">
                    <div className="w-12 h-12 rounded-full border border-neutral-200 dark:border-neutral-800 flex items-center justify-center mb-5">
                        <Construction size={20} className="text-neutral-400 dark:text-neutral-600" />
                    </div>
                    <h1 className="text-lg font-semibold tracking-tight text-neutral-950 dark:text-white">
                        Under Development
                    </h1>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-2 leading-relaxed">
                        {title} is still being built. Check back soon.
                    </p>

                    <a href="/"
                        className="text-sm text-neutral-500 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white transition-colors mt-6 underline underline-offset-4"
                    >
                        Back to Home
                    </a>
                </div>
            </main>
        </UserSidebar >
    );
}