import React from 'react'
import "../styles/confirmatioin.css"
import greenIcon from "../images/greenIcon2.png"
const PaymentConfirmationPage = () => {
  return (
    <div className='payment-container'>
  <section className='section-1'>
 <div className='icon-container'>
  <img className='greenIcon' src={greenIcon}/>
 </div>
  </section>
  <section className='section-2'>
    <div>
        <p>Payment Compeleted</p>
    </div>
  </section>
  <section className='section-3'>
    <div>
        <p>
 $[Total Amount of coins]has been 
        </p>
        <p>successfully sent to [username]</p>
    </div>
  </section>
  <section className='section-4'>
    <div>
        <button>
       Go back
        </button>
    </div>
  </section>
    </div>
  )
}

export default PaymentConfirmationPage