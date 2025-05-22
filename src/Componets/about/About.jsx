import React, { useEffect, useRef } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css';
import about from '../../../public/images/about.png'
import './about.css'
import { useTranslation } from 'react-i18next';

export default function About() {
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
    <div className='about py-5  ' name="about"  >
      <div className="row  mx-auto ">
      <div className="col-lg-6 col-12 info-about" data-aos="fade-left">
<h1 data-aos="zoom-out">{t('about titile')}</h1>
<h5 className=' '>{t('about text')}</h5>
        </div>
        <div className="col-lg-6" data-aos="fade-right">
            <div>
            <img className='w-100' src={about} alt="" />

            </div>
        </div>
       
      </div>
    </div>
  )
}
