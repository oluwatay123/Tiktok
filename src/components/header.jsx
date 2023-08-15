import React from 'react'
import  '../styles/header.css'
import Tittok  from "../images/TIKTOK3.png"
const header = () => {
  return (
    <div className='header'>
     <div className='image'>
     
        <img  style={{width:"90px"}} src={Tittok } alt="tiktok" />
     </div>

   <div className='searchbar'>
  <input  type='text'  placeholder='Search'/>
  <button className='button'><i class="fa fa-search searchicon" aria-hidden="true"></i> </button>
   </div>

    <div className='right-section'>
<div>
   <button className='upload-button'><i class="fa fa-plus plusicon" aria-hidden="true"></i>
     Upload</button>
</div>
<div className='login-section'>
<button className='login-button'>Log in

</button>
<i class="fa fa-ellipsis-v" aria-hidden="true"></i>
</div>



    </div>
    <div className='left-icon-container'>
    <i style={{display:"none"}}  class="fa fa-chevron-left left-icon" aria-hidden="true"></i>
    </div>
    </div>
  )
}

export default header