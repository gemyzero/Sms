import React from 'react'
import './banner.css'
import play from '../../../public/images/play.png'
import store from '../../../public/images/store.png'

export default function Banner() {
  return (
    <div className='banner'>
      <div>
        <h1>قم بإدارة حسابك من هاتفك المحمول حان الوقت لاستخدام تطبيقات SMS الذكية.</h1>
        <div className='app-banner'>   
            <img src={play} alt="" />
            <img src={store} alt="" />

        </div>
      </div>
    </div>
  )
}
