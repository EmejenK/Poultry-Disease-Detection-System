import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo2.png';
import { RiLinkedinFill } from 'react-icons/ri';
import { AiFillYoutube, AiFillGithub, AiOutlineInstagram } from 'react-icons/ai';

const socialLinks = [
    {
        icon: <RiLinkedinFill />,
        link: "/",
    },
    {
        icon: <AiFillYoutube />,
        link: "/",
    },
    {
        icon: <AiFillGithub />,
        link: "/",
    },
    {
        icon: <AiOutlineInstagram />,
        link: "/",
    },
];

const quickLinks01 = [
    {
        path: "/home",
        display: "Home",
    },
    {
        path: "/About",
        display: "About Us",
    },
    {
        path: "/services",
        display: "Services",
    },
    {
        path: "/",
        display: "Blog",
    },
];

const quickLinks02 = [
    {
        path: "/find-a-disease",
        display: "Find a Disease",
    },
    {
        path: "/",
        display: "Request Added Diagnostic",
    },
    {
        path: "/",
        display: "Find a Vaccine",
    },
    {
        path: "/",
        display: "Get an Opinion",
    },
];

const quickLinks03 = [
    {
        path: "/",
        display: "Contact",
    },
    {
        path: "/",
        display: "Careers",
    },
    {
        path: "/",
        display: "Terms & Conditions",
    },
    {
        path: "/",
        display: "Privacy Policy",
    },

];


const Footer = () => {

    const year = new Date().getFullYear();

    return (
        <footer className="pb-16 pt-10">
            <div className="container">
                <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">
                    <div>
                        <img src={logo} alt="" />
                        <p className="text-[16px] leading-7 font-[400] text-textColor line-clamp-2">
                            Poultry diseases prediction system to aid vetenary on making the right diagnosis.
                        </p>
                        <p className="text-[16px] leading-7 font-[400] text-textColor">
                            Copyright © {year} developed by Emejen. All rights reserved.
                        </p>

                        <div className="flex item-center gap-3 mt-4">
                            {socialLinks.map((link, index) => (
                                <Link to={link.path} key={index} className="w-9 h-9 border border-solid border-[#181A1E] 
                                rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                                    {link.icon}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div>
                            <h2 className="text-[20px] leading-[30px] font[700] mb-6 text-headingColor">
                                Quick Links
                            </h2>

                            <ul>
                                {quickLinks01.map((link, index) => (
                                    <li key={index} className="mb-4">
                                        <Link to={link.path} className="text-[16px] leading-7 font-[400] text-textColor hover:text-primaryColor">
                                            {link.display}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                    </div>

                    <div>
                        <h2 className="text-[20px] leading-[30px] font[700] mb-6 text-headingColor">
                            I want to
                        </h2>

                        <ul>
                            {quickLinks02.map((link, index) => (
                                <li key={index} className="mb-4">
                                    <Link to={link.path} className="text-[16px] leading-7 font-[400] text-textColor hover:text-primaryColor">
                                        {link.display}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-[20px] leading-[30px] font[700] mb-6 text-headingColor">
                            More Details
                        </h2>

                        <ul>
                            {quickLinks03.map((link, index) => (
                                <li key={index} className="mb-4">
                                    <Link to={link.path} className="text-[16px] leading-7 font-[400] text-textColor hover:text-primaryColor">
                                        {link.display}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer;