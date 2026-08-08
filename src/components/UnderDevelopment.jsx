import { Construction } from "lucide-react";
import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

// No more `<UserSidebar>` wrapper here — App.jsx now nests this component
// inside the UserSidebar layout route, which renders it through its
// <Outlet />. `active` is dropped too — UserSidebar derives that from the
// URL itself now, so the individual <Route> entries no longer pass it.
export default function UnderDevelopment({ title = "This page" }) {
    const { playHover, playClick } = useOutletContext();
    return (
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

                {/* Swapped the plain <a> for <Link> — since UserSidebar now
                    stays mounted across navigation, this keeps that intact
                    (no full page reload) instead of undoing the point of
                    the layout route. */}
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