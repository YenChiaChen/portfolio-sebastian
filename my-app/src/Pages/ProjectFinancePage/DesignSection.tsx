import { ReactElement, useState } from "react";
import img_outcome2 from "../../assets/img/img_project_finance_outcome2.png";
import { ReactComponent as ComputerReminderT } from "../../assets/img/img_project_finance_designT_01.svg";
import { ReactComponent as ComputerStimulusT } from "../../assets/img/img_project_finance_designT_02.svg";
import { ReactComponent as ComputerInspiringT } from "../../assets/img/img_project_finance_designT_03.svg";
import { ReactComponent as DownloadButton } from "../../assets/img/img_button_download.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function DesignSection(): ReactElement {
  const [currentImg, setCurrentImg] = useState("01");

  const renderContent = () => {
    switch (currentImg) {
      case "01":
        return (
          <div className="absolute w-[37%] h-[37%] border-[4px] border-red-500 left-[23.5%] top-[27.5%]"></div>
        );
      case "02":
        return (
          <div className="absolute w-[37%] h-[37%] border-[4px] border-red-500 left-[63%] top-[27.5%]"></div>
        );
      case "03":
        return (
          <>
            <div className="absolute w-[37%] h-[4.5%] border-[4px] border-red-500 left-[23.5%] top-[63.5%]"></div>
            <div className="absolute w-[37%] h-[4.5%] border-[4px] border-red-500 left-[63%] top-[63.5%]"></div>
          </>
        );
      default:
        return (
          <div className="absolute w-[25.7%] h-[32%] border-[3px] border-red-500 left-[36.3%] top-[35%]"></div>
        );
    }
  };

  return (
    <>
      <div className="container mx-auto mt-16 w-[1100px]">
        <div className="text-center mt-12">
          <p className="text-[20px] font-light text-[#6F6F6F] tracking-[5px]">
            [ &nbsp; DESIGN DELIVER &nbsp; ]
          </p>
        </div>
        <p className="text-[18px] font-light mt-12">
          To mitigate the prolonged financial learning journey, it is imperative
          to identify activities that genuinely captivate their interest and
          promptly remind them when dopamine levels dip. The project developed a
          Google Chrome extension called A+ Shopper.{" "}
          <span className="font-bold">
            {" "}
            This tool streamlines the exploration and adoption of alternative
            dopamine-boosting activities by identifying online shopping checkout
            behaviors and offering a suite of personalized features.
          </span>{" "}
          with ADHD across Moreover, it is integrated into The Brain Charity’s
          ADHD Financial Learning Course.
        </p>
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2 relative">
            <img src={img_outcome2} alt="outcome2" />
            {renderContent()}
          </div>
          <div className="col-span-1 flex flex-col gap-8 justify-center">
            <div
              className="flex flex-col cursor-pointer hover:scale-[1.1]  duration-300 w-fit px-2 ml-8"
              onMouseEnter={() => setCurrentImg("01")}
            >
              <div className="flex gap-2 items-center">
                <ComputerReminderT className="w-[80px] p-2" />
                <p className="text-[16px] font-bold text-[#DD663C]">
                  Personalized
                  <br />
                  Reminder
                </p>
              </div>
            </div>
            <div
              className="flex flex-col cursor-pointer  hover:scale-[1.1] duration-300 w-fit px-2 ml-8"
              onMouseEnter={() => setCurrentImg("02")}
            >
              <div className="flex gap-2 items-center">
                <ComputerStimulusT className="w-[80px] p-2" />
                <p className="text-[16px] font-bold text-[#DD663C]">
                  Positive Language
                  <br />
                  Stimulus
                </p>
              </div>
            </div>
            <div
              className="flex flex-col cursor-pointer  hover:scale-[1.1] duration-300 w-fit px-2 ml-8"
              onMouseEnter={() => setCurrentImg("03")}
            >
              <div className="flex gap-2 items-center">
                <ComputerInspiringT className="w-[80px] p-2" />
                <p className="text-[16px] font-bold text-[#DD663C]">
                  Activities Sharing &
                  <br />
                  Inspiring
                </p>
              </div>
            </div>
            <div className='col-span-2 flex flex-col items-center' >
                <DownloadButton className='cursor-pointer hover:scale-[1.1] duration-300' />
                <p className='text-[10px] font-light mt-2'>(The official version will be launched soon!)</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
