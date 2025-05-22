import React, { useEffect, useState } from 'react'
import logo from '../../public/images/logo.png'
import { BsFillSendPlusFill } from 'react-icons/bs'
import Cookies from 'js-cookie'
import { useTranslation } from 'react-i18next';
import i18n from "i18next";
import { GiEarthAmerica } from 'react-icons/gi';


export default function Navbar() {

  const {t} = useTranslation();
  const lng = Cookies.get("i18next") || "ar"
  console.log(lng)
    useEffect(()=>{
    window.document.dir = i18n.dir();
  },[lng])

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
    <div className={`nav ${scrollY === 0 ? '' : 'bg-white'}`}>
      <div className="">
        <button className='btn btn-primary mx-5'>
          <span className='me-2'>  {t('nav btn')} </span>
          <span className='icon'><BsFillSendPlusFill /></span>
        </button>

        {/* الشرط هنا: لو اللغة مش إنجليزية، أظهر زرار "ar" */}

       {/* إذا كانت اللغة الحالية ليست عربية، اعرض زرار "ar" لتغيير اللغة إلى العربية */}
      {i18n.language !== 'ar' && (
        <button
          onClick={() => {
            i18n.changeLanguage('ar');
          }}
          className='btn btn-success'
        >
          Arabic
          <span className='mx-1'>          <GiEarthAmerica  /></span>
        </button>
      )}

      {/* إذا كانت اللغة الحالية ليست إنجليزية، اعرض زرار "en" لتغيير اللغة إلى الإنجليزية */}
      {i18n.language !== 'en' && (
        <button
          onClick={() => {
            i18n.changeLanguage('en');
          }}
          className='btn btn-success'
        >
          English
          <span className='mx-1'>          <GiEarthAmerica  /></span>
        </button>
      )}
          

   
        

    

      
      </div>
      <div className='logo text-primary'><h1>seeend</h1></div>
    </div>
  );
}
