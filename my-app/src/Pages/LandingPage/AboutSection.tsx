import SwiperCard from "../../Components/Component/Swiper";

export default function AboutSection() {
    return (
        <>
            <div className='bg-[#e8e8e8]'>
                <div className='container mx-auto pt-24'>
                    <div className='grid md:grid-cols-2 gap-x-24'>
                        <div className='text-left'>
                            <p className='tracking-widest text-[#EA5514]'>ABOUT</p>
                            <div className='w-[10px] border-b-[4px] border-[#EA5514] h-[16px]'>&nbsp;</div>
                            <div className='mt-12 tracking-wide font-light'>
                                <p>Hello! I am a diverse and dynamic <span className='font-bold'>Service Designer</span> with 5 years of experience in the technology sector, proficient in leveraging service design research tools to generate insightful strategies and optimize online and offline service journeys. I reckon service design is akin to weaving, <span className='font-bold'>deftly interlacing cross-disciplinary stakeholders and touchpoints to create captivating connections.</span></p>
                            </div>
                            <p className='mt-4 text-gray-400 text-sm'>Storyteller | Inclusive Designer | Innovation Strategist | Fintech Enthusiast</p>

                            <button className='bg-[#DD663C] py-2 text-white px-8 rounded-md mt-16 text-light'>Learn more</button>
                        </div>
                        <div className='text-center'>
                            <SwiperCard />
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    );
  }
  