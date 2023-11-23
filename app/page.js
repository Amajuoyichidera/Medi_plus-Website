import styles from './page.module.css'
import Slider from '@/components/Slider/Slider';
import { Slide1, Slide2, Slide3, } from '@/components/Slides/Slides';
import SectionTwo from '@/components/sectionTwo/SectionTwo';
import SectionThree from '@/components/sectionThree/SectionThree';
import SectionFour from '@/components/sectionFour/SectionFour';
import SectionFive from '@/components/sectionFive/SectionFive';
import SectionSix from '@/components/sectionSix/SectionSix';
import SectionEight from "@/components/sectionEight/SectionEight";
import SectionNine from "@/components/sectionNine/SectionNine";
import SectionTen from "@/components/sectionTen/SectionTen";
import SectionEleven from "@/components/sectionEleven/SectionEleven";
import SectionTwelve from "@/components/sectionTwelve/SectionTwelve";
import Footer from "@/components/footer/Footer";
import SectionSeven from '@/components/sectionSeven/SectionSeven';

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
      <SectionFive />
      <SectionSix />
      <SectionSeven />
      <SectionEight />
      <SectionNine />
      <SectionTen />
      <SectionEleven />
      <SectionTwelve />
      <Footer />
    </main>
  )
}
