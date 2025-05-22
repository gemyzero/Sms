import React, { useEffect } from 'react'

import how1 from '../../../public/images/how/how1.png'
import how2 from '../../../public/images/how/how2.png'
import how5 from '../../../public/images/how/how5.png'
import how4 from '../../../public/images/how/how4.png'
import up from '../../../public/images/how/up.png'
import signin from '../../../public/images/how/sign-in.png'
import './how.css'
import { useTranslation } from 'react-i18next';
export default function How() {
        const {t} = useTranslation();

    // useEffect(() => {
    //   Aos.init({
    //     // اختيارات التهيئة (اختيارية)
    //     duration: 1000, // مدة الحركة بالمللي ثانية
    //     easing: 'ease-in-out', // نوع الحركة (ease, ease-in, ease-out, linear, الخ.)
    //     once: false, // هل يتم تشغيل الحركة مرة واحدة فقط؟
    //   });
    // }, []);
  return (
    <div id="How" className='container-fluid pt-5  how' style={{backgroundColor:'whitesmoke'}}>   
   <div className="head-how text-center">
   <h1 data-aos="zoom-out"> {t('how titile')}</h1>
   <p>{t('how last titile')}
   </p>
   </div>
      <div className="row mx-auto mt-5 justify-content-center">
        <div className="col-lg-3 text-center" data-aos="fade-left">
            <img className='mx-auto' src={up} alt=""   style={{width:'80%' , borderRadius:'25px'}}/>
            <p>1. اختر قالبًا</p>
        </div>
        <div className="col-lg-3 text-center"  data-aos="fade-up">
            <img className='mx-auto' src={signin} alt=""   style={{width:'80%' , borderRadius:'25px'}}/>
            <p>2. إضافة المنتجات / الفئات
            </p>
        </div>
        <div className="col-lg-3 text-center" data-aos="fade-right">
            <img className='mx-auto' src={how1} alt=""   style={{width:'80%' , borderRadius:'25px'}}/>
            <p>3. قم بإنشاء تطبيقك
            </p>
        </div>
   
      </div>
      <div className="row mx-auto mt-5 justify-content-center">
     
        <div className="col-lg-3 text-center"  data-aos="fade-up">
            <img className='mx-auto' src={how4} alt=""   style={{width:'80%' , borderRadius:'25px'}}/>
            <p>2. إضافة المنتجات / الفئات
            </p>
        </div>
        <div className="col-lg-3 text-center" data-aos="fade-right">
            <img className='mx-auto' src={how2} alt=""   style={{width:'80%' , borderRadius:'25px'}}/>
            <p>3. قم بإنشاء تطبيقك
            </p>
        </div>
        <div className="col-lg-3 text-center" data-aos="fade-right">
            <img className='mx-auto' src={how5} alt=""   style={{width:'80%' , borderRadius:'25px'}}/>
            <p>3. قم بإنشاء تطبيقك
            </p>
        </div>
      </div>
    </div>
  )
}
