import Image from "next/image";
import Navbar from "../components/Navbar"
import Footer from '../components/Footer'
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
    <header>
      <Navbar />
    </header>
    <div>Middle content</div>
    <main className="flex-grow">  
      {/* Your main content goes here */}
    </main>
    <Footer />
  </div>  
  );
}
