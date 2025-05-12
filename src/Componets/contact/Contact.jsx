import React, { useRef, useState } from 'react';
import { FaEnvelope, FaPaperPlane, FaPhone } from 'react-icons/fa6';
import './contact.css';
import ReCAPTCHA from 'react-google-recaptcha';

export default function Contact() {
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
  const InputPhone = useRef(null);
  const Inputname = useRef(null);
  const InputArea = useRef(null);
  const [sendMassage, setSendMassage] = useState([]);

  const onChange = (value) => {
    console.log("Captcha value:", value);
    setIsCaptchaVerified(true);
  };

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
    <section id="contact" className="contanier mt-5 ">
      <div className="start text-center">
        <h1>اتصل بنا</h1>
      </div>

      <div className="row mt-5 mb-0   text-center ms-auto d-flex justify-content-center">
        <div className="   info-contact col-lg-3 col-md-6   col-12">
          <a href="#"><i className="fa-solid fa-paper-plane"><FaPaperPlane /></i></a>
          <h2>العنوان</h2>
          <p> 5 شارع أحمد شوقي، شارع جمال عبد الناصر - منطي - مركز قليوب - القليوبية</p>
        </div>
        <div className=" info-contact   col-lg-3 col-md-6   col-12">
          <a href="#"><i className="fa-solid fa-envelope"><FaEnvelope /></i></a>
          <h2>بريد إلكتروني</h2>
          <p>mohamed0110gemy@gmail.com</p>
        </div>
        <div className=" info-contact   col-lg-3 col-md-6   col-12">
          <a href="#"><i className="fa-solid fa-phone"><FaPhone /></i></a>
          <h2>هاتف رقم</h2>
          <p>01013909816</p>
        </div>
      </div>

      <form onSubmit={HandelSubmit} action="" className="form-contact w-75 mx-auto">
        <div className="log ">
          <input ref={InputPhone} type="text" id="disabledTextInput" className="form-control mx-2 my-3 py-2" placeholder=" الرجاء ادخال رقم الهاتف " />
          
          <input ref={Inputname} type="text" id="disabledTextInput" className="form-control mx-2 my-3 py-2" placeholder=" الرجاء ادخال   اسمك" />
        </div>
        <textarea ref={InputArea} className="form-control me-2" id="exampleFormControlTextarea1 my-3 py-2" placeholder="الرجاء ادخال الرساله" rows="3" />
        <ReCAPTCHA
          className='captcha'
          sitekey="6LdvATUrAAAAAISTkq2K1lgClbTVKVUOZVeuL1hP"
          onChange={onChange}
        />

        <button
          className="btn btn-warning me-2   p-2   fw-bold text-white w-100"
          type="submit"
          disabled={!isCaptchaVerified}
        >
          ارسال
        </button>
      </form>
    </section>
  );
}