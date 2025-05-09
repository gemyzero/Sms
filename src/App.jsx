import { useState } from 'react'
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

function App() {
  const [count, setCount] = useState(0)

  return (
 
    <div style={{direction:"rtl" , overflow:'hidden'}}>
    <Header></Header>
    <Us></Us>
    <About></About>
    <Benfits></Benfits>
    <Banner></Banner>
    <Brand></Brand>
    <Contact></Contact>
    </div>
  )
}

export default App
