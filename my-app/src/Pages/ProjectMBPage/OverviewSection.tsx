import { ReactElement } from "react";
import img_outcome from "../../assets/img/img_project_mob_outcome.png";
import img_process_bg from "../../assets/img/img_project_mob_process_bg.jpg"
import img_process_01 from "../../assets/img/img_project_mob_process_01.jpg"
import img_process_02 from "../../assets/img/img_project_mob_process_02.jpg"
export default function OverviewSection(): ReactElement {
  return (
    <>
      <div className="container mx-auto pt-24">
        <p className="text-[40px] font-bold text-[#EA5514]">
          Ministry of Biodiversity
        </p>
        <div className="w-[19px] border-b-[6px] mt-4 border-[#EA5514] h-[6px]">
          &nbsp;
        </div>
        <div className="grid grid-cols-2 gap-4 pb-24">
          <div>
            <p className="mt-6 text-[18px] font-light">
              The Ministry of Biodiversity operates as a fictional government
              department, stimulating and inspiring robust discussions
              surrounding policies concerning nature and agriculture. Its goal
              is to assist the Government Digital Service (GDS) in{" "}
              <span className="font-bold">
                effectively communicating environmental policies and gathering
                feedback for future policy development.
              </span>{" "}
              Employing an agile development approach, this speculative design
              project created numerous diegetic prototypes that physically
              represented the touchpoints of future services, paving the way for
              a net-zero London. The project engaged with over 30 individuals
              through these fictional policies, sparking lively debates about
              the merits and drawbacks of these "future" policies and prompting
              discussions on "current" environmental policies.
            </p>
            <div className="gap-4 mt-6 text-[18px]">
              <button className="mr-4 mb-3 border-[1px] border-[#DD663C] p-1 px-4 rounded-xl text-[#DD663C]">
                Speculative Design
              </button>
              <button className="mr-4  border-[1px] border-[#DD663C] p-1 px-4 rounded-xl text-[#DD663C]">
                Participatory Design
              </button>
              <button className="mr-4  border-[1px] border-[#DD663C] p-1 px-4 rounded-xl text-[#DD663C]">
                Research Through Design
              </button>
              <button className="mr-4  border-[1px] border-[#DD663C] p-1 px-4 rounded-xl text-[#DD663C]">
                Sustainable Design
              </button>
            </div>
            <p className="mt-6 text-[16px] font-light">
              * Participants have consented to the use of photos.
            </p>
          </div>
          <div className="w-3/4 mx-auto">
            {" "}
            <img src={img_outcome} />
          </div>
        </div>
        <div className="text-center">
          <p className="text-[20px] font-light text-[#6F6F6F] tracking-[5px]">
            [ &nbsp; PROJECT PROCESS OVERVIEW&nbsp; ]
          </p>
        </div>
      </div>

      <div className='relative w-full mt-12 '>
            <img src={img_process_bg} />
            <img className='absolute w-[8%] left-[14%] top-[40%] h-[14%]' src={img_process_01} />
            <img className='absolute w-[8%] left-[14%] top-[55%] h-[14%]' src={img_process_02} />
          </div>
    </>
  );
}
