import React from 'react'
import { getImageUrl } from '../../utils'
import style from './Contact.module.css'

export const Contact = () => {
  return (
    <footer id='contact' className={style.container}>
        <div className={style.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
         </div>
         <ul className={style.links}>
            <li className={style.link}>
                <img src={getImageUrl('contact/emailIcon.png')} alt='email icon'/>
                <a href='mailto:uppubhargavsai2013@gmail.com'>uppubhargavsai2013@gmail.com</a>
            </li>
            <li className={style.link}>
                <img src={getImageUrl('contact/linkedinIcon.png')} alt='linkedin icon'/>
                <a href='https://www.linkedin.com/in/uppu-bhargav-sai-15a274245/'>linkedin.com/uppubhargavsai</a>
            </li>
            <li className={style.link}> 
                <img src={getImageUrl('contact/githubIcon.png')} alt='github icon'/>
                <a href='https://github.com/BhargavUPPU'>github.com/BhargavUPPU</a>
            </li>
         </ul>
    </footer>
  )
}
