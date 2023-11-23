"use client"

import { Heart } from "../sectionThree/SectionThree"
import Image from "next/image"
import blog1 from '@/public/blog1.jpg'
import blog2 from '@/public/blog2.jpg'
import blog3 from '@/public/blog3.jpg'
import style from './sectionTen.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


export const News = ({ item }) => {
    return (
        <div className={style.card}>
            <Image src={item.img} height={250} width={350} alt="item image" />
            <div className={style.news}>
            <h5>{item.date}</h5>
            <h2>{item.name1}</h2>
            <h2>{item.name2}</h2>
            <p>Lorem Ipsum Dolor A Sit Ameti, Consectetur <br /> Adipisicing Elit, Sed Do Eiusmod Tempor <br /> Incididunt Sed Do Incididunt Sed.</p>
            </div>
            <div className={style.line}></div>
        </div>
    )
}


const SectionTen = () => {
    useEffect(() => {
        AOS.init(); // Initialize AOS
      });

      
    const item1 = {
        img: blog1,
        date: '22 Aug, 2045',
        name1: 'We have annnocuced our new',
        name2: 'product.'
    }

    const item2 = {
        img: blog2,
        date: '15 Jul, 2045',
        name1: 'Top five way for solving teeth',
        name2: 'problems.'
    }

    const item3 = {
        img: blog3,
        date: '21 Jan, 2045',
        name1: 'We provide highly business',
        name2: 'solutions.'
    }

  return (
    <div className={style.container}>
        <Heart name1='Keep Up With Our Most Recent' name2='Medical News.' />

        <div data-aos="fade-up" data-aos-duration="2000" data-aos-easing="ease-in-out" className={style.newsContainer}>
            <News item={item1} />
            <News item={item2} />
            <News item={item3} />
        </div>
    </div>
  )
}

export default SectionTen