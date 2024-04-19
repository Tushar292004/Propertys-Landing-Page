import { RiFacebookCircleFill, RiInstagramFill, RiTwitterFill, RiLinkedinBoxFill } from "react-icons/ri";

const Footer = () => {
    return (
        <footer className="py-[30px] bg-black">
            <div className="container">
                <div className="flex flex-col">
                    <div className="flex md:flex-row flex-col  items-center md:items-start justify-between flex-wrap md:gap-8 gap-2">
                        <div className="footer-col md:items-start items-center">
                            <h2 className="text-h2 text-white hover:text-primary-50">Proprtys.Ai</h2>
                            <p className="text-base !leading-[normal] text-gray-80">
                                Lorem ipsum dolor sit amet consectetur
                            </p>
                            <div className="flex items-center gap-x-4">
                                <a href="">
                                    <RiFacebookCircleFill size={32} className='social-icon' />
                                </a>
                                <a href="">
                                    <RiInstagramFill size={32} className='social-icon' />
                                </a>
                                <a href="">
                                    <RiTwitterFill size={32} className='social-icon' />
                                </a>
                                <a href="">
                                    <RiLinkedinBoxFill size={32} className='social-icon' />
                                </a>
                            </div>
                        </div>

                        <div className="flex md:gap-16 gap-2 md:flex-row flex-col">
                            <div className="footer-col md:items-start items-center">
                                <p className="footer-heading text-white">Quick Links</p>
                                <div className="flex flex-col gap-y-2 text-gray-80">
                                    <a href="#home" className="footer-link">Home</a>
                                    <a href="#about" className="footer-link">About</a>
                                    <a href="#detail" className="footer-link">Detail</a>
                                    <a href="#contact" className="footer-link">Contact</a>
                                </div>
                            </div>
                            <div className="footer-col justify-start align-top md:items-start items-center">
                                <p className="footer-heading text-white">Policies</p>
                                <div className="flex flex-col gap-y-2 text-gray-80 md:items-start items-center">
                                    <a href="#" className="footer-link">Privacy Policies</a>
                                    <a href="#" className="footer-link">Terms & Conditions</a>
                                    <a href="#" className="footer-link">Disclosures & Disclaimers</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-between flex-wrap gap-2 p-6 mt-[20px] bg-black rounded-4xl">
                        <p className="text-lg text-gray-80 mr-4 tracking-wide">
                            &copy; 2024 <span className="text-primary-50">Propertys.AI </span> All rights reserved.
                        </p>
                        <div className="flex items-center gap-10">
                            <a href="https://github.com/Tushar292004" target="blank" className="footer-link" >Designed By ~ <span className=" footer-link text-primary-50">Tushar</span></a>
                            <a href="" className="footer-link">Privacy Policies</a>
                            <a href="" className="footer-link">Term of Services</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
