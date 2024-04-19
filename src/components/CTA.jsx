import {motion} from  "framer-motion";
import { centerVariants } from "../constants/motion";
import { contactUs } from "../constants/images";
import {FaAngleRight} from "react-icons/fa6";

const CTA = () => {
    return (
        <div className="py-[70px] bg-black">
            <motion.div 
            variants={centerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{margin:'0px 0px -200px 0px', once:true}}
            className="container md:h-[400px] flex justify-center">
                <div className="flex flex-col md:flex-row justify-evenly items-center gap-y-8 w-[80%] md:w-full h-full rounded-xl bg-[#6823EB] pt-[4vh]">
                    <div className="text-white w-[80%] md:w-[30%] md:text-start text-center">
                        <h1 className=" text-[2rem] font-bold my-2">Get in Touch!</h1>
                        <p className=" text-[1.5rem] my-2">Interested in joining our AI Spoken English course? </p>
                        <p className="text-[1.2rem] flex justify-center items-center font-semibold bg-[#FF0062] rounded-lg p-[20px] my-[6vh] hover:bg-[#4400C3] transition-all duration-300 ease-in-out">Whatsapp Us <FaAngleRight className="ml-4 text-[1.2rem]"/></p>
                    </div>
                    <div className="w-[80%] md:w-[40%] h-[100%] flex justify-center">
                        <img src={contactUs} alt="" className="w-[80%]" />
                    </div>
                </div>
            </motion.div>
        </div>
    );
};
export default CTA;