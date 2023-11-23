"use client"

import { FaHome, FaUsers, FaSmile, FaFileAlt } from 'react-icons/fa';
import styles from '@/components/sectionFour/sectionFour.module.css'
import Image from "next/legacy/image";
import myBg from '@/public/hand_bg.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


export const Rooms = ({ data }) => {
    return (
        <div data-aos="fade-up" data-aos-duration="2000" data-aos-easing="ease-in-out" className={styles.room}> 
            <div className={styles.logoContainer}>
                {data.icon}
            </div>
            <div>
                <h1>{data.number}</h1>
                <p>{data.title}</p>
            </div>
        </div>
    )
}


const SectionFour = () => {

    useEffect(() => {
        AOS.init(); // Initialize AOS
      });

    const data1 = {
        'icon': <FaHome className={styles.logo} />,
        'number': 3400,
        'title': 'Hospital Rooms'
    }

    
    const data2 = {
        'icon': <FaUsers className={styles.logo} />,
        'number': 500,
        'title': 'Specialist Doctors'
    }

    const data3 = {
        'icon': <FaSmile className={styles.logo} />,
        'number': 4000,
        'title': 'Happy Patients'
    }

    const data4 = {
        'icon': <FaFileAlt className={styles.logo} />,
        'number': 30,
        'title': 'Years Of Experience'
    }

  return (
    <div className={styles.container}>
        <div className={styles.image}>
            <Image className={styles.myImg} layout='fill' objectFit='cover' src={myBg} height={350} alt="background image" />
        </div>
        <div className={styles.roomSection}>
        <Rooms data={data1} />
        <Rooms data={data2} />
        <Rooms data={data3} />
        <Rooms data={data4} />
        </div>
    </div>
  )
}

export default SectionFour