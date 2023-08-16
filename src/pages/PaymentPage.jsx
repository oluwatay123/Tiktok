import React, {useState} from 'react'
import "../styles/payment.css"
import logo1 from "../images/logo1.png"
import logo2 from "../images/logo2.png"
import logo3 from "../images/logo3.jpeg"
import logo4 from "../images/logo4.png"
function PaymentPage ()  {
  const  [accountNumber, setAccountNumber] = useState ('')
  const[date, setDate]= useState('');
  const [cvc , setCvc] = useState ('');
  // funtion for account number
  const handleAccountNumberChange=(event) =>{
    const inputValue = event.target.value;
// remove non-digit character
    const sanitizedValue = inputValue.replace(/[^0-9]/g, '').slice(0, 16);
    //seperate after every 4 digits
    const formattedValue = sanitizedValue.replace(/(\d{4})(?=\d)/g, '$1-');
   
    setAccountNumber(formattedValue);
  }

// function for the date
  const handleDateChange= (event)=>{
    const inputDateValue= event.target.value;

    //remove non-digit character
    const sanitizedDateValue =inputDateValue.replace(/[^0-9/]/g, '');
  let formattedDateValue = '';
    //allow maximum 0f 5 chracters
    if(sanitizedDateValue.length <= 5){
        if(sanitizedDateValue.length >=3){
            formattedDateValue = sanitizedDateValue.slice(0,2) + '/'+ sanitizedDateValue.slice(3);
        }else{
            formattedDateValue=sanitizedDateValue;
        }
    }
        setDate(formattedDateValue);
  };
 

  const handleCvcChange =(event) =>{
    const newValue = event.target.value.replace(/\D/g, '').slice(0, 3);
    setCvc(newValue);
  };




  return (
     
    <div className='container'>
    <section className='first-section'>
       <div className='payment-btn'>
   <button> <i style={{marginRight:"3px"}}class="fa fa-apple" aria-hidden="true"></i>Pay</button>
       </div>
       <div>
        <p style={{textAlign:"center", color:"grey", opacity:"0.5"}}>  Or pay with card</p>
       </div>
    </section>
    <section className='payment-details'> 
        <div >
            <p >
                Payment Details
            </p>
        </div>
        <div className='credit-card-icons'>
           <img src={logo1}/> 
           <img style={{height:"30px", paddingTop:"5px"}}src={logo2}/> 
           <img src={logo3}/> 
           <img style={{height:"30px", paddingTop:"5px"}} src={logo4}/> 
        </div>
    </section>
    <section className='card-information'>
<div>
    <p className='card-information-header'>Card information</p>
</div>
<div>
    <input
    placeholder='1234-1234-1234-1234'
    id='accountNumber'
    value={accountNumber}
    onChange={handleAccountNumberChange}
    maxLength={19}
    className='account-number-input' type="text" />
</div>
<div className='acount-details-input'>
    

<div>
    <input 
    placeholder='MM/YY'
    type="text"
    id='date' 
    value={date}
    onChange={handleDateChange}
    maxLength={5}
    className='date-input'/>
</div>
<div>
<input
placeholder='CVC'
id='threeDigits'
value={cvc}
onChange={handleCvcChange}
maxLength={3}
className='cvc-input'
type="text" />
</div>
</div>
<div className='check-box-area'>
    <div className='check-box'>
   <input type="checkbox" />
   </div>
   <div>
    <p>With billing address</p> 
   </div>
</div>
    </section>
    <section className='last-section'>
        <div>
            <button type="button">Pay</button>
        </div>
        <div  className="footer">
            <p><i style={{marginRight:"3px", color:"black"}}class="fa fa-lock" aria-hidden="true"></i>Powered by  <span className='span1'>stripe</span> <span className='stroke'>|</span> <span className='span4'>Terms</span> privacy</p>
        </div>
    </section>
    </div>
    
  )
}

export default PaymentPage