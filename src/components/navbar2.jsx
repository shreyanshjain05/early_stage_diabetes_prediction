import React from 'react'

const navbar2 = () => {
  return (
    <div className='bg-white h-[7%] flex flex-row  justify-between items-center pl-10 pr-10'>
      <p className='font-bold text-blue-800'>DiabetesDetect</p>
      <div className="flex gap-20 ml-5">
      <a href='/' className='mt-2 '>Home</a>
      <a href='/detect' className='bg-blue-600 p-2 pr-5 pl-5 rounded-full text-slate-50'>Diabetes Detect</a>
      </div>
      

    </div>
  )
}

export default navbar2