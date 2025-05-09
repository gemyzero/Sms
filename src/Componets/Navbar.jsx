import React, { useEffect, useState } from 'react'
import logo from '../../public/images/logo.png'
import { BsFillSendPlusFill } from 'react-icons/bs'


export default function Navbar() {
  const [scrollY, setScrollY] = useState(0);
  console.log()

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  console.log(scrollY)

  return (
    <div className={`     w-100 nav  ${scrollY == 0 ? '' : 'bg-white'}`}>
    <button className='btn     '> <span className='me-2'>  ابداء الان </span>       <span className='icon'><BsFillSendPlusFill /></span>
    </button>
      <div className='  '><h1 >seeend</h1></div>
   
      
    </div>
  )
}
