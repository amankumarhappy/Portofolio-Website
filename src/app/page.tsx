import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Blogs from "@/components/sections/Blogs";
import Vision from "@/components/sections/Vision";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import Navbar from "@/components/layout/Navbar";
import CustomCursor from "@/components/ui/CustomCursor";
import ScrollUI from "@/components/ui/ScrollUI";
import SmoothScroll from "@/components/utils/SmoothScroll";

export default function Home() {
    return (
        <SmoothScroll>
            <ScrollUI />
            <CustomCursor />
            <Navbar />
            {/*
              CRITICAL: NO overflow-hidden here — that was causing the scroll "page jump".
              Sections flow naturally in document order.
            */}
            <main className="flex flex-col bg-black">
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Experience />
                <Blogs />
                <Vision />
                <Contact />
            </main>
        </SmoothScroll>
    );
}
