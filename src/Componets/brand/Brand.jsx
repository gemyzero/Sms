import React from 'react'
import bank from '../../../public/images/brand/bank.jpg'
import bush from '../../../public/images/brand/bush.jpg'
import fawry from '../../../public/images/brand/fawry.jpg'
import paypal from '../../../public/images/brand/paypal.png'
import visa from '../../../public/images/brand/visa.png'

export default function Brand() {
  return (
   <div className=""style={{backgroundColor:'#f2f1e5'}}>
     <div className='container py-5' >
        <h1 className='text-center my-4'>طرق الدفع</h1>
      <div className="row mt-1 g-5 " style={{justifyContent:'center'}}>
        <div className="col-lg-2 col-md-3 col-5">

            <img src={visa} alt="" />
        </div>
        <div className="col-lg-2 col-md-3 col-5">

<img src={paypal} alt="" />
</div>  <div className="col-lg-2 col-md-3 col-5">

<img src={fawry} alt="" />
</div>  <div className="col-lg-2 col-md-3 col-5">

<img src={bush} alt="" />
</div>  <div className="col-lg-2 col-md-3 col-5">

<img src={bank} alt="" />
</div> 
 
      </div>
    </div>
   </div>
  )
}
