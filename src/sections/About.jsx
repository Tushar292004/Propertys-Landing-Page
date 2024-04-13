import { aboutFeaturs } from "../constants"
import {animate, motion} from  'framer-motion'
import { hero01, hero02, hero03 } from "../constants/images";
import {leftSideVariants, rightSideVariants} from "../constants/motion"

const About = () => {
    return (
        <section id="about" className="bg-black">
            <div className="container">
                <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8">
                    {/* left side */}
                    <motion.div
                    variants={leftSideVariants}
                    initial="hidden"
                    animate="visible"
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
                    {/* right side */}
                    <motion.div 
                    variants={rightSideVariants}
                    initial="hidden"
                    animate="visible"
                    viewport={{once: true}}
                    className="flex lg:w-[47%] w-full">
                        <div className="lg:max-w-[500px] max-w-none max-h-[450px] w-full rounded-4xl overflow-hidden">
                            <img src={hero03} alt="about" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default About;
