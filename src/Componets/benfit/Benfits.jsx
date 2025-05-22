import React, { useEffect, useRef } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css';
import { FaCommentSms } from 'react-icons/fa6'
import { useTranslation } from 'react-i18next';
export default function Benfits() {
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
  <div className=" " style={{ backgroundColor:'whitesmoke'}} >
      <div className='container p-5'>
        <h1  data-aos="zoom-out" className='text-center fw-bold mt-5' style={{ fontFamily:'Courier New' , fontSize:'55px' , color:'#0d6efd'}}>{t('benfit titile')}</h1>
  <div className="row my-4 text-center justify-content-center">

<div className="col-lg-4 col-md-6 col-12 my-5"data-aos="fade-left">
  <div className='text-center'>
  <h1 className='mb-4 '><FaCommentSms  className='text-primary'/></h1>
    <h5 className='fw-bold'>    {t('benfit card titile')}</h5>
    <h6>{t('benfit card text')}</h6>
  </div>
</div>

<div className="col-lg-4 col-md-6 col-12 my-5"data-aos="fade-left">
  <div className='text-center'>
  <h1 className='mb-4 '><FaCommentSms  className='text-primary'/></h1>
    <h5 className='fw-bold'>    {t('benfit card titile')}</h5>
    <h6>{t('benfit card text')}</h6>
  </div>
</div>
<div className="col-lg-4 col-md-6 col-12 my-5"data-aos="fade-left">
  <div className='text-center'>
  <h1 className='mb-4 '><FaCommentSms  className='text-primary'/></h1>
    <h5 className='fw-bold'>    {t('benfit card titile')}</h5>
    <h6>{t('benfit card text')}</h6>
  </div>
</div>
</div>
      <div className="row my-4 text-center justify-content-center">

<div className="col-lg-4 col-md-6 col-12 my-5"data-aos="fade-left">
  <div className='text-center'>
  <h1 className='mb-4 '><FaCommentSms  className='text-primary'/></h1>
    <h5 className='fw-bold'>    {t('benfit card titile')}</h5>
    <h6>{t('benfit card text')}</h6>
  </div>
</div>

<div className="col-lg-4 col-md-6 col-12 my-5"data-aos="fade-left">
  <div className='text-center'>
  <h1 className='mb-4 '><FaCommentSms  className='text-primary'/></h1>
    <h5 className='fw-bold'>    {t('benfit card titile')}</h5>
    <h6>{t('benfit card text')}</h6>
  </div>
</div>
<div className="col-lg-4 col-md-6 col-12 my-5"data-aos="fade-left">
  <div className='text-center'>
  <h1 className='mb-4 '><FaCommentSms  className='text-primary'/></h1>
    <h5 className='fw-bold'>    {t('benfit card titile')}</h5>
    <h6>{t('benfit card text')}</h6>
  </div>
</div>
</div>
    </div>
  </div>
  )
}
