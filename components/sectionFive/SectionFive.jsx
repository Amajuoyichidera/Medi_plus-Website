import React from 'react'
import { Heart } from '../sectionThree/SectionThree'
import { FaRegPlayCircle, FaPlayCircle } from 'react-icons/fa'
import Image from "next/legacy/image"
import videoBg from '@/public/video-bg.jpg'
import styles from '@/components/sectionFive/sectionFive.module.css'

export const SubAngle = ({ text }) => {
    return (
        <div className={styles.subAngle}>
            <FaRegPlayCircle className={styles.play} />
            <p>{text}</p>
        </div>
    )
}

export const Angle = () => {
    return (
        <div>
            <SubAngle text='Maecenas vitae luctus nibh.' />
            <SubAngle text='Duis massa massa.' />
            <SubAngle text='Aliquam feugiat interdum.' />
        </div>
    )
} 

const SectionFive = () => {
  return (
    <div className={styles.container}>
        <Heart name1='We Offer Different Services To' name2='Improve Your Health' />

        <div className={styles.section}>
            <div>
                <h3>Who We Are</h3>
                <div className={styles.line}></div>
                <p className={styles.p1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra <br /> antege vel est lobortis, a commodo magna rhoncus. In quis nisi non emet <br /> quam pharetra commodo.</p>
                <p className={styles.p1}>Class aptent taciti sociosqu ad litora torquent per <br /> conubia nostra, per inceptos himenaeos.</p>
                
                <div className={styles.angle}>
                    <Angle />
                    <Angle />
                </div>
            </div>

            <div className={styles.video}> 
                <Image src={videoBg} className={styles.image} height={400} width={600} />
                <FaPlayCircle className={styles.overlayIcon} />
            </div>
        </div>
    </div>
  )
}

export default SectionFive