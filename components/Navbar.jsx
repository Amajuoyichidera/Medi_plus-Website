"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';
import { FaBars } from 'react-icons/fa';
import Image from "next/legacy/image";
import Logo from '@/public/logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    const navbar = document.querySelector(`.${styles.allNav}`);
    if (navbar) {
      if (window.scrollY > 0) {
        // When the user scrolls down, add a CSS class to make the navbar sticky
        navbar.classList.add(styles.sticky);
      } else {
        // When the user scrolls back to the top, remove the sticky class
        navbar.classList.remove(styles.sticky);
      }
    }
  };

  // Attach the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

  return (
    <>
      {/* Large Screens */}
      <div className={`${styles.allNav}`}>
      <nav className={styles.navbar}>
       <div>
        <Image className={styles.logo} src={Logo} />
       </div>

       <div className={styles.navItem}>
       <ul className={styles.navLink}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="#service">Services</Link>
          </li>
          <li>
            <Link href="#contact">Contact</Link>
          </li>
        </ul>       
       <button className={styles.button}>Book An Appointment</button>
       </div>

       <FaBars onClick={toggleMenu} className={styles.hamburger} />       
      </nav>    
      
      {/* Mobile Nav Items */}
      <ul style={isOpen ? {display: 'block'} : {display: 'none'} } className={styles.mobile}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="#services">Services</Link>
          </li>
          <li>
            <Link href="#contact">Contact</Link>
          </li>
       </ul> 

      </div>
    
    </>
    
  );
};

export default Navbar;
