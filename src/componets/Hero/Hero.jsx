import React from 'react'
import { getImageUrl } from '../../utils';
import styles from './Hero.module.css'

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'M Bhargav</h1>
            <p className={styles.description}>I'm a full-stack developer using React and Node js. Reach out if you'd like My work </p>
            <a href='mailto:uppubhargavsai2013@gmail.com' className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={getImageUrl('hero/heroImage.png')} alt='Hero'className={styles.heroImg}/>
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>
  )
}
