import Header from "../../Components/HeaderWhite"
import { ReactElement } from "react";
import LandingSection from "./LandingSection";
import DetailSection from "./DetailSection";
import OverviewSection from "./OverviewSection";
import BackgroundSection from "./BackgroundSection";

export default function ProjectFinancePage(): ReactElement {
    return (
        <>
            <Header />
            <LandingSection />
            <DetailSection />
            <OverviewSection />
            <BackgroundSection />
            <div className='bg-[#202020] h-[60px]'></div>
        </>
    );
  }
  