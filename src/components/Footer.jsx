import { RiFacebookCircleFill, RiInstagramFill, RiTwitterFill, RiLinkedinBoxFill } from "react-icons/ri";

const Footer = () => {
    return (
        <footer className="py-[30px] bg-gray-10">
            <div className="container">
                <div className="flex flex-col">
                    <div className="flex items-start justify-between flex-wrap gap-8">
                        <div className="footer-col">
                            <h2 className="text-h2 text-white">Proprtys.Ai</h2>
                            <p className="text-base !leading-[normal] text-gray-80">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias facilis in quod sapiente dolore fugit nemo nulla excepturi ut eveniet.
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
                        
                            <div className="footer-col">
                                <p className="footer-heading text-white">Quick Links</p>
                                <div className="flex flex-col gap-y-2 text-gray-80">
                                    <a href="#home" className="footer-link">Home</a>
                                    <a href="#about" className="footer-link">About</a>
                                    <a href="#detail" className="footer-link">Detail</a>
                                    <a href="#contact" className="footer-link">Contact</a>
                                </div>
                            </div>
                            <div className="footer-col justify-start align-top">
                                <p className="footer-heading text-white">Policies</p>
                                <div className="flex flex-col gap-y-2 text-gray-80">
                                    <a href="#" className="footer-link">Privacy Policies</a>
                                    <a href="#" className="footer-link">Terms & Conditions</a>
                                    <a href="#" className="footer-link">Refund Policies</a>
                                    <a href="#" className="footer-link">Subcriptions</a>
                                </div>
                            </div>
                        

                    </div>
                    <div className="flex justify-between flex-wrap gap-4 p-6 mt-[20px] bg-gray-20 rounded-4xl">
                        <p className="text-lg text-gray-80 ">
                           &copy; 2024 <span className="text-primary-50">Propertys.AI</span> All rights reserved.
                        </p>
                        <div className="flex items-center gap-4">
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
