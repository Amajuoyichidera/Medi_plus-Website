"use client"

import { FaHeartbeat, FaHospital, FaStethoscope, FaAmbulance } from 'react-icons/fa';
import styles from '@/components/sectionThree/sectionThree.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export const Help = ({ data }) => {
    return (
        <div className={styles.help}  key={data.id}>
            <div className={styles.logoContainer}>
                {data.logo}
            </div>
            <h2>{data.title}</h2>
            <p>{data.body}</p>
        </div>
    )
}

export const Heart = ({ name1, name2 }) => {
    return (
        <div key={name1} className={styles.heartSection}>
        <h1>{name1}</h1>
        <h1 className={styles.family}>{name2}</h1>
        <FaHeartbeat className={styles.heart} />
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts</p>
        </div>
    )
}


const SectionThree = () => {

    useEffect(() => {
        AOS.init(); // Initialize AOS
      });

    const case1Data = {
        'id': 1,
        'logo': <FaAmbulance className={styles.logo} />,
        'title': 'Emergency Help',
        'body': 'Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam vulputate.'
    }

    const case2Data = {
        'id': 2,
        'logo': <FaHospital className={styles.logo} />,
        'title': 'Enriched Pharmecy',
        'body': 'Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam vulputate.'
    }

    const case3Data = {
        'id': 3,
        'logo': <FaStethoscope className={styles.logo} />,
        'title': 'Medical Treatment',
        'body': 'Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam vulputate.'
    }

  return (
    <div className={styles.container}>
        <Heart name1='We Are Always Ready To Help You &' name2='Your Family' />
        <div data-aos="fade-up" data-aos-duration="2000" data-aos-easing="ease-in-out" className={styles.helpContainer}>
            <Help data={case1Data} />
            <div className={styles.doted}></div>
            <Help data={case2Data} />
            <div className={styles.doted}></div>
            <Help data={case3Data} />
        </div>
    </div>
  )
}

export default SectionThree



