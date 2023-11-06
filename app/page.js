import Image from 'next/image'
import styles from './page.module.css'
import Slider from '@/components/Slider/Slider';
import { Slide1, Slide2, Slide3, } from '@/components/Slides/Slides';
import SectionTwo from '@/components/sectionTwo/SectionTwo';
import SectionThree from '@/components/sectionThree/SectionThree';
import SectionFour from '@/components/sectionFour/SectionFour';


export default function Home() {
  const sections = [
    <div className="section1">
      <Slide1 />
    </div>,
    <div className="section2">
      <Slide2 />
    </div>,
    <div className="section3">
      <Slide3 />
    </div>,
  ];

  return (
    <main className={styles.main}>
      <Slider sections={sections} />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
    </main>
  )
}
