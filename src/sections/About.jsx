import { aboutFeaturs } from "../constants"
import { animate, motion } from 'framer-motion'
import { hero01, hero02, hero03 } from "../constants/images";
import { leftSideVariants, rightSideVariants } from "../constants/motion"

const About = () => {
    return (
        <section id="about" className="bg-black pt-0">
            <div className="container">
                <div className="flex flex-col items-center justify-between gap-8">
                    {/* left side */}
                    <motion.div
                        variants={leftSideVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex flex-col md:flex-row justify-between gap-y-8 w-[90%] lg:w-[100%] flex-shrink-0 text-center md:text-start">
                        <div className="flex flex-row gap-y-4 ">
                            <div className="md:w-[40vw]">
                                <p className="text-gray-80 mb-[2vh]" >WHY SUPERNOVA?</p>
                                <h2 className="relative text-[2rem] leading-8 md:leading-[60px] md:text-[4rem] font-bold  w-full text-white">
                                    Quality schools out of reach for 250M Indian Children.
                                </h2>
                            </div>
                            
                        </div>
                        <p className="text-bold text-[1.2rem] md:text-[1.4rem] md:width-[30vw] text-[#ffffff75]">
                               Lorem ipsum dolor sit amet consectetur adipisicing elit. In eos consectetur debitis, beatae illum dolorum expedita? Velit suscipit iste, expedita distinctio, consequatur nihil accusamus exercitationem asperiores tempore eum corrupti impedit.
                            </p>
                    </motion.div>
                    {/* right side */}
                    <motion.div
                        variants={rightSideVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex flex-col-reverse md:flex-row justify-between gap-y-8 w-[90%] lg:w-[100%] flex-shrink-0 text-center md:text-start">
                            <p className="text-bold text-[1.2rem] md:text-[1.4rem] md:width-[30vw] text-[#ffffff75] ">
                               Lorem ipsum dolor sit amet consectetur adipisicing elit. In eos consectetur debitis, beatae illum dolorum expedita? Velit iste, expedita distinctio, consequatur nihil accusamus exercitationem asperiores tempore eum corrupti impedit.
                            </p>
                        <div className="md:ml-[1vw] flex flex-row gap-y-4 md:pl-[4vw]">
                            <div className="md:w-[40vw]">
                                <p className="text-gray-80 mb-[2vh]" >WHY SUPERNOVA?</p>
                                <h2 className="relative text-[2rem] leading-8 md:leading-[60px] md:text-[4rem] font-bold  w-full text-white ">
                                    Quality schools out of reach for.
                                </h2>
                            </div>
                            
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default About;
