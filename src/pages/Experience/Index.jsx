import UserSidebar from "../../components/layouts/UserSidebar";
import Education from "./Education";
import WorkExperience from "./WorkExperience";

export default function Index() {
    return (
        <UserSidebar active="experience">
            <main className="flex-1 overflow-y-auto bg-white dark:bg-neutral-950 px-5 py-8 sm:px-10 sm:py-10 md:px-16 md:py-14">
                <div className="max-w-3xl mx-auto">
                    {/* Page header */}
                    <div>
                        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-950 dark:text-white">
                            Experience
                        </h1>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2 leading-relaxed max-w-xl">
                            My education, work history, and the skills I've picked up
                            building real products along the way.
                        </p>
                    </div>

                    <Education />
                    <WorkExperience />
                </div>
            </main>
        </UserSidebar>
    );
}