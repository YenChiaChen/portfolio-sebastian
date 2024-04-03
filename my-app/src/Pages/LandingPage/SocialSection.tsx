import DraggableCard from "../../Components/Component/DragNDropCard";
export default function SocialSection() {
    
    return (
        <div className='bg-[#e8e8e8]'>
        <div className='container mx-auto pt-48'>
            <div className='grid md:grid-cols-2 gap-x-24'>
                <div className='text-left relative'>
                <DraggableCard>
                    <div className='cursor-grab text-xs p-8 border-[1px] border-[#808080] rounded-xl w-4/5 flex gap-4 absolute hover:z-50 bg-[#e8e8e8] z-40'>
                        <p>"Sebastian exemplifies effective co-production by nurturing collective and reflective project development. His strong diligence and intelligence shine through, as he engages with people earnestly and delivers remarkable insights and outcomes. It's refreshing to see a designer prioritize genuine inclusivity."<span className='font-bold'> - Natalie, V&A Design Curator</span></p>
                        <div className='w-[100px] h-[30px] bg-[#DFC3C3] rounded-md'>&nbsp;</div>
                    </div>
                </DraggableCard>
                <div className='rotate-[5deg] relative hover:z-50'>
                <DraggableCard>
                    <div className='cursor-grab text-xs p-8 border-[1px] border-[#808080] rounded-xl w-4/5 flex gap-4 absolute hover:z-50 bg-[#e8e8e8] right-0 -top-24 z-30'>
                        <p>"Sebastian exemplifies effective co-production by nurturing collective and reflective project development. His strong diligence and intelligence shine through, as he engages with people earnestly and delivers remarkable insights and outcomes. It's refreshing to see a designer prioritize genuine inclusivity."<span className='font-bold'> - Natalie, V&A Design Curator</span></p>
                        <div className='w-[100px] h-[30px] bg-[#DFC3C3] rounded-md'>&nbsp;</div>
                    </div>
                </DraggableCard>
                </div>
                <div className='-rotate-[5deg] relative hover:z-50'>
                <DraggableCard>
                    <div className='cursor-grab text-xs p-8 border-[1px] border-[#808080] rounded-xl w-4/5 flex gap-4 absolute hover:z-50 bg-[#e8e8e8] -left-24 -top-16 z-20'>
                        <p>"Sebastian exemplifies effective co-production by nurturing collective and reflective project development. His strong diligence and intelligence shine through, as he engages with people earnestly and delivers remarkable insights and outcomes. It's refreshing to see a designer prioritize genuine inclusivity."<span className='font-bold'> - Natalie, V&A Design Curator</span></p>
                        <div className='w-[100px] h-[30px] bg-[#DFC3C3] rounded-md'>&nbsp;</div>
                    </div>
                </DraggableCard>
                </div>
                </div>
                <div className='text-left'>
                    <p className='tracking-widest text-[#EA5514]'>SOCIAL PROOF</p>
                    <div className='w-[10px] border-b-[4px] border-[#EA5514] h-[16px]'>&nbsp;</div>
                    <div className='mt-12 tracking-wide font-light'>
                        <p>It's a great pleasure to collaborate with diverse individuals on my design journey. Here are some testimonials from colleagues and industry experts who have worked with me.</p>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
    );
}
