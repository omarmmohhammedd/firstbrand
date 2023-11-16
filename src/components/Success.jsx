import React, { useEffect } from 'react'
import './Success.css'
const Success = () => {
    useEffect(()=>{
        setInterval(()=>{
            window.location.href='/'
        },3000)
    },[])
  return (
    <div class="w-full flex items-center justify-center" style={{height:'80vh'}}>

    <div class="paper-container ">
        <div class="paper pt-12 rounded-lg">
            <div class="main-contents">
                <div  className='success-icon animate-ping'>&#10004;</div>
                <div class="success-title">
                    Payment Complete
                </div>
                <div class="success-description">
                    Thank you for completing the payment! You Will Redirect To Your Profile <a href='/' className='text-blue text-lg '>Click</a> To Manual Redirect 
                </div>
            </div>

        </div>
    </div>
</div>
  )
}

export default Success