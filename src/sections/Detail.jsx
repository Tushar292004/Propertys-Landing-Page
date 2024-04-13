import React from 'react'
import { aboutFeaturs } from "../constants"
import { hero01, hero02, hero03 } from "../constants/images";
import {motion} from  "framer-motion" 
import { leftSideVariants, rightSideVariants }   from '../constants/motion';
function Detail() {
    return (
        <div>
            <section id="detail" className="bg-black">
                <div className="container">
                    <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8">
                        {/* left */}
                        <motion.div
                        variants={leftSideVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true}}
                        className="flex lg:w-[47%] w-full">
                            <div className="lg:max-w-[500px] max-w-none max-h-[450px] w-full rounded-4xl overflow-hidden">
                                <img src={hero03} alt="about" />
                            </div>
                        </motion.div>

                        {/* right */}
                        <motion.div
                        variants={rightSideVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true}}
                        className="flex flex-col gap-y-8 lg:w-[53%] w-auto flex-shrink-0 text-center lg:text-star">
                            <div className="flex flex-col gap-y-4">
                                <h2 className="relative section-title-after text-h2 text-white">
                                    Lorem ipsum dolor sit amet consectetur adipisicing .
                                </h2>
                                <p className="text-base font-medium text-white">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium deserunt incidunt quia non vitae voluptates, adipisci sit dolore quisquam eos repudiandae laborum culpa minima beatae velit ut! Magni, asperiores deserunt?
                                </p>
                            </div>
                            <div className="flex flex-wrap justify-center gap-4">
                                {aboutFeaturs.map((feature) => (
                                    <div key={feature.title} className="group flex flex-col basis-[240px] flex-grow border border-solid border-white rounded-3xl  bg-[#2a2a2a] p-4 text-start hover:bg-primary-50 transition-colors duration-300">
                                        <p className="text-xl font-semibold text-white !leading-[normal] group-hover:text-black">
                                            {feature.title}
                                        </p>
                                        <p className="text-base font-medium text-white leading=[normal] group-hover:text-gray-10">{feature.description}</p>
                                    </div>))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Detail
