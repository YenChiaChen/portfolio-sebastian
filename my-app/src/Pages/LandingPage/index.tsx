import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import HeroSection from "./HeroSection";
import ProjectSection from "./ProjectSection";
import AboutSection from "./AboutSection"
import SocialSection from "./SocialSection";
import BlogSection from "./BlogSection";

export default function LandingPage() {
    return (
        <>
            <Header />
            <HeroSection />
            <ProjectSection />
            <AboutSection />
            <SocialSection />
            <BlogSection />
            <div className='h-[200vh]'></div>
        </>
    );
  }
  