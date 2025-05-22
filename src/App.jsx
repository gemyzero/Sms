import { cache, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Componets/header/Header'
import Us from './Componets/HireUsFor/Us'
import About from './Componets/about/About'
import Benfits from './Componets/benfit/Benfits'
import Banner from './Componets/banner/Banner'
import Brand from './Componets/brand/Brand'
import Contact from './Componets/contact/Contact'
import How from './Componets/how/How'
import Banneer from './Componets/banneer/Banneer'
import Footer from './Componets/footer/Footer'
import i18n from "i18next";
import { initReactI18next , } from "react-i18next";
import { useTranslation } from 'react-i18next';
import { FcCallback } from 'react-icons/fc'
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import Cookies from 'js-cookie'
i18n
  .use(initReactI18next) 
  .use(LanguageDetector)
  .use(HttpApi)
  
  .init({
    FcCallback:'en',
detection:{
  order: ['htmlTag','cookie', 'localStorage', 'sessionStorage', 'navigator',  'path', 'subdomain'],
   caches:["cookie"],
},
backend :{
    loadPath: '/local/{{lng}}/translation.json',
},
  }); 

function App() {



  return (
    <div style={{ overflow:'hidden'}}>
    <Header></Header>
    <Us></Us>
    <Banner></Banner>
<How></How>
<Banneer></Banneer>
    <About></About>
    <Brand></Brand>

    <Benfits></Benfits>
    <Contact></Contact>
    <Footer></Footer>
    </div>


//  <div>
//  <button 
//  onClick={()=>{
//   i18n.changeLanguage('ar')
//  }}
 
//  className='btn btn-dark'>ar</button>
//   <button
//   onClick={()=>{
//   i18n.changeLanguage('en')
//  }}
//   className='btn btn-dark'>en</button>

//  <h1>{t('Welcome to React')}</h1></div>
  )
} 

export default App
