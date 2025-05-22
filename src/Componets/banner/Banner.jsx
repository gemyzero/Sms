import React, { useEffect, useRef } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css';


import './banner.css'
import play from '../../../public/images/play.png'
import store from '../../../public/images/store.png'
import { useTranslation } from 'react-i18next';
export default function Banner() {
        const {t} = useTranslation();

     useEffect(() => {
        Aos.init({
          // اختيارات التهيئة (اختيارية)
          duration: 1000, // مدة الحركة بالمللي ثانية
          easing: 'ease-in-out', // نوع الحركة (ease, ease-in, ease-out, linear, الخ.)
          once: false, // هل يتم تشغيل الحركة مرة واحدة فقط؟
        });
      }, []);
  return (
    <div className='banner' data-aos="fade-down">
      <div>
        <h1 data-aos="zoom-out" >{t('banner1 text')}</h1>
        <div className='app-banner'>   
            <img src={play} alt="" />
            <img src={store} alt="" />

        </div>
      </div>
    </div>
  )
}
