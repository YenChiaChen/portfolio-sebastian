import SwiperBlogCard from "../../Components/Component/SwiperCard";

export default function BlogSection() {
    return (
        <>
            <div className='bg-[#D9D9D9]'>
                <div className='container mx-auto pt-24'>
                    <div className='grid md:grid-cols-12 gap-x-8 pb-48'>
                        <div className='col-span-5'>
                            <p className='text-xs'>BLOG</p>
                            <p className='text-subtitle font-bold mt-2'>PRACTICE AND WRITE ABOUT DESIGN IN MY LIFE.</p>
                            <p className='font-light mt-2 text-content'>I perceive everyday life as a design process—an iterative journey of discovering new beauty, defining inspiring values, developing meaningful connections, and delivering impactful innovations. Thus, I practice, write, and share how I implement design in my life.</p>
                            <button className=' mt-6 border-[1px] border-[#DD663C] p-1 px-4 rounded-xl text-[#DD663C]'>READ ON MEDIUM</button>
                        </div>
                        <div className='col-span-7'><SwiperBlogCard /></div>
                    
                    </div>
                </div>
            </div>
        </>
    );
  }
  