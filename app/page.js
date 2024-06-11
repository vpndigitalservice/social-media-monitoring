import Image from "next/image";
import Navbar from "../components/Navbar"
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Cards from '../components/Cards'
import Information from "@/components/Information";
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen " style={{backgroundColor : '#EEF7FF'}}>
    <header>
      <Navbar />
    </header>
    
    <main className="flex-grow ">  
      {/* Your main content goes here */}
      <Hero />
      <Information/>
      <Cards />
    </main>
    <Footer />
  </div>  
  );
}
