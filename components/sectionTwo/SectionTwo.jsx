"use client"

import React from 'react'
import { FaArrowRight, FaAmbulance, FaClock, FaBook } from 'react-icons/fa';
import styles from '@/components/sectionTwo/sectionTwo.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


export const Case = ({ data }) => {
    return (
        <div className={styles.section}  key={data.id} >
            <div className={styles.card}>
            <p>{data.title}</p>
            <h2>{data.name}</h2>
            <p>{data.describe}</p>
            <div className={styles.arrow}>
                <div className={styles.arrowSection}> 
                    <h5>LEARN MORE</h5>
                    <FaArrowRight />
                </div>
                {data.img}
            </div>
            </div>
        </div>
    )
}

const SectionTwo = () => {

    useEffect(() => {
        AOS.init(); // Initialize AOS
      });

    const caseItem1 = {
        'id': 1,
        'title': 'Lorem Amet',
        'name': 'Emergency Cases',
        'describe': 'Lorem ipsum sit amet consectetur adipiscing elit. Vivamus et erat in lacus convallis sodales.',
        'img': <FaAmbulance className={styles.icon} />,
    }

    const caseItem2 = {
        'id': 2,
        'title': 'Fusce Porttitor',
        'name': 'Doctors Timetable',
        'describe': 'Lorem ipsum sit amet consectetur adipiscing elit. Vivamus et erat in lacus convallis sodales.',
        'img': <FaBook className={styles.icon} />,
    }

    const caseItem3 = {
        'id': 3,
        'title': 'Donec luctus',
        'name': 'Opening Hours',
        'describe': 'Lorem ipsum sit amet consectetur adipiscing elit. Vivamus et erat in lacus convallis sodales.',
        'img': <FaClock className={styles.icon} />
    }

  return (
    <div data-aos="fade-up" data-aos-duration="2000" data-aos-easing="ease-in-out" className={styles.caseSection}>
        <Case data={caseItem1} />
        <Case data={caseItem2} />
        <Case data={caseItem3} />
    </div>
  )
}

export default SectionTwo;