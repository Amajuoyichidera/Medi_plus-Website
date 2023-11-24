"use client"


import myBlog from '@/public/blog1.jpg'
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
import { useEffect, useState } from 'react'

const SectionSeven = () => {

  const images = [
    { 'id': 1, 'src': blog1 },
    { 'id': 2, 'src': blog2 },
    { 'id': 3, 'src': blog3 },
    { 'id': 4, 'src': blog4 },
    { 'id': 5, 'src': blog5 },
    { 'id': 6, 'src': blog6 },
    { 'id': 7, 'src': blog7 }
  ];

    const [isSliderVisible, setIsSliderVisible] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsSliderVisible(window.innerWidth > 768 );
    };

    // Initial check on component mount
    handleResize();

    // Add resize event listener
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
       {isSliderVisible ? (
        <Slider className={style.slide} {...settings}>
          {images.map((image) => (
            <div className={style.slideImg} key={image.id}>
              <Image
                style={{ borderRadius: '20px' }}
                src={image.src}
                width={300}
                height={250}
                alt="Picture of the author"
              />
            </div>
          ))}
        </Slider>
      ) : <div className={style.last}>
        <Image src={myBlog} width={350} height={300} alt='single author' />
      </div> }     
    </div>
  )
}

export default SectionSeven;