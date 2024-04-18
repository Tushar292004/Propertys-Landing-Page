import { motion } from "framer-motion";
import { useEffect } from "react";
import { leftSideVariants, rightSideVariants } from "../constants/motion"
import { hero01, hero02, hero03, roundedText, hero1, playStore, appleStore } from "../constants/images";
const Hero = () => {
    useEffect(() => {
        const handleScroll = () => {
            const line1 = document.querySelector('.line');
            if (line1) {
                const pos = window.scrollY - 30;
                
                line1.style.right = `${pos*2}px`;
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const line1 = document.querySelector('.line-1');
            if (line1) {
                const pos = window.scrollY - 300;
                
                line1.style.left = `${pos*0.5}px`;
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


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
                        <div className="w-[70%] md:ml-[8vw]">
                            <img src={hero1} alt="" className="rounded-4xl" />
                        </div>
                    </motion.div>
                </div>
                <div className="mt-[15vh]">
                    <span className="line absolute top-[60%] text-[6rem] font-extrabold right-[50px] text-[#6600CA] whitespace-nowrap md:block hidden">
                        The future is here!
                    </span>
                    <span className="line-1 absolute top-[80%] left-[300px] font-extrabold text-[5rem]  text-[#6600CA] whitespace-nowrap md:hidden">
                        The future is here!
                    </span>
                </div>
            </div>
        </section>
    );
};

export default Hero;
