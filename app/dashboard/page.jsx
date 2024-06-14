"use client"

import DashboardHero from "@/components/DashboardHero";
import DashboardNavbar from "@/components/DashboardNavbar";
import Sidebar from "@/components/Sidebar";
function Page() {
  return (
    <div className="flex flex-col">
   
      <DashboardNavbar />

  
      <div className="flex-1 flex">
  
        <Sidebar />

        <DashboardHero />
      </div>
    </div>
  );
}

export default Page;