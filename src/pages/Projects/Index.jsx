import UserSidebar from "../../components/layouts/UserSidebar";
import ProjectCard from "./ProjectCard";
import SideProjects from "./SideProjects";
import ThesisProject from "./ThesisProject";

export default function Index() {
    return (
        <UserSidebar active="projects">
            <main className="flex-1 overflow-y-auto bg-white px-5 py-8 sm:px-10 sm:py-10 md:px-16 md:py-14 relative">
                <div className="max-w-3xl mx-auto">
                    {/* Page header */}
                    <div>
                        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-950">
                            Projects
                        </h1>
                        <p className="text-sm text-neutral-600 mt-2 leading-relaxed max-w-xl">
                            Products I've built, client work, collaborations, and personal
                            experiments, spanning websites, tools, and AI-integrated products.
                        </p>
                    </div>

                    <ProjectCard />
                    <ThesisProject />
                    <SideProjects />
                </div>
            </main>
        </UserSidebar>
    );
}