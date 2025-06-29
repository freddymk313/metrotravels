import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Destinations from "@/components/Destinations";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Services />
        <Destinations />
        <About />
        <Contact />
      </main>
    </>
  );
}
