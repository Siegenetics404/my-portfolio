import { Compass } from "lucide-react";
import { Link, useOutletContext } from "react-router-dom";

// Rendered for any URL that doesn't match a defined route (see the
// path="*" catch-all in App.jsx). Nested under the UserSidebar layout
// route like every other page, so it gets the sidebar, theme, and sound
// context through <Outlet /> the same way.
export default function NotFound() {
    const { playHover, playClick } = useOutletContext();

    return (
        <main className="flex-1 flex items-center justify-center bg-white dark:bg-neutral-950 px-16 py-14">
            <div className="flex flex-col items-center text-center max-w-sm">
                <div className="w-12 h-12 rounded-full border border-neutral-200 dark:border-neutral-800 flex items-center justify-center mb-5">
                    <Compass size={20} className="text-neutral-400 dark:text-neutral-600" />
                </div>

                <p className="text-xs font-medium text-neutral-400 dark:text-neutral-600 uppercase tracking-wide">
                    404
                </p>

                <h1 className="text-lg font-semibold tracking-tight text-neutral-950 dark:text-white mt-1">
                    Page not found
                </h1>

                <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-2 leading-relaxed">
                    The page you're looking for doesn't exist or may have moved.
                </p>

                <Link
                    to="/"
                    onMouseEnter={playHover}
                    onClick={playClick}
                    className="text-sm text-neutral-500 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white transition-colors mt-6 underline underline-offset-4"
                >
                    Back to Home
                </Link>
            </div>
        </main>
    );
}