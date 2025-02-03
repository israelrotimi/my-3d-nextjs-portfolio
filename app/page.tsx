import Hero from "./components/Hero";
import { FloatingNav } from "./components/ui/FloatingNavbar";
import { FaHome } from "react-icons/fa";
import Grid from "./components/Grid";
import RecentProjects from "./components/RecentProjects";
// import Clients from "./components/Clients";
// import WorkExperience from "./components/WorkExperience";
import Approach from "./components/Approach";
import Footer from "./components/Footer";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav 
          navItems={[
            {name: 'Home', link: '/', icon: <FaHome />},
            ...navItems.map(({name, link}) => ({
              name: name,
              link: link,
            }))
          ]}
        />
        <Hero />
        <Grid/>
        <RecentProjects />
        {/* 
        Don't have any clients yet
        <Clients /> */}
        {/* No professional experience yet 
        <WorkExperience/> */}
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
