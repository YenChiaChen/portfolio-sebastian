import { ReactElement } from "react";
import img_bg_cover from "../../assets/img/img_project_finance_cover.jpg"


export default function LandingSection(): ReactElement {
    return (
        <>
            <div className='w-full relative overflow-hidden min-h-[90vh] bg-cover bg-center'  style={{backgroundImage: `url(${img_bg_cover})`}}>
                <div className='container mx-auto min-h-[90vh] flex justify-center flex-col'>
                    <p className='text-[70px] font-bold text-white'>A+ In Finance</p>
                    <p className='text-[26px] font-semibold text-white'>Financial Management Journey and<br /> Inclusive Design for ADHD</p>
                </div>
            </div>
        </>
    );
  }
  