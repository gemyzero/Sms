import React from 'react'
import './header.css'
import Navbar from '../Navbar'
import { BsArrowDown } from 'react-icons/bs'
export default function Header() {
  return (
<div className='overflow-hidden'>
<Navbar></Navbar>

<div className='header'>


 <div className='hero w-100'>
<div className='text-center'>
<h1 className='mx-auto'>دمج واجهة برمجة تطبيقات Easy Send SMS</h1>
<a href="#about"> اكتشف كيف! <span><BsArrowDown /></span>  </a>
</div>


 </div>

</div>
</div>
  )
}
