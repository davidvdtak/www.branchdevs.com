import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";

export default function Page() {
  return (   
    <>       
      <Hero />
      <Services />
      <About />
      <Contact />         
    </>
  );
}