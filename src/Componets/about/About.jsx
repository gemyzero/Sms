import React from 'react'
import about from '../../../public/images/about.png'
import './about.css'
export default function About() {
  return (
    <div className='about py-5  ' name="about"  >
      <div className="row  mx-auto py-5">
      <div className="col-lg-6 info-about">
<h1>معلومات عنا</h1>
<h5 className=' '>بدأت هذه القصة قبل ست سنوات عندما قررت مجموعة من الأشخاص بدء مغامرة جديدة، أطلقوا عليها اسم Smseg، وحتى اليوم يعتبرونها من أعظم إنجازاتهم. Smseg ليست هذا فحسب، بل هي شركة رائدة في مجال التسويق الإلكتروني وخدمات الرسائل النصية القصيرة، ومقرها الرئيسي في القاهرة. Smseg شركة رائدة في مجال التسويق عبر الرسائل النصية القصيرة وخدمات الرسائل النصية القصيرة، وتتميز ببوابات عالية الجودة. هدفنا ليس مجرد تقديم خدمات الرسائل النصية القصيرة، بل شغفنا هو تقديم خدمة حقيقية وحقيقية لعملائنا، من خلال مواكبة أحدث تقنيات الرسائل النصية القصيرة، وبأعلى درجات الصدق والوضوح. خدمة Smseg...</h5>
        </div>
        <div className="col-lg-6">
            <div>
            <img className='w-100' src={about} alt="" />

            </div>
        </div>
       
      </div>
    </div>
  )
}
