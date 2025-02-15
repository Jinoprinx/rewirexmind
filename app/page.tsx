// app/page.tsx
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import BottomNav from "./components/BottomNav";
//import Link from "next/link";
import Card from "./components/card";

export default function Home() {
  return (
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Hero />  
          </main>
          <div className="flex-auto  p-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {/* Quick Access Cards */}
            <div className="container mx-auto p-4 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <Card
                href="/sleep-stories"
                mainImage="/images/slept.png"
                title="Stories to make you sleep"
                description="New stories added daily"
                />
                <Card
                href="/member/consultation"
                mainImage="/images/consult1.png"
                title="Instant one on one consultation with us today"
                description="Begin to manifest your greatest desires"
                />
              <Card
                  href="/meditate"
                  mainImage="/images/medi.png" 
                  title="Daily meditation guide"
                  description="10 minutes"
                />
              <Card
                href="/music"
                mainImage="/images/music.jpg"
                title="Music to help you focus"
                description="relax, sleep and heal"
              />
              <Card
                href="/masterclass"
                mainImage="/images/masterclass.png"       
                title="Masterclass"
                description="Taught by world-renown experts"
              />
            </div>
          </div>
          <BottomNav/>
          <Footer />
        </div>
      )
    }
