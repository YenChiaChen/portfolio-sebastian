import SwiperCard from "../../Components/Component/Swiper";

export default function BlogSection() {
    return (
        <>
            <div className='bg-[#BABABA]'>
                <div className='container mx-auto pt-24'>
                    <div className='grid md:grid-cols-2 gap-x-24 pb-48'>
                        <div>
                            <p className='text-xs'>BLOG</p>
                            <p className='text-xl font-bold mt-2'>PRACTICE AND WRITE ABOUT DESIGN IN MY LIFE.</p>
                            <p className='font-light mt-2'>I perceive everyday life as a design process—an iterative journey of discovering new beauty, defining inspiring values, developing meaningful connections, and delivering impactful innovations. Thus, I practice, write, and share how I implement design in my life.</p>
                            <button className='text-sm mt-4 border-[1px] border-[#DD663C] p-1 px-4 rounded-xl text-[#DD663C]'>READ ON MEDIUM</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
  }
  