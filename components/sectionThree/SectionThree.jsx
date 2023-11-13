import { FaHeartbeat, FaHospital, FaStethoscope, FaAmbulance } from 'react-icons/fa';
import styles from '@/components/sectionThree/sectionThree.module.css'

export const Help = ({ data }) => {
    return (
        <div className={styles.help}>
            <div className={styles.logoContainer}>
                {data.logo}
            </div>
            <h2>{data.title}</h2>
            <p>{data.body}</p>
        </div>
    )
}

export const Heart = ({ name1, name2 }) => {
    return (
        <div className={styles.heartSection}>
        <h1>{name1}</h1>
        <h1 className={styles.family}>{name2}</h1>
        <FaHeartbeat className={styles.heart} />
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts</p>
        </div>
    )
}


const SectionThree = () => {
    const case1Data = {
        'logo': <FaAmbulance className={styles.logo} />,
        'title': 'Emergency Help',
        'body': 'Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam vulputate.'
    }

    const case2Data = {
        'logo': <FaHospital className={styles.logo} />,
        'title': 'Enriched Pharmecy',
        'body': 'Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam vulputate.'
    }

    const case3Data = {
        'logo': <FaStethoscope className={styles.logo} />,
        'title': 'Medical Treatment',
        'body': 'Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam vulputate.'
    }

  return (
    <div className={styles.container}>
        <Heart name1='We Are Always Ready To Help You &' name2='Your Family' />
        <div className={styles.helpContainer}>
            <Help data={case1Data} />
            <div className={styles.doted}></div>
            <Help data={case2Data} />
            <div className={styles.doted}></div>
            <Help data={case3Data} />
        </div>
    </div>
  )
}

export default SectionThree