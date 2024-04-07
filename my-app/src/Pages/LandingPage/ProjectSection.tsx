import ProjectCard from "../../Components/Component/ProjectCard";
import img_project_01 from "../../assets/img/img_landing_project_01.jpeg"
import img_project_02 from "../../assets/img/img_landing_project_02.jpg"

export default function ProjectSection() {
    return (
        <>
            <div className='bg-[#e8e8e8]'>
                <div className='container mx-auto pt-24'>
                    <div className='grid md:grid-cols-2 gap-x-24'>
                        <div className='text-left'>
                            <p className='tracking-widest text-[#EA5514] text-subtitle'>PROJECTS</p>
                            <div className='w-[10px] border-b-[4px] border-[#EA5514] h-[16px]'>&nbsp;</div>
                        </div>
                        <div className='text-[#6F6F6F] text-content font-light'>
                            <p>I am passionate about these projects, helping services progress to the next level while prioritizing accessibility and inclusivity.</p>
                        </div>
                        <div className='mt-12'>
                            <ProjectCard imgURL={img_project_02} title="A+ In Finance" subTitle="Inclusive Design for ADHD Financial Management" concept="Financial Inclusion" type="Inclusive Design, Co-design, Research through Design" content="How might young adults with ADHD manage symptoms and curb impulsive shopping behavior without years of learning?" />
                        </div>
                        <div className='mt-12'>
                            <ProjectCard imgURL={img_project_01} title="Ministry of Biodiversity" subTitle="Strategy & Speculative Design for Policy with GDS" concept="Agricultural Policy Communication" type="Speculative Design, Participatory Design, Sustainable Design" content="How might the government effectively engage the general public and communicate environmental policies ?" />
                      </div>
                    </div>
                    <div className='text-center mt-20'>
                        <button className='bg-[#EA5514] py-2 text-white px-8 text-content rounded-md'>Show more</button>
                    </div>
                </div>
            </div>
        </>
    );
  }
  