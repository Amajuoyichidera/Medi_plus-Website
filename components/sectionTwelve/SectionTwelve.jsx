"use client"

import { Heart } from "../sectionThree/SectionThree"
import contact from '@/public/contact-img.png'
import Image from "next/image"
import style from './sectionTwelve.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export const Input = ({ type, placeholder }) => {
  return (
    <div>
      <input className={style.myInput} type={type} placeholder={placeholder} required />
    </div>
  )
}

export const Drop = ({ item }) => {
  return (
    <select key={item.id} className={style.dropdown} required>
      <option>{item.name1}</option>
      <option>{item.name2}</option>
      <option>{item.name3}</option>
      <option>{item.name4}</option>
      <option>{item.name5}</option>
    </select>
  )
}

export const Item = ({ children }) => {
  return (
    <div className={style.item}>
      {children}
    </div>
  )
}


const SectionTwelve = () => {

  useEffect(() => {
    AOS.init(); // Initialize AOS
  });


  const item1 = {
    'id': 1,
    name1: 'Department',
    name2: 'Cardiac Clinic',
    name3: 'Neurology',
    name4: 'Dentistry',
    name5: 'Gastroenterology'
  }

  const item2 = {
    'id': 2,
    name1: 'Doctor',
    name2: 'Dr. Akther Hossain',
    name3: 'Dr. Dery Alex',
    name4: 'Dr David Amajuoyi',
    name5: 'Dr. Jovis Karon'
  }

  return (
    <div id='contact' className={style.container}>
        <Heart name1='We Are Always Ready To Help You.' name2='Book An Appointment' />

        <div data-aos="fade-up" data-aos-duration="2000" data-aos-easing="ease-in-out" className={style.formSection}>
          <form>
            <Item>
              <Input type='text' placeholder='Name' />
              <Input type='email' placeholder='Email' />
            </Item>

            <Item>
              <Input type='number' placeholder='Phone' />
              <Drop item={item1} />
            </Item>

            <Item>
              <Drop item={item2} />
              <Input type='text' placeholder='Date' />
            </Item>

            <div className={style.text}>
              <textarea placeholder='Write Your Message Here...' required />
              <input className={style.btn} type='submit' value='Book An Appointment' />
            </div>

          </form>

          <div>
            <Image className={style.doc} src={contact} alt="doctor image" />
          </div>
        </div>
    </div>
  )
}

export default SectionTwelve