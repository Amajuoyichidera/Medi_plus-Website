"use client"

import Image from 'next/image';
import { useEffect } from 'react';
import styles from '@/components/Slides/slide.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import slider from '@/public/slider.jpg'
import slider2 from '@/public/slider2.jpg'
import slider3 from '@/public/slider3.jpg'

export const Slide = ({ img, title}) => {

  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  return (
    <div className={styles.imageContainer}>
        <div className={styles.image}>
        <Image src={img} layout='fill' />
        </div>
      <div data-aos-delay="8000" className={styles.overlayContent}>
        <h1  data-aos="fade-up" data-aos-duration="3000" data-aos-easing="ease-in-out" className={styles.headerOne}>We Provide <span className={styles.span}>Medical</span> Services</h1>
        <h1 data-aos="fade-up" data-aos-duration="3000" data-aos-easing="ease-in-out" className={styles.headerOne} style={{paddingBottom: '20px'}}> That You Can <span className={styles.span}>Trust!</span> </h1>
        <p data-aos="fade-up" data-aos-duration="2000" data-aos-easing="ease-in-out" className={styles.pTag}>your Health is our priority.</p>
        <div data-aos="fade-up" data-aos-duration="3000" className={styles.buttons}>
          <button className={styles.button1}>Get Appointment</button>
          <button className={styles.button2}>{title}</button>
        </div>
      </div>
    </div>
  );
};



export const Slide1 = () => {
  return (
    <Slide img={slider} title='About Us' />
  );
};

export const Slide2 = () => {
  return (
    <Slide img={slider2} title='Learn More' />
  );
};


export const Slide3 = () => {
  return (
    <Slide img={slider3} title='Contact Now' />
  );
};


