import Header from "../../Components/HeaderWhite"
import { ReactElement } from "react";
import LandingSection from "./LandingSection";
import DetailSection from "./DetailSection";

export default function ProjectMBPage(): ReactElement {
    return (
        <>
            <Header />
            <LandingSection />
            <DetailSection />
            <div className='bg-[#202020] h-[60px]'></div>
        </>
    );
  }
  