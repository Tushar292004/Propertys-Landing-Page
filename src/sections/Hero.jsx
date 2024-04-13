import {motion} from  "framer-motion";
import {leftSideVariants, rightSideVariants} from "../constants/motion"
import { hero01, hero02, hero03, roundedText } from "../constants/images";
const Hero = () => {
    return (
        <section id="home" className="flex items-center bg-black">
            <div className="container flex items-center justify-center">
                <div className="flex justify-between items-center flex-col-reverse lg:flex-row pt-[70px] lg:pt-0 gap-8">
                    {/* left side */}
                    <motion.div 
                    variants={leftSideVariants}
                    initial='hidden'
                    animate="visible"
                    className="flex flex-col gap-y-8 items-center lg:items-start text-center lg:text-start">
                        <div className="flex flex-col gap-y-4">
                            <h2 className="section-title-before section-title-after text-h1  text-white">Hi👋, I'm Happy!
                                Your Personal AI Executive</h2>
                            <p className="text-base font-medium text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero hic ipsam ut.</p>
                        </div>
                        <button type="button" className="btn btn-primary">Construction For Good : Happy ?</button>
                        <button type="button" className="btn btn-outline">Investment For Good : Lucky ? </button>
                    </motion.div>
                    {/*  right side */}
                    <motion.div 
                    variants={rightSideVariants}
                    initial='hidden'
                    animate="visible"
                    className="relative">
                        <div className="grid grid-cols-[minmax(70px,_230px)_minmax(70px,_250px)] grid-rows-[auto_auto] sm:grid-cols-[240px_270px] sm:grid-rows-[220px_220px] xl:grod-cols-[270px_300px] xl:grid-rows-[250px_250px] gap-4">
                        <img src={hero01} alt="" className="rounded-4xl" />
                        <img src={hero02} alt="" className="row-span-2 rounded-4xl" />
                        <img src={hero03} alt="" className="rounded-4xl" />
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
