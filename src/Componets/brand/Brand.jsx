import React, { useEffect, useRef } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css';
import bank from '../../../public/images/brand/bank.jpg'
import bush from '../../../public/images/brand/bush.jpg'
import fawry from '../../../public/images/brand/fawry.jpg'
import paypal from '../../../public/images/brand/paypal.png'
import visa from '../../../public/images/brand/visa.png'

export default function Brand() {
        useEffect(() => {
              Aos.init({
                // اختيارات التهيئة (اختيارية)
                duration: 1000, // مدة الحركة بالمللي ثانية
                easing: 'ease-in-out', // نوع الحركة (ease, ease-in, ease-out, linear, الخ.)
                once: false, // هل يتم تشغيل الحركة مرة واحدة فقط؟
              });
            }, []);
  return (
   <div className=""style={{backgroundColor:'white'}}>
     <div className='container py-5' >
        <h1 data-aos="zoom-out" style={{fontFamily:'Courier New' , fontSize:'60px' , color:'#0d6efd'}} className='fw-bold  text-center my-4'>طرق الدفع</h1>
      <div className="row pb-5 mt-1 g-5 " style={{justifyContent:'center'}}>
        <div className="col-lg-2 col-md-3 col-5" data-aos="flip-right">

            <img src={visa} alt="" />
        </div>
        <div className="col-lg-2 col-md-3 col-5" data-aos="flip-left">

<img src={paypal} alt="" />
</div> 
 <div className="col-lg-2 col-md-3 col-5" data-aos="flip-left">

<img src={fawry} alt="" />
</div>
  <div className="col-lg-2 col-md-3 col-5" data-aos="flip-right">

<img src={bush} alt="" />
</div>
  <div className="col-lg-2 col-md-3 col-5" data-aos="flip-left">

<img src={bank} alt="" />
</div> 
 
      </div>
    </div>
   </div>
  )
}
