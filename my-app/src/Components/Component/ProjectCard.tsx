import React, { useState } from 'react';

interface ProjectCardProps {
  imgURL: string;
  title: string;
  subTitle: string;
  concept: string;
  type: string;
  content: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imgURL, title, subTitle, concept, type, content }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
    <div className="w-full cursor-pointer card"
         onMouseEnter={() => setIsHovered(true)}
         onMouseLeave={() => setIsHovered(false)}>
      <div className="max-h-80 overflow-hidden relative rounded-t-md">
        <img className="w-full object-cover" src={imgURL} alt="Project" />
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-40 flex justify-center items-center opacity-0 hover:opacity-100 duration-300">
          <p className="text-white text-center px-16 font-light">{content}</p>
        </div>
      </div>
      {/* <div className={`px-6 py-4 text-center transform transition-all duration-500 ${isHovered ? '' : ''}`}>
        {isHovered ? (
          <div className="backface-hidden">
          <div className="font-bold text-md mb-2">{title}</div>
            <p className="text-[#EA5514] text-sm">{type}</p>
            <p className="text-gray-300 text-xs">&nbsp;</p>
          </div>
        ) : (
          <React.Fragment>
            <div className="font-bold text-md mb-2">{title}</div>
            <p className="text-gray-500 text-sm">{subTitle}</p>
            <p className="text-gray-300 text-xs">{concept}</p>
          </React.Fragment>
        )}
      </div> */}
      <div className="flip-card ">
    <div className="flip-card-inner">
        <div className="flip-card-front bg-white rounded-b-md">
            <p className="font-bold text-md mb-1">{title}</p>
            <p className="text-gray-500 text-sm mb-1">{subTitle}</p>
            <p className="text-gray-300 text-xs">{concept}</p>
        </div>
        <div className="flip-card-back bg-white rounded-b-md">
            <p className="font-bold text-md mb-1">{title}</p>
            <p className="text-[#EA5514] text-sm mb-1">{type}</p>
            <p className="text-gray-300 text-xs">&nbsp;</p>
        </div>
    </div>
</div>
    </div>
    </>
  );
};

export default ProjectCard;
