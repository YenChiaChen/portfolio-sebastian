import { ReactElement } from "react";
import ProjectCard from "../../Components/Component/ProjectCard";
import img_project_01 from "../../assets/img/img_landing_project_01.jpeg";

export default function PreviewSection(): ReactElement {
  return (
    <div className="bg-[#D9D9D9]">
      <div className="container mx-auto pt-48 text-center">
        <p className="tracking-[6px] text-[#EA5514] text-[24px] font-bold">
          PROJECT
        </p>
        <div className="w-[22px] border-b-[6px] border-[#EA5514] h-[12px] mx-auto">
          &nbsp;
        </div>
        <div className="grid grid-cols-3 gap-12 mt-20 pb-32">
          <div>
            <ProjectCard
              imgURL={img_project_01}
              title="Ministry of Biodiversity"
              subTitle="Strategy & Speculative Design for Policy with GDS"
              concept="Agricultural Policy Communication"
              type="Speculative Design, Participatory Design, Sustainable Design"
              content="How might the government effectively engage the general public and communicate environmental policies ?"
            />
          </div>
          <div>
            <ProjectCard
              imgURL={img_project_01}
              title="Ministry of Biodiversity"
              subTitle="Strategy & Speculative Design for Policy with GDS"
              concept="Agricultural Policy Communication"
              type="Speculative Design, Participatory Design, Sustainable Design"
              content="How might the government effectively engage the general public and communicate environmental policies ?"
            />
          </div>
          <div>
            <ProjectCard
              imgURL={img_project_01}
              title="Ministry of Biodiversity"
              subTitle="Strategy & Speculative Design for Policy with GDS"
              concept="Agricultural Policy Communication"
              type="Speculative Design, Participatory Design, Sustainable Design"
              content="How might the government effectively engage the general public and communicate environmental policies ?"
            />
          </div>
          <div>
            <ProjectCard
              imgURL={img_project_01}
              title="Ministry of Biodiversity"
              subTitle="Strategy & Speculative Design for Policy with GDS"
              concept="Agricultural Policy Communication"
              type="Speculative Design, Participatory Design, Sustainable Design"
              content="How might the government effectively engage the general public and communicate environmental policies ?"
            />
          </div>
          <div>
            <ProjectCard
              imgURL={img_project_01}
              title="Ministry of Biodiversity"
              subTitle="Strategy & Speculative Design for Policy with GDS"
              concept="Agricultural Policy Communication"
              type="Speculative Design, Participatory Design, Sustainable Design"
              content="How might the government effectively engage the general public and communicate environmental policies ?"
            />
          </div>
          <div>
            <ProjectCard
              imgURL={img_project_01}
              title="Ministry of Biodiversity"
              subTitle="Strategy & Speculative Design for Policy with GDS"
              concept="Agricultural Policy Communication"
              type="Speculative Design, Participatory Design, Sustainable Design"
              content="How might the government effectively engage the general public and communicate environmental policies ?"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
