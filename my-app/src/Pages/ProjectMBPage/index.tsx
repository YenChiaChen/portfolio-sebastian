import Header from "../../Components/HeaderWhite"
import { ReactElement } from "react";
import LandingSection from "./LandingSection";
import DetailSection from "./DetailSection";
import OverviewSection from "./OverviewSection";
import BackgroundSection from "./BackgroundSection";
import DesignSection from "./DesignSection";

export default function ProjectMBPage(): ReactElement {
    return (
        <>
            <Header />
            <LandingSection />
            <DetailSection />
            <OverviewSection />
            <BackgroundSection />
            <DesignSection />
            <div className='bg-[#202020] h-[60px]'></div>
        </>
    );
  }
  