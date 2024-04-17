import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { navbarVariants, mobileMenuVariants } from '../constants/motion'
import { navLinks } from '../constants'
import { useResizeX, useScrollY } from '../hooks';
const Header = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const resized = useResizeX(992);
    const scrolled = useScrollY(100);

    useEffect(() => {
        if (resized) setToggleMenu(false)
    }, [resized])
    return (
        <header
            layouts
            variants={navbarVariants}
            initial={["default", { y: -100 }]}
            animate={[scrolled ? "active" : "default", "slide"]}
            transition={{ duration: 0.3 }}
            className='flex items-center h-[80px] z-[1000] w-full border border-solid border-transparent bg-[#1B1B1B]'>
            <nav className="container flex items-center justify-center gap-x-16">
                <a href="/" className=" mr-[8vw] text-2xl font-bold text-white">
                    Propertys.Ai
                </a>
                <div className="hidden lg:flex lg:justify-between w-full">
                    <ul className="flex items-center gap-x-4">
                        {/* {navLinks.map((link) => {
                            return (
                                <li key={link.id}>
                                    <a href={`#${link.id}`} className='link'>
                                        {link.title}</a>
                                </li>
                            );
                        })} */}
                    </ul>
                    <div className="flex items-center gap-x-4">
                        <button type='button' className='btn btn-outline'>
                            Sign Up
                        </button>
                        <button type='button' className='btn btn-primary'>
                            Log In
                        </button>
                    </div>
                </div>
                {/* <div className={`header__menu-icon flex lg:hidden relative w-5 h-4 flex-shrink-0 cursor-pointer overflow-hidden ${toggleMenu ? "active" : ""}`}
                    onClick={() => setToggleMenu(!toggleMenu)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div> */}
            </nav>
            {/* Mobile Stuff */}
            <AnimatePresence>
                {toggleMenu && (
                    <motion.nav className='absolute top-0 inset-x-0 h-dvh bg-black -z-10'
                        variants={mobileMenuVariants}
                        initial="hidden" 
                        animate="visible" 
                        exit="hidden">
                        <div className="container flex flex-col justify-between h-full pt-[100px] pb-6">
                            <ul className="flex flex-col gap-y-4">
                                {/* {navLinks.map((link) => {
                                    return (
                                        <li key={link.id} className='h-8'>
                                            <a href={`#${link.id}`} className='link text-xl'>
                                                {link.title}</a>
                                        </li>
                                    );
                                })} */}
                            </ul>
                            <div className='flex items-center gap-x-4'>
                                <button type='button' className='btn btn-outline'>
                                    Sign Up
                                </button>
                                <button type='button' className='btn btn-primary'>
                                    Log In
                                </button>
                            </div>
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>

        </header>
    );
};

export default Header;
