import React from 'react'
import { FaArrowRight, FaAmbulance, FaClock, FaBook } from 'react-icons/fa';
import styles from '@/components/sectionTwo/sectionTwo.module.css'

export const Case = ({ data }) => {
    return (
        <div className={styles.section}>
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
    const caseItem1 = {
        'title': 'Lorem Amet',
        'name': 'Emergency Cases',
        'describe': 'Lorem ipsum sit amet consectetur adipiscing elit. Vivamus et erat in lacus convallis sodales.',
        'img': <FaAmbulance className={styles.icon} />,
    }

    const caseItem2 = {
        'title': 'Fusce Porttitor',
        'name': 'Doctors Timetable',
        'describe': 'Lorem ipsum sit amet consectetur adipiscing elit. Vivamus et erat in lacus convallis sodales.',
        'img': <FaBook className={styles.icon} />,
    }

    const caseItem3 = {
        'title': 'Donec luctus',
        'name': 'Opening Hours',
        'describe': 'Lorem ipsum sit amet consectetur adipiscing elit. Vivamus et erat in lacus convallis sodales.',
        'img': <FaClock className={styles.icon} />
    }

  return (
    <div className={styles.caseSection}>
        <Case data={caseItem1} />
        <Case data={caseItem2} />
        <Case data={caseItem3} />
    </div>
  )
}

export default SectionTwo