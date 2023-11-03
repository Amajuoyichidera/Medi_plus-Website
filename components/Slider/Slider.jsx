"use client"

// SectionSlider.js
import { useState, useEffect } from 'react';
import styles from '@/components/Slider/slider.module.css'
import { FaGreaterThan, FaLessThan } from 'react-icons/fa';


const Slider = ({ sections }) => {
  const [currentSection, setCurrentSection] = useState(0);

  const nextSection = () => {
    setCurrentSection((currentSection + 1) % sections.length);
  };

  const prevSection = () => {
    setCurrentSection(currentSection === 0 ? sections.length - 1 : currentSection - 1);
  };

  useEffect(() => {
    const interval = setInterval(nextSection, 5000); // Automatically switch to the next section every 5 seconds

    return () => {
      clearInterval(interval);
    };
  }, [currentSection]);

  return (
    <div className="section-slider">
        <div>
         <FaLessThan className={styles.prev} onClick={prevSection}/>
        </div>
        <div>
        <FaGreaterThan className={styles.next} onClick={nextSection} />
        </div>
      <div>
        {sections[currentSection]}
      </div>
    </div>
  );
};

export default Slider;
