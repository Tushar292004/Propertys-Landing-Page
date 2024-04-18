import { motion } from "framer-motion";
import { leftSideVariants, rightSideVariants } from "../constants/motion"
import { hero01, hero02, hero03, roundedText, hero1, playStore, appleStore } from "../constants/images";
const Hero = () => {
    return (
        <section id="home" className="flex  bg-black pt-[10px]">
            <div className="container flex flex-col items-center md:mt-[6vh]">
                <div className="flex justify-between items-center flex-col mt-[8vh] lg:flex-row lg:pt-0 gap-8">
                    {/* left side */}
                    <motion.div
                        variants={leftSideVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-col gap-y-8  text-center lg:text-start">
                        <div className="flex flex-col items-center gap-y-4 md:items-start">
                            <h2 className="text-[2.5rem] font-extrabold text-white">Hi👋, I'm <span className="text-[#5ED4F2]">Happy!</span><br/>
                                Your Personal AI Executive</h2>
                        </div>
                        <div className="flex flex-row justify-center lg:justify-start">
                            <img src={appleStore} alt="" className=" w-[35vw] md:w-[25vw]"/>
                            <img src={playStore} alt="" className="w-[35vw] md:w-[25vw]"/>
                        </div>
                    </motion.div>
                    {/*  right side */}
                    <motion.div
                        variants={rightSideVariants}
                        initial='hidden'
                        animate="visible"
                        className="flex justify-center lg:w-1/2">
                        <div className="w-[60%]">

                            <img src={hero1} alt="" className="rounded-4xl" />
                        </div>
                        {/* <div className="hidden sm:block w-[120px] h-[120px] hover:rotate-45 absolute top-1/2  -translate-x-1/2 -translate-y-1/2 left-[calc(50%-15px)] transition ease-in-out">
                            <img src={roundedText} alt="Explore More" />
                        </div> */}
                    </motion.div>
                </div>
                <div className="mt-[15vh]">
                    <span className="text-[5rem]  text-white">
                        The future is here!
                    </span>
                </div>
            </div>
        </section>
    );
};

export default Hero;
