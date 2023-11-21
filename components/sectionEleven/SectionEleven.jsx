"use client"

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image'
import client1 from '@/public/client1.png'
import client2 from '@/public/client2.png'
import client3 from '@/public/client3.png'
import client4 from '@/public/client4.png'
import client5 from '@/public/client5.png'
import clientBg from '@/public/client-bg.jpg'
import style from './sectionEleven.module.css'

const SectionEleven = () => {

    const images = [
        client1,
        client2,
        client3,
        client4,
        client5,
        client1,
        client2,
        client3,
        client4,
        client5,
    ]

    const settings = {
        dots: false,
        infinite: true,
        speed: 3000, // Adjust the speed of the slide transition
        autoplay: true,
        autoplaySpeed: 3000, // Adjust the speed of the automatic slide change
        slidesToShow: 6, // Show all images at once
        slidesToScroll: 1,
        centerMode: true, // Centers the active slide
        centerPadding: '0', // Removes additional padding when using centerMode
        margin: 0,
      };


    return (
        <div className={style.container}>
            <div className={style.overlay} />
            <Image className={style.background} src={clientBg} />
            <Slider className={style.slide} {...settings}>
             {images.map((image, index) => (
               <div className={style.slideImg} key={index}>
                <Image src={image} width={150}
                  height={50}
                  alt="Picture of the author" />
              </div>
              ))}
           </Slider> 
        </div>
    )
}

export default SectionEleven