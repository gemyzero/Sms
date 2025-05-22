import React, { useEffect, useRef } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css';
import './header.css'
import Navbar from '../Navbar'
import { BsArrowDown } from 'react-icons/bs'
import { Link } from 'react-scroll'
import { useTranslation } from 'react-i18next';


export default function Header() {
    const {t} = useTranslation();
  
  useEffect(() => {
    Aos.init({
      // اختيارات التهيئة (اختيارية)
      duration: 1000, // مدة الحركة بالمللي ثانية
      easing: 'ease-in-out', // نوع الحركة (ease, ease-in, ease-out, linear, الخ.)
      once: false, // هل يتم تشغيل الحركة مرة واحدة فقط؟
    });
  }, []);


  const windowRef = useRef(window);

  const scrollTo1000 = () => {
    windowRef.current.scrollTo({
      top: 2130,
      left: 0,
      behavior: 'smooth'
    });
  };
  return (
<div className='overflow-hidden' data-aos="fade-down">
<Navbar></Navbar>

<div className='header'>


 <div className='hero w-100'>
<div className='text-center' data-aos="fade-down">
<h1 className='mx-auto'> {t('header title')}   </h1>
<Link
className='fw-bold'
  to="How"
>
  {t('header link Find out how')}! <span><BsArrowDown /></span>
</Link>

</div>


 </div>

</div>
</div>
  )
}
