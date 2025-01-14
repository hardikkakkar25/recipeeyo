import React from 'react'
import Card from '../../Common/Card'

const Services = () => {
  return (
    <div>
      <h1 className='text-5xl font-extrabold text-center text-amber-600 my-12'>Services</h1>
      <div className="w-16 h-1 bg-amber-600 mx-auto mt-[-27px]"></div>
      <div className='grid grid-cols-1 grid-cols-2 grid-cols-3 gap-4 mt-20 px-12'>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  )
}

export default Services