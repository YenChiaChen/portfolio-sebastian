import { ReactElement } from "react";
import img_bg_cover from "../../assets/img/img_project_mob_bg_cover.jpg"


export default function LandingSection(): ReactElement {
    return (
        <>
            <div className='w-full relative overflow-hidden'>
                <img src={img_bg_cover} alt="img_bg" className='scale-[1.4] object-cover' />
                <div className='w-full absolute bottom-0 text-center pb-16'>
                    <p className='text-[70px] font-black text-white'>Ministry of Biodiversity</p>
                    <p className='text-white text-[26px]'>Speculative Design for Future Agriculture Policy with GDS</p>
                </div>
                
            </div>
        </>
    );
  }
  