import ProjectCard from "../../Components/Component/ProjectCard";
import img_project_01 from "../../assets/img/img_landing_project_01.jpeg"
import img_project_02 from "../../assets/img/img_landing_project_02.jpg"

export default function AboutSection() {
    return (
        <>
            <div className='bg-[#e8e8e8]'>
                <div className='container mx-auto pt-24'>
                    <div className='grid md:grid-cols-2 gap-x-24'>
                        <div className='text-left'>
                            <p className='tracking-widest text-[#EA5514]'>ABOUT</p>
                            <div className='w-[10px] border-b-[4px] border-[#EA5514] h-[16px]'>&nbsp;</div>
                        </div>
                        <div className='text-[#6F6F6F] text-sm'>
                            <p>&nbsp;</p>
                        </div>
                        <div className='mt-12'>
                            <p>Hello! I am a diverse and dynamic Service Designer with 5 years of experience in the technology sector, proficient in leveraging service design research tools to generate insightful strategies and optimize online and offline service journeys. I reckon service design is akin to weaving, deftly interlacing cross-disciplinary stakeholders and touchpoints to create captivating connections.</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    );
  }
  