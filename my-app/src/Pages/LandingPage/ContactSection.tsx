import { faLinkedin, faMedium, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ContactSection() {
    return (
        <div id='ContactSection'>
            <div className='bg-[#6c6c6c] relative'>
                <div className='triangle absolute left-0 top-0'></div>
                <div className='container mx-auto py-12 text-center'>
                   <p className="text-[36px] font-bold text-[#DD663C] tracking-[16px]">CONTACT</p>
                   <p className='text-left max-w-[660px] mx-auto text-[#D9D9D9] mt-4 tracking-widest font-light text-[20px] mb-4'>For inquiries or opportunities, feel free to reach out to me! I'm always open to connecting with fellow professionals and discussing design. <span className='font-bold'>Let's spin impactful services together!</span></p>
                    <div className='flex gap-4 justify-center mt-8 '>
                        <a href='mailto:sebaswang.design@gmail.com'><div className='flex items-center border-[2px] border-white text-[20px] text-white p-3 rounded-full opacity-50 hover:opacity-100 cursor-pointer hover:border-[4px] box-border hover:-m-[2px] duration-200'><FontAwesomeIcon icon={faEnvelope} /></div></a>
                        <a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/sebastian-wang-26369a222/'><div className='flex items-center border-[2px] border-white text-[20px] text-white p-3 rounded-full opacity-50 hover:opacity-100 cursor-pointer hover:border-[4px] box-border hover:-m-[2px] duration-200'><FontAwesomeIcon icon={faLinkedin} /></div></a>
                        <a target='_blank' rel="noreferrer" href='https://medium.com/@SBSTN_WANG'><div className='flex items-center border-[2px] border-white text-[18px] text-white py-3 px-[10px] rounded-full opacity-50 hover:opacity-100 cursor-pointer hover:border-[4px] box-border hover:-m-[2px] duration-200'><FontAwesomeIcon icon={faMedium} /></div></a>
                        <a target='_blank' rel="noreferrer" href='https://www.instagram.com/haoooo2playhard/'><div className='flex items-center border-[2px] border-white text-[20px] text-white p-3 rounded-full opacity-50 hover:opacity-100 cursor-pointer hover:border-[4px] box-border hover:-m-[2px] duration-200'><FontAwesomeIcon icon={faInstagram} /></div></a>
                    </div>
                </div>
            </div>
            <div className='bg-[#202020] h-[60px]'></div>
        </div>
    );
  }
  