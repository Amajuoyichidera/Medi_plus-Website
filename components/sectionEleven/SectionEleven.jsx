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
        { id: 1, src: client1 },
        { id: 2, src: client2 },
        { id: 3, src: client3 },
        { id: 4, src: client4 },
        { id: 5, src: client5 },
        { id: 6, src: client1 },
        { id: 7, src: client2 },
        { id: 8, src: client3 },
        { id: 9, src: client4 },
        { id: 10, src: client5 },
      ];
      

    const settings = {
        dots: false,
        infinite: true,
        speed: 3000, // Adjust the speed of the slide transition
        autoplay: true,
        autoplaySpeed: 3000, // Adjust the speed of the automatic slide change
        slidesToShow: 5, // Show all images at once
        slidesToScroll: 1,
        centerMode: true, // Centers the active slide
        centerPadding: '0', // Removes additional padding when using centerMode
        margin: 0,
      };


    return (
        <div className={style.container}>
            <div className={style.overlay} />
            <Image className={style.background} src={clientBg} alt='slider background' />
            <Slider className={style.slide} {...settings}>
             {images.map((image) => (
               <div key={image.id}>
                <Image src={image.src} className={style.slideImg}
                  alt="Picture slider" />
              </div>
              ))}
           </Slider> 
        </div>
    )
}

export default SectionEleven

