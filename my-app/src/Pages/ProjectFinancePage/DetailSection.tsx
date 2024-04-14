import { ReactElement } from "react";

export default function DetailSection(): ReactElement {
    return (
        <div className="bg-[#e8e8e8] pt-24 pb-24">
            <footer className="footer container mx-auto font-light">
                <nav className='text-black'>
                    <p className="tracking-[4px] text-[16px] font-bold">DATE</p>
                    <div className="w-[19px] border-b-[6px] border-[#EA5514] h-[6px]">
                        &nbsp;
                    </div>
                    <p className="text-[16px] mt-8 ">
                        2023
                    </p>
                    <p className="text-[16px] ">
                    5-Month Individual Project
                    </p>
                </nav>
                <nav className='text-black'>
                    <p className="tracking-[4px] text-[16px] font-bold">ROLE</p>
                    <div className="w-[19px] border-b-[6px] border-[#EA5514] h-[6px]">
                        &nbsp;
                    </div>
                    <p className="text-[16px] mt-8 ">
                    Service Design
                    </p>
                    <p className="text-[16px] ">
                    UI / UX
                    </p>
                    <p className="text-[16px] ">
                    Operational Strategy
                    </p>
                </nav>
                <nav className='text-black'>
                    <p className="tracking-[4px] text-[16px] font-bold">ORGANIZATION</p>
                    <div className="w-[19px] border-b-[6px] border-[#EA5514] h-[6px]">
                        &nbsp;
                    </div>
                    <p className="text-[16px] mt-8 font-semibold">
                    Collaborators
                    </p>
                    <p className="text-[16px] ">
                    The Neurodivisity Charity
                    </p>
                    <p className="text-[16px] ">
                    The Brain Charity
                    </p>
                </nav>
                <nav className='text-black'>
                    <p className="tracking-[4px] text-[16px] font-bold">HOW MIGHT WE</p>
                    <div className="w-[19px] border-b-[6px] border-[#EA5514] h-[6px]">
                        &nbsp;
                    </div>
                    <p className="text-[16px] mt-8">
                    How might young adults with 
                    </p>
                    <p className="text-[16px] ">
                    ADHD manage symptoms and 
                    </p>
                    <p className="text-[16px] ">
                    curb impulsive shopping behavior
                    </p>
                    <p className="text-[16px] ">
                    without a decade of learning?
                    </p>
                </nav>
                <nav className='text-black'>
                    <p className="tracking-[4px] text-[16px] font-bold">OUTCOMES</p>
                    <div className="w-[19px] border-b-[6px] border-[#EA5514] h-[6px]">
                        &nbsp;
                    </div>
                    <p className="text-[16px] mt-8">
                    A Google Chrome Extension,
                    </p>
                    <p className="text-[16px] ">
                    ADHD Financial Learning Journey Map,
                    </p>
                    <p className="text-[16px] ">
                    Service Blueprint and System Map for ADHD
                    </p>
                    <p className="text-[16px] ">
                    Financial Course
                    </p>
                </nav>
            </footer>
        </div>
    );
}
