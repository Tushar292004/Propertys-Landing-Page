import React from 'react'
import{useState} from 'react';
import { faqContent } from "../constants"
import { hero01, hero02, hero03 } from "../constants/images";
import { motion } from "framer-motion"
import { leftSideVariants, rightSideVariants } from '../constants/motion';
import { FaAngleDown } from 'react-icons/fa6'

function Detail() {
    const [expandedState, setExpandedState] = useState({});

  const toggleContent = (title) => {
    setExpandedState((prevState) => ({
      ...prevState,
      [title]: !prevState[title],
    }));
  };

    return (
        <section id="detail" className="bg-black">
            <div className="container flex flex-col md:flex-row  md:w-[100%] w-[80%]">
                {/* left side */}
                <div className="text-white text-[2.5rem] font-bold md:w-[30%] md:text-start text-center">
                    Frequently Asked Questions 🤔
                </div>
                {/* right side */}
                <div className="flex md:ml-[2vh] md:w-[70%] flex-col">
                    {faqContent.map((content) => (
                        <div className='border-b-2 border-b-gray-20 py-[4vh]'>
                            <div className="flex w-full justify-between cursor-pointer " onClick={() => toggleContent(content.title)}>
                                <h1 key={content.title} className='text-white text-[2rem]'>{content.title}</h1>
                                <FaAngleDown className={`text-white text-[2rem] transform transition-transform duration-300 ease-in-out ${expandedState[content.title] ? 'rotate-180' : ''}`} />
                            </div>
                            {expandedState[content.title] && <div className='text-[#ffffff80] text-[1.5rem] transition-all duration-300 ease-in-out'>{content.description}</div>}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Detail
