import React, { useRef } from 'react'
import './header.css'
import Navbar from '../Navbar'
import { BsArrowDown } from 'react-icons/bs'
import { Link } from 'react-scroll'
export default function Header() {
  const windowRef = useRef(window);

  const scrollTo1000 = () => {
    windowRef.current.scrollTo({
      top: 2130,
      left: 0,
      behavior: 'smooth'
    });
  };
  return (
<div className='overflow-hidden'>
<Navbar></Navbar>

<div className='header'>


 <div className='hero w-100'>
<div className='text-center'>
<h1 className='mx-auto'>دمج واجهة برمجة تطبيقات Easy Send SMS</h1>
<Link
className='fw-bold'
 onClick={scrollTo1000}
  to=""
>
  اكتشف كيف! <span><BsArrowDown /></span>
</Link>

</div>


 </div>

</div>
</div>
  )
}
