import { motion } from "framer-motion";
import { leftSideVariants, rightSideVariants } from "../constants/motion"
import { hero01, hero02, hero03, roundedText } from "../constants/images";
const Hero = () => {
    return (
        <section id="home" className="flex items-center bg-black pt-[10px]">
            <div className="container flex items-center justify-center">
                <div className="flex justify-between items-center flex-col-reverse lg:flex-row lg:pt-0 gap-8">
                    {/* left side */}
                    <motion.div
                        variants={leftSideVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-col gap-y-8 items-center lg:items-start text-center lg:text-start">
                        <div className="flex flex-col items-center gap-y-4">
                            <h2 className="text-[1.7rem] font-extrabold w-3/4 text-white">Hi👋, I'm Happy!
                                Your Personal AI Executive</h2>
                        </div>
                        <button type="button" className="btn btn-primary">Construction For Good : Happy ?</button>
                        <button type="button" className="btn btn-outline">Investment For Good : Lucky ? </button>
                    </motion.div>
                    {/*  right side */}
                    <motion.div
                        variants={rightSideVariants}
                        initial='hidden'
                        animate="visible"
                        className="relativen flex justify-center">
                        <div className="w-1/2 ">
                            <img src={hero01} alt="" className="rounded-4xl" />
                        </div>
                        {/* <div className="hidden sm:block w-[120px] h-[120px] hover:rotate-45 absolute top-1/2  -translate-x-1/2 -translate-y-1/2 left-[calc(50%-15px)] transition ease-in-out">
                            <img src={roundedText} alt="Explore More" />
                        </div> */}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
