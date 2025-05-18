import React, { useEffect, useRef, useState } from 'react';
import Aos from 'aos'
import 'aos/dist/aos.css';
import { FaEnvelope, FaPaperPlane, FaPhone } from 'react-icons/fa6';
import './contact.css';
import ReCAPTCHA from 'react-google-recaptcha';
import axios from 'axios';
import Swal from 'sweetalert2';

export default function Contact() {

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
  return (
<div className="">
      <section id="contact" className="contanier mt-5 ">
      <div className=" text-center">
        <h1 data-aos="zoom-out">اتصل بنا</h1>
      </div>

      <div className="row mt-5 mb-0   text-center ms-auto d-flex justify-content-center">
        <div className="   info-contact col-lg-3 col-md-6   col-12"data-aos="fade-right">
          <a href="https://maps.google.com/?cid=15366605247787472781"><i className="fa-solid fa-paper-plane"><FaPaperPlane /></i></a>
          <h2 className='py-2'>العنوان</h2>
          <p> 5 شارع أحمد شوقي، شارع جمال عبد الناصر - منطي - مركز قليوب - القليوبية</p>
        </div>
        <div className=" info-contact   col-lg-3 col-md-6   col-12"data-aos="fade-up ">
          <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"><i className="fa-solid fa-envelope"><FaEnvelope /></i></a>
          <h2 className='py-2'>بريد إلكتروني</h2>
          <p>mohamed0110gemy@gmail.com</p>
        </div>
        <div className=" info-contact   col-lg-3 col-md-6   col-12"data-aos="fade-left">
          <a href="tel:01013909816"><i className="fa-solid fa-phone"><FaPhone /></i></a>
          <h2 className='py-2'>هاتف رقم</h2>
          <p>01013909816</p>
        </div>
        </div>

      <form onSubmit={HandelSubmit} action="" className="form-contact w-75 mx-auto">
        <div className="log ">
          <input ref={InputPhone} type="text" id="disabledTextInput" className="form-control mx-2 my-3 py-2" placeholder=" الرجاء ادخال رقم الهاتف " />
          
          <input ref={Inputname} type="text" id="disabledTextInput" className="form-control mx-2 my-3 py-2" placeholder=" الرجاء ادخال اسمك" />
        </div>
        <textarea ref={InputArea} className="form-control me-2" id="exampleFormControlTextarea1 my-3 py-2" placeholder="الرجاء ادخال الرساله" rows="3" />
        <ReCAPTCHA
          className='captcha pb-3'
          sitekey="6LdvATUrAAAAAISTkq2K1lgClbTVKVUOZVeuL1hP"
          onChange={onChange}
        />

        <button
          className="btn btn-primary me-2   p-2   fw-bold text-white w-100"
          type="submit"
          disabled={!isCaptchaVerified}
        >
          ارسال
        </button>
      </form>
    </section>

{/* News Letter */}


     <div className="pt-5 mt-5 news bg-dark">
       <div className=" title-news text-center">
        <h1 data-aos="zoom-out">  الرسائل الجديده</h1>
      </div>


        <div className="body-news mx-auto">
                            <input ref={InputEmail} type="email" id="disabledTextInput" className="form-control py-3 mx-2 my-3 py-0" placeholder=" الرجاء ادخال البريد الالكتروني" />

              <button
            className="btn btn-primary me-2 w-50   p-2   fw-bold text-white "
            type="submit"    
            disabled={!isCaptchaVerified}                   
                      onClick={handleSendEmail}

          >
            ارسال
          </button>

    
        </div>
     </div>
    
</div>
  );
}

            
