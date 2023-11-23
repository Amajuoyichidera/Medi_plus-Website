"use client"

import { Heart } from "../sectionThree/SectionThree"
import { BsScissors } from "react-icons/bs";
import { FaTooth, FaHeart, FaTimesCircle } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import style from './sectionNine.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export const Check = ({ name }) => {
    return (
        <div className={style.check}>
            <p>{name}</p>
            <FaCircleCheck className={style.checkIcon} />
        </div>
    )
}

export const Times = ({ name }) => {
    return (
        <div className={style.check}>
            <p>{name}</p>
            <FaTimesCircle className={style.timesIcon} />
        </div>
    )
}


export const Plastic = ({ item }) => {
    return (
        <div className={style.plastic} key={item.id}>
            <div className={style.icon}>
                {item.icon}
            </div>

            <div className={style.name}>
                <h2>{item.name}</h2>
                <h3><span>${item.price}</span> / Per Visit</h3>
            </div>

            <div className={style.timesSection}>
                <Check name='Lorem Ipsum Dolor Sit' />
                <Check name='Cubitur Sollicitudin Fentum' />
                <Times name='Nullam Interdum Enim' />
                <Times name='Donec Ultricies Metus' />
                <Times name='Pellentesque Eget Nibh' />
            </div>
            <button>Book Now</button>
        </div>
    )
}

const SectionNine = () => {

    useEffect(() => {
        AOS.init(); // Initialize AOS
      });

      
    const item1 = {
        'id': 1,
        'icon': <BsScissors />,
        'name': 'Plastic Suggery',
        'price': 199
    }

    const item2 = {
        'id': 2,
        'icon': <FaTooth />,
        'name': 'Teeth Whitening',
        'price': 299
    }

    const item3 = {
        'id': 3,
        'icon': <FaHeart />,
        'name': 'Heart Suggery',
        'price': 399
    }


  return (
    <div className={style.container}>
        <Heart name1='We Provide You The Best Treatment' name2='In Resonable Price' />

        <div data-aos="fade-up" data-aos-duration="2000" data-aos-easing="ease-in-out" className={style.plasticSection}>
            <Plastic item={item1} />
            <Plastic item={item2} />
            <Plastic item={item3} />
        </div>
    </div>
  )
}

export default SectionNine


