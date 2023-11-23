"use client"

import { Heart } from "../sectionThree/SectionThree"
import { FaClipboardList, FaRegEye, FaTooth, FaHeart  } from "react-icons/fa";
import { GiMedicalDrip } from 'react-icons/gi';
import { IoEar } from 'react-icons/io5';
import style from './sectionEight.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export const Treatment = ({ icon, name }) => {
  return (
    <div className={style.section}>
       <div className={style.icon}>
        {icon}
       </div>

       <div className={style.name}>
         <h1>{name}</h1>
         <p>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. Donec <br />  luctus dictum eros ut imperdiet.</p>
       </div>
    </div>
  )
}

export const TreatmentSection = ({ item }) => {
  return (
    <div key={item.id} className={style.treatmentSection}>
    <Treatment icon={item.icon1} name={item.name1} />
    <Treatment icon={item.icon2} name={item.name2} />
    <Treatment icon={item.icon3} name={item.name3} />
    </div>
  )
}


const SectionEight = () => {

  useEffect(() => {
    AOS.init(); // Initialize AOS
  });

  const item1 = {
    'id': 1,
    icon1: <FaClipboardList />,
    name1: 'General Treatment',
    icon2: <FaTooth />,
    name2: 'Teeth Whitening',
    icon3: <FaHeart />,
    name3: 'Heart Surgery',
  }

  const item2 = {
    'id': 2,
    icon1: <IoEar />,
    name1: 'Ear Treatment',
    icon2: <FaRegEye />,
    name2: 'Vision Problems',
    icon3: <GiMedicalDrip />,
    name3: 'Blood Transfusion',
  }

  return (
    <div className={style.container} id="service">
      <Heart name1='We Offer Different Services To'  name2='Improve Your Health' />
       <div data-aos="fade-up" data-aos-duration="2000" data-aos-easing="ease-in-out" className={style.item}>
       <TreatmentSection item={item1} />
       <TreatmentSection item={item2} />
       </div>
    </div>
  )
}

export default SectionEight