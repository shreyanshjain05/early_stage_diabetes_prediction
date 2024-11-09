import React from 'react'

const navbar = () => {
  return (
    <div className='bg-white h-[4.7%] flex flex-row  justify-between items-center pl-10 pr-10'>
      <p className='font-bold text-blue-800'>DiabetesDetect</p>
      <div className="flex gap-10 ">
      <a href='/' className='bg-blue-600 p-2 pl-10 mr-3.5  flex pr-10  rounded-full text-slate-50 cursor-pointer'>Home</a>
      <a href='/detect' className='w-[120%] flex justify-center items-center '>Diabetes Detect</a>
      </div>
      

    </div>
  )
}

export default navbar