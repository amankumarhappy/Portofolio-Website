import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import BeyondCode from "@/components/sections/BeyondCode";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import Navbar from "@/components/layout/Navbar";
import CustomCursor from "@/components/ui/CustomCursor";
import ScrollUI from "@/components/ui/ScrollUI";
import SmoothScroll from "@/components/utils/SmoothScroll";
import ThemeProvider from "@/components/utils/ThemeProvider";

export default function Home() {
    return (
        <ThemeProvider>
            <SmoothScroll>
                <ScrollUI />
                <CustomCursor />
                <Navbar />
                <main className="flex flex-col bg-section">
                    <Hero />
                    <About />
                    <Skills />
                    <Projects />
                    <Experience />
                    <BeyondCode />
                    <Contact />
                </main>
            </SmoothScroll>
        </ThemeProvider>
    );
}
