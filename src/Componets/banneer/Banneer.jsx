import React, { useEffect, useRef } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css';
import './banneer.css'
export default function Banneer() {
       useEffect(() => {
          Aos.init({
            // اختيارات التهيئة (اختيارية)
            duration: 1000, // مدة الحركة بالمللي ثانية
            easing: 'ease-in-out', // نوع الحركة (ease, ease-in, ease-out, linear, الخ.)
            once: false, // هل يتم تشغيل الحركة مرة واحدة فقط؟
          });
        }, []);
  return (
    <div className='banneer text-center' data-aos="fade-up">
      <h1 data-aos="zoom-out" >Easy Send SMS</h1>
    </div>
  )
}
