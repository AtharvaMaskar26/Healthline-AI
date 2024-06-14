import React from 'react'

const HospitalHeader = () => {
  return (
    <div className='flex flex-col items-center mt-[10vh]'>
        <h1 className='hospital-name font-bold text-5xl'>
            Harmony Health Hosital
        </h1>
        <p className='mt-4 font-semibold text-[#006989] w-[50%] text-center'>
        Welcome to Harmony Hospital's AI-powered appointment portal! Our AI assistant, Taylor, is here to help you schedule your visits effortlessly.
        </p>
    </div>
  )
}

export default HospitalHeader