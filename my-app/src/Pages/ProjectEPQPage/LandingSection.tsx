import { ReactElement } from "react";
import img_bg_cover from "../../assets/img/Project_EPQ Learning Journey/cover.jpg"


export default function LandingSection(): ReactElement {
    return (
        <>
            <div className='w-full relative overflow-hidden min-h-[90vh] bg-cover bg-center'  style={{backgroundImage: `url(${img_bg_cover})`}}>
                <div className='container mx-auto min-h-[90vh] flex justify-center flex-col text-center'>
                    <p className='text-[70px] font-bold text-white'>EPQ Learning Journey</p>
                    <p className='text-[26px] font-semibold text-white'>Social Design for Non-traditional Education</p>
                </div>
            </div>
        </>
    );
  }
  