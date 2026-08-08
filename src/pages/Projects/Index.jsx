import ProjectCard from "./ProjectCard";
import SideProjects from "./SideProjects";
import ThesisProject from "./ThesisProject";

// No more `<UserSidebar>` wrapper here — App.jsx now nests this page
// inside the UserSidebar layout route, which renders it through its
// <Outlet />. This component only returns its own content.
export default function Index() {
    return (
        <main className="flex-1 overflow-y-auto bg-white dark:bg-neutral-950 px-5 py-8 sm:px-10 sm:py-10 md:px-16 md:py-14 relative">
            <div className="max-w-3xl mx-auto">
                {/* Page header */}
                <div>
                    <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-950 dark:text-white">
                        Projects
                    </h1>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2 leading-relaxed max-w-xl">
                        Products I've built, client work, collaborations, and personal
                        experiments, spanning websites, tools, and AI-integrated products.
                    </p>
                </div>

                <ProjectCard />
                <ThesisProject />
                <SideProjects />
            </div>
        </main>
    );
}