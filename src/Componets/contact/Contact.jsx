import React, { useEffect, useRef, useState } from 'react';
import Aos from 'aos'
import 'aos/dist/aos.css';
import { FaEnvelope, FaPaperPlane, FaPhone } from 'react-icons/fa6';
import './contact.css';
import ReCAPTCHA from 'react-google-recaptcha';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Link } from 'react-scroll';
import logo from '../../../public/images/logo.png'
import { useTranslation } from 'react-i18next';
export default function Contact() {
          const {t} = useTranslation();

     const InputEmail = useRef();
  
      const handleSendEmail = async () => {
           const email = InputEmail.current.value;
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const emailTest =  emailRegex.test(email)
  
   if (emailTest) {
     await  axios.post('https://easetasks.com/mail/index.php/api/mail/send' , {
        "email_to":email,
        "email_subject": "Mail verfiaction",
        "email_msg": `Welcome  ${email} youer cod is  please press on the link`}
  ).then((res)=>{
      Swal.fire({
        title: "please check your email!",
        icon: "success",
        draggable: true
      })
    })
   }else{
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: " your email wrong !",
  });
   }
  }
  const contactSectionRef = useRef(null);

  const scrollToContactSection = () => {
    if (contactSectionRef.current) {
      contactSectionRef.current.scrollIntoView({ behavior: 'smooth' });}}






    useEffect(() => {
                Aos.init({
                  // اختيارات التهيئة (اختيارية)
                  duration: 1000, // مدة الحركة بالمللي ثانية
                  easing: 'ease-in-out', // نوع الحركة (ease, ease-in, ease-out, linear, الخ.)
                  once: false, // هل يتم تشغيل الحركة مرة واحدة فقط؟
                });
              }, []);

  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
  const InputPhone = useRef(null);
  const Inputname = useRef(null);
  const InputArea = useRef(null);
  const [sendMassage, setSendMassage] = useState([]);
// Captcha
  const onChange = (value) => {
    console.log("Captcha value:", value);
    setIsCaptchaVerified(true);
  };
  // contact
  const HandelSubmit = (event) => {
    event.preventDefault();

    if (!InputPhone.current.value) {
     alert('الرجاء إدخال رقم الهاتف') ;
    }
    if (!Inputname.current.value) {
     alert('الرجاء إدخال اسمك.') ;
    }
    if (!InputArea.current.value) {
      alert('الرجاء إدخال الرسالة') ;
    }
    if (!isCaptchaVerified) {
    alert('الرجاء الضغط على الكابيتشا وإكمال التحقق.') ;
    }


    let mass = {
      phone: InputPhone.current.value,
      name: Inputname.current.value,
      massage: InputArea.current.value,
    };
    const newOpj = [...sendMassage];
    newOpj.push(mass);
    setSendMassage(newOpj);
    console.log(newOpj);
    localStorage.setItem('massage', JSON.stringify(newOpj));
  };


  return (
<div className=" " ref={contactSectionRef}>
      <section id="contact-us d-flex " style={{ justifyContent:'center' , alignItems:'center'}}  className="contanier py-5 mt-5 ">
    <div className="">
        <div className= "  text-primary  text-center">
        <h1  style={{ fontFamily:'Courier New' , fontSize:'55px' , color:'#0d6efd' , fontWeight:"bold"}} data-aos="zoom-out">{t('contact titile')}</h1>
      </div>

      <div className="row mt-5 mb-0   text-center ms-auto d-flex justify-content-center">
        <div className="   info-contact col-lg-3 col-md-6   col-12"data-aos="fade-right">
          <a href="https://maps.google.com/?cid=15366605247787472781"><i className="fa-solid fa-paper-plane"><FaPaperPlane /></i></a>
          <h2 className='py-2'>{t('contact address')}</h2>
          <p>{t('contact last address')}</p>
        </div>
        <div className=" info-contact   col-lg-3 col-md-6   col-12"data-aos="fade-up ">
          <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"><i className="fa-solid fa-envelope"><FaEnvelope /></i></a>
          <h2 className='py-2'>{t('contact email')}</h2>
          <p>{t('contact last email')}</p>
        </div>
        <div className=" info-contact   col-lg-3 col-md-6   col-12"data-aos="fade-left">
          <a href="tel:01013909816"><i className="fa-solid fa-phone"><FaPhone /></i></a>
          <h2 className='py-2'>{t('contact Phone')} </h2>
          <p>01013909816</p>
        </div>
        </div>

      <form onSubmit={HandelSubmit} action="" className="form-contact w-75 mx-auto">
        <div className="log ">
          <input ref={InputPhone} type="text" id="disabledTextInput" className="form-control mx-2 my-3 py-2" placeholder = {t('contact InputPhone')} />
          
          <input ref={Inputname} type="text" id="disabledTextInput" className="form-control mx-2 my-3 py-2" placeholder= {t('contact Inputname')}/>
        </div>
        <textarea ref={InputArea} className="form-control me-2" id="exampleFormControlTextarea1 my-3 py-2" placeholder={t('contact Inputmessage')}  rows="3" />
       <div className="supmit  d-flex align-items-center justify-content-center" >
         <ReCAPTCHA
          className='captcha pb-3'
          sitekey="6LdvATUrAAAAAISTkq2K1lgClbTVKVUOZVeuL1hP"
          onChange={onChange}
        />

        <button
        style={{fontSize:'22px', borderRadius:'20px 0'}}
          className="btn btn-primary me-2 py-3 fw-bold h-100   w-75   fw-bold text-white "
          type="submit"
          disabled={!isCaptchaVerified}
        >
          {t('contact button')}
        </button>
       </div>
      </form>
    </div>
      </section>

{/* footer */}

<div className=" footer mt-5 bg-dark" >

<div className="container">
  <div className="row py-5" >

<div className="col-lg-4 first">
 <img src={logo} alt="" />
<h6 className=''>   {t('footer description')}</h6>
</div>

<div className="col-lg-4 p-3 third text-center">
  <h1 className=' mb-4 text-primary' style={{fontSize:'50px'}} >   {t('footer title Support')} </h1>
  <ul>
        <li ><a href="#">     {t('footer Support home')} </a></li>
<li>
  <Link
style={{textDecoration:'none' , fontSize:'20px', lineHeight:'2' , color:'white', cursor:'pointer'}}
className='fw-bold'
 onClick={scrollToContactSection }
  to="#"
>
        {t('footer Support Contact us')}
</Link>
</li>
    <li><a href="">   {t('footer Support Find out how')}</a></li>
      <Link
style={{textDecoration:'none' , fontSize:'20px', lineHeight:'2' , color:'white', cursor:'pointer'}}
className='fw-bold'
 onClick={scrollToContactSection }
  to="How"
>
   {t('footer Support Terms and Conditions')}</Link>

      <li><a href="">     {t('footer Support privacy policy')}

</a></li>

  </ul>
</div>

<div className="col-lg-4 pe-5  second p-3"
>
  <h2 className=' mb-4 text-primary' style={{fontSize:'45px'}} > {t('footer title information')} </h2>
<div className=" mt-2">
    <h6> {t('footer information Phone')} : +20 01019552001 - +20 01270737374</h6>
  <h6>  {t('footer information email')}: info@smseg.com</h6>
  <h6>
 {t('footer information working hours')} : Sunday-Thursday (9:00am-5:30pm)</h6>
</div>
</div>


</div>  
<div className="row justify-content-center">
        <div className="body-news w-50 mx-auto">
                                      <input  ref={InputEmail} type="email" id="disabledTextInput" className="w-100 fw-bold form-control py-3 mx-2 my-3 py-0" placeholder=" الرجاء ادخال البريد الالكتروني" />

              <button
              style={{fontSize:'20px', borderRadius:'20px 0' , border:'3px white solid'}}
            className="btn btn-primary  w-50 py-3 fw-bold  p-2   fw-bold text-white "
            type="submit"    
                      onClick={handleSendEmail}

          >
            {t('footer button Subscribe')}
          </button>


    
        </div>
</div>
</div>


<div className='row text-center text-white bg-dark ' style={{alignItems:'center'}}>
      <p className='my-3'>© 2025 All Rights Reserved. By React Design</p>
    </div>
</div>
    
    
</div>
  );
}

            
