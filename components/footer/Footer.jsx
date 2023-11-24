"use client"

import { FaFacebook, FaLinkedin, FaTwitter, FaLocationArrow } from 'react-icons/fa';
import { IoMdArrowDropright } from "react-icons/io";
import style from './footer.module.css'
import Link from 'next/link'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


export const H1 = ({ name }) => {
    return (
        <div className={style.myH1}>
            <h3>{name}</h3>
            <div className={style.line}></div>
        </div>
    )
}

export const Icons = ({ icon }) => {
    return (
        <div className={style.icon}>
            {icon}
        </div>
    )
}

export const Links = ({ link, name }) => {
    return (
        <div className={style.links}>
            <IoMdArrowDropright />
            <Link className={style.link} href={link}>{name}</Link>
        </div>
    )
}

export const Hour = ({ name, date }) => {
    return (
        <div className={style.time}>
            <h5>{name}</h5>
            <p>{date}</p>
        </div>
    )
}


const Footer = () => {

    useEffect(() => {
        AOS.init(); // Initialize AOS
      }, []);


    return (
        <footer className={style.footer}>
            <div data-aos="fade-up" data-aos-duration="2000" data-aos-easing="ease-in-out">
                <H1 name='About Us' />
                <p>Lorem ipsum dolor sit am <br /> consectetur adipisicing elit do <br /> eiusmod tempor incididunt ut <br /> labore dolore magna.</p>

                <div className={style.iconSection}>
                    <Icons icon={<FaFacebook />} />
                    <Icons icon={<FaTwitter />} />
                    <Icons icon={<FaLinkedin />} />
                </div>
            </div>

            <div data-aos="fade-up" data-aos-duration="2000" data-aos-easing="ease-in-out">
                <H1 name='Quick Links' />
                <div>
                    <Links link='/' name='Home' />
                    <Links link='#' name='About' />
                    <Links link='#service' name='Service' />
                    <Links link='#contact' name='Contact Us' />
                </div>
            </div>

            <div data-aos="fade-up" data-aos-duration="2000" data-aos-easing="ease-in-out">
                <H1 name='Open Hours' />
                <p>Lorem ipsum dolor sit ame <br /> consectetur adipisicing elit do <br /> eiusmod tempor incididunt.</p>

                <div className={style.timeSection}>
                    <Hour name='Monday - Thursday' date='8.00 Am - 8.00 PM' />
                    <Hour name='Friday' date='10.00 Am - 8.00 PM' />
                    <Hour name='Saturday' date='12.00 PM - 8.00 PM' />
                </div>
            </div>

            <div data-aos="fade-up" data-aos-duration="2000" data-aos-easing="ease-in-out">
                <H1 name='Newsletter' />
                <p>subscribe to our newsletter to get <br /> allour news in your inbox.. Lorem <br /> ipsum dolor sit amet, consectetur <br /> adipisicing elit,</p>

                <form className={style.form}>
                    <input required type='email' placeholder='Your Email Address' />
                    <button type='submit'>
                     <FaLocationArrow />
                    </button>
                </form>
            </div>
        </footer>
    )
}

export default Footer;