"use client"

import blog1 from '@/public/blog1.jpg'
import blog2 from '@/public/blog2.jpg'
import blog3 from '@/public/blog3.jpg'
import blog4 from '@/public/pf1.jpg'
import blog5 from '@/public/pf2.jpg'
import blog6 from '@/public/pf3.jpg'
import blog7 from '@/public/pf4.jpg'
import Image from 'next/image'
import { Heart } from '../sectionThree/SectionThree'
import style from '@/components/sectionSeven/sectionSeven.module.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const sectionSeven = () => {

    const images = [
        blog1,
        blog2,
        blog3,
        blog4,
        blog5,
        blog6,
        blog7
    ]

    const settings = {
      dots: true,
      infinite: true,
      speed: 3000, // Adjust the speed of the slide transition
      autoplay: true,
      autoplaySpeed: 3000, // Adjust the speed of the automatic slide change
      slidesToShow: 4, // Show all images at once
      slidesToScroll: 1,
      centerMode: true, // Centers the active slide
      centerPadding: '0', // Removes additional padding when using centerMode
      margin: 0,
    };
   
  return (
    <div className={style.container}>
       <Heart name1='We Maintain Cleanliness Rules' name2='Inside Our Hospital' />
       <Slider className={style.slide} {...settings}>
        {images.map((image, index) => (
          <div className={style.slideImg} key={index}>
            <Image style={{ borderRadius: '20px'}} src={image} width={300}
              height={250}
              alt="Picture of the author" />
          </div>
        ))}
      </Slider>      
    </div>
  )
}

export default sectionSeven