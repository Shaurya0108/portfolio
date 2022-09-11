import React, {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";


const Navbar = () => {
    const [nav, setNav] = useState(false);

    const toggleNav = () => {
        setNav(!nav);
    };
    return (
        <div className="fixed w-full h-20 shadow-xl z-[100]">
        <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
            {/*Lazy Image*/}
            <Image
            src="/../public/assets/"
            alt="/"
            width="125"
            height="50"
            />
            <div>
                <ul className='hidden md:flex'>
                    <Link href='/'>
                        <li className='ml-10 text-sm uppercase hover:border-t'>Home</li>
                    </Link>
                    <Link href='/'>
                        <li className='ml-10 text-sm uppercase hover:border-t'>About</li>
                    </Link>
                    <Link href='/'>
                        <li className='ml-10 text-sm uppercase hover:border-t'>Skills</li>
                    </Link>
                    <Link href='/'>
                        <li className='ml-10 text-sm uppercase hover:border-t'>Projects</li>
                    </Link>
                    <Link href='/'>
                        <li className='ml-10 text-sm uppercase hover:border-t'>Contact</li>
                    </Link>
                </ul>
                <div onClick={toggleNav} className='md:hidden'>
                    <AiOutlineMenu size ={23}/>
                </div>
            </div>
        </div>

        <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70':''}>
            <div className={nav ? 'md:hidden fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500' : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'} >
                <div className='flex w-full items-center justify-between'>
                    <Image
                        src="/../public/assets/"
                        alt="/"
                        width="87"
                        height="35"
                    />
                    <div onClick={toggleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-75'>
                        <AiOutlineClose/>
                    </div>
                </div>
                <div className="py-4 flex flex-col">
                    <ul className="uppercase">
                        <Link href='/'>
                            <li className='py-4 text-sm'>Home</li>
                        </Link>
                        <Link href='/'>
                            <li className='py-4 text-sm'>About</li>
                        </Link>
                        <Link href='/'>
                            <li className='py-4 text-sm'>Skills</li>
                        </Link>
                        <Link href='/'>
                            <li className='py-4 text-sm'>Projects</li>
                        </Link>
                        <Link href='/'>
                            <li className='py-4 text-sm'>Contact</li>
                        </Link>
                    </ul>
                    <div className='pt-40'>
                        <p className="uppercase tracking-widest">Quick Connect</p>
                        <div className="flex items-center justify-between my-4 w-full sm:w-[75%]">
                            <a
                                href='https://www.linkedin.com/in/shaurya-dwivedi/'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-75'>
                                    <FaLinkedinIn/>
                                </div>
                            </a>
                            <a
                                href='https://github.com/Shaurya0108'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-75'>
                                    <FaGithub/>
                                </div>
                            </a>
                            <Link href='/#contact'>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-75'>
                                    <AiOutlineMail/>
                                </div>
                            </Link>
                            <Link href='/resume'>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-75'>
                                    <BsFillPersonLinesFill/>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
  );
};

export default Navbar;
