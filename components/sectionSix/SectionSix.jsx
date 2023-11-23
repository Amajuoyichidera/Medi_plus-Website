import React from 'react'
import callBg from '@/public/call-bg.jpg'
import Image from "next/legacy/image"
import styles from '@/components/sectionSix/sectionSix.module.css'



const SectionSix = () => {
  
  return (
    <div className={styles.container}>
      <div className={styles.image}>
      <Image src={callBg} layout='fill' alt="call background Image" />
      </div>
      <div className={styles.centeredContent}>
        <h1>Do you need Emergency Medical</h1>
        <h1>Care? Call @ 1234 56789</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque porttitor <br /> dictum turpis nec gravida.</p>
        <div className={styles.myBtn}>
          <button className={styles.btn1}>Contact Now</button>
          <button className={styles.btn2}>Learn More</button>
        </div>
      </div>
    </div>
  )
}

export default SectionSix