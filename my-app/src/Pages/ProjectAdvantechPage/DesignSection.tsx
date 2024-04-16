import { ReactElement, useState } from "react";
import img_page_01 from "../../assets/img/Project_Telehealth/Design Deliver/01.png";
import img_page_02 from "../../assets/img/Project_Telehealth/Design Deliver/02.png";
import img_page_01T from "../../assets/img/Project_Telehealth/Design Deliver/outpatient_journey.png";
import img_page_02T from "../../assets/img/Project_Telehealth/Design Deliver/inpatient_journey.png";
import img_page_03 from "../../assets/img/Project_Telehealth/Design Deliver/marketing.png";
import ModalImageFree from "../../Components/Component/ModalImageFree";

export default function DesignSection(): ReactElement {
  const [currentImg, setCurrentImg] = useState("01");

  const renderContent = () => {
    switch (currentImg) {
      case "01":
        return (
          <>
            <p className="text-[18px] font-bold mt-8 mb-4">
              Outpatient Diagnosis Journey & Introduction
            </p>
            <ModalImageFree imgURL={img_page_01T} />
          </>
        );
      case "02":
        return (
          <>
            <p className="text-[18px] font-bold mt-8 mb-4">
              Inpatient Diagnosis Journey & Introduction (From Ambulance to ICU
              )
            </p>
            <ModalImageFree imgURL={img_page_02T} />
          </>
        );
      default:
        return (
          <>
            <p className="text-[18px] font-bold mt-8 mb-4">
              Outpatient Diagnosis Journey & Introduction
            </p>
            <ModalImageFree imgURL={img_page_01T} />
          </>
        );
    }
  };

  return (
    <div id="design_deliver">
      <div className="container mx-auto mt-16 w-[1100px] pb-16">
        <div className="text-center mt-12">
          <p className="text-[20px] font-light text-[#6F6F6F] tracking-[5px]">
            [ &nbsp; DESIGN DELIVER &nbsp; ]
          </p>
        </div>
        <p className="text-[18px] font-light mt-12 mb-6">
          Recognizing the varying consultation frequencies and service
          procedures across medical specialties, I recommended to my team that
          we divide the service solutions into two distinct categories:
          outpatient and inpatient. Tailored to similar scenarios and functional
          needs, the outpatient scenarios are designed for Otolaryngology,
          Ophthalmology and Dermatology. Meanwhile, the inpatient solution is
          targeted at isolation wards and ICU settings.
        </p>

        <div className="grid grid-cols-2 gap-8">
          <div
            className={`border-[1px]  cursor-pointer hover:scale-[1.03] duration-300 ${
              currentImg === "01" ? "border-[#3870C1]" : "border-[#7A7A7A]"
            }`}
            onMouseDown={() => setCurrentImg("01")}
          >
            <div
              className={`text-center py-2 text-white  text-[20px] font-bold ${
                currentImg === "01" ? "bg-[#3870C1]" : "bg-[#7A7A7A]"
              }`}
            >
              Outpatient Solution
            </div>
            <div className="flex gap-2 text-[16px] font-light flex-wrap justify-center my-6">
              <div className="border-[1px] border-[#3870C1] p-1 px-4 rounded-full text-[#3870C1]">
                ENT
              </div>
              <div className="border-[1px] border-[#3870C1] p-1 px-4 rounded-full text-[#3870C1]">
                Optometrists
              </div>
              <div className="border-[1px] border-[#3870C1] p-1 px-4 rounded-full text-[#3870C1]">
                Dermatologists
              </div>
            </div>
            <div className="px-12 py-4">
              <img src={img_page_01} alt="OutpatientImage" className="w-full" />
            </div>
            <div
              className={` ${
                currentImg === "01" ? "bg-[#F6F9FD]" : "bg-[#F7F7F7]"
              }`}
            >
              <div className="flex flex-col justify-center gap-2 font-light text-[18px] mx-auto w-fit py-6">
                <p>・ Different Divisions Operation UI</p>
                <p>・ Digitalized Medical Education Materials</p>
              </div>
            </div>
          </div>
          <div
            className={`border-[1px]  cursor-pointer hover:scale-[1.03] duration-300 relative ${
              currentImg === "02" ? "border-[#3870C1]" : "border-[#7A7A7A]"
            }`}
            onMouseDown={() => setCurrentImg("02")}
          >
            <div
              className={`text-center py-2 text-white  text-[20px] font-bold ${
                currentImg === "02" ? "bg-[#3870C1]" : "bg-[#7A7A7A]"
              }`}
            >
              Outpatient Solution
            </div>
            <div className="flex gap-2 text-[16px] font-light flex-wrap justify-center my-6">
              <div className="border-[1px] border-[#3870C1] p-1 px-4 rounded-full text-[#3870C1]">
                ENT
              </div>
              <div className="border-[1px] border-[#3870C1] p-1 px-4 rounded-full text-[#3870C1]">
                Optometrists
              </div>
              <div className="border-[1px] border-[#3870C1] p-1 px-4 rounded-full text-[#3870C1]">
                Dermatologists
              </div>
            </div>
            <div className="px-12 py-4">
              <img src={img_page_02} alt="OutpatientImage" className="w-full" />
            </div>
            <div
              className={` absolute bottom-0 left-0 w-full ${
                currentImg === "02" ? "bg-[#F6F9FD]" : "bg-[#F7F7F7]"
              }`}
            >
              <div className="flex flex-col justify-center gap-2 font-light text-[18px] mx-auto w-fit py-6">
                <p>・ Different Divisions Operation UI</p>
                <p>・ Digitalized Medical Education Materials</p>
              </div>
            </div>
          </div>
        </div>
        {renderContent()}

        <p className="text-[18px] font-bold mt-12 mb-4">
          E-commerce Configurator & Inbound Marketing Strategy of Telehealth
          Service
        </p>
        <p className="text-[18px] font-light mb-4">
          The marketing specialist and I categorized customers and implemented
          targeted promotion strategies to drive service adoption. Given the
          different medical divisions and hospital operation strategies, I
          developed an e-commerce website showcasing modular medical-cart
          products, empowering hospital executives to customize their
          telemedical solutions.
        </p>
        <ModalImageFree imgURL={img_page_03} />
      </div>
    </div>
  );
}
