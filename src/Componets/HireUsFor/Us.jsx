import React, { useEffect, useRef } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css';import './us.css'
import { useTranslation } from 'react-i18next';
export default function Us() {

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
<div className=" us   " >
<div className='container-fluid '>
        <h1 data-aos="zoom-out" className='mb-4  text-center  pt-5'>{t('us titile')} </h1>
      <div className="row py-5 gap-5 justify-content-center">
       <div className="   card col-lg-5 col-10 p-3 px-lg-5  "data-aos="fade-left" >
           <div className=''>
           <h3 className='mb-3'> {t('us card titile')}  </h3>
           <h5> {t('us card text')}  </h5>
           </div>
        </div>
   <div className="   card col-lg-5 col-10 p-3 px-lg-5  "data-aos="fade-left" >
           <div className=''>
           <h3 className='mb-3'> {t('us card titile')}  </h3>
           <h5> {t('us card text')}  </h5>
           </div>
        </div>
 
      </div>
      <div className="row py-5 gap-5 justify-content-center">
        <div className="   card col-lg-5 col-10 p-3 px-lg-5  "data-aos="fade-left" >
           <div className=''>
           <h3 className='mb-3'> {t('us card titile')}  </h3>
           <h5> {t('us card text')}  </h5>
           </div>
        </div>
   <div className="   card col-lg-5 col-10 p-3 px-lg-5  "data-aos="fade-left" >
           <div className=''>
           <h3 className='mb-3'> {t('us card titile')}  </h3>
           <h5> {t('us card text')}  </h5>
           </div>
        </div>
 
      </div>
    </div>
</div>
  )
}
