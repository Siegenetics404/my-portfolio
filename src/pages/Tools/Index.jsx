import UserSidebar from "../../components/layouts/UserSidebar";
import Skills from "./Skills";

export default function Index() {
    return (
        <UserSidebar active="tools">
            <main className="flex-1 overflow-y-auto bg-white px-5 py-8 sm:px-10 sm:py-10 md:px-16 md:py-14">
                <div className="max-w-3xl mx-auto">
                    {/* Page header */}
                    <div>
                        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-950">
                            Tools
                        </h1>
                        <p className="text-sm text-neutral-600 mt-2 leading-relaxed max-w-xl">
                            Languages, frameworks, and tools I use to build and ship
                            products end to end.
                        </p>
                    </div>

                    <Skills />
                </div>
            </main>
        </UserSidebar>
    );
}