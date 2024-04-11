import Header from "../../Components/HeaderWhite"
import { ReactElement } from "react";
import LandingSection from "./LandingSection";
import DetailSection from "./DetailSection";
import OverviewSection from "./OverviewSection";

export default function ProjectMBPage(): ReactElement {
    return (
        <>
            <Header />
            <LandingSection />
            <DetailSection />
            <OverviewSection />
            <div className='bg-[#202020] h-[60px]'></div>
        </>
    );
  }
  