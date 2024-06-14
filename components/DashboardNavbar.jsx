"useClient";
import { IoHome } from "react-icons/io5";
import Link from "next/link";

function DashboardNavbar() {
    return (
        <div className="navbar " style={{backgroundColor: "#4D869C"}}>
       
       <div className="flex-1 ml-5">
          <button className="btn btn-square btn-ghost">
         <Link href='/' ><IoHome className="w-7 h-7 "/></Link>
          </button>
        </div>
       
        <div className="flex-1">
          <p className=" font-bold text-xl">Dashboard</p>
        </div>
       
      </div>
    );
  }
  
  export default DashboardNavbar;