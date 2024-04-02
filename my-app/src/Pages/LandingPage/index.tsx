import Header from "../../Components/Header";
import TextSwap from "../../Components/Component/TextSwap";
import Footer from "../../Components/Footer";
import HeroSection from "./HeroSection";
import ProjectSection from "./ProjectSection";
import AboutSection from "./AboutSection"

export default function LandingPage() {
    return (
        <>
            <Header />
            <HeroSection />
            <ProjectSection />
            <AboutSection />
            <div className='h-[200vh]'></div>
        </>
    );
  }
  