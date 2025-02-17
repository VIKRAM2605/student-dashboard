import React from 'react'

function Card1(props) {
  return (
    <div className='ml-5 mt-3 flex'>   
    <p className='bg-white w-fit pl-3 pr-3 pt-1.5 pb-1.5  rounded-2xl mr-3'><span className='text-center'>{props.day}</span><span className='block text-center'>{props.date}</span></p>
    <div className='pt-1 pl-5'><h3 className='font-medium'>{props.subject}</h3><p><span className='text-gray-500 pr-2'>by</span>{props.name}<span className='text-gray-500 pl-4'>25</span></p></div>

    </div>
  )
}

export default Card1