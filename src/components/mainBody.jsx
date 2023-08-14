import React , { useState } from 'react'
import "../styles/mainbody.css"
import Profile from "../images/userProfile.jpeg"
import tiktok from "../images/tkt.png"

function MainBody () {
    const [visible, setIsVisible]  = useState(true);
    const [CustomAmount, setCustomAmount]  = useState('');
    const [totalAmount, setTotalAmount] = useState('Default Total'); // Initial default value
    const toggleCustomCard = () => {
        setIsVisible(!visible);
    }
    const handleCustomAmountChange = (event) => {
        setCustomAmount(event.target.value);


    }

    

    
    
    

 

  return (
    <div className='mainbody'>
   <section className='get-coin'> 
   <p> Get Coins</p>
    <div>
        <button className='login-btn' type="submit">
            <img src={Profile} className='' alt='profile'/>
            Log in</button>
    </div>
    
   </section>
   <section className='recharge-section'>
    <div className='recharge-header'>Recharge</div>
    <div className='coins-grids'>
    <div className='cards'> 
  <div className='card-coins'>
    <div style={{marginTop:"-7px"}}>
    <img  style={{width:"30px"}}  src={tiktok} alt="" srcset="" />
    </div>
    <p style={{fontWeight:"bold"}}>70</p>
  </div>
  <div>
    <p style={{color:"grey"}}> $0.74</p>
  </div>
    </div>

    <div className='cards'> 
  <div className='card-coins'>
    <div style={{marginTop:"-7px"}}>
    <img  style={{width:"30px"}}  src={tiktok} alt="" srcset="" />
    </div>
    <p style={{fontWeight:"bold"}}>350</p>
  </div>
  <div>
    <p style={{color:"grey"}}> $3.7</p>
  </div>
    </div>


    <div className='cards'> 
  <div className='card-coins'>
    <div style={{marginTop:"-7px"}}>
    <img  style={{width:"30px"}}  src={tiktok} alt="" srcset="" />
    </div>
    <p style={{fontWeight:"bold"}}>700</p>
  </div>
  <div>
    <p style={{color:"grey"}}> $7.4</p>
  </div>
    </div>


    <div className='cards'> 
  <div className='card-coins'>
    <div style={{marginTop:"-7px"}}>
    <img  style={{width:"30px"}}  src={tiktok} alt="" srcset="" />
    </div>
    <p style={{fontWeight:"bold"}}>1,400</p>
  </div>
  <div>
    <p style={{color:"grey"}}> $14.8</p>
  </div>
    </div>

    <div className='cards'> 
  <div className='card-coins'>
    <div style={{marginTop:"-7px"}}>
    <img  style={{width:"30px"}}  src={tiktok} alt="" srcset="" />
    </div>
    <p style={{fontWeight:"bold"}}>3,500</p>
  </div>
  <div>
    <p style={{color:"grey"}}> $37</p>
  </div>
    </div>

    <div className='cards'> 
  <div className='card-coins'>
    <div style={{marginTop:"-7px"}}>
    <img  style={{width:"30px"}}  src={tiktok} alt="" srcset="" />
    </div>
    <p style={{fontWeight:"bold"}}>7,000</p>
  </div>
  <div>
    <p style={{color:"grey"}}> $74</p>
  </div>
    </div>



    <div className='cards'> 
  <div className='card-coins'>
    <div style={{marginTop:"-7px"}}>
    <img  style={{width:"30px"}}  src={tiktok} alt="" srcset="" />
    </div>
    <p style={{fontWeight:"bold" }}>17,500</p>
  </div>
  <div>
    <p style={{color:"grey"}}> $185</p>
  </div>
    </div>

    {visible ? (
    <div className='cards' onClick={toggleCustomCard}> 
  <div className='card-coins'>
    <div style={{marginTop:"-7px"}}>
    <img  style={{width:"30px"}}  src={tiktok} alt="" srcset="" />
    </div>
    <p style={{fontWeight:"bold"}}>Custom</p>
  </div>
  <div>
    <p style={{color:"grey"}}> large amount supported</p>
  </div>
    </div>
    ) :(
    <div className='cards'  > 
 <div className='card-coins'>
   <div style={{marginTop:"-7px"}}>
   <img  style={{width:"30px"}}  src={tiktok} alt="" srcset="" />
   </div>
   <input  className='input-amount-button'
   value={CustomAmount}
   onChange={handleCustomAmountChange}

   /> 

 </div>
 <div>
 <p style={{marginTop:"-20px"}}>______________________</p>
   <p style={{color:"grey"}}> {CustomAmount !== '' ?CustomAmount : '30-2,500,000'}</p>
 </div>
   </div>
    )}
    </div>
   </section>
   <section>
    <div>
        <p
        onChange={totalAmount}
        style={{fontWeight:"900px", fontFamily:"arial"}}>Total <span style={{fontWeight:"bold"}}> 	&#163;{CustomAmount !== '' ?CustomAmount : '0'}</span></p>
       
    </div>
   </section>

   <section className='third-section'>
    <div>
        <button> Recharge</button>
    </div>
   </section>

    </div>

    
  )
}

export default MainBody