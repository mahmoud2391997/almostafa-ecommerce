import { faEnvelope, faMobile } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function ContactInfo() {
  return (
    <div className="w-full h-[45px] flex justify-center items-center bg-[var(--foreground)] fixed top-0 text-white z-50">
      <div className="sm:w-full flex justify-center items-center m-0   ">
        <div className="flex  justify-evenly items-center w-full sm:flex-row h-auto" >
         
          <div style={{width: 250, height: 30}} className="flex justify-center items-center">
          <FontAwesomeIcon icon={faEnvelope} />
            <a className="email  ml-3 mr-3 inline-block  " role="button">contact@example.com</a>
          </div>
          <div style={{width: 200, height: 30}} className="flex justify-center items-center">
          <FontAwesomeIcon icon={faMobile} />
            <p className="  ml-3 inline-block ">+1 5589 55488 55</p>
          </div>
          <div style={{width: 200, height: 30}} className=' flex  justify-center items-center'>

<span className='inline-block w-[80px]'>Follow Us :</span>
<span className="ml-1"><a href=""> Facebook</a></span>

  
</div>
        </div>
       
      </div>
    </div>
  )
}

export default ContactInfo
