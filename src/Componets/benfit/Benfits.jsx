import React, { useEffect, useRef } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css';
import { FaCommentSms } from 'react-icons/fa6'

export default function Benfits() {
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
        <h1  data-aos="zoom-out" className='text-center fw-bold mt-5' style={{ fontFamily:'Courier New' , fontSize:'55px' , color:'#0d6efd'}}>الفوائد</h1>
      <div className="row my-4 text-center justify-content-center">

        <div className="col-lg-4 col-md-6 col-12 my-5"data-aos="fade-left">
          <div className='text-center'>
          <h1 className='mb-4 '><FaCommentSms  className='text-primary'/></h1>
            <h5 className='fw-bold'>خدمة الرسائل المتعددة الوسائط MMS Bulk          </h5>
            <h6>مع برنامج Smseg يمكنك إرسال رسالة وسائط متعددة تحتوي على جميع أنواع ملفات الوسائط المتعددة (صورة - صوت...</h6>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 col-12 my-5"data-aos="fade-up">
          <div className='text-center'>
          <h1 className='mb-4 '><FaCommentSms  className='text-primary'/></h1>
            <h5 className='fw-bold '>خدمة الرسائل المتعددة الوسائط MMS Bulk          </h5>
            <h6>مع برنامج Smseg يمكنك إرسال رسالة وسائط متعددة تحتوي على جميع أنواع ملفات الوسائط المتعددة (صورة - صوت...</h6>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-12 my-5"data-aos="fade-left">
          <div className='text-center'>
          <h1 className='mb-4 '><FaCommentSms  className='text-primary'/></h1>
            <h5 className='fw-bold'>خدمة الرسائل المتعددة الوسائط MMS Bulk          </h5>
            <h6>مع برنامج Smseg يمكنك إرسال رسالة وسائط متعددة تحتوي على جميع أنواع ملفات الوسائط المتعددة (صورة - صوت...</h6>
          </div>
        </div>
      </div>
      <div className="row my-4 text-center justify-content-center">

<div className="col-lg-4 col-md-6 col-12 my-5"data-aos="fade-left">
  <div className='text-center'>
  <h1 className='mb-4 '><FaCommentSms  className='text-primary'/></h1>
    <h5 className='fw-bold'>خدمة الرسائل المتعددة الوسائط MMS Bulk          </h5>
    <h6>مع برنامج Smseg يمكنك إرسال رسالة وسائط متعددة تحتوي على جميع أنواع ملفات الوسائط المتعددة (صورة - صوت...</h6>
  </div>
</div>

<div className="col-lg-4 col-md-6 col-12 my-5"data-aos="fade-up">
  <div className='text-center'>
  <h1 className='mb-4 '><FaCommentSms  className='text-primary'/></h1>
    <h5 className='fw-bold '>خدمة الرسائل المتعددة الوسائط MMS Bulk          </h5>
    <h6>مع برنامج Smseg يمكنك إرسال رسالة وسائط متعددة تحتوي على جميع أنواع ملفات الوسائط المتعددة (صورة - صوت...</h6>
  </div>
</div>
<div className="col-lg-4 col-md-6 col-12 my-5"data-aos="fade-left">
  <div className='text-center'>
  <h1 className='mb-4 '><FaCommentSms  className='text-primary'/></h1>
    <h5 className='fw-bold'>خدمة الرسائل المتعددة الوسائط MMS Bulk          </h5>
    <h6>مع برنامج Smseg يمكنك إرسال رسالة وسائط متعددة تحتوي على جميع أنواع ملفات الوسائط المتعددة (صورة - صوت...</h6>
  </div>
</div>
</div>
    </div>
  </div>
  )
}
