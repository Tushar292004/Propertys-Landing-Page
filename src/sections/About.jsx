import { aboutFeaturs } from "../constants"
import { animate, motion } from 'framer-motion'
import { hero01, hero02, hero03 } from "../constants/images";
import { leftSideVariants, rightSideVariants } from "../constants/motion"

const About = () => {
    return (
        <section id="about" className="bg-black">
            <div className="container">
                <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8">
                    {/* left side */}
                    <motion.div
                        variants={leftSideVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex flex-col gap-y-8 lg:w-1/2 w-auto flex-shrink-0 text-center lg:text-star">
                        <div className="flex flex-col gap-y-4 text-start">
                            <p className="text-gray-80">WHY SUPERNOVA?</p>
                            <h2 className="relative text-[3.5rem] font-bold leading-[3.25rem] w-full text-white">
                            Quality schools out of reach for 250M Indian Children.
                            </h2>
                            <p className="text-bold font-lg text-gray-80">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium deserunt incidunt quia non vitae voluptates, adipisci sit dolore quisquam eos repudiandae laborum culpa minima beatae velit ut! Magni, asperiores deserunt?
                            </p>
                        </div>
                    </motion.div>
                    {/* right side */}
                    <motion.div
                        variants={rightSideVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex lg:w-1/2 w-full">
                        <div className="">

                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default About;
