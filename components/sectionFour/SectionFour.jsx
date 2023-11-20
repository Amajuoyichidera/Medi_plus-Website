import { FaHome, FaUsers, FaSmile, FaFileAlt } from 'react-icons/fa';
import styles from '@/components/sectionFour/sectionFour.module.css'
import Image from "next/legacy/image";
import myBg from '@/public/hand_bg.jpg'

export const Rooms = ({ data }) => {
    return (
        <div className={styles.room}> 
            <div className={styles.logoContainer}>
                {data.icon}
            </div>
            <div>
                <h1>{data.number}</h1>
                <p>{data.title}</p>
            </div>
        </div>
    )
}


const SectionFour = () => {

    const data1 = {
        'icon': <FaHome className={styles.logo} />,
        'number': 3400,
        'title': 'Hospital Rooms'
    }

    
    const data2 = {
        'icon': <FaUsers className={styles.logo} />,
        'number': 500,
        'title': 'Specialist Doctors'
    }

    const data3 = {
        'icon': <FaSmile className={styles.logo} />,
        'number': 4000,
        'title': 'Happy Patients'
    }

    const data4 = {
        'icon': <FaFileAlt className={styles.logo} />,
        'number': 30,
        'title': 'Years Of Experience'
    }

  return (
    <div className={styles.container}>
        <div className={styles.image}>
            <Image src={myBg} height={350}/>
        </div>
        <div className={styles.roomSection}>
        <Rooms data={data1} />
        <Rooms data={data2} />
        <Rooms data={data3} />
        <Rooms data={data4} />
        </div>
    </div>
  )
}

export default SectionFour