import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface CharacterDisplayProps {
  text: string;
}

const ButtonNext: React.FC<CharacterDisplayProps> = ({ text }) => {
  return (
    <div className="relative w-fit group relative hover:scale-105 duration-300">
      <button className="bg-[#DD663C] py-2 text-white px-8 rounded-md relative z-20">
        { text }
      </button>
      <div className="absolute top-0 right-4 w-4/5 h-full rounded-md  text-[#DD663C] border-[#DD663C] border-[1px]  flex items-center justify-end pr-4 group-hover:-right-10 duration-300 transition-all">
        <FontAwesomeIcon icon={faArrowRight} />
      </div>
    </div>
  );
};

export default ButtonNext;
