import UserSidebar from "../../components/layouts/UserSidebar";
import Recommendations from "./Recommendations";
import Testimonial from "./Testimonial";


export default function Index() {
    return (
        <UserSidebar active="recommendation">
            <main className="flex-1 overflow-y-auto bg-white px-5 py-8 sm:px-10 sm:py-10 md:px-16 md:py-14">
                <div className="max-w-3xl mx-auto">
                    {/* Page header */}
                    <div>
                        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-950">
                            What People Say
                        </h1>
                        <p className="text-sm text-neutral-600 mt-2 leading-relaxed max-w-xl">
                           Honest feedback from the people I've worked alongside.
                        </p>
                    </div>

                    <Recommendations />
                    <Testimonial />
                </div>
            </main>
        </UserSidebar>
    );
}