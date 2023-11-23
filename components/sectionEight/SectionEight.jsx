"use client"

import { Heart } from "../sectionThree/SectionThree"
import { FaClipboardList, FaRegEye, FaTooth, FaHeart  } from "react-icons/fa";
import { GiMedicalDrip } from 'react-icons/gi';
import { IoEar } from 'react-icons/io5';
import style from './sectionEight.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export const Treatment = ({ data }) => {
  return (
    <div className={style.section} key={data.id}>
       <div className={style.icon}>
        {data.icon}
       </div>

       <div className={style.name}>
         <h1>{data.name}</h1>
         <p>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. Donec <br />  luctus dictum eros ut imperdiet.</p>
       </div>
    </div>
  )
}

const SectionEight = () => {

  useEffect(() => {
    AOS.init(); // Initialize AOS
  });

  const item1 = {
    'id': 1,
    'icon': <FaClipboardList />,
    'name': 'General Treatment',
  }

  const item2 = {
    'id': 2,
    'icon': <FaTooth />,
    'name': 'Teeth Whitening',
  }

  const item3 = {
    'id': 3,
    'icon': <FaHeart />,
    'name': 'Heart Surgery',
  }

  const item4 = {
    'id': 4,
    'icon': <IoEar />,
    'name': 'Ear Treatment',
  }

  const item5 = {
    'id': 5,
    'icon': <FaRegEye />,
    'name': 'Vision Problems',
  }

  const item6 = {
    'id': 6,
    'icon': <GiMedicalDrip />,
    'name': 'Blood Transfusion',
  }

  return (
    <div className={style.container} id="service">
      <Heart name1='We Offer Different Services To'  name2='Improve Your Health' />
       <div data-aos="fade-up" data-aos-duration="2000" data-aos-easing="ease-in-out" className={style.item}>
   
        <div className={style.treatmentSection}>
          <Treatment data={item1} />
          <Treatment data={item2} />
          <Treatment data={item3} />
       </div>   

       <div className={style.treatmentSection}>
          <Treatment data={item4} />
          <Treatment data={item5} />
          <Treatment data={item6} />
       </div>
       </div>
    </div>
  )
}

export default SectionEight


